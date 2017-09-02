#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-console
const pbjs = require("protobufjs/cli/pbjs");
const pbts = require("protobufjs/cli/pbts");
const child_process_1 = require("child_process");
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
        child_process_1.exec("tsc", (error, stdout, stderr) => {
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
