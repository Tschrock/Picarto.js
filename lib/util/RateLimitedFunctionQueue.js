"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Provides a rate-limited execution queue. Functions execute in insertion order, with at least the given number of millisecconds between each one.
 *
 * @class RateLimitedFunctionQueue
 */
class RateLimitedFunctionQueue {
    /**
     * Creates a RateLimitedFunctionQueue.
     * @param {number} rateMS The rate at which added functions should execute, in milliseconds.
     * @memberof RateLimitedFunctionQueue
     */
    constructor(rateMS) {
        this.rateMS = rateMS;
        /** The function queue */
        this.queue = [];
        /** The last time we ran a function */
        this.lastUpdateTime = 0;
        /** The last time we ran a function */
        this.updateTimeout = false;
    }
    /**
     * Adds a function to the end of the execution queue
     * @param {Function} func The function to execute
     * @memberof RateLimitedFunctionQueue
     */
    add(func) {
        this.queue.push(func);
        this.ensureUpdate();
    }
    /**
     * Adds a function to the begining of the execution queue
     * @param {Function} func The function to execute
     * @memberof RateLimitedFunctionQueue
     */
    addNext(func) {
        this.queue.unshift(func);
        this.ensureUpdate();
    }
    /**
     * Removes a function from the queue. If it appears more than once in the queue, only the one closeset to the front will be removed.
     * @param {Function} func The function to remove from the queue
     * @memberof RateLimitedFunctionQueue
     */
    remove(func) {
        const index = this.queue.indexOf(func);
        if (index > -1) {
            this.queue.splice(index, 1);
        }
    }
    /**
     * Clears the current function queue.
     * @memberof RateLimitedFunctionQueue
     */
    clear() {
        this.queue = [];
    }
    /**
     * Checks if it's time to execute the next function, and shedules the next update if needed.
     * @private
     * @memberof RateLimitedFunctionQueue
     */
    update() {
        this.updateTimeout = false;
        // Make sure there's something for us to proccess
        if (this.queue.length <= 0) {
            return;
        }
        // Check if it's time to execute the next function
        const now = Date.now();
        if (now >= (this.lastUpdateTime + this.rateMS)) {
            // Grab the next function and try to execute it
            const execFunc = this.queue.shift();
            if (execFunc) {
                try {
                    execFunc();
                }
                catch (e) { }
            }
            // Set next update time
            this.lastUpdateTime = now;
        }
        // If there's still something in the queue, schedule an update
        if (this.queue.length > 0) {
            this.updateTimeout = setTimeout(this.update.bind(this), (this.rateMS + 1) - (now - this.lastUpdateTime));
        }
    }
    /**
     * Runs an update if needed
     * @private
     * @memberof RateLimitedFunctionQueue
     */
    ensureUpdate() {
        if (this.updateTimeout === false) {
            this.update();
        }
    }
}
exports.RateLimitedFunctionQueue = RateLimitedFunctionQueue;
