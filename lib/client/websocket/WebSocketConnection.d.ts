/// <reference types="node" />
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
import * as ChatProtocol from "../../gen/picarto.proto.prebuilt";
/**
 * Signal Type to Id mapping.
 * @export
 * @enum {number}
 */
export declare enum SignalId {
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
}
/**
 * Union of all possible protocol signals.
 */
export declare type TSignal = ChatProtocol.AdminControl | ChatProtocol.Ban | ChatProtocol.ChatMessage | ChatProtocol.ClearHistory | ChatProtocol.ClearUserMessages | ChatProtocol.Color | ChatProtocol.CommandHelp | ChatProtocol.Control | ChatProtocol.GlobalMessage | ChatProtocol.IgnoresUpdated | ChatProtocol.Kick | ChatProtocol.Mod | ChatProtocol.ModList | ChatProtocol.ModifyIgnores | ChatProtocol.Multistream | ChatProtocol.NewMessage | ChatProtocol.OnlineState | ChatProtocol.PollInit | ChatProtocol.PollResult | ChatProtocol.PollUpdate | ChatProtocol.PollVote | ChatProtocol.PollVoteResponse | ChatProtocol.RaffleInit | ChatProtocol.RaffleRun | ChatProtocol.RemoveMessage | ChatProtocol.ServerMessage | ChatProtocol.UnBan | ChatProtocol.UserList | ChatProtocol.Whisper | ChatProtocol.SetName | ChatProtocol.NameConfirmation | ChatProtocol.ModTools | ChatProtocol.PollEnd | ChatProtocol.Reminder | ChatProtocol.Timer | ChatProtocol.MonitorData | ChatProtocol.ChatLevel | ChatProtocol.RequestUserlist | ChatProtocol.UserInfo | ChatProtocol.UserCount | ChatProtocol.ShowRaffle | ChatProtocol.Event;
/**
 * A WebSocket connection.
 * @export
 * @class WebSocketConnection
 * @extends {EventEmitter}
 */
export declare class WebSocketConnection extends EventEmitter {
    protected manager: any;
    protected status: number;
    /**
     * The WebSocket connection itself
     * @private
     * @type {WebSocket}
     * @memberof WebSocketConnection
     */
    private ws;
    /**
     * The Signal Manager of the connection
     * @private
     * @type {WebSocketSignalManager}
     * @memberof WebSocketConnection
     */
    private signalManager;
    /**
     * The rate limit for message-related signals. The server-side rate limit is 0.5s for Chat/Me messages. We'll use 0.6 to give it some padding.
     * @private
     * @type {number}
     * @memberof WebSocketConnection
     */
    private readonly messageRateLimitMS;
    /**
     * The rate-limited queue for message-related signals.
     * @private
     * @type {RateLimitedFunctionQueue}
     * @memberof WebSocketConnection
     */
    private messageQueue;
    constructor(manager: any, gateway: string, token: string);
    readonly client: any;
    static encode(signal: TSignal): Uint8Array;
    static decode(data: any): TSignal;
    connect(gateway: string, token: string): void;
    destroy(): false | undefined;
    send(signal: TSignal): false | undefined;
    private _send(signal);
    private onMessage(event);
    private onSignal(signal);
    private onOpen(event);
    private onError(error);
    private onClose(event);
}
