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

import { Multistream } from "../../../../gen/picarto.proto.prebuilt";
import { AbstractHandler } from "./AbstractHandler";

/**
 * Handler for Multistream signals.
 * @export
 * @class MultistreamHandler
 * @extends {AbstractHandler}
 */
export class MultistreamHandler extends AbstractHandler {
    public handle(signal: Multistream): boolean {
        console.log(signal);
        return true;
    }
}
