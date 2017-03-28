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
 * A user in a Picarto Channel.
 * @export
 * @class ChannelUser
 */
class ChannelUser {
    constructor(client, channel, data) {
        this.client = client;
        this.channel = channel;
        this.update(data);
    }
    update(data) {
        this.user = this.client.resolveUser(data);
        if (data instanceof ChatProtocol.UserList.User) {
            if (data.userData) {
                this.isStreamer = data.userData.streamer;
                this.isShadowBanned = false;
            }
            else if (data.banData) {
                this.isStreamer = false;
                this.isShadowBanned = data.banData.isShadowBan;
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
exports.ChannelUser = ChannelUser;
