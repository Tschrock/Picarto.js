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

import { ChatClient } from "../client/ChatClient";
import { Channel } from "./Channel";
import { User } from "./User";

import * as ChatProtocol from "../gen/picarto.proto.prebuilt";

/**
 * A user in a Picarto Channel.
 * @export
 * @class ChannelUser
 */
export class ChannelUser {

    /**
     * The User that is in the Channel.
     * @type {User}
     * @memberOf ChannelUser
     */
    public user: User;

    /**
     * The Channel that this User is in.
     * @type {Channel}
     * @memberOf ChannelUser
     */
    public channel: Channel;

    /**
     * Whether or not a user is the person streaming (the Channel owner).
     * @type {boolean}
     * @memberOf ChannelUser
     */
    public isStreamer: boolean;

    /**
     * Whether or not a user is subscribed to the Channel.
     * @type {boolean}
     * @memberOf ChannelUser
     */
    public isSubscriber: boolean;

    /**
     * Whether or not a user is banned from a Channel.
     * @type {boolean}
     * @memberOf ChannelUser
     */
    public isShadowBanned: boolean;

    constructor(private client: ChatClient, channel: Channel, data: ChatProtocol.UserList.User | ChatProtocol.ChatMessage | ChatProtocol.Whisper) {
        this.channel = channel;
        this.update(data);
    }

    public update(data: ChatProtocol.UserList.User | ChatProtocol.ChatMessage | ChatProtocol.Whisper) {
        this.user = this.client.resolveUser(data);
        if (data instanceof ChatProtocol.UserList.User) {
            if (data.userData) {
                this.isStreamer = !!data.userData.streamer;
                this.isShadowBanned = false;
            }
            else if (data.banData) {
                this.isStreamer = false;
                this.isShadowBanned = !!data.banData.isShadowBan;
            }
        }
        else if (data instanceof ChatProtocol.ChatMessage) {
            this.isStreamer = data.streamer;
            this.isSubscriber = data.subscriber;
            this.isShadowBanned = false; // If we see a message from them they can't be banned :P
        }
        else if (data instanceof ChatProtocol.Whisper) {
            /* TODO: Can banned people whisper you?
             * this.isShadowBanned = false;
             */
        }

    }
}
