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

import { User } from "../structures/User";
import * as ChatProtocol from '../gen/picarto.proto.prebuilt';
import { PicartoAPI } from "./PicartoAPI";

import { ChatConnection, ChatConnectionConfig } from "./ChatConnection";

export class ChatClient {

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
        if (this.users.has(data.userId)) {
            const existing = this.users.get(data.userId);
            existing.update(data);
            return existing;
        }
        else {
            const newUser = new User(this, data);
            this.users.set(newUser.id, newUser);
            return newUser;
        }
    }

    constructor(OAuthAuthToken: string) {
        this.picartoAPI = new PicartoAPI();
        this.picartoAPI.setOAuthToken(OAuthAuthToken);
    }

    public joinChannelById(channelId: number): Promise<ChatConnection> {
        if(this.connections.has(channelId)) { return Promise.reject(new Error("Already connected to channel!")); }
        return this.picartoAPI.getUserChatKey(channelId, true).then(
            key => {
                //
                let con = this.connections.get(channelId);
                if(!con) {
                    con = new ChatConnection(key);
                    this.connections.set(channelId, con);
                }
                return con;
            }
        );
    }
    public joinChannelByName(channelName: string): Promise<ChatConnection> {
        return this.picartoAPI.getChannelInfoByName(channelName).then(
            details => this.joinChannelById(details.user_id)
        );
    }


}
