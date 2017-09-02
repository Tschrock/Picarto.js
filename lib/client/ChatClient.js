/**
 * Picarto.js
 * An unofficial library for interacting with Picarto.tv.
 *
 * This library is not endorsed, supported, or otherwise associated with Picarto
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const ChatProtocol = require("../gen/picarto.proto.prebuilt");
const User_1 = require("../structures/User");
const PicartoAPI_1 = require("./PicartoAPI");
const ChatConnection_1 = require("./ChatConnection");
/**
 *  A client for connecting t o picarto chats.
 * @export
 * @class ChatClient
 * @extends {EventEmitter}
 */
class ChatClient extends events_1.EventEmitter {
    constructor(oAuthToken) {
        super();
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
        this.picartoAPI.setOAuthToken(oAuthToken);
    }
    resolveUser(data) {
        const existing = this.users.get(data.userId);
        if (existing) {
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
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connections.has(channelId)) {
                return Promise.reject(new Error("Already connected to channel!"));
            }
            return this.picartoAPI.getUserChatKey(channelId, true).then((key) => {
                //
                let con = this.connections.get(channelId);
                if (!con) {
                    con = new ChatConnection_1.ChatConnection();
                    this.hookupEvents(con);
                    con.connect(key);
                    this.connections.set(channelId, con);
                }
                return con;
            });
        });
    }
    joinChannelByName(channelName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.picartoAPI.getChannelInfoByName(channelName).then((details) => __awaiter(this, void 0, void 0, function* () { return this.joinChannelById(details.user_id); }));
        });
    }
    hookupEvents(con) {
        /* tslint:disable:no-console */
        con.on("close", (code, reason) => {
            console.log(`Connection Closed: [${code}] "${reason}"`);
            this.emit("channelDisconnect", con);
        }).on("error", (error) => {
            console.log("Connection Error:");
            console.log(error);
        }).on("signal", (signal) => {
            console.log(signal);
            if (signal instanceof ChatProtocol.)
                ;
        }).on("open", () => {
            console.log("Connection Opened");
            this.emit("channelConnect", con);
        }).on("ping", (data, flags) => {
            console.log("Pinged", data, flags);
        }).on("pong", (data, flags) => {
            console.log("Ponged", data, flags);
        }).on("unexpected-response", (request, response) => {
            console.log("Unexpected Response", request, response);
        });
        /* tslint:enable:no-console */
    }
}
exports.ChatClient = ChatClient;
