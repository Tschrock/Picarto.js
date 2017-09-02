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
import { ChannelUser } from "./ChannelUser";

import * as ChatProtocol from "../gen/picarto.proto.prebuilt";

/**
 * A Message from Picarto.
 * @export
 * @class Message
 */
export class Message {

    /**
     * The id of the Message.
     * @type {Number}
     * @memberOf Message
     */
    public id: Number;

    /**
     * The ChannelUser of the Message.
     * @type {ChannelUser}
     * @memberOf Message
     */
    public channelUser: ChannelUser;

    /**
     * The Channel this Message was sent in.
     * @type {Channel}
     * @memberOf Message
     */
    public channel: Channel;

    /**
     * The content of this Message
     * @type {String}
     * @memberOf Message
     */
    public content: String;

    /**
     * The time this Message was sent.
     * @type {Date}
     * @memberOf Message
     */
    public timeStamp: Date;

    /**
     * Whether or not this Message was sent by us.
     * @type {boolean}
     * @memberOf Message
     */
    public isIncomming: boolean;

    /**
     * Whether or not this Message was sent with /me.
     * @type {boolean}
     * @memberOf Message
     */
    public isMeMessage: boolean;

    /**
     * Whether or not this Message was whispered (a private message).
     * @type {boolean}
     * @memberOf Message
     */
    public isWhisper: boolean;

    constructor(private client: ChatClient, channel: Channel, data: ChatProtocol.ChatMessage | ChatProtocol.Whisper) {
        this.channel = channel;
        if (data) { this.update(data); }
    }

    public update(data: ChatProtocol.ChatMessage | ChatProtocol.Whisper) {

        if (!this.id) { this.id = data.id; }
        if (this.id === data.id) {
            this.channelUser = this.channel.resolveChannelUser(data);
            this.content = data.message;
            this.isIncomming = this.client.user.id !== this.channelUser.user.id;
            this.timeStamp = new Date(data.timeStamp);

            if (data instanceof ChatProtocol.ChatMessage) {
                this.isMeMessage = data.isMeMessage;
                this.isWhisper = false;
            }
            else if (data instanceof ChatProtocol.Whisper) {
                this.isMeMessage = false;
                this.isWhisper = true;
            }

        }
    }

    public reply(content: string) {
        this.channel.sendMessage(`@${this.channelUser.user.displayName}: ${content}`);
    }
}
