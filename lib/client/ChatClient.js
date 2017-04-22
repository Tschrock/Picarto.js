/**
 * Picarto.js
 * An unofficial library for interacting with Picarto.tv.
 *
 * This library is not endorsed, supported, or otherwise associated with Picarto
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
const User_1 = require("../structures/User");
const PicartoAPI_1 = require("./PicartoAPI");
const ChatConnection_1 = require("./ChatConnection");
class ChatClient {
    constructor(OAuthAuthToken) {
        /**
         * The User that this client is logged in as.
         * @memberOf ChatClient
         */
        this.user = new User_1.User(this);
        /**
         * A list of active chat connections.
         * @private
         * @memberOf ChatClient
         */
        this.connections = new Map();
        /**
         * A list of all users this ChatClient has seen.
         * @memberOf ChatClient
         */
        this.users = new Map();
        this.picartoAPI = new PicartoAPI_1.PicartoAPI();
        this.picartoAPI.setOAuthToken(OAuthAuthToken);
    }
    resolveUser(data) {
        if (this.users.has(data.userId)) {
            const existing = this.users.get(data.userId);
            existing.update(data);
            return existing;
        }
        else {
            const newUser = new User_1.User(this, data);
            this.users.set(newUser.id, newUser);
            return newUser;
        }
    }
    joinChannelById(channelId) {
        if (this.connections.has(channelId)) {
            return Promise.reject(new Error("Already connected to channel!"));
        }
        return this.picartoAPI.getUserChatKey(channelId, true).then(key => {
            //
            let con = this.connections.get(channelId);
            if (!con) {
                con = new ChatConnection_1.ChatConnection(key);
                this.connections.set(channelId, con);
            }
            return con;
        });
    }
    joinChannelByName(channelName) {
        return this.picartoAPI.getChannelInfoByName(channelName).then(details => this.joinChannelById(details.user_id));
    }
}
exports.ChatClient = ChatClient;
