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
const picarto_proto_prebuilt_1 = require("../../../../gen/picarto.proto.prebuilt");
const AbstractHandler_1 = require("./AbstractHandler");
/**
 * Handler for PingPong signals.
 * @export
 * @class PingPongHandler
 * @extends {AbstractHandler}
 */
class PingPongHandler extends AbstractHandler_1.AbstractHandler {
    handle(signal) {
        console.log(signal);
        this.packetManager.connection.send(new picarto_proto_prebuilt_1.PingPong({ type: signal.type + 1 % 2 }));
        return true;
    }
}
exports.PingPongHandler = PingPongHandler;
