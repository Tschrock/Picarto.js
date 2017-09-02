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

// tslint:disable:no-console

import * as pbjs from "protobufjs/cli/pbjs";
import * as pbts from "protobufjs/cli/pbts";

import { exec } from "child_process";

console.log("Prebuilding Protobuffs...");
pbjs.main(["--target", "static-module", "lib/gen/picarto.proto", "-o", "lib/gen/picarto.proto.prebuilt.js"], (err, output) => {
    if (err) {
        console.log(err);
        return {};
    }
    console.log("TSifying Protobuffs...");
    pbts.main(["lib/gen/picarto.proto.prebuilt.js", "-o", "lib/gen/picarto.proto.prebuilt.d.ts"], (err2, output2) => {
        if (err2) {
            console.log(err2);
            return {};
        }
        console.log("Compiling TypeScript...");
        exec("tsc", (error, stdout, stderr) => {
            if (error) {
                console.log(error);
            }
            if (stdout) {
                console.log(stdout);
            }
            if (stderr) {
                console.log(stderr);
            }
            console.log("Done!");
        });
        return {};
    });
    return {};
});
