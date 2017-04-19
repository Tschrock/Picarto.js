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

import { ChannelUser } from "./ChannelUser";
import { ChatClient } from "../client/ChatClient";
import * as ChatProtocol from '../gen/picarto.proto.prebuilt';

/**
 * A Channel on Picarto.
 * @export
 * @class Channel
 */
export class Channel {

    /**
     * The id of the Channel.
     * @type {Number}
     * @memberOf Channel
     */
    public id: Number;

    /**
     * The name of the Channel.
     * @type {string}
     * @memberOf Channel
     */
    public name: string;

    /**
     * A cache of all users seen from this channel, including those who have left.
     * @memberOf Channel
     */
    public channelUserCache = new Map<Number, ChannelUser>();

    /**
     * A list of all users currently in this channel as of `channelUsersLastUpdate`.
     * @memberOf Channel
     */
    public channelUsers = new Map<Number, ChannelUser>();

    /**
     * The last time the list of current users was updated.
     * @type {Date}
     * @memberOf Channel
     */
    public channelUsersLastUpdate: Date;

    public resolveChannelUser(data: ChatProtocol.UserList.User | ChatProtocol.ChatMessage | ChatProtocol.Whisper) {
        if(this.channelUserCache.has(data.userId)){
            const existing = this.channelUserCache.get(data.userId);
            existing.update(data);
            return existing;
        }
        else {
            const newChannelUser = new ChannelUser(this.client, this, data);
            this.channelUserCache.set(newChannelUser.user.id, newChannelUser);
            return newChannelUser;
        }
    }

    public updateChannelUserList(data: ChatProtocol.UserList) {
        this.channelUsers.clear();
        // TODO fix: data.user.map(u => this.resolveChannelUser(u)).forEach(u => this.channelUsers.set(u.user.id, u));
    }

    constructor(private client: ChatClient) { }

    public update(data: ChatProtocol.OnlineState | ChatProtocol.Multistream.Channel | ChatProtocol.MonitorData) {
        if(!this.id) { this.id = data.channel; }
        if(this.id === data.channel) {
            this.name = data.channelName;
        }
    }
}
