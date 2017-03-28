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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChannelUser_1 = require("./ChannelUser");
/**
 * A Channel on Picarto.
 * @export
 * @class Channel
 */
class Channel {
    constructor(client) {
        this.client = client;
        /**
         * A cache of all users seen from this channel, including those who have left.
         * @memberOf Channel
         */
        this.channelUserCache = new Map();
        /**
         * A list of all users currently in this channel as of `channelUsersLastUpdate`.
         * @memberOf Channel
         */
        this.channelUsers = new Map();
    }
    resolveChannelUser(data) {
        if (this.channelUserCache.has(data.userId)) {
            const existing = this.channelUserCache.get(data.userId);
            existing.update(data);
            return existing;
        }
        else {
            const newChannelUser = new ChannelUser_1.ChannelUser(this.client, this, data);
            this.channelUserCache.set(newChannelUser.user.id, newChannelUser);
            return newChannelUser;
        }
    }
    updateChannelUserList(data) {
        this.channelUsers.clear();
        data.user.map(u => this.resolveChannelUser(u)).forEach(u => this.channelUsers.set(u.user.id, u));
    }
    update(data) {
        if (!this.id) {
            this.id = data.channel;
        }
        if (this.id === data.channel) {
            this.name = data.channelName;
        }
    }
}
exports.Channel = Channel;
