#!/usr/bin/env node
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

'use strict';

// tslint:disable:no-require-imports
// tslint:disable:no-console

import pbjs = require("protobufjs/cli/pbjs");
import pbts = require("protobufjs/cli/pbts");

import { exec } from "child_process";

// tslint:disable-next-line:no-console
console.log("Prebuilding Protobuffs...");
pbjs.main(["--target", "static-module", "lib/gen/picarto.proto", "-o", "lib/gen/picarto.proto.prebuilt.js"], function (err, output) {
    if (err) {
        return console.log(err);
    }
    if (output) {
        console.log(output);
    }
    console.log("TSifying Protobuffs...");
    pbts.main(["lib/gen/picarto.proto.prebuilt.js", "-o", "lib/gen/picarto.proto.prebuilt.d.ts"], function (err, output) {
        if (err) {
            return console.log(err);
        }
        if (output) {
            console.log(output);
        }
        console.log("Compiling TypeScript...");
        exec("tsc", function (error, stdout, stderr) {
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
    })
})