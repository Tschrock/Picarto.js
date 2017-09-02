#!/usr/bin/env node
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
"use strict";

import { RateLimitedFunctionQueue } from "../lib/util/RateLimitedFunctionQueue";


const queue = new RateLimitedFunctionQueue(650);

queue.add(() => { console.log(1, Date.now()); });
queue.add(() => { console.log(2, Date.now()); });
queue.add(() => { console.log(3, Date.now()); });
queue.add(() => { console.log(4, Date.now()); });
queue.add(() => { console.log(5, Date.now()); });
queue.add(() => { console.log(6, Date.now()); });
queue.add(() => { console.log(7, Date.now()); });
queue.add(() => { console.log(8, Date.now()); });
queue.add(() => { console.log(9, Date.now()); });

