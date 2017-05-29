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
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
const request = require("request");
const HTTP_200_OK = 200;
const HTTP_302_REDIRECT = 302;
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
    setOAuthToken(token) {
        this._oauthToken = token;
    }
    /**
     * Gets all currently online channels
     * @param {boolean} [adult]
     * @param {boolean} [gaming]
     * @param {string[]} [categories]
     * @returns {Promise<OnlineDetails[]>}
     * @memberOf PicartoAPI
     */
    getOnlineChannels(adult, gaming, categories) {
        return new Promise((resolve, reject) => {
            const query = {};
            if (typeof adult !== 'undefined') {
                query["adult"] = adult;
            }
            if (typeof gaming !== 'undefined') {
                query["gaming"] = gaming;
            }
            if (typeof categories !== 'undefined') {
                query["categories"] = gaming;
            }
            const head = {};
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
    getChannelCategories() {
        return new Promise((resolve, reject) => {
            const head = {};
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
    getCurrentEvents() {
        return new Promise((resolve, reject) => {
            const head = {};
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
    getChannelInfoById(channelId) {
        return new Promise((resolve, reject) => {
            const head = {};
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
    getChannelInfoByName(channelName) {
        return new Promise((resolve, reject) => {
            const head = {};
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
    getUserInfo() {
        return new Promise((resolve, reject) => {
            if (!this._oauthToken) {
                reject(new Error("This endpoint requires authorization."));
                return;
            }
            const head = {};
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
    getUserStreamKey() {
        return new Promise((resolve, reject) => {
            if (!this._oauthToken) {
                reject(new Error("This endpoint requires authorization."));
                return;
            }
            const head = {};
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
    getUserChatKey(channel_id, bot) {
        return new Promise((resolve, reject) => {
            if (!this._oauthToken) {
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
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
            request({
                method: 'GET',
                headers: head,
                qs: {
                    channel_id: channel_id,
                    bot: bot
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
    getWebhooks(client_id, client_secret, channel_id) {
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
            if (typeof client_id !== 'undefined') {
                query["client_id"] = client_id;
            }
            if (typeof client_secret !== 'undefined') {
                query["client_secret"] = client_secret;
            }
            if (typeof channel_id !== 'undefined') {
                query["channel_id"] = channel_id;
            }
            const head = {};
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
    registerWebhook(type, uri) {
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
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
    deleteWebhook(webhook_id, client_id, client_secret) {
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
            if (typeof client_id !== 'undefined') {
                query["client_id"] = client_id;
            }
            if (typeof client_secret !== 'undefined') {
                query["client_secret"] = client_secret;
            }
            const head = {};
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
    getWebhookDetails(webhook_id, client_id, client_secret) {
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
            if (typeof client_id !== 'undefined') {
                query["client_id"] = client_id;
            }
            if (typeof client_secret !== 'undefined') {
                query["client_secret"] = client_secret;
            }
            const head = {};
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
    updateWebhookURI(webhook_id, uri, client_id, client_secret) {
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
            if (typeof uri !== 'undefined') {
                query["uri"] = uri;
            }
            if (typeof client_id !== 'undefined') {
                query["client_id"] = client_id;
            }
            if (typeof client_secret !== 'undefined') {
                query["client_secret"] = client_secret;
            }
            const head = {};
            if (this._oauthToken) {
                head["Authorization"] = `Bearer ${this._oauthToken}`;
            }
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
exports.PicartoAPI = PicartoAPI;
// tslint:disable-next-line:no-namespace
// tslint:disable-next-line:no-internal-module
var WebhookType;
(function (WebhookType) {
    WebhookType.online = "online";
    WebhookType.offline = "offline";
    WebhookType.follow = "follow";
    WebhookType.unfollow = "unfollow";
    WebhookType.subscribe = "subscribe";
    WebhookType.unsubscribe = "unsubscribe";
    WebhookType.event_start = "event_start";
    WebhookType.event_end = "event_end";
})(WebhookType = exports.WebhookType || (exports.WebhookType = {}));
