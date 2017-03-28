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
const ChatProtocol = require("../picarto.proto.prebuilt");
/**
 * A Message from Picarto.
 * @export
 * @class Message
 */
class Message {
    constructor(client, channel, data) {
        this.client = client;
        this.channel = channel;
        if (data) {
            this.update(data);
        }
    }
    update(data) {
        if (!this.id) {
            this.id = data.id;
        }
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
}
exports.Message = Message;
