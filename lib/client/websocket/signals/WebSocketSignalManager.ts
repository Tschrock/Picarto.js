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

import { AbstractHandler } from "./handlers/AbstractHandler";

import { ChatMessageHandler } from "./handlers/ChatMessageHandler";

/**
 * Signal manager for WebSocket connections.
 * @export
 * @class WebSocketSignalManager
 */
export class WebSocketSignalManager {

    private handlers = new Map<string, AbstractHandler>();
    private queue = [];
    private ws;

    constructor(connection) {
        this.register("ChatMessage", ChatMessageHandler);
    }

    public get client() {
        return this.ws.client;
    }

    public register(event: string, handlerType: { new(packetManager: WebSocketSignalManager): AbstractHandler }) {
        this.handlers[event] = new handlerType(this);
    }

    public handle(signal): boolean {
        if (this.handlers[signal.constructor.name]) return this.handlers[signal.constructor.name].handle(signal);
        return false;
    }


}
