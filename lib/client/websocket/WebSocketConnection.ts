/**
 * Picarto.js
 * An unofficial library for interacting with Picarto.tv.
 *
 * This library is not endorsed, supported or otherwise associated with Picarto
 * or it's team. It is provided as-is with no guarantees. Please make sure you
 * read through and comply with Picarto's TOS: https://picarto.tv/site/terms
 *
 * CyberPon3 <cyber@cyberpon3.net>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { EventEmitter } from "events";
import { ClientRequest, IncomingMessage } from "http";
import { URL } from "url";

import * as WebSocket from "ws";

import * as ChatProtocol from "../../gen/picarto.proto.prebuilt";
import { RateLimitedFunctionQueue } from "../../util/RateLimitedFunctionQueue";

import { WebSocketSignalManager } from "./signals/WebSocketSignalManager";


/**
 * Signal Type to Id mapping.
 * @export
 * @enum {number}
 */
export enum SignalId {
    AdminControl = 0,
    Ban = 1,
    ChatMessage = 2,
    ClearHistory = 3,
    ClearUserMessages = 4,
    Color = 5,
    CommandHelp = 6,
    Control = 7,
    GlobalMessage = 8,
    IgnoresUpdated = 9,
    Kick = 10,
    Mod = 11,
    ModList = 12,
    ModifyIgnores = 13,
    Multistream = 14,
    NewMessage = 15,
    OnlineState = 16,
    PollInit = 17,
    PollResult = 18,
    PollUpdate = 19,
    PollVote = 20,
    PollVoteResponse = 21,
    RaffleInit = 22,
    RaffleRun = 23,
    RemoveMessage = 24,
    ServerMessage = 25,
    UnBan = 26,
    UserList = 27,
    Whisper = 28,
    SetName = 29,
    NameConfirmation = 30,
    ModTools = 31,
    PollEnd = 32,
    Reminder = 33,
    Timer = 34,
    MonitorData = 35,
    ChatLevel = 36,
    RequestUserlist = 37,
    UserInfo = 38,
    UserCount = 39,
    ShowRaffle = 40,
    Event = 41,
    SetJWT = 42,
    UpdateEmotes = 43,
    PingPong = 44
}

/**
 * Union of all possible protocol signals.
 */
export type TSignal =
    ChatProtocol.AdminControl |
    ChatProtocol.Ban |
    ChatProtocol.ChatMessage |
    ChatProtocol.ClearHistory |
    ChatProtocol.ClearUserMessages |
    ChatProtocol.Color |
    ChatProtocol.CommandHelp |
    ChatProtocol.Control |
    ChatProtocol.GlobalMessage |
    ChatProtocol.IgnoresUpdated |
    ChatProtocol.Kick |
    ChatProtocol.Mod |
    ChatProtocol.ModList |
    ChatProtocol.ModifyIgnores |
    ChatProtocol.Multistream |
    ChatProtocol.NewMessage |
    ChatProtocol.OnlineState |
    ChatProtocol.PollInit |
    ChatProtocol.PollResult |
    ChatProtocol.PollUpdate |
    ChatProtocol.PollVote |
    ChatProtocol.PollVoteResponse |
    ChatProtocol.RaffleInit |
    ChatProtocol.RaffleRun |
    ChatProtocol.RemoveMessage |
    ChatProtocol.ServerMessage |
    ChatProtocol.UnBan |
    ChatProtocol.UserList |
    ChatProtocol.Whisper |
    ChatProtocol.SetName |
    ChatProtocol.NameConfirmation |
    ChatProtocol.ModTools |
    ChatProtocol.PollEnd |
    ChatProtocol.Reminder |
    ChatProtocol.Timer |
    ChatProtocol.MonitorData |
    ChatProtocol.ChatLevel |
    ChatProtocol.RequestUserlist |
    ChatProtocol.UserInfo |
    ChatProtocol.UserCount |
    ChatProtocol.ShowRaffle |
    ChatProtocol.Event |
    ChatProtocol.SetJWT |
    ChatProtocol.UpdateEmotes |
    ChatProtocol.PingPong;


