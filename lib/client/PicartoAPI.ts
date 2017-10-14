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

"use strict";

// tslint:disable-next-line:no-require-imports
import request = require("request");

const HTTP_200_OK = 200;
const HTTP_302_REDIRECT = 302;
const HTTP_400_BAD_REQUSET = 400;

const x: request.CoreOptions = {

}

/**
 * The main Picarto API class. Each instance acts as a unique browser session.
 * @export
 * @class PicartoAPI
 */
export class PicartoAPI {

    protected apiURL = "https://api.picarto.tv/v1";

    // TODO: Actually impliment cacheing
    private _cacheTime = 30000;
    private _minCacheTime = 10000; // Always cache at least 10 sec.

    public set cacheTime(milliseconds: number) {
        this._cacheTime = Math.max(milliseconds, this._minCacheTime);
    }
    public get cacheTime() {
        return this._cacheTime;
    }

    private _authToken: string;

    public setAuthToken(token: string) {
        this._authToken = token;
    }




    /*
     *
     * Public APIs: Publicly accessible operations without any need for authentication
     * https://docs.picarto.tv/api/#/public
     *
     */

    /**
     * GET /online
     *
     * Gets all currently online channels
     * https://docs.picarto.tv/api/#!/public/get_online
     *
     * @param {boolean} [adult] Whether or not to include adult channels (defaults to `false`).
     * @param {boolean} [gaming] Whether or not to include gaming channels (defaults to `false`).
     * @param {string[]} [categories] What categories to limit the results to.
     * @returns {Promise<IOnlineDetails[]>} A Promise for a list of `IOnlineDetails`.
     *
     * @memberOf PicartoAPI
     */
    public async getOnlineChannels(adult?: boolean, gaming?: boolean, categories?: string[]): Promise<IOnlineDetails[]> {
        return new Promise<IOnlineDetails[]>((resolve, reject) => {

            const qs: { adult?; gaming?; categories?} = {};
            if (typeof adult !== "undefined") { qs.adult = adult; }
            if (typeof gaming !== "undefined") { qs.gaming = gaming; }
            if (typeof categories !== "undefined") { qs.categories = gaming; }

            const headers: { Authorization?} = {};
            if (this._authToken) { headers.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "GET",
                headers,
                uri: `${this.apiURL}/online`,
                qs,
                json: true
            }, (err, httpResponse, body) => {
                if (err) reject(err);
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
     * GET /categories
     *
     * Get information about all categories
     * https://docs.picarto.tv/api/#!/public/get_categories
     *
     * @returns {Promise<ICategory[]>} A Promise for a list of `ICategory`.
     * @memberOf PicartoAPI
     */
    public async getChannelCategories(): Promise<ICategory[]> {
        return new Promise<ICategory[]>((resolve, reject) => {

            const head: { Authorization?} = {};
            if (this._authToken) { head.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "GET",
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
     * GET /events
     *
     * Get all events that are about to run or are running
     * https://docs.picarto.tv/api/#!/public/get_events
     *
     * @returns {Promise<IEvent[]>}  A Promise for a list of `IEvent`.
     * @memberOf PicartoAPI
     */
    public async getCurrentEvents(): Promise<IEvent[]> {
        return new Promise<IEvent[]>((resolve, reject) => {

            const head: { Authorization?} = {};
            if (this._authToken) { head.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "GET",
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




    /*
     *
     * Channel APIs: All channel information
     * https://docs.picarto.tv/api/#/channel
     *
     */

    /**
     * GET /channel/id/{channel_id}
     *
     * Gets information about a channel by ID
     * https://docs.picarto.tv/api/#!/channel/get_channel_id_channel_id
     *
     * @param {number} channelId The channel's Id
     * @returns {Promise<IChannelDetails>} A Promise for a `IChannelDetails`.
     * @memberOf PicartoAPI
     */
    public async getChannelInfoById(channelId: number): Promise<IChannelDetails> {
        return new Promise<IChannelDetails>((resolve, reject) => {

            const head: { Authorization?} = {};
            if (this._authToken) { head.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "GET",
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
     * GET /channel/name/{channel_name}
     *
     * Gets information about a channel by Name
     * https://docs.picarto.tv/api/#!/channel/get_channel_name_channel_name
     *
     * @param {string} channelName The channel's Name
     * @returns {Promise<IChannelDetails>} A Promise for a `IChannelDetails`.
     * @memberOf PicartoAPI
     */
    public async getChannelInfoByName(channelName: string): Promise<IChannelDetails> {
        return new Promise<IChannelDetails>((resolve, reject) => {

            const head: { Authorization?} = {};
            if (this._authToken) { head.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "GET",
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




    /*
     *
     * User APIs: All operations that read or write account information
     * https://docs.picarto.tv/api/#/user
     *
     */

    /**
     * GET /user
     *
     * Get private info about the currently authenticated user
     * https://docs.picarto.tv/api/#!/user/get_user
     *
     * Requires oauth scope: readpriv
     *
     * @returns {Promise<IUserData>} A Promise for a `IUserData`.
     * @memberOf PicartoAPI
     */
    public async getUserInfo(): Promise<IUserData> {
        return new Promise<IUserData>((resolve, reject) => {

            if (!this._authToken) {
                reject(new Error("This endpoint requires authorization."));
                return;
            }

            const head: { Authorization?} = {};
            if (this._authToken) { head.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "GET",
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
     * GET /user/streamkey
     *
     * Get the stream key of the currently authenticated user
     * https://docs.picarto.tv/api/#!/user/get_user_streamkey
     *
     * Requires oauth scope: sudo
     *
     * @returns {Promise<string>} A Promise for the stream key (`string`).
     * @memberOf PicartoAPI
     */
    public async getUserStreamKey(): Promise<string> {
        return new Promise<string>((resolve, reject) => {

            if (!this._authToken) {
                reject(new Error("This endpoint requires authorization."));
                return;
            }

            const head: { Authorization?} = {};
            if (this._authToken) { head.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "GET",
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
     * GET /user/jwtkey
     *
     * Generate a bot JWT token to connect to a channel
     * https://docs.picarto.tv/api/#!/user/get_user_jwtkey
     *
     * Requires oauth scope: sudo
     *
     * @param {number} channel_id Channel ID you wish to connect to.
     * @param {boolean} bot Whether or not this is a bot token.
     * @returns {Promise<string>} A Promise for the chat key (`string`).
     * @memberOf PicartoAPI
     */
    public async getUserChatKey(channel_id: number, bot: boolean): Promise<string> {
        return new Promise<string>((resolve, reject) => {

            if (!this._authToken) {
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

            const head: { Authorization?} = {};
            if (this._authToken) { head.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "GET",
                headers: head,
                qs: {
                    channel_id,
                    bot
                },
                uri: `${this.apiURL}/user/jwtkey`,
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
     * POST /user/title
     *
     * Update the user's channel title
     * https://docs.picarto.tv/api/#!/user/post_user_title
     *
     * Requires oauth scope: write
     *
     * @param {string} title The new title.
     * @returns {Promise<void>} A Promise.
     * @memberOf PicartoAPI
     */
    public async setUserChannelTitle(title: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {

            if (!this._authToken) {
                reject(new Error("This endpoint requires authorization."));
                return;
            }

            if (!title) {
                reject(new Error("`title` is required."));
                return;
            }

            request({
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${this._authToken}`
                },
                formData: {
                    title
                },
                uri: `${this.apiURL}/user/title`,
                useQuerystring: true
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


    /**
     * POST /user/category
     *
     * Update the user's channel category
     * https://docs.picarto.tv/api/#!/user/post_user_category
     *
     * Requires oauth scope: write
     *
     * @param {number} id The category ID.
     * @returns {Promise<void>} A Promise.
     * @memberOf PicartoAPI
     */
    public async setUserChannelCategory(id: number): Promise<string> {
        return new Promise<string>((resolve, reject) => {

            if (!this._authToken) {
                reject(new Error("This endpoint requires authorization."));
                return;
            }

            if (!id) {
                reject(new Error("`id` is required."));
                return;
            }

            request({
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${this._authToken}`
                },
                formData: {
                    id
                },
                uri: `${this.apiURL}/user/title`,
                useQuerystring: true
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


    /**
     * POST /user/adult
     *
     * Update the user's adult status
     * https://docs.picarto.tv/api/#!/user/post_user_adult
     *
     * Requires oauth scope: write
     *
     * @param {boolean} adult If the user is to be made an adult channel.
     * @returns {Promise<void>} A Promise.
     * @memberOf PicartoAPI
     */
    public async setUserChannelIsAdult(adult: boolean): Promise<string> {
        return new Promise<string>((resolve, reject) => {

            if (!this._authToken) {
                reject(new Error("This endpoint requires authorization."));
                return;
            }

            request({
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${this._authToken}`
                },
                formData: {
                    adult: !!adult
                },
                uri: `${this.apiURL}/user/title`,
                useQuerystring: true
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




    /*
     *
     * Sensitive APIs: All operations that retrieve sensitive account information
     * https://docs.picarto.tv/api/#/sensitive
     *
     * SEE: getUserInfo, getUserStreamKey, getUserChatKey
     *
     */




    /*
     *
     * Bot APIs: Any actions that are useful to bot/acct management applications
     * https://docs.picarto.tv/api/#/bot
     *
     * SEE: getUserChatKey
     *
     */




    /*
     *
     * Webhook APIs: Webhook management
     * https://docs.picarto.tv/api/#/webhook
     *
     */

    /**
     * GET /webhooks
     *
     * Get all registered webhooks for your account
     * https://docs.picarto.tv/api/#!/webhook/get_webhooks
     *
     * @param {string} client_id Your application's client ID.
     * @param {string} client_secret Your application's client secret.
     * @param {number} channel_id A channel ID to filter by (optional).
     * @returns {Promise<IWebhook[]>} A Promise for a list of webhooks.
     * @memberOf PicartoAPI
     */
    public async getWebhooks(client_id: string, client_secret: string, channel_id?: number): Promise<IWebhook[]> {
        return new Promise<IWebhook[]>((resolve, reject) => {

            if (!client_id) {
                reject(new Error("`client_id` is required."));
                return;
            }

            if (!client_secret) {
                reject(new Error("`client_secret` is required."));
                return;
            }

            const qs: { client_id: string; client_secret: string; channel_id?: number } = {
                client_id,
                client_secret
            };
            if (typeof channel_id !== "undefined") { qs.channel_id = channel_id; }

            const headers: { Authorization?} = {};
            if (this._authToken) { headers.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "GET",
                headers,
                qs,
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

    /**
     * POST /webhooks
     *
     * Register a webhook
     * https://docs.picarto.tv/api/#!/webhook/post_webhooks
     *
     * @param {string} type The webhook type.
     * @param {string} uri Webhook destination URI.
     * @returns {Promise<string>} A Promise for the location of the new webhook.
     * @memberOf PicartoAPI
     */
    public async registerWebhook(type: WebhookType, uri: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {

            if (!type) {
                reject(new Error("`type` is required."));
                return;
            }

            if (!uri) {
                reject(new Error("`uri` is required."));
                return;
            }

            const head: { Authorization?} = {};
            if (this._authToken) { head.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "POST",
                headers: head,
                formData: {
                    type,
                    uri
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
                    const location = httpResponse.headers["Location"];
                    resolve(Array.isArray(location) ? location.pop() : location);
                }
            });
        });
    }

    /**
     * DELETE /webhooks/{webhook_id}
     *
     * Delete a webhook
     * https://docs.picarto.tv/api/#!/webhook/delete_webhooks_webhook_id
     *
     * @param {number} webhook_id The webhook ID.
     * @param {string} client_id Your application's client ID.
     * @param {string} client_secret Your application's client secret.
     * @returns {Promise<null>} A Promise.
     * @memberOf PicartoAPI
     */
    public async deleteWebhook(webhook_id: number, client_id: string, client_secret: string): Promise<null> {
        return new Promise<null>((resolve, reject) => {

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


            const head: { Authorization?} = {};
            if (this._authToken) { head.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "DELETE",
                headers: head,
                qs: {
                    client_id,
                    client_secret
                },
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

    /**
     * GET /webhooks/{webhook_id}
     *
     * Get a webhook
     * https://docs.picarto.tv/api/#!/webhook/get_webhooks_webhook_id
     *
     * @param {number} webhook_id The webhook ID.
     * @param {string} client_id Your application's client ID.
     * @param {string} client_secret Your application's client secret.
     * @returns {Promise<IWebhook>} A Promise for a webhook's information.
     * @memberOf PicartoAPI
     */
    public async getWebhookDetails(webhook_id: number, client_id: string, client_secret: string): Promise<IWebhook> {
        return new Promise<IWebhook>((resolve, reject) => {

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

            const head: { Authorization?} = {};
            if (this._authToken) { head.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "GET",
                headers: head,
                qs: {
                    client_id,
                    client_secret
                },
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

    /**
     * PUT /webhooks/{webhook_id}
     *
     * Update a webhook's URI
     * Note: You can not change the webhook type. To do that you must create a new webhook, authenticated by the user.
     * https://docs.picarto.tv/api/#!/webhook/put_webhooks_webhook_id
     *
     * @param {number} webhook_id The webhook ID.
     * @param {string} uri Webhook destination URI.
     * @param {string} client_id Your application's client ID.
     * @param {string} client_secret Your application's client secret.
     * @returns {Promise<string>} A Promise for the location of the new webhook.
     * @memberOf PicartoAPI
     */
    public async updateWebhookURI(webhook_id: number, uri: string, client_id: string, client_secret: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {

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

            const head: { Authorization?} = {};
            if (this._authToken) { head.Authorization = `Bearer ${this._authToken}`; }

            request({
                method: "PUT",
                headers: head,
                qs: {
                    uri,
                    client_id,
                    client_secret
                },
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
                    const location = httpResponse.headers["Location"];
                    resolve(Array.isArray(location) ? location.pop() : location);
                }
            });
        });
    }

}


/*
 *   Public
 */

/**
 * Basic info about a Channel.
 * @export
 * @interface IBasicChannelInfo
 */
export interface IBasicChannelInfo {
    user_id: number;
    name: string;
}

/**
 * Details about an online Channel.
 * @export
 * @interface IOnlineDetails
 */
export interface IOnlineDetails extends IBasicChannelInfo {
    user_id: number;
    name: string;
    viewers: number;
    category: string;
    adult: boolean;
    gaming: boolean;
    multistream: boolean;
}

/**
 * Details about a Channel Category.
 * @export
 * @interface ICategory
 */
export interface ICategory {
    name: string;
    total_channels: number;
    online_channels: number;
    viewers: number;
}

/**
 * Details about a Picarto Event
 * @export
 * @interface IEvent
 */
export interface IEvent {
    id: string;
    channel_details: IBasicChannelInfo;
    category: string;
    ticket_price: number;
    ticket_limit: number;
    tickets_sold: number;
    started: boolean;
    adult: boolean;
}

/**
 * Details for a Panel in a Channel's Description.
 * @export
 * @interface IDescriptionPanel
 */
export interface IDescriptionPanel {
    title: string;
    body: string;
    image: string;
    image_link: string;
    position: number;
}

/**
 * Basic info about a Multistream Channel.
 * @export
 * @interface IMultiParticipant
 */
export interface IMultiParticipant extends IBasicChannelInfo {
    user_id: number;
    name: string;
    online: boolean;
    adult: boolean;
}

/**
 * Details about a Channel.
 * @export
 * @interface IChannelDetails
 * @extends {IMultiParticipant}
 */
export interface IChannelDetails extends IMultiParticipant {
    user_id: number;
    name: string;
    online: boolean;
    viewers: number;
    viewers_total: number;
    followers: number;
    subscribers: number;
    adult: boolean;
    category: string;
    account_type: "free" | "basic" | "premium";
    commissions: boolean;
    title: string;
    description_panels: IDescriptionPanel[];
    private: boolean;
    gaming: boolean;
    guest_chat: boolean;
    last_live: Date;
    tags: string[];
    multistream: IMultiParticipant[];
}

/**
 * Private details about a User.
 * @export
 * @interface IUserData
 */
export interface IUserData {
    channel_details: IChannelDetails;
    email: string;
    creation_date: string;
    private_key: string;
    following: IBasicChannelInfo[];
    subscriptions: IBasicChannelInfo[];
}

/**
 * The available types of webhooks.
 * @export
 * @enum {string}
 */
export enum WebhookType {
    online = "online",
    offline = "offline",
    follow = "follow",
    unfollow = "unfollow",
    subscribe = "subscribe",
    unsubscribe = "unsubscribe",
    event_start = "event_start",
    event_end = "event_end"
}

/**
 * A Webhook.
 * @export
 * @interface IWebhook
 */
export interface IWebhook {
    id: string;
    channel: IBasicChannelInfo;
    type: string;
    uri: string;
}


