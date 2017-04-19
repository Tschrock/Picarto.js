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
function parseJSON(json) {
    return new Promise((resolve, reject) => {
        resolve(JSON.parse(json));
    });
}
const HTTP_200_OK = 200;
const HTTP_302_REDIRECT = 302;
/**
 * The main Picarto API class. Each instance acts as a unique browser session.
 * @export
 * @class PicartoAPI
 */
class PicartoAPI {
    constructor() {
        this.cookieJar = request.jar();
        this.baseURL = "https://picarto.tv";
        this.apiURL = "https://api.picarto.tv";
        this.defaultReferer = "https://www.picarto.tv/";
    }
    getUrl(url) {
        return new Promise((resolve, reject) => {
            request({
                uri: url,
                jar: this.cookieJar,
                headers: { Referer: this.defaultReferer }
            }, function (error, response, body) {
                if (error) {
                    reject(error);
                    return;
                }
                if (!response || (response.statusCode !== HTTP_200_OK && response.statusCode !== HTTP_302_REDIRECT)) {
                    reject(new Error('Unexpected status code: ' + response.statusCode));
                    return;
                }
                resolve(body);
            });
        });
    }
    postUrl(url, data) {
        return new Promise((resolve, reject) => {
            request({
                uri: url,
                method: 'POST',
                form: data,
                jar: this.cookieJar,
                headers: { Referer: this.defaultReferer }
            }, function (error, response, body) {
                if (error) {
                    reject(error);
                    return;
                }
                if (!response || (response.statusCode !== HTTP_200_OK && response.statusCode !== HTTP_302_REDIRECT)) {
                    reject(new Error('Unexpected status code: ' + response.statusCode));
                    return;
                }
                resolve(body);
            });
        });
    }
    /**
     * Clears the current session, deleting any saved cookies.
     * @memberOf PicartoAPI
     */
    clearSession() {
        this.cookieJar = request.jar();
    }
    /**
     * Official API
     * This is the Official API provided to streamers.
     */
    /**
     * [Official] Gets detailed info about a channel.
     * See {@link https://picarto.tv/settings/api}.
     * @param {string} accessKey The access key (It's a guid) for the channel
     * @returns {Promise<ChannelInfo>} A promise. Resolves with [ChannelInfo]. Rejects with [Error].
     * @memberOf PicartoAPI
     */
    getChannelInfo(accessKey) {
        return this.getUrl(`${this.apiURL}/channel/${accessKey}`).then(parseJSON);
    }
    /**
     * Unofficial API
     * This is the Unofficial API collected through watching client network communication and exploring client source code.
     * It may break or change at any time and is provided as-is with no guarantees. Please be sure to read through and comply with Picarto's TOS: https://picarto.tv/site/terms
     */
    /**
     * [Unofficial] Logs into Picarto with the specified credentials. The current PicartoAPI object will stay logged in until the session expires, the object is destroyed, or `logout()` is successfully resolved.
     * @param {string} username The username for the Picarto account
     * @param {string} password The password for the Picarto account
     * @param {boolean} stayLoggedIn Whether or not to "Stay logged in"
     * @returns {Promise<LoginResponse>} A promise. Resolves with [LoginResponse]. Rejects with [Error].
     * @memberOf PicartoAPI
     */
    login(username, password, stayLoggedIn = true) {
        return this.postUrl(`${this.baseURL}/process/login`, { username: username, password: password, staylogged: stayLoggedIn }).then(parseJSON)
            .then((result) => new Promise((resolve, reject) => result.loginstatus ? resolve(result) : reject(new Error("Invalid Username or Password."))));
    }
    /**
     * [Unofficial] Logs out of Picarto. On success, resolves with the loneliest number.
     * @returns {Promise<number>} A promise. Resolves with [number]. Rejects with [Error].
     * @memberOf PicartoAPI
     */
    logout() {
        return this.postUrl(`${this.baseURL}/process/logout`).then(parseJSON);
    }
    /**
     * [Unstable] Gets init info for a channel's chat.
     * @param {string} channelName The name of the channel to get the chat for.
     * @returns {Promise<ChatInitInfo>} A promise. Resolves with [ChatInitInfo]. Rejects with [Error].
     * @memberOf PicartoAPI
     */
    unsp_getChatInitInfo(channelName) {
        return this.getUrl(`${this.baseURL}/chatpopout/${channelName}/public`).then((html) => {
            let info = regex_ChatInit.exec(html)[1].split(',').map(p => p.replace(/'/g, "").trim());
            return {
                simple: +info.shift() === 1,
                linkDetection: +info.shift() === 1,
                emoticons: +info.shift() === 1,
                timestamps: +info.shift() === 1,
                soundNotifications: +info.shift() === 1,
                chatUsername: info.shift(),
                chatChannel: info.shift(),
                chatKey: info.shift()
            };
        });
    }
}
exports.PicartoAPI = PicartoAPI;
const regex_ChatInit = /initChatVariables\((.*?)\)/;
