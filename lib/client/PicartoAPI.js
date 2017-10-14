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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
const request = require("request");
const HTTP_200_OK = 200;
const HTTP_302_REDIRECT = 302;
const HTTP_400_BAD_REQUSET = 400;
const x = {};
/**
 * The main Picarto API class. Each instance acts as a unique browser session.
 * @export
 * @class PicartoAPI
 */
class PicartoAPI {
    constructor() {
        this.apiURL = "https://api.picarto.tv/v1";
        // TODO: Actually impliment cacheing
        this._cacheTime = 30000;
        this._minCacheTime = 10000; // Always cache at least 10 sec.
    }
    set cacheTime(milliseconds) {
        this._cacheTime = Math.max(milliseconds, this._minCacheTime);
    }
    get cacheTime() {
        return this._cacheTime;
    }
    setAuthToken(token) {
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
    getOnlineChannels(adult, gaming, categories) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const qs = {};
                if (typeof adult !== "undefined") {
                    qs.adult = adult;
                }
                if (typeof gaming !== "undefined") {
                    qs.gaming = gaming;
                }
                if (typeof categories !== "undefined") {
                    qs.categories = gaming;
                }
                const headers = {};
                if (this._authToken) {
                    headers.Authorization = `Bearer ${this._authToken}`;
                }
                request({
                    method: "GET",
                    headers,
                    uri: `${this.apiURL}/online`,
                    qs,
                    json: true
                }, (err, httpResponse, body) => {
                    if (err)
                        reject(err);
                    else {
                        const statusCode = httpResponse.statusCode;
                        if (statusCode !== HTTP_200_OK && statusCode !== HTTP_302_REDIRECT) {
                            reject(new Error(`Recieved Status Code ${statusCode}`));
                        }
                        resolve(body);
                    }
                });
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
    getChannelCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const head = {};
                if (this._authToken) {
                    head.Authorization = `Bearer ${this._authToken}`;
                }
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
    getCurrentEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const head = {};
                if (this._authToken) {
                    head.Authorization = `Bearer ${this._authToken}`;
                }
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
    getChannelInfoById(channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const head = {};
                if (this._authToken) {
                    head.Authorization = `Bearer ${this._authToken}`;
                }
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
    getChannelInfoByName(channelName) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const head = {};
                if (this._authToken) {
                    head.Authorization = `Bearer ${this._authToken}`;
                }
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
    getUserInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!this._authToken) {
                    reject(new Error("This endpoint requires authorization."));
                    return;
                }
                const head = {};
                if (this._authToken) {
                    head.Authorization = `Bearer ${this._authToken}`;
                }
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
    getUserStreamKey() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!this._authToken) {
                    reject(new Error("This endpoint requires authorization."));
                    return;
                }
                const head = {};
                if (this._authToken) {
                    head.Authorization = `Bearer ${this._authToken}`;
                }
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
    getUserChatKey(channel_id, bot) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
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
                const head = {};
                if (this._authToken) {
                    head.Authorization = `Bearer ${this._authToken}`;
                }
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
    setUserChannelTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
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
    setUserChannelCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
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
    setUserChannelIsAdult(adult) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
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
    getWebhooks(client_id, client_secret, channel_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!client_id) {
                    reject(new Error("`client_id` is required."));
                    return;
                }
                if (!client_secret) {
                    reject(new Error("`client_secret` is required."));
                    return;
                }
                const qs = {
                    client_id,
                    client_secret
                };
                if (typeof channel_id !== "undefined") {
                    qs.channel_id = channel_id;
                }
                const headers = {};
                if (this._authToken) {
                    headers.Authorization = `Bearer ${this._authToken}`;
                }
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
    registerWebhook(type, uri) {
        return __awaiter(this, void 0, void 0, function* () {
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
                if (this._authToken) {
                    head.Authorization = `Bearer ${this._authToken}`;
                }
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
    deleteWebhook(webhook_id, client_id, client_secret) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const head = {};
                if (this._authToken) {
                    head.Authorization = `Bearer ${this._authToken}`;
                }
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
    getWebhookDetails(webhook_id, client_id, client_secret) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const head = {};
                if (this._authToken) {
                    head.Authorization = `Bearer ${this._authToken}`;
                }
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
    updateWebhookURI(webhook_id, uri, client_id, client_secret) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const head = {};
                if (this._authToken) {
                    head.Authorization = `Bearer ${this._authToken}`;
                }
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
        });
    }
}
exports.PicartoAPI = PicartoAPI;
/**
 * The available types of webhooks.
 * @export
 * @enum {string}
 */
var WebhookType;
(function (WebhookType) {
    WebhookType["online"] = "online";
    WebhookType["offline"] = "offline";
    WebhookType["follow"] = "follow";
    WebhookType["unfollow"] = "unfollow";
    WebhookType["subscribe"] = "subscribe";
    WebhookType["unsubscribe"] = "unsubscribe";
    WebhookType["event_start"] = "event_start";
    WebhookType["event_end"] = "event_end";
})(WebhookType = exports.WebhookType || (exports.WebhookType = {}));
