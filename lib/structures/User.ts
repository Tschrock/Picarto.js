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

import { ChatClient } from "../client/ChatClient";
import * as ChatProtocol from '../picarto.proto.prebuilt';

/**
 * A user on Picarto.
 * @export
 * @class User
 */
export class User {

    /**
     * The Id of a user.
     * @type {Number}
     * @memberOf User
     */
    public id: Number;

    /**
     * The Display Name of a user.
     * @type {string}
     * @memberOf User
     */
    public displayName: string;

    /**
     * Whether or not a user is registered on Picarto.
     * @type {boolean}
     * @memberOf User
     */
    public isRegistered: boolean;

    /**
     * Whether or not a user is a Picarto Administrator.
     * @type {boolean}
     * @memberOf User
     */
    public isPTVAdmin: boolean;

    /**
     * Whether or not a user has a basic subscription.
     * @type {boolean}
     * @memberOf User
     */
    public hasBasic: boolean;

    /**
     * Whether or not a user has a premium subscription.
     * @type {boolean}
     * @memberOf User
     */
    public hasPremium: boolean;

    /**
     * A hex string of the user's username color.
     * @type {boolean}
     * @memberOf User
     */
    public color: string;

    /**
     * Whether or not a user is being ignored by the bot.
     * @type {boolean}
     * @memberOf User
     */
    public isIgnored: boolean;

    constructor(private client: ChatClient, data?: ChatProtocol.UserList.User | ChatProtocol.ChatMessage | ChatProtocol.Whisper) {
        if(data) { this.update(data); }
     }

    public update(data: ChatProtocol.UserList.User | ChatProtocol.ChatMessage | ChatProtocol.Whisper) {
        if(!data.userId || data.userId <= 0) {
            data.userId = data.displayName as any; // TODO: Find a nice way of dealing with anon users.
        }

        if(!this.id) { this.id = data.userId; }
        if (this.id === data.userId) {

            this.displayName = data.displayName;

            if (data instanceof ChatProtocol.UserList.User) {
                if (data.userData) {
                    this.isRegistered = data.userData.registered;
                    this.isPTVAdmin = data.userData.ptvAdmin;
                    this.hasBasic = data.userData.basic;
                    this.hasPremium = data.userData.premium;
                    this.color = data.userData.color;
                    this.isIgnored = data.userData.ignoring;
                }
            }
            else if (data instanceof ChatProtocol.ChatMessage) {
                this.isRegistered = data.registered;
                this.isPTVAdmin = data.ptvAdmin;
                this.hasBasic = data.basic;
                this.hasPremium = data.premium;
                this.color = data.color;
                this.isIgnored = false; // If we see a message from them we can't be ignoring them :P
            }
            else if (data instanceof ChatProtocol.Whisper) {
                this.isIgnored = false; // If we see a message from them we can't be ignoring them :P
            }

        }
    }

}
