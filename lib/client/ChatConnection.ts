/**
 * Picarto.js
 * An unofficial library for interacting with Picarto.tv.
 *
 * This library is not endorsed, supported or otherwise associated with Picarto
 * or it's team. It is provided as-is with no guarantees. Please make sure you
 * read through and comply with Picarto's TOS: https://picarto.tv/site/terms
 *
 * Tschrock <tschrock123@gmail.com>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { EventEmitter } from 'events';
import * as http from 'http';
/*import * as WebSocket from 'ws';*/
import WebSocket = require('ws');

import * as ChatProtocol from '../picarto.proto.prebuilt';

export interface ChatConnectionConfig {
    socketUrl?: string;
    reconnectTimeout?: Number;
    reconnectMaxRetries?: Number;
    reconnectFuntion?(tries: Number): Number;
}

const defaultConfig: ChatConnectionConfig = {
    socketUrl: "wss://nd2.picarto.tv/socket?token={0}",
    reconnectTimeout: 500,
    reconnectMaxRetries: 5
};

/**
 * Represents a single connection to a chat channel on Picarto.
 * @export
 * @class ChatConnection
 * @extends {EventEmitter}
 */
export class ChatConnection extends EventEmitter {

    private token: string;
    protected socket: WebSocket;

    protected config: ChatConnectionConfig;

    protected status = ConnectionStatus.IDLE;
    protected reconnectRetryCount = 0;

    constructor(token: string, config?: ChatConnectionConfig) {
        super();
        this.token = token;

        config = config || {};
        this.config = defaultConfig;
        Object.keys(config).forEach(key => this.config[key] = config[key]);

    }

    protected connect() {
        const endpoint = this.config.socketUrl.replace('{0}', this.token);
        this.emit("debug", `Connecting to '${endpoint}'`);
        this.socket = new WebSocket(endpoint);
        this.socket.on("close", this._handleSocketEvent_Close.bind(this));
        this.socket.on("error", this._handleSocketEvent_Error.bind(this));
        this.socket.on("message", this._handleSocketEvent_Message.bind(this));
        this.socket.on("open", this._handleSocketEvent_Open.bind(this));
        this.socket.on("ping", this._handleSocketEvent_Ping.bind(this));
        this.socket.on("pong", this._handleSocketEvent_Pong.bind(this));
        this.socket.on("unexpected-response", this._handleSocketEvent_UnexpectedResponse.bind(this));
    }

    private _handleSocketEvent_Close(code: number, reason: string) {
        this.emit("closed", code, reason);
    }
    private _handleSocketEvent_Error(error: Error) {
        this.emit("error", error);
    }
    private _handleSocketEvent_Message(buffer, flags: Object) {
        this.emit("raw", buffer, flags);

        const signal = this.tryDecodeSignal(buffer);
        if (signal !== null) {
            this.emit(signal.constructor.name, signal);
        }
        else {
            this.emit("error", new Error("Recieved invalid message or Signal could not be decoded."));
        }

    }
    private _handleSocketEvent_Open() {
        this.emit("open");
    }
    private _handleSocketEvent_Ping(data, flags: Object) {
        this.emit("ping", data, flags);
    }
    private _handleSocketEvent_Pong(data, flags: Object) {
        this.emit("pong", data, flags);
    }
    private _handleSocketEvent_UnexpectedResponse(request: http.ClientRequest, response: http.IncomingMessage) {
        this.emit("error", new Error(`Socket Unexpected Response (${response.statusCode}): ${response}`));
    }

    public encodeSignal(signal: TSignal): Uint8Array {
        const dataBuffer: Uint8Array = ChatProtocol[signal.constructor.name].encode(signal).finish();
        const signalBuffer = new Uint8Array(dataBuffer.length + 1);
        signalBuffer[0] = SignalId[signal.constructor.name];
        signalBuffer.set(dataBuffer, 1);
        return signalBuffer;
    }

    public decodeSignal(data): TSignal {
        const signalBuffer = new Uint8Array(data);
        const signalType = SignalId[signalBuffer[0]];
        return ChatProtocol[signalType].decode(signalBuffer.slice(1));
    }

    public tryEncodeSignal(signal: TSignal): Uint8Array {
        try {
            return this.encodeSignal(signal);
        }
        catch (e) {
            return null;
        }
    }
    public tryDecodeSignal(data): TSignal {
        try {
            return this.decodeSignal(data);
        }
        catch (e) {
            return null;
        }
    }

    public sendSignal(signal: TSignal) {
        if (signal instanceof ChatProtocol.NewMessage && (
            !signal.message.startsWith('/') || signal.message.startsWith('/me ')
        )) {
            this._queueSendMessage(signal);
        }
        else {
            this._sendSignal(signal);
        }
    }

    private messageQueue: Array<TSignal> = [];

    private messageRateLimitMS = 650; // Server-side rate limit is 0.5s for Chat/Me messages
    private messageQueueTimeout = null;

    private messageLastSendMS = Date.now();

    private _queueSendMessage(signal: TSignal) {
        this.messageQueue.push(signal);
        if (!this.messageQueueTimeout) { this._checkQueue(); };
    }

    private _checkQueue() {
        const now = Date.now();
        if (now - this.messageLastSendMS > this.messageRateLimitMS) {
            this.messageLastSendMS = now;
            this._sendSignal(this.messageQueue.shift());
        }

        if (this.messageQueue.length > 0 && !this.messageQueueTimeout) {
            this.messageQueueTimeout = setTimeout(() => {
                this.messageQueueTimeout = null;
                this._checkQueue();
            }, this.messageRateLimitMS - (now - this.messageLastSendMS));
        }
    }

    private _sendSignal(signal: TSignal) {
        const signalBuffer = this.tryEncodeSignal(signal);
        if (signalBuffer !== null) {
            this.socket.send(signalBuffer);
        }
    }

    public disconnect() {
        this.socket.terminate();
    }

}

export enum ConnectionStatus {
    READY,
    CONNECTING,
    RECONNECTING,
    IDLE,
    NEARLY,
    DISCONNECTED
}

export enum SignalId {
    AdminControl = 1,
    Ban = 2,
    ChatMessage = 3,
    ClearHistory = 4,
    ClearUserMessages = 5,
    Color = 6,
    CommandHelp = 7,
    Control = 8,
    GlobalMessage = 9,
    IgnoresUpdated = 10,
    Kick = 11,
    Mod = 12,
    ModList = 13,
    ModifyIgnores = 14,
    Multistream = 15,
    NewMessage = 16,
    OnlineState = 17,
    PollInit = 18,
    PollResult = 19,
    PollUpdate = 20,
    PollVote = 21,
    PollVoteResponse = 22,
    RaffleInit = 23,
    RaffleRun = 24,
    RemoveMessage = 25,
    ServerMessage = 26,
    UnBan = 27,
    UserList = 28,
    Whisper = 29,
    SetName = 30,
    NameConfirmation = 31,
    ModTools = 32,
    PollEnd = 33,
    Reminder = 34,
    Timer = 35,
    MonitorData = 36,
    ChatLevel = 37,
    RequestUserlist = 38,
    UserInfo = 39,
    UserCount = 40,
    ShowRaffle = 41
}

export type TSignal = ChatProtocol.AdminControl |
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
    ChatProtocol.ShowRaffle;
