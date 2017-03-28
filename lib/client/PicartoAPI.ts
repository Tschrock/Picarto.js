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

import request = require('request');

function parseJSON<T>(json: string) {
    return new Promise<T>((resolve, reject) => {
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
export class PicartoAPI {

    protected cookieJar = request.jar();

    protected baseURL = "https://picarto.tv";
    protected apiURL = "https://api.picarto.tv";

    protected defaultReferer = "https://www.picarto.tv/";

    protected getUrl<T>(url: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
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

    protected postUrl<T>(url: string, data?: Object): Promise<T> {
        return new Promise<T>((resolve, reject) => {
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
    public clearSession() {
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
    public getChannelInfo(accessKey: string): Promise<ChannelInfo> {
        return this.getUrl(`${this.apiURL}/channel/${accessKey}`).then(parseJSON) as Promise<ChannelInfo>;
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
    public login(username: string, password: string, stayLoggedIn: boolean = true): Promise<LoginResponse> {
        return this.postUrl(`${this.baseURL}/process/login`, { username: username, password: password, staylogged: stayLoggedIn }).then(parseJSON)
            .then((result: LoginResponse) => new Promise((resolve, reject) => result.loginstatus ? resolve(result) : reject(new Error("Invalid Username or Password.")))) as Promise<LoginResponse>;
    }

    /**
     * [Unofficial] Logs out of Picarto. On success, resolves with the loneliest number.
     * @returns {Promise<number>} A promise. Resolves with [number]. Rejects with [Error].
     * @memberOf PicartoAPI
     */
    public logout(): Promise<number> {
        return this.postUrl(`${this.baseURL}/process/logout`).then(parseJSON) as Promise<number>;
    }

    /**
     * [Unstable] Gets init info for a channel's chat.
     * @param {string} channelName The name of the channel to get the chat for.
     * @returns {Promise<ChatInitInfo>} A promise. Resolves with [ChatInitInfo]. Rejects with [Error].
     * @memberOf PicartoAPI
     */
    public unsp_getChatInitInfo(channelName: string): Promise<ChatInitInfo> {
        return this.getUrl(`${this.baseURL}/chatpopout/${channelName}/public`).then((html: string) => {
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

const regex_ChatInit = /initChatVariables\((.*?)\)/;

export interface ChannelInfoLanguage {
    language_code: string;
    flag_url: string;
}

export interface ChannelInfo {
    id: number;
    channel: string;
    channel_title: string;
    avatar_url: string;
    offline_image: string;
    chat_banner: string;
    thumbnail_url: string;
    background_url: string;
    tags: Array<string>;
    language_primary: ChannelInfoLanguage;
    language_secondary: ChannelInfoLanguage;
    followers: number;
    channel_views: number;
    is_online: boolean;
    is_multistream: boolean;
    multistream_participants: Array<string>;
    current_viewers: number;
    is_nsfw: boolean;
    commissions_enabled: boolean;
    tablet: string;
    program: string;
    content_type: string;
    description: string;
    commission_info: string;
    channel_url: string;
    social_urls: Object;
}

export interface LoginResponse {
    loginstatus: boolean;
    accountStatus: number;
    stayloggedVal: string;
    staylogged: number;
}

export interface News {
    title: string;
    description: string;
}

export interface HomepageInfoVideo {
    channel_name: string;
    channel_title: string;
    featured: boolean;
    offline_image: boolean;
    product: number;
}

export interface HomepageInfoCommunity {
    community_id: number;
    community_name: string;
    file: string;
}

export interface HomepageInfoStream {
    channel_name: string;
    channel_title: string;
    community_id: number;
    community_name: string;
    product: number;
}

export interface HomepageInfo {
    videos: Array<HomepageInfoVideo>;
    communities: Array<HomepageInfoCommunity>;
    top_streams: Array<HomepageInfoStream>;
    random_streams: Array<HomepageInfoStream>;
}

export interface ExplorePageInfoLanguage {
    lang_id: number;
    language: string;
    flag: string;
    online_sfw: number;
    online_nsfw: number;
}

export interface ExplorePageInfoLanguage2 {
    language_id: number;
    language_code: string;
    flag: string;
}

export interface ExplorePageInfoChannel {
    id: number;
    channel_name: string;
    channel_title: string;
    channel_viewers: number;
    product: number;
    adult: boolean;
    cat_id: number;
    cat_name: string;
    language_primary: ExplorePageInfoLanguage2;
    language_secondary: ExplorePageInfoLanguage2;
    tags: string[];
    is_multistream: boolean;
    gamemode: boolean;
    commissions: boolean;
}

export interface ExplorePageInfoCommunity {
    id: number;
    name: string;
    viewers_sfw: number;
    viewers_nsfw: number;
    online_sfw: number;
    online_nsfw: number;
    file_name: string;
}

export interface ExplorePageInfo {
    languages: ExplorePageInfoLanguage[];
    channels: ExplorePageInfoChannel[];
    tags: string[];
    communities: ExplorePageInfoCommunity[];
}

export interface NsfwWarningStatus {
    nsfw_warnings: boolean;
}

export interface AvatarUpdateResult {
    state: number;
    message: string;
    result: string;
}

export interface ChatInitInfo {
    simple: boolean;
    linkDetection: boolean;
    emoticons: boolean;
    timestamps: boolean;
    soundNotifications: boolean;
    chatUsername: string;
    chatChannel: string;
    chatKey: string;
}
