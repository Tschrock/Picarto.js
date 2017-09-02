/**
 * Picarto.js
 * An unofficial library for interacting with Picarto.tv.
 *
 * This library is not endorsed, supported, or otherwise associated with Picarto
 * or it's team. It is provided as-is with no guarantees. Please make sure you
 * read through and comply with Picarto's TOS: https://picarto.tv/site/terms
 *
 * CyberPon3 <cyber@cyberpon3.net>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChatMessageHandler_1 = require("./handlers/ChatMessageHandler");
/**
 * Signal manager for WebSocket connections.
 * @export
 * @class WebSocketSignalManager
 */
class WebSocketSignalManager {
    constructor(connection) {
        this.handlers = new Map();
        this.queue = [];
        this.register("ChatMessage", ChatMessageHandler_1.ChatMessageHandler);
    }
    get client() {
        return this.ws.client;
    }
    register(event, handler) {
        this.handlers[event] = new handler(this);
    }
    handle(signal) {
        if (this.handlers[signal.constructor.name])
            return this.handlers[signal.constructor.name].handle(signal);
        return false;
    }
}
exports.WebSocketSignalManager = WebSocketSignalManager;
