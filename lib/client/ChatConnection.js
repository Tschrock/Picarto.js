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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const WebSocket = require("ws");
const ChatProtocol = require("../gen/picarto.proto.prebuilt");
const defaultConfig = {
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
class ChatConnection extends events_1.EventEmitter {
    constructor(token, config) {
        super();
        this.status = ConnectionStatus.IDLE;
        this.reconnectRetryCount = 0;
        this.messageQueue = [];
        this.messageRateLimitMS = 650; // Server-side rate limit is 0.5s for Chat/Me messages
        this.messageQueueTimeout = null;
        this.messageLastSendMS = Date.now();
        this.token = token;
        config = config || {};
        this.config = defaultConfig;
        Object.keys(config).forEach(key => this.config[key] = config[key]);
        this.connect();
    }
    connect() {
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
    _handleSocketEvent_Close(code, reason) {
        this.emit("closed", code, reason);
    }
    _handleSocketEvent_Error(error) {
        this.emit("error", error);
    }
    _handleSocketEvent_Message(buffer, flags) {
        this.emit("raw", buffer, flags);
        const signal = this.tryDecodeSignal(buffer);
        if (signal !== null) {
            this.emit(signal.constructor.name, signal);
        }
        else {
            this.emit("error", new Error("Recieved invalid message or Signal could not be decoded."));
        }
    }
    _handleSocketEvent_Open() {
        this.emit("open");
    }
    _handleSocketEvent_Ping(data, flags) {
        this.emit("ping", data, flags);
    }
    _handleSocketEvent_Pong(data, flags) {
        this.emit("pong", data, flags);
    }
    _handleSocketEvent_UnexpectedResponse(request, response) {
        this.emit("error", new Error(`Socket Unexpected Response (${response.statusCode}): ${response}`));
    }
    encodeSignal(signal) {
        const dataBuffer = ChatProtocol[signal.constructor.name].encode(signal).finish();
        const signalBuffer = new Uint8Array(dataBuffer.length + 1);
        signalBuffer[0] = SignalId[signal.constructor.name];
        signalBuffer.set(dataBuffer, 1);
        return signalBuffer;
    }
    decodeSignal(data) {
        const signalBuffer = new Uint8Array(data);
        const signalType = SignalId[signalBuffer[0]];
        return ChatProtocol[signalType].decode(signalBuffer.slice(1));
    }
    tryEncodeSignal(signal) {
        try {
            return this.encodeSignal(signal);
        }
        catch (e) {
            return null;
        }
    }
    tryDecodeSignal(data) {
        try {
            return this.decodeSignal(data);
        }
        catch (e) {
            return null;
        }
    }
    sendSignal(signal) {
        if (signal instanceof ChatProtocol.NewMessage && (!signal.message.startsWith('/') || signal.message.startsWith('/me '))) {
            this._queueSendMessage(signal);
        }
        else {
            this._sendSignal(signal);
        }
    }
    _queueSendMessage(signal) {
        this.messageQueue.push(signal);
        if (!this.messageQueueTimeout) {
            this._checkQueue();
        }
    }
    _checkQueue() {
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
    _sendSignal(signal) {
        const signalBuffer = this.tryEncodeSignal(signal);
        if (signalBuffer !== null) {
            this.socket.send(signalBuffer);
        }
    }
    disconnect() {
        this.socket.terminate();
    }
}
exports.ChatConnection = ChatConnection;
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["READY"] = 0] = "READY";
    ConnectionStatus[ConnectionStatus["CONNECTING"] = 1] = "CONNECTING";
    ConnectionStatus[ConnectionStatus["RECONNECTING"] = 2] = "RECONNECTING";
    ConnectionStatus[ConnectionStatus["IDLE"] = 3] = "IDLE";
    ConnectionStatus[ConnectionStatus["NEARLY"] = 4] = "NEARLY";
    ConnectionStatus[ConnectionStatus["DISCONNECTED"] = 5] = "DISCONNECTED";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
var SignalId;
(function (SignalId) {
    SignalId[SignalId["AdminControl"] = 1] = "AdminControl";
    SignalId[SignalId["Ban"] = 2] = "Ban";
    SignalId[SignalId["ChatMessage"] = 3] = "ChatMessage";
    SignalId[SignalId["ClearHistory"] = 4] = "ClearHistory";
    SignalId[SignalId["ClearUserMessages"] = 5] = "ClearUserMessages";
    SignalId[SignalId["Color"] = 6] = "Color";
    SignalId[SignalId["CommandHelp"] = 7] = "CommandHelp";
    SignalId[SignalId["Control"] = 8] = "Control";
    SignalId[SignalId["GlobalMessage"] = 9] = "GlobalMessage";
    SignalId[SignalId["IgnoresUpdated"] = 10] = "IgnoresUpdated";
    SignalId[SignalId["Kick"] = 11] = "Kick";
    SignalId[SignalId["Mod"] = 12] = "Mod";
    SignalId[SignalId["ModList"] = 13] = "ModList";
    SignalId[SignalId["ModifyIgnores"] = 14] = "ModifyIgnores";
    SignalId[SignalId["Multistream"] = 15] = "Multistream";
    SignalId[SignalId["NewMessage"] = 16] = "NewMessage";
    SignalId[SignalId["OnlineState"] = 17] = "OnlineState";
    SignalId[SignalId["PollInit"] = 18] = "PollInit";
    SignalId[SignalId["PollResult"] = 19] = "PollResult";
    SignalId[SignalId["PollUpdate"] = 20] = "PollUpdate";
    SignalId[SignalId["PollVote"] = 21] = "PollVote";
    SignalId[SignalId["PollVoteResponse"] = 22] = "PollVoteResponse";
    SignalId[SignalId["RaffleInit"] = 23] = "RaffleInit";
    SignalId[SignalId["RaffleRun"] = 24] = "RaffleRun";
    SignalId[SignalId["RemoveMessage"] = 25] = "RemoveMessage";
    SignalId[SignalId["ServerMessage"] = 26] = "ServerMessage";
    SignalId[SignalId["UnBan"] = 27] = "UnBan";
    SignalId[SignalId["UserList"] = 28] = "UserList";
    SignalId[SignalId["Whisper"] = 29] = "Whisper";
    SignalId[SignalId["SetName"] = 30] = "SetName";
    SignalId[SignalId["NameConfirmation"] = 31] = "NameConfirmation";
    SignalId[SignalId["ModTools"] = 32] = "ModTools";
    SignalId[SignalId["PollEnd"] = 33] = "PollEnd";
    SignalId[SignalId["Reminder"] = 34] = "Reminder";
    SignalId[SignalId["Timer"] = 35] = "Timer";
    SignalId[SignalId["MonitorData"] = 36] = "MonitorData";
    SignalId[SignalId["ChatLevel"] = 37] = "ChatLevel";
    SignalId[SignalId["RequestUserlist"] = 38] = "RequestUserlist";
    SignalId[SignalId["UserInfo"] = 39] = "UserInfo";
    SignalId[SignalId["UserCount"] = 40] = "UserCount";
    SignalId[SignalId["ShowRaffle"] = 41] = "ShowRaffle";
})(SignalId = exports.SignalId || (exports.SignalId = {}));
