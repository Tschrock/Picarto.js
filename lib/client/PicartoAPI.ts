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

'use strict';

// tslint:disable-next-line:no-require-imports
import request = require('request');

const HTTP_200_OK = 200;
const HTTP_302_REDIRECT = 302;


/**
 * The main Picarto API class. Each instance acts as a unique browser session.
 * @export
 * @class PicartoAPI
 */
export class PicartoAPI {

    protected apiURL = "https://api.picarto.tv/v1";

    // TODO: Actually impliment cacheing
    private _cacheTime: number = 30000;
    private _minCacheTime: number = 10000; // Always cache at least 10 sec.

    public set cacheTime(milliseconds: number) {
        this._cacheTime = Math.max(milliseconds, this._minCacheTime);
    }
    public get cacheTime() {
        return this._cacheTime;
    }

    public oauthToken: string;

    /**
     * Gets all currently online channels
     * @param {boolean} [adult]
     * @param {boolean} [gaming]
     * @param {string[]} [categories]
     * @returns {Promise<OnlineDetails[]>}
     * @memberOf PicartoAPI
     */
    public getOnlineChannels(adult?: boolean, gaming?: boolean, categories?: string[]): Promise<OnlineDetails[]> {
        return new Promise((resolve, reject) => {

            const query = {};
            if (typeof adult !== 'undefined') { query["adult"] = adult; }
            if (typeof gaming !== 'undefined') { query["gaming"] = gaming; }
            if (typeof categories !== 'undefined') { query["categories"] = gaming; }

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'GET',
                qs: query,
                headers: head,
                uri: `${this.apiURL}/online`,
                useQuerystring: true,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve(body);
                }
            });
        });
    }

    /**
     * Get information about all categories
     * @returns {Promise<Category[]>}
     * @memberOf PicartoAPI
     */
    public getChannelCategories(): Promise<Category[]> {
        return new Promise((resolve, reject) => {

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'GET',
                headers: head,
                uri: `${this.apiURL}/categories`,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve(body);
                }
            });
        });
    }

    /**
     * Get all events that are about to run or are running
     * @returns {Promise<Event[]>}
     * @memberOf PicartoAPI
     */
    public getCurrentEvents(): Promise<Event[]> {
        return new Promise((resolve, reject) => {

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'GET',
                headers: head,
                uri: `${this.apiURL}/events`,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve(body);
                }
            });
        });
    }

    /**
     * Gets information about a channel by ID
     * @param {number} channelId The channel's Id
     * @returns {Promise<ChannelDetails>}
     * @memberOf PicartoAPI
     */
    public getChannelInfoById(channelId: number): Promise<ChannelDetails> {
        return new Promise((resolve, reject) => {

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'GET',
                headers: head,
                uri: `${this.apiURL}/channel/id/${channelId}`,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve(body);
                }
            });
        });
    }

    /**
     * Gets information about a channel by Name
     * @param {string} channelName The channel's Name
     * @returns {Promise<ChannelDetails>}
     * @memberOf PicartoAPI
     */
    public getChannelInfoByName(channelName: string): Promise<ChannelDetails> {
        return new Promise((resolve, reject) => {

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'GET',
                headers: head,
                uri: `${this.apiURL}/channel/name/${channelName}`,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve(body);
                }
            });
        });
    }

    /**
     * Get private info about the currently authenticated user
     * @returns {Promise<ChannelDetails>}
     * @memberOf PicartoAPI
     */
    public getUserInfo(): Promise<UserData> {
        return new Promise((resolve, reject) => {

            if (!this.oauthToken) {
                reject(new Error("This endpoint requires authorization."));
                return;
            }

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'GET',
                headers: head,
                uri: `${this.apiURL}/user`,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve(body);
                }
            });
        });
    }

    /**
     * Get the stream key of the currently authenticated user
     * @returns {Promise<string>}
     * @memberOf PicartoAPI
     */
    public getUserStreamKey(): Promise<string> {
        return new Promise((resolve, reject) => {

            if (!this.oauthToken) {
                reject(new Error("This endpoint requires authorization."));
                return;
            }

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'GET',
                headers: head,
                uri: `${this.apiURL}/user/streamkey`,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve(body);
                }
            });
        });
    }

    /**
     * Generate a bot JWT token to connect to a channel
     * @param {number} channel_id
     * @param {boolean} bot
     * @returns {Promise<string>}
     * @memberOf PicartoAPI
     */
    public getUserChatKey(channel_id: number, bot: boolean): Promise<string> {
        return new Promise((resolve, reject) => {

            if (!this.oauthToken) {
                reject(new Error("This endpoint requires authorization."));
                return;
            }

            if (!channel_id) {
                reject(new Error("`channel_id` is required."));
                return;
            }

            if (typeof bot === "undefined") {
                reject(new Error("`bot` is required."));
                return;
            }

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'GET',
                headers: head,
                qs: {
                    channel_id: channel_id,
                    bot: bot
                },
                uri: `${this.apiURL}/user/streamkey`,
                useQuerystring: true,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve(body);
                }
            });
        });
    }


    public getWebhooks(client_id: string, client_secret: string, channel_id?: number): Promise<Webhook[]> {
        return new Promise((resolve, reject) => {

            if (!client_id) {
                reject(new Error("`client_id` is required."));
                return;
            }

            if (!client_secret) {
                reject(new Error("`client_secret` is required."));
                return;
            }

            const query = {};
            if (typeof client_id !== 'undefined') { query["client_id"] = client_id; }
            if (typeof client_secret !== 'undefined') { query["client_secret"] = client_secret; }
            if (typeof channel_id !== 'undefined') { query["channel_id"] = channel_id; }

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'GET',
                headers: head,
                qs: query,
                uri: `${this.apiURL}/webhooks`,
                useQuerystring: true,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve(body);
                }
            });
        });
    }

    public registerWebhook(type: string, uri: string): Promise<null> {
        return new Promise((resolve, reject) => {

            if (!type) {
                reject(new Error("`type` is required."));
                return;
            }

            if (!uri) {
                reject(new Error("`uri` is required."));
                return;
            }

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'POST',
                headers: head,
                formData: {
                    type: type,
                    uri: uri
                },
                uri: `${this.apiURL}/webhooks`,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve();
                }
            });
        });
    }

    public deleteWebhook(webhook_id: number, client_id: string, client_secret: string): Promise<null> {
        return new Promise((resolve, reject) => {

            if (!webhook_id) {
                reject(new Error("`webhook_id` is required."));
                return;
            }

            if (!client_id) {
                reject(new Error("`client_id` is required."));
                return;
            }

            if (!client_secret) {
                reject(new Error("`client_secret` is required."));
                return;
            }

            const query = {};
            if (typeof client_id !== 'undefined') { query["client_id"] = client_id; }
            if (typeof client_secret !== 'undefined') { query["client_secret"] = client_secret; }

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'DELETE',
                headers: head,
                qs: query,
                uri: `${this.apiURL}/webhooks/${webhook_id}`,
                useQuerystring: true,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve();
                }
            });
        });
    }

    public getWebhookDetails(webhook_id: number, client_id: string, client_secret: string): Promise<Webhook> {
        return new Promise((resolve, reject) => {

            if (!webhook_id) {
                reject(new Error("`webhook_id` is required."));
                return;
            }

            if (!client_id) {
                reject(new Error("`client_id` is required."));
                return;
            }

            if (!client_secret) {
                reject(new Error("`client_secret` is required."));
                return;
            }

            const query = {};
            if (typeof client_id !== 'undefined') { query["client_id"] = client_id; }
            if (typeof client_secret !== 'undefined') { query["client_secret"] = client_secret; }

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'GET',
                headers: head,
                qs: query,
                uri: `${this.apiURL}/webhooks/${webhook_id}`,
                useQuerystring: true,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve(body);
                }
            });
        });
    }

    public updateWebhookURI(webhook_id: number, uri: string, client_id: string, client_secret: string): Promise<Webhook> {
        return new Promise((resolve, reject) => {

            if (!webhook_id) {
                reject(new Error("`webhook_id` is required."));
                return;
            }

            if (!uri) {
                reject(new Error("`uri` is required."));
                return;
            }

            if (!client_id) {
                reject(new Error("`client_id` is required."));
                return;
            }

            if (!client_secret) {
                reject(new Error("`client_secret` is required."));
                return;
            }

            const query = {};
            if (typeof uri !== 'undefined') { query["uri"] = uri; }
            if (typeof client_id !== 'undefined') { query["client_id"] = client_id; }
            if (typeof client_secret !== 'undefined') { query["client_secret"] = client_secret; }

            const head = {};
            if (this.oauthToken) { head["Authorization"] = `Bearer ${this.oauthToken}`; }

            request({
                method: 'PUT',
                headers: head,
                qs: query,
                uri: `${this.apiURL}/webhooks/${webhook_id}`,
                useQuerystring: true,
                json: true
            }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                }
                else {
                    const statusCode = httpResponse.statusCode;
                    if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                        reject(new Error(`Recieved Status Code ${statusCode}`));
                    }
                    resolve(body);
                }
            });
        });
    }

}


