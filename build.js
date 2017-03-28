#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-require-imports
// tslint:disable:no-console
const pbjs = require("protobufjs/cli/pbjs");
const pbts = require("protobufjs/cli/pbts");
const child_process_1 = require("child_process");
// tslint:disable-next-line:no-console
console.log("Prebuilding Protobuffs...");
pbjs.main(["--target", "static-module", "lib/picarto.proto", "-o", "lib/picarto.proto.prebuilt.js"], function (err, output) {
    if (err) {
        return console.log(err);
    }
    if (output) {
        console.log(output);
    }
    console.log("TSifying Protobuffs...");
    pbts.main(["lib/picarto.proto.prebuilt.js", "-o", "lib/picarto.proto.prebuilt.d.ts"], function (err, output) {
        if (err) {
            return console.log(err);
        }
        if (output) {
            console.log(output);
        }
        console.log("Compiling TypeScript...");
        child_process_1.exec("tsc", function (error, stdout, stderr) {
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
    });
});
