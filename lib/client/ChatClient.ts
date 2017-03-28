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

import { User } from "../structures/User";
import * as ChatProtocol from '../picarto.proto.prebuilt';
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

    private username: string;
    private password: string;

    private connections = new Map<string, ChatConnection>();

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

    public login(username: string, password: string): Promise<null> {
        return new Promise((resolve, reject) => {
            this.username = username;
            this.password = password;
            this.picartoAPI = new PicartoAPI();
            return this.picartoAPI.login(username, password, true);
        });
    }

    public connectToChannel(channelName: string, options?: ChatConnectionConfig): Promise<null> {
        return new Promise((resolve, reject) => {

            if (this.connections.has(channelName.toLowerCase())) {
                this.connections.get(channelName.toLowerCase()).disconnect();
                this.connections.delete(channelName.toLowerCase());
            }

            return this.picartoAPI.unsp_getChatInitInfo(channelName).then(
                info => {
                    if (!this.connections.has(channelName.toLowerCase())) {
                        this.connections.set(channelName.toLowerCase(), new ChatConnection(info.chatKey, options));
                    }
                }
            );

        });
    }


}
