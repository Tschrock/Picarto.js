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

import { WebSocketSignalManager } from "../WebSocketSignalManager";

import { TSignal } from "../../../ChatConnection";

/**
 * Signal handler base.
 * @export
 * @class AbstractHandler
 */
export class AbstractHandler {
    constructor(protected packetManager: WebSocketSignalManager) { }

    public handle(signal: TSignal): boolean {
        console.log(signal);
        return !!signal;
    }
}
