"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const url_1 = require("url");
const WebSocket = require("ws");
const ChatProtocol = require("../../gen/picarto.proto.prebuilt");
const RateLimitedFunctionQueue_1 = require("../../util/RateLimitedFunctionQueue");
const WebSocketSignalManager_1 = require("./signals/WebSocketSignalManager");
/**
 * Signal Type to Id mapping.
 * @export
 * @enum {number}
 */
var SignalId;
(function (SignalId) {
    SignalId[SignalId["AdminControl"] = 0] = "AdminControl";
    SignalId[SignalId["Ban"] = 1] = "Ban";
    SignalId[SignalId["ChatMessage"] = 2] = "ChatMessage";
    SignalId[SignalId["ClearHistory"] = 3] = "ClearHistory";
    SignalId[SignalId["ClearUserMessages"] = 4] = "ClearUserMessages";
    SignalId[SignalId["Color"] = 5] = "Color";
    SignalId[SignalId["CommandHelp"] = 6] = "CommandHelp";
    SignalId[SignalId["Control"] = 7] = "Control";
    SignalId[SignalId["GlobalMessage"] = 8] = "GlobalMessage";
    SignalId[SignalId["IgnoresUpdated"] = 9] = "IgnoresUpdated";
    SignalId[SignalId["Kick"] = 10] = "Kick";
    SignalId[SignalId["Mod"] = 11] = "Mod";
    SignalId[SignalId["ModList"] = 12] = "ModList";
    SignalId[SignalId["ModifyIgnores"] = 13] = "ModifyIgnores";
    SignalId[SignalId["Multistream"] = 14] = "Multistream";
    SignalId[SignalId["NewMessage"] = 15] = "NewMessage";
    SignalId[SignalId["OnlineState"] = 16] = "OnlineState";
    SignalId[SignalId["PollInit"] = 17] = "PollInit";
    SignalId[SignalId["PollResult"] = 18] = "PollResult";
    SignalId[SignalId["PollUpdate"] = 19] = "PollUpdate";
    SignalId[SignalId["PollVote"] = 20] = "PollVote";
    SignalId[SignalId["PollVoteResponse"] = 21] = "PollVoteResponse";
    SignalId[SignalId["RaffleInit"] = 22] = "RaffleInit";
    SignalId[SignalId["RaffleRun"] = 23] = "RaffleRun";
    SignalId[SignalId["RemoveMessage"] = 24] = "RemoveMessage";
    SignalId[SignalId["ServerMessage"] = 25] = "ServerMessage";
    SignalId[SignalId["UnBan"] = 26] = "UnBan";
    SignalId[SignalId["UserList"] = 27] = "UserList";
    SignalId[SignalId["Whisper"] = 28] = "Whisper";
    SignalId[SignalId["SetName"] = 29] = "SetName";
    SignalId[SignalId["NameConfirmation"] = 30] = "NameConfirmation";
    SignalId[SignalId["ModTools"] = 31] = "ModTools";
    SignalId[SignalId["PollEnd"] = 32] = "PollEnd";
    SignalId[SignalId["Reminder"] = 33] = "Reminder";
    SignalId[SignalId["Timer"] = 34] = "Timer";
    SignalId[SignalId["MonitorData"] = 35] = "MonitorData";
    SignalId[SignalId["ChatLevel"] = 36] = "ChatLevel";
    SignalId[SignalId["RequestUserlist"] = 37] = "RequestUserlist";
    SignalId[SignalId["UserInfo"] = 38] = "UserInfo";
    SignalId[SignalId["UserCount"] = 39] = "UserCount";
    SignalId[SignalId["ShowRaffle"] = 40] = "ShowRaffle";
    SignalId[SignalId["Event"] = 41] = "Event";
    SignalId[SignalId["SetJWT"] = 42] = "SetJWT";
    SignalId[SignalId["UpdateEmotes"] = 43] = "UpdateEmotes";
    SignalId[SignalId["PingPong"] = 44] = "PingPong";
})(SignalId = exports.SignalId || (exports.SignalId = {}));
/**
 * A WebSocket connection.
 * @export
 * @class WebSocketConnection
 * @extends {EventEmitter}
 */
class WebSocketConnection extends events_1.EventEmitter {
    constructor(manager, gateway, token) {
        super();
        this.manager = manager;
        this.status = 0;
        /**
         * The Signal Manager of the connection
         * @private
         * @type {WebSocketSignalManager}
         * @memberof WebSocketConnection
         */
        this.signalManager = new WebSocketSignalManager_1.WebSocketSignalManager(this);
        /**
         * The rate limit for message-related signals. The server-side rate limit is 0.5s for Chat/Me messages. We'll use 0.6 to give it some padding.
         * @private
         * @type {number}
         * @memberof WebSocketConnection
         */
        this.messageRateLimitMS = 600;
        /**
         * The rate-limited queue for message-related signals.
         * @private
         * @type {RateLimitedFunctionQueue}
         * @memberof WebSocketConnection
         */
        this.messageQueue = new RateLimitedFunctionQueue_1.RateLimitedFunctionQueue(this.messageRateLimitMS);
        this.connect(gateway, token);
    }
    get client() {
        return this.manager.client;
    }
    static encode(signal) {
        const dataBuffer = ChatProtocol[signal.constructor.name].encode(signal).finish();
        const signalBuffer = new Uint8Array(dataBuffer.length + 1);
        signalBuffer[0] = SignalId[signal.constructor.name];
        signalBuffer.set(dataBuffer, 1);
        return signalBuffer;
    }
    static decode(data) {
        const signalBuffer = new Uint8Array(data);
        const signalType = SignalId[signalBuffer[0]];
        return ChatProtocol[signalType].decode(signalBuffer.slice(1));
    }
    connect(gateway, token) {
        const connectURL = new url_1.URL(gateway);
        connectURL.searchParams.set("token", token);
        const ws = this.ws = new WebSocket(connectURL.toString());
        ws.onmessage = this.onMessage.bind(this);
        ws.onopen = this.onOpen.bind(this);
        ws.onerror = this.onError.bind(this);
        ws.onclose = this.onClose.bind(this);
    }
    destroy() {
        if (!this.ws) {
            return false;
        }
        this.messageQueue.clear();
        this.ws.close();
        this.ws = null;
    }
    send(signal) {
        if (!this.ws) {
            this.emit("error", new Error(`Tried to send signal ${signal} but no WebSocket is available!`));
            return false;
        }
        if (signal instanceof ChatProtocol.NewMessage && (!signal.message.startsWith("/") || signal.message.startsWith("/me "))) {
            this.messageQueue.add(() => this._send(signal));
        }
        else {
            this._send(signal);
        }
    }
    _send(signal) {
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
    onMessage(event) {
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
    onSignal(signal) {
        this.signalManager.handle(signal);
    }
    onOpen(event) {
        console.log("Connection Opened");
    }
    onError(error) {
        console.log("Connection Error");
        console.log(error);
        this.client.emit("error", error);
    }
    onClose(event) {
        console.log("Connection Closed");
    }
}
exports.WebSocketConnection = WebSocketConnection;