/*
 *   Public
 */

export interface OnlineDetails {
    user_id: number;
    name: string;
    viewers: number;
    category: string;
    adult: boolean;
    gaming: boolean;
    multistream: boolean;
}

export interface Category {
    name: string;
    total_channels: number;
    online_channels: number;
    viewers: number;
}

export interface BasicChannelInfo {
    user_id: number;
    name: string;
}

export interface Event {
    id: string;
    channel_details: BasicChannelInfo;
    category: string;
    ticket_price: number;
    ticket_limit: number;
    tickets_sold: number;
    started: boolean;
    adult: boolean;
}

export interface DescriptionPanel {
    title: string;
    body: string;
    image: string;
    image_link: string;
    position: number;
}

export interface MultiParticipant {
    user_id: string;
    name: string;
    online: boolean;
}

export interface ChannelDetails {
    user_id: number;
    name: string;
    online: boolean;
    viewers: number;
    viewers_total: number;
    followers: number;
    adult: boolean;
    category: string;
    account_type: string;
    commissions: boolean;
    title: string;
    description_panels: DescriptionPanel[];
    private: boolean;
    gaming: boolean;
    guest_chat: boolean;
    last_live: Date;
    tags: string[];
    multistream: MultiParticipant[];
}

export interface UserData {
    channel_details: ChannelDetails;
    email: string;
    creation_date: string;
    private_key: string;
    following: BasicChannelInfo[];
    subscriptions: BasicChannelInfo[];
}

// tslint:disable-next-line:no-namespace
// tslint:disable-next-line:no-internal-module
export module WebhookType {
    export const online = "online";
    export const offline = "offline";
    export const follow = "follow";
    export const unfollow = "unfollow";
    export const subscribe = "subscribe";
    export const unsubscribe = "unsubscribe";
    export const event_start = "event_start";
    export const event_end = "event_end";
}

export interface Webhook {
    id: string;
    channel: BasicChannelInfo;
    type: string;
    uri: string;
}


