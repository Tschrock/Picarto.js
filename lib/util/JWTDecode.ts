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

/**
 * Decodes a base64url string into a normal string
 * @export
 * @param {string} input The base64url string
 * @returns {string} The normal (utf8) string
 */
export function base64urlDecode(input: string): string {
    return Buffer.from(input.replace("-", "+").replace("_", "/"), "base64").toString();
}

/**
 * Decodes a base64url encoded JSON string to an object
 * @template T The type to return
 * @param {string} input The base64url string
 * @returns {T} The decoded object
 */
function decodePart<T>(input: string): T {
    return JSON.parse(base64urlDecode(input)) as T;
}

/**
 * The header of a JWT.
 * @interface ITokenHeader
 */
export interface ITokenHeader {
    typ: string;
    alg: string;
}

/**
 * The chat data from a JWT.
 * @interface ITokenPayload_ChatData
 */
export interface ITokenChatData {
    UserID: number;
    DisplayName: string;
    ChannelID: number;
    Color: string;
    Registered: boolean;
    MembershipStatus: number;
    Subscriber: boolean;
    Follower: boolean;
    Streamer: boolean;
    PTVAdmin: boolean;
    Whisper: boolean;
    Customs: boolean[];
    SCustoms: boolean[];
}

/**
 * The chat data from a JWT.
 * @interface ITokenPayload
 */
export interface ITokenPayload {
    exp: number;
    v: number;
    d: ITokenChatData;
    iat: number;
}

/**
 * Decodes a Picarto JWT token, checks the exp/iat timestamp, and returns the parsed payload. Does not verify the signature!
 * @export
 * @param {string} jwtString The chat JWT
 * @returns {ITokenChatData} A Promise for the decoded Chat Data.
 */
export function decodeChatData(jwtString: string): ITokenChatData {

    const peices = jwtString.split(".");

    if (!peices[0] || !peices[1]) {
        throw new Error("Invalid token");
    }

    const header = decodePart<ITokenHeader>(peices[0]);

    if (header.typ !== "JWT") {
        throw new Error("Invalid token type");
    }

    const payload = decodePart<ITokenPayload>(peices[1]);
    const now = Date.now();

    if (payload.iat > now) {
        throw new Error("Invalid token: Token was created in the future.");
    }

    if (payload.exp < now) {
        throw new Error("Invalid token: Token has expired.");
    }

    return payload.d;
}
