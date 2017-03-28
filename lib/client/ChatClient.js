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
const User_1 = require("../structures/User");
const PicartoAPI_1 = require("./PicartoAPI");
const ChatConnection_1 = require("./ChatConnection");
class ChatClient {
    constructor() {
        /**
         * The User that this client is logged in as.
         * @memberOf ChatClient
         */
        this.user = new User_1.User(this);
        this.connections = new Map();
        /**
         * A list of all users this ChatClient has seen.
         * @memberOf ChatClient
         */
        this.users = new Map();
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
    login(username, password) {
        return new Promise((resolve, reject) => {
            this.username = username;
            this.password = password;
            this.picartoAPI = new PicartoAPI_1.PicartoAPI();
            return this.picartoAPI.login(username, password, true);
        });
    }
    connectToChannel(channelName, options) {
        return new Promise((resolve, reject) => {
            if (this.connections.has(channelName.toLowerCase())) {
                this.connections.get(channelName.toLowerCase()).disconnect();
                this.connections.delete(channelName.toLowerCase());
            }
            return this.picartoAPI.unsp_getChatInitInfo(channelName).then(info => {
                if (!this.connections.has(channelName.toLowerCase())) {
                    this.connections.set(channelName.toLowerCase(), new ChatConnection_1.ChatConnection(info.chatKey, options));
                }
            });
        });
    }
}
exports.ChatClient = ChatClient;
