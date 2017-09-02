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

import { EventEmitter } from "events";

import * as ChatProtocol from "../gen/picarto.proto.prebuilt";
import { User } from "../structures/User";
import { PicartoAPI } from "./PicartoAPI";

import { ChatConnection, IChatConnectionConfig, TSignal } from "./ChatConnection";

/**
 *  A client for connecting t o picarto chats.
 * @export
 * @class ChatClient
 * @extends {EventEmitter}
 */
export class ChatClient extends EventEmitter {

    /**
     * The User that this client is logged in as.
     * @memberOf ChatClient
     */
    public user = new User(this);

    /**
     * The picarto API client to use to get chat tokens.
     * @private
     * @type {PicartoAPI}
     * @memberOf ChatClient
     */
    private picartoAPI: PicartoAPI;

    /**
     * A list of active chat connections.
     * @private
     * @memberOf ChatClient
     */
    private connections = new Map<number, ChatConnection>();

    /**
     * A list of all users this ChatClient has seen.
     * @memberOf ChatClient
     */
    public users = new Map<Number, User>();

    public resolveUser(data: ChatProtocol.UserList.User | ChatProtocol.ChatMessage | ChatProtocol.Whisper): User {
        const existing = this.users.get(data.userId);
        if (existing) {
            existing.update(data);
            return existing;
        }
        else {
            const newUser = new User(this, data);
            this.users.set(newUser.id, newUser);
            return newUser;
        }
    }

    constructor(oAuthToken: string) {
        super();
        this.picartoAPI = new PicartoAPI();
        this.picartoAPI.setOAuthToken(oAuthToken);
    }

    public async joinChannelById(channelId: number): Promise<ChatConnection> {
        if (this.connections.has(channelId)) { return Promise.reject(new Error("Already connected to channel!")); }
        return this.picartoAPI.getUserChatKey(channelId, true).then(
            (key): ChatConnection => {
                //
                let con = this.connections.get(channelId);
                if (!con) {
                    con = new ChatConnection();
                    this.hookupEvents(con);
                    con.connect(key);
                    this.connections.set(channelId, con);
                }
                return con;
            }
        );
    }

    public async joinChannelByName(channelName: string): Promise<ChatConnection> {
        return this.picartoAPI.getChannelInfoByName(channelName).then(
            async details => this.joinChannelById(details.user_id)
        );
    }

    private hookupEvents(con: ChatConnection) {
        /* tslint:disable:no-console */
        con.on("close", (code: number, reason: string) => {

            console.log(`Connection Closed: [${code}] "${reason}"`);
            this.emit("channelDisconnect", con);

        }).on("error", (error: Error) => {

            console.log("Connection Error:");
            console.log(error);

        }).on("signal", (signal: TSignal) => {

            console.log(signal);

            if(signal instanceof ChatProtocol.)

        }).on("open", () => {

            console.log("Connection Opened");
            this.emit("channelConnect", con);

        }).on("ping", (data, flags: Object) => {

            console.log("Pinged", data, flags);

        }).on("pong", (data, flags: Object) => {

            console.log("Ponged", data, flags);

        }).on("unexpected-response", (request, response) => {

            console.log("Unexpected Response", request, response);

        });
        /* tslint:enable:no-console */
    }

}