/**
 * A WebSocket connection.
 * @export
 * @class WebSocketConnection
 * @extends {EventEmitter}
 */
export class WebSocketConnection extends EventEmitter {

    protected status = 0;

    /**
     * The WebSocket connection itself
     * @private
     * @type {WebSocket}
     * @memberof WebSocketConnection
     */
    private ws: WebSocket | null;

    /**
     * The Signal Manager of the connection
     * @private
     * @type {WebSocketSignalManager}
     * @memberof WebSocketConnection
     */
    private signalManager = new WebSocketSignalManager(this);

    /**
     * The rate limit for message-related signals. The server-side rate limit is 0.5s for Chat/Me messages. We'll use 0.6 to give it some padding.
     * @private
     * @type {number}
     * @memberof WebSocketConnection
     */
    private readonly messageRateLimitMS = 600;

    /**
     * The rate-limited queue for message-related signals.
     * @private
     * @type {RateLimitedFunctionQueue}
     * @memberof WebSocketConnection
     */
    private messageQueue = new RateLimitedFunctionQueue(this.messageRateLimitMS);

    constructor(protected manager, gateway: string, token: string) {
        super();
        this.connect(gateway, token);
    }

    public get client() {
        return this.manager.client;
    }

    public static encode(signal: TSignal): Uint8Array {
        const dataBuffer: Uint8Array = ChatProtocol[signal.constructor.name].encode(signal).finish();
        const signalBuffer = new Uint8Array(dataBuffer.length + 1);
        signalBuffer[0] = SignalId[signal.constructor.name];
        signalBuffer.set(dataBuffer, 1);
        return signalBuffer;
    }

    public static decode(data): TSignal {
        const signalBuffer = new Uint8Array(data);
        const signalType = SignalId[signalBuffer[0]];
        return ChatProtocol[signalType].decode(signalBuffer.slice(1));
    }

    public connect(gateway: string, token: string) {
        const connectURL = new URL(gateway);
        connectURL.searchParams.set("token", token);
        const ws = this.ws = new WebSocket(connectURL.toString());
        ws.onmessage = this.onMessage.bind(this);
        ws.onopen = this.onOpen.bind(this);
        ws.onerror = this.onError.bind(this);
        ws.onclose = this.onClose.bind(this);
    }

    public destroy() {
        if (!this.ws) {
            return false;
        }

        this.messageQueue.clear();
        this.ws.close();
        this.ws = null;
    }

    public send(signal: TSignal) {
        if (!this.ws) {
            this.emit("error", new Error(`Tried to send signal ${signal} but no WebSocket is available!`));
            return false;
        }

        if (signal instanceof ChatProtocol.NewMessage && (
            !signal.message.startsWith("/") || signal.message.startsWith("/me ")
        )) {
            this.messageQueue.add(() => this._send(signal));
        }
        else {
            this._send(signal);
        }
    }

    private _send(signal: TSignal) {
        if (!this.ws) {
            this.emit("error", new Error(`Tried to send signal ${signal} but no WebSocket is available!`));
            return false;
        }

        try {
            this.ws.send(WebSocketConnection.encode(signal));
        }
        catch (e) {
            this.emit("error", new Error("Error encoding signal."));
        }
    }

    private onMessage(event) {
        // console.log("Connection Message");
        let data;
        try {
            data = WebSocketConnection.decode(event.data);
        }
        catch (err) {
            this.emit("error", err);
        }
        this.client.emit("raw", data);
        this.onSignal(data);
    }

    private onSignal(signal) {
        this.signalManager.handle(signal);
    }

    private onOpen(event) {
        console.log("Connection Opened");
    }

    private onError(error) {
        console.log("Connection Error");
        console.log(error);
        this.client.emit("error", error);
    }

    private onClose(event) {
        console.log("Connection Closed");
    }

}
