#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RateLimitedFunctionQueue_1 = require("../lib/util/RateLimitedFunctionQueue");
const queue = new RateLimitedFunctionQueue_1.RateLimitedFunctionQueue(650);
queue.add(() => { console.log(1, Date.now()); });
queue.add(() => { console.log(2, Date.now()); });
queue.add(() => { console.log(3, Date.now()); });
queue.add(() => { console.log(4, Date.now()); });
queue.add(() => { console.log(5, Date.now()); });
queue.add(() => { console.log(6, Date.now()); });
queue.add(() => { console.log(7, Date.now()); });
queue.add(() => { console.log(8, Date.now()); });
queue.add(() => { console.log(9, Date.now()); });
