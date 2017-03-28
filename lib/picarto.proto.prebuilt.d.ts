import * as $protobuf from "protobufjs";

/**
 * Constructs a new NewMessage.
 * @exports NewMessage
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class NewMessage {

    /**
     * Constructs a new NewMessage.
     * @exports NewMessage
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * NewMessage message.
     * @type {string|undefined}
     */
    message?: string;

    /**
     * Creates a new NewMessage instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {NewMessage} NewMessage instance
     */
    static create(properties?: Object): NewMessage;

    /**
     * Encodes the specified NewMessage message.
     * @param {NewMessage|Object} message NewMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (NewMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NewMessage message, length delimited.
     * @param {NewMessage|Object} message NewMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (NewMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NewMessage message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NewMessage} NewMessage
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewMessage;

    /**
     * Decodes a NewMessage message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NewMessage} NewMessage
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewMessage;

    /**
     * Verifies a NewMessage message.
     * @param {NewMessage|Object} message NewMessage message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (NewMessage|Object)): string;

    /**
     * Creates a NewMessage message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {NewMessage} NewMessage
     */
    static fromObject(object: { [k: string]: any }): NewMessage;

    /**
     * Creates a NewMessage message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link NewMessage.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {NewMessage} NewMessage
     */
    static from(object: { [k: string]: any }): NewMessage;

    /**
     * Creates a plain object from a NewMessage message. Also converts values to other types if specified.
     * @param {NewMessage} message NewMessage
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: NewMessage, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this NewMessage message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this NewMessage to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new UserList.
 * @exports UserList
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class UserList {

    /**
     * Constructs a new UserList.
     * @exports UserList
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * UserList user.
     * @type {Array.<UserList.User>|undefined}
     */
    user?: UserList.User[];

    /**
     * Creates a new UserList instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {UserList} UserList instance
     */
    static create(properties?: Object): UserList;

    /**
     * Encodes the specified UserList message.
     * @param {UserList|Object} message UserList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (UserList|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserList message, length delimited.
     * @param {UserList|Object} message UserList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (UserList|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserList message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserList} UserList
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserList;

    /**
     * Decodes a UserList message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserList} UserList
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserList;

    /**
     * Verifies a UserList message.
     * @param {UserList|Object} message UserList message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (UserList|Object)): string;

    /**
     * Creates a UserList message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {UserList} UserList
     */
    static fromObject(object: { [k: string]: any }): UserList;

    /**
     * Creates a UserList message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link UserList.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {UserList} UserList
     */
    static from(object: { [k: string]: any }): UserList;

    /**
     * Creates a plain object from a UserList message. Also converts values to other types if specified.
     * @param {UserList} message UserList
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: UserList, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this UserList message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this UserList to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

export namespace UserList {

    /**
     * Constructs a new User.
     * @exports UserList.User
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class User {

        /**
         * Constructs a new User.
         * @exports UserList.User
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * User userId.
         * @type {number|undefined}
         */
        userId?: number;

        /**
         * User displayName.
         * @type {string|undefined}
         */
        displayName?: string;

        /**
         * User userData.
         * @type {UserList.User.UserData|undefined}
         */
        userData?: UserList.User.UserData;

        /**
         * User banData.
         * @type {UserList.User.BanData|undefined}
         */
        banData?: UserList.User.BanData;

        /**
         * User userState.
         * @name UserList.User#userState
         * @type {string|undefined}
         */
        userState?: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {UserList.User} User instance
         */
        static create(properties?: Object): UserList.User;

        /**
         * Encodes the specified User message.
         * @param {UserList.User|Object} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (UserList.User|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited.
         * @param {UserList.User|Object} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (UserList.User|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UserList.User} User
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserList.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UserList.User} User
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserList.User;

        /**
         * Verifies a User message.
         * @param {UserList.User|Object} message User message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (UserList.User|Object)): string;

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {UserList.User} User
         */
        static fromObject(object: { [k: string]: any }): UserList.User;

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link UserList.User.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {UserList.User} User
         */
        static from(object: { [k: string]: any }): UserList.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param {UserList.User} message User
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: UserList.User, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this User message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    namespace User {

        /**
         * Constructs a new UserData.
         * @exports UserList.User.UserData
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        class UserData {

            /**
             * Constructs a new UserData.
             * @exports UserList.User.UserData
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            constructor(properties?: Object);

            /**
             * UserData registered.
             * @type {boolean|undefined}
             */
            registered?: boolean;

            /**
             * UserData moderator.
             * @type {boolean|undefined}
             */
            moderator?: boolean;

            /**
             * UserData streamer.
             * @type {boolean|undefined}
             */
            streamer?: boolean;

            /**
             * UserData ptvAdmin.
             * @type {boolean|undefined}
             */
            ptvAdmin?: boolean;

            /**
             * UserData basic.
             * @type {boolean|undefined}
             */
            basic?: boolean;

            /**
             * UserData premium.
             * @type {boolean|undefined}
             */
            premium?: boolean;

            /**
             * UserData subscriber.
             * @type {boolean|undefined}
             */
            subscriber?: boolean;

            /**
             * UserData color.
             * @type {string|undefined}
             */
            color?: string;

            /**
             * UserData ignoring.
             * @type {boolean|undefined}
             */
            ignoring?: boolean;

            /**
             * Creates a new UserData instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {UserList.User.UserData} UserData instance
             */
            static create(properties?: Object): UserList.User.UserData;

            /**
             * Encodes the specified UserData message.
             * @param {UserList.User.UserData|Object} message UserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encode(message: (UserList.User.UserData|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserData message, length delimited.
             * @param {UserList.User.UserData|Object} message UserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encodeDelimited(message: (UserList.User.UserData|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserData message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {UserList.User.UserData} UserData
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserList.User.UserData;

            /**
             * Decodes a UserData message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {UserList.User.UserData} UserData
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserList.User.UserData;

            /**
             * Verifies a UserData message.
             * @param {UserList.User.UserData|Object} message UserData message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            static verify(message: (UserList.User.UserData|Object)): string;

            /**
             * Creates a UserData message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {UserList.User.UserData} UserData
             */
            static fromObject(object: { [k: string]: any }): UserList.User.UserData;

            /**
             * Creates a UserData message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link UserList.User.UserData.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {UserList.User.UserData} UserData
             */
            static from(object: { [k: string]: any }): UserList.User.UserData;

            /**
             * Creates a plain object from a UserData message. Also converts values to other types if specified.
             * @param {UserList.User.UserData} message UserData
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            static toObject(message: UserList.User.UserData, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this UserData message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this UserData to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            toJSON(): { [k: string]: any };
        }

        /**
         * Constructs a new BanData.
         * @exports UserList.User.BanData
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        class BanData {

            /**
             * Constructs a new BanData.
             * @exports UserList.User.BanData
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            constructor(properties?: Object);

            /**
             * BanData isShadowBan.
             * @type {boolean|undefined}
             */
            isShadowBan?: boolean;

            /**
             * Creates a new BanData instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {UserList.User.BanData} BanData instance
             */
            static create(properties?: Object): UserList.User.BanData;

            /**
             * Encodes the specified BanData message.
             * @param {UserList.User.BanData|Object} message BanData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encode(message: (UserList.User.BanData|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BanData message, length delimited.
             * @param {UserList.User.BanData|Object} message BanData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            static encodeDelimited(message: (UserList.User.BanData|Object), writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BanData message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {UserList.User.BanData} BanData
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserList.User.BanData;

            /**
             * Decodes a BanData message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {UserList.User.BanData} BanData
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserList.User.BanData;

            /**
             * Verifies a BanData message.
             * @param {UserList.User.BanData|Object} message BanData message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            static verify(message: (UserList.User.BanData|Object)): string;

            /**
             * Creates a BanData message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {UserList.User.BanData} BanData
             */
            static fromObject(object: { [k: string]: any }): UserList.User.BanData;

            /**
             * Creates a BanData message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link UserList.User.BanData.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {UserList.User.BanData} BanData
             */
            static from(object: { [k: string]: any }): UserList.User.BanData;

            /**
             * Creates a plain object from a BanData message. Also converts values to other types if specified.
             * @param {UserList.User.BanData} message BanData
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            static toObject(message: UserList.User.BanData, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this BanData message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this BanData to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            toJSON(): { [k: string]: any };
        }
    }
}

/**
 * Constructs a new ChatMessage.
 * @exports ChatMessage
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class ChatMessage {

    /**
     * Constructs a new ChatMessage.
     * @exports ChatMessage
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * ChatMessage id.
     * @type {number|undefined}
     */
    id?: number;

    /**
     * ChatMessage userId.
     * @type {number|undefined}
     */
    userId?: number;

    /**
     * ChatMessage displayName.
     * @type {string|undefined}
     */
    displayName?: string;

    /**
     * ChatMessage message.
     * @type {string|undefined}
     */
    message?: string;

    /**
     * ChatMessage registered.
     * @type {boolean|undefined}
     */
    registered?: boolean;

    /**
     * ChatMessage moderator.
     * @type {boolean|undefined}
     */
    moderator?: boolean;

    /**
     * ChatMessage streamer.
     * @type {boolean|undefined}
     */
    streamer?: boolean;

    /**
     * ChatMessage ptvAdmin.
     * @type {boolean|undefined}
     */
    ptvAdmin?: boolean;

    /**
     * ChatMessage basic.
     * @type {boolean|undefined}
     */
    basic?: boolean;

    /**
     * ChatMessage premium.
     * @type {boolean|undefined}
     */
    premium?: boolean;

    /**
     * ChatMessage subscriber.
     * @type {boolean|undefined}
     */
    subscriber?: boolean;

    /**
     * ChatMessage color.
     * @type {string|undefined}
     */
    color?: string;

    /**
     * ChatMessage timeStamp.
     * @type {number|$protobuf.Long|undefined}
     */
    timeStamp?: (number|$protobuf.Long);

    /**
     * ChatMessage isMeMessage.
     * @type {boolean|undefined}
     */
    isMeMessage?: boolean;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {ChatMessage} ChatMessage instance
     */
    static create(properties?: Object): ChatMessage;

    /**
     * Encodes the specified ChatMessage message.
     * @param {ChatMessage|Object} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (ChatMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessage message, length delimited.
     * @param {ChatMessage|Object} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (ChatMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatMessage} ChatMessage
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatMessage} ChatMessage
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage;

    /**
     * Verifies a ChatMessage message.
     * @param {ChatMessage|Object} message ChatMessage message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (ChatMessage|Object)): string;

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatMessage} ChatMessage
     */
    static fromObject(object: { [k: string]: any }): ChatMessage;

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link ChatMessage.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatMessage} ChatMessage
     */
    static from(object: { [k: string]: any }): ChatMessage;

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @param {ChatMessage} message ChatMessage
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: ChatMessage, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this ChatMessage message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatMessage to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new GlobalMessage.
 * @exports GlobalMessage
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class GlobalMessage {

    /**
     * Constructs a new GlobalMessage.
     * @exports GlobalMessage
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * GlobalMessage message.
     * @type {string|undefined}
     */
    message?: string;

    /**
     * Creates a new GlobalMessage instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {GlobalMessage} GlobalMessage instance
     */
    static create(properties?: Object): GlobalMessage;

    /**
     * Encodes the specified GlobalMessage message.
     * @param {GlobalMessage|Object} message GlobalMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (GlobalMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GlobalMessage message, length delimited.
     * @param {GlobalMessage|Object} message GlobalMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (GlobalMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GlobalMessage message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GlobalMessage} GlobalMessage
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GlobalMessage;

    /**
     * Decodes a GlobalMessage message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GlobalMessage} GlobalMessage
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GlobalMessage;

    /**
     * Verifies a GlobalMessage message.
     * @param {GlobalMessage|Object} message GlobalMessage message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (GlobalMessage|Object)): string;

    /**
     * Creates a GlobalMessage message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {GlobalMessage} GlobalMessage
     */
    static fromObject(object: { [k: string]: any }): GlobalMessage;

    /**
     * Creates a GlobalMessage message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link GlobalMessage.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {GlobalMessage} GlobalMessage
     */
    static from(object: { [k: string]: any }): GlobalMessage;

    /**
     * Creates a plain object from a GlobalMessage message. Also converts values to other types if specified.
     * @param {GlobalMessage} message GlobalMessage
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: GlobalMessage, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this GlobalMessage message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this GlobalMessage to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new Whisper.
 * @exports Whisper
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class Whisper {

    /**
     * Constructs a new Whisper.
     * @exports Whisper
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * Whisper id.
     * @type {number|undefined}
     */
    id?: number;

    /**
     * Whisper userId.
     * @type {number|undefined}
     */
    userId?: number;

    /**
     * Whisper displayName.
     * @type {string|undefined}
     */
    displayName?: string;

    /**
     * Whisper message.
     * @type {string|undefined}
     */
    message?: string;

    /**
     * Whisper incomming.
     * @type {boolean|undefined}
     */
    incomming?: boolean;

    /**
     * Whisper timeStamp.
     * @type {number|$protobuf.Long|undefined}
     */
    timeStamp?: (number|$protobuf.Long);

    /**
     * Creates a new Whisper instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {Whisper} Whisper instance
     */
    static create(properties?: Object): Whisper;

    /**
     * Encodes the specified Whisper message.
     * @param {Whisper|Object} message Whisper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (Whisper|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Whisper message, length delimited.
     * @param {Whisper|Object} message Whisper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (Whisper|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Whisper message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Whisper} Whisper
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Whisper;

    /**
     * Decodes a Whisper message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Whisper} Whisper
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Whisper;

    /**
     * Verifies a Whisper message.
     * @param {Whisper|Object} message Whisper message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (Whisper|Object)): string;

    /**
     * Creates a Whisper message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {Whisper} Whisper
     */
    static fromObject(object: { [k: string]: any }): Whisper;

    /**
     * Creates a Whisper message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Whisper.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Whisper} Whisper
     */
    static from(object: { [k: string]: any }): Whisper;

    /**
     * Creates a plain object from a Whisper message. Also converts values to other types if specified.
     * @param {Whisper} message Whisper
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: Whisper, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this Whisper message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this Whisper to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new ServerMessage.
 * @exports ServerMessage
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class ServerMessage {

    /**
     * Constructs a new ServerMessage.
     * @exports ServerMessage
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * ServerMessage message.
     * @type {string|undefined}
     */
    message?: string;

    /**
     * Creates a new ServerMessage instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {ServerMessage} ServerMessage instance
     */
    static create(properties?: Object): ServerMessage;

    /**
     * Encodes the specified ServerMessage message.
     * @param {ServerMessage|Object} message ServerMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (ServerMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerMessage message, length delimited.
     * @param {ServerMessage|Object} message ServerMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (ServerMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerMessage message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerMessage} ServerMessage
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerMessage;

    /**
     * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerMessage} ServerMessage
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerMessage;

    /**
     * Verifies a ServerMessage message.
     * @param {ServerMessage|Object} message ServerMessage message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (ServerMessage|Object)): string;

    /**
     * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerMessage} ServerMessage
     */
    static fromObject(object: { [k: string]: any }): ServerMessage;

    /**
     * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link ServerMessage.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerMessage} ServerMessage
     */
    static from(object: { [k: string]: any }): ServerMessage;

    /**
     * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
     * @param {ServerMessage} message ServerMessage
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: ServerMessage, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this ServerMessage message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerMessage to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new CommandHelp.
 * @exports CommandHelp
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class CommandHelp {

    /**
     * Constructs a new CommandHelp.
     * @exports CommandHelp
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * CommandHelp commands.
     * @type {Array.<CommandHelp.Command>|undefined}
     */
    commands?: CommandHelp.Command[];

    /**
     * Creates a new CommandHelp instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {CommandHelp} CommandHelp instance
     */
    static create(properties?: Object): CommandHelp;

    /**
     * Encodes the specified CommandHelp message.
     * @param {CommandHelp|Object} message CommandHelp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (CommandHelp|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommandHelp message, length delimited.
     * @param {CommandHelp|Object} message CommandHelp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (CommandHelp|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommandHelp message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommandHelp} CommandHelp
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommandHelp;

    /**
     * Decodes a CommandHelp message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommandHelp} CommandHelp
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommandHelp;

    /**
     * Verifies a CommandHelp message.
     * @param {CommandHelp|Object} message CommandHelp message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (CommandHelp|Object)): string;

    /**
     * Creates a CommandHelp message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {CommandHelp} CommandHelp
     */
    static fromObject(object: { [k: string]: any }): CommandHelp;

    /**
     * Creates a CommandHelp message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link CommandHelp.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {CommandHelp} CommandHelp
     */
    static from(object: { [k: string]: any }): CommandHelp;

    /**
     * Creates a plain object from a CommandHelp message. Also converts values to other types if specified.
     * @param {CommandHelp} message CommandHelp
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: CommandHelp, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this CommandHelp message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this CommandHelp to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

export namespace CommandHelp {

    /**
     * Constructs a new Command.
     * @exports CommandHelp.Command
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Command {

        /**
         * Constructs a new Command.
         * @exports CommandHelp.Command
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Command triggers.
         * @type {Array.<string>|undefined}
         */
        triggers?: string[];

        /**
         * Command description.
         * @type {string|undefined}
         */
        description?: string;

        /**
         * Creates a new Command instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {CommandHelp.Command} Command instance
         */
        static create(properties?: Object): CommandHelp.Command;

        /**
         * Encodes the specified Command message.
         * @param {CommandHelp.Command|Object} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (CommandHelp.Command|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Command message, length delimited.
         * @param {CommandHelp.Command|Object} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (CommandHelp.Command|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommandHelp.Command} Command
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommandHelp.Command;

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommandHelp.Command} Command
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommandHelp.Command;

        /**
         * Verifies a Command message.
         * @param {CommandHelp.Command|Object} message Command message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (CommandHelp.Command|Object)): string;

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {CommandHelp.Command} Command
         */
        static fromObject(object: { [k: string]: any }): CommandHelp.Command;

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link CommandHelp.Command.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {CommandHelp.Command} Command
         */
        static from(object: { [k: string]: any }): CommandHelp.Command;

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param {CommandHelp.Command} message Command
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: CommandHelp.Command, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Command message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Command to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }
}

/**
 * Constructs a new Control.
 * @exports Control
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class Control {

    /**
     * Constructs a new Control.
     * @exports Control
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * Control messageType.
     * @type {number|undefined}
     */
    messageType?: number;

    /**
     * Control dataBool.
     * @type {boolean|undefined}
     */
    dataBool?: boolean;

    /**
     * Creates a new Control instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {Control} Control instance
     */
    static create(properties?: Object): Control;

    /**
     * Encodes the specified Control message.
     * @param {Control|Object} message Control message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (Control|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Control message, length delimited.
     * @param {Control|Object} message Control message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (Control|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Control message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Control} Control
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Control;

    /**
     * Decodes a Control message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Control} Control
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Control;

    /**
     * Verifies a Control message.
     * @param {Control|Object} message Control message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (Control|Object)): string;

    /**
     * Creates a Control message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {Control} Control
     */
    static fromObject(object: { [k: string]: any }): Control;

    /**
     * Creates a Control message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Control.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Control} Control
     */
    static from(object: { [k: string]: any }): Control;

    /**
     * Creates a plain object from a Control message. Also converts values to other types if specified.
     * @param {Control} message Control
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: Control, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this Control message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this Control to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

export namespace Control {

    /**
     * MessageType enum.
     * @name MessageType
     * @memberof Control
     * @enum {number}
     * @property {number} END_HISTORY=0 END_HISTORY value
     * @property {number} KICK=1 KICK value
     * @property {number} GAMING=2 GAMING value
     * @property {number} ADULT=3 ADULT value
     * @property {number} COMMISSIONS=4 COMMISSIONS value
     * @property {number} COMMISSION_DESCRIPTION=5 COMMISSION_DESCRIPTION value
     * @property {number} DESCRIPTION=6 DESCRIPTION value
     * @property {number} CONTENT_TYPE=7 CONTENT_TYPE value
     * @property {number} CAN_TALK=8 CAN_TALK value
     * @property {number} SHOW_POLL_CREATOR=9 SHOW_POLL_CREATOR value
     * @property {number} SHOW_RAFFLE_CREATOR=10 SHOW_RAFFLE_CREATOR value
     * @property {number} NAME_TAKEN=11 NAME_TAKEN value
     * @property {number} HIDE_POLL=12 HIDE_POLL value
     */
    enum MessageType {
        END_HISTORY = 0,
        KICK = 1,
        GAMING = 2,
        ADULT = 3,
        COMMISSIONS = 4,
        COMMISSION_DESCRIPTION = 5,
        DESCRIPTION = 6,
        CONTENT_TYPE = 7,
        CAN_TALK = 8,
        SHOW_POLL_CREATOR = 9,
        SHOW_RAFFLE_CREATOR = 10,
        NAME_TAKEN = 11,
        HIDE_POLL = 12
    }
}

/**
 * Constructs a new AdminControl.
 * @exports AdminControl
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class AdminControl {

    /**
     * Constructs a new AdminControl.
     * @exports AdminControl
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * AdminControl messageType.
     * @type {number|undefined}
     */
    messageType?: number;

    /**
     * Creates a new AdminControl instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {AdminControl} AdminControl instance
     */
    static create(properties?: Object): AdminControl;

    /**
     * Encodes the specified AdminControl message.
     * @param {AdminControl|Object} message AdminControl message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (AdminControl|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AdminControl message, length delimited.
     * @param {AdminControl|Object} message AdminControl message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (AdminControl|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AdminControl message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AdminControl} AdminControl
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AdminControl;

    /**
     * Decodes an AdminControl message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AdminControl} AdminControl
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AdminControl;

    /**
     * Verifies an AdminControl message.
     * @param {AdminControl|Object} message AdminControl message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (AdminControl|Object)): string;

    /**
     * Creates an AdminControl message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {AdminControl} AdminControl
     */
    static fromObject(object: { [k: string]: any }): AdminControl;

    /**
     * Creates an AdminControl message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link AdminControl.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {AdminControl} AdminControl
     */
    static from(object: { [k: string]: any }): AdminControl;

    /**
     * Creates a plain object from an AdminControl message. Also converts values to other types if specified.
     * @param {AdminControl} message AdminControl
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: AdminControl, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this AdminControl message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this AdminControl to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

export namespace AdminControl {

    /**
     * MessageType enum.
     * @name MessageType
     * @memberof AdminControl
     * @enum {number}
     * @property {number} ADULT=0 ADULT value
     * @property {number} GAMING=1 GAMING value
     * @property {number} MOVIE=2 MOVIE value
     */
    enum MessageType {
        ADULT = 0,
        GAMING = 1,
        MOVIE = 2
    }
}

/**
 * Constructs a new OnlineState.
 * @exports OnlineState
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class OnlineState {

    /**
     * Constructs a new OnlineState.
     * @exports OnlineState
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * OnlineState isLive.
     * @type {boolean|undefined}
     */
    isLive?: boolean;

    /**
     * OnlineState viewers.
     * @type {number|undefined}
     */
    viewers?: number;

    /**
     * OnlineState channel.
     * @type {number|undefined}
     */
    channel?: number;

    /**
     * OnlineState channelName.
     * @type {string|undefined}
     */
    channelName?: string;

    /**
     * Creates a new OnlineState instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {OnlineState} OnlineState instance
     */
    static create(properties?: Object): OnlineState;

    /**
     * Encodes the specified OnlineState message.
     * @param {OnlineState|Object} message OnlineState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (OnlineState|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OnlineState message, length delimited.
     * @param {OnlineState|Object} message OnlineState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (OnlineState|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OnlineState message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OnlineState} OnlineState
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlineState;

    /**
     * Decodes an OnlineState message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OnlineState} OnlineState
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlineState;

    /**
     * Verifies an OnlineState message.
     * @param {OnlineState|Object} message OnlineState message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (OnlineState|Object)): string;

    /**
     * Creates an OnlineState message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {OnlineState} OnlineState
     */
    static fromObject(object: { [k: string]: any }): OnlineState;

    /**
     * Creates an OnlineState message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link OnlineState.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {OnlineState} OnlineState
     */
    static from(object: { [k: string]: any }): OnlineState;

    /**
     * Creates a plain object from an OnlineState message. Also converts values to other types if specified.
     * @param {OnlineState} message OnlineState
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: OnlineState, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this OnlineState message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this OnlineState to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new Multistream.
 * @exports Multistream
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class Multistream {

    /**
     * Constructs a new Multistream.
     * @exports Multistream
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * Multistream host.
     * @type {Multistream.Channel|undefined}
     */
    host?: Multistream.Channel;

    /**
     * Multistream guests.
     * @type {Array.<Multistream.Channel>|undefined}
     */
    guests?: Multistream.Channel[];

    /**
     * Creates a new Multistream instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {Multistream} Multistream instance
     */
    static create(properties?: Object): Multistream;

    /**
     * Encodes the specified Multistream message.
     * @param {Multistream|Object} message Multistream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (Multistream|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Multistream message, length delimited.
     * @param {Multistream|Object} message Multistream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (Multistream|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Multistream message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Multistream} Multistream
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Multistream;

    /**
     * Decodes a Multistream message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Multistream} Multistream
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Multistream;

    /**
     * Verifies a Multistream message.
     * @param {Multistream|Object} message Multistream message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (Multistream|Object)): string;

    /**
     * Creates a Multistream message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {Multistream} Multistream
     */
    static fromObject(object: { [k: string]: any }): Multistream;

    /**
     * Creates a Multistream message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Multistream.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Multistream} Multistream
     */
    static from(object: { [k: string]: any }): Multistream;

    /**
     * Creates a plain object from a Multistream message. Also converts values to other types if specified.
     * @param {Multistream} message Multistream
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: Multistream, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this Multistream message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this Multistream to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

export namespace Multistream {

    /**
     * Constructs a new Channel.
     * @exports Multistream.Channel
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Channel {

        /**
         * Constructs a new Channel.
         * @exports Multistream.Channel
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Channel channel.
         * @type {number|undefined}
         */
        channel?: number;

        /**
         * Channel channelName.
         * @type {string|undefined}
         */
        channelName?: string;

        /**
         * Creates a new Channel instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {Multistream.Channel} Channel instance
         */
        static create(properties?: Object): Multistream.Channel;

        /**
         * Encodes the specified Channel message.
         * @param {Multistream.Channel|Object} message Channel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (Multistream.Channel|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Channel message, length delimited.
         * @param {Multistream.Channel|Object} message Channel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (Multistream.Channel|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Channel message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Multistream.Channel} Channel
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Multistream.Channel;

        /**
         * Decodes a Channel message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Multistream.Channel} Channel
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Multistream.Channel;

        /**
         * Verifies a Channel message.
         * @param {Multistream.Channel|Object} message Channel message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (Multistream.Channel|Object)): string;

        /**
         * Creates a Channel message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {Multistream.Channel} Channel
         */
        static fromObject(object: { [k: string]: any }): Multistream.Channel;

        /**
         * Creates a Channel message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link Multistream.Channel.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {Multistream.Channel} Channel
         */
        static from(object: { [k: string]: any }): Multistream.Channel;

        /**
         * Creates a plain object from a Channel message. Also converts values to other types if specified.
         * @param {Multistream.Channel} message Channel
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: Multistream.Channel, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Channel message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Channel to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }
}

/**
 * Constructs a new Color.
 * @exports Color
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class Color {

    /**
     * Constructs a new Color.
     * @exports Color
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * Color color.
     * @type {string|undefined}
     */
    color?: string;

    /**
     * Creates a new Color instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {Color} Color instance
     */
    static create(properties?: Object): Color;

    /**
     * Encodes the specified Color message.
     * @param {Color|Object} message Color message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (Color|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Color message, length delimited.
     * @param {Color|Object} message Color message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (Color|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Color message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Color} Color
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Color;

    /**
     * Decodes a Color message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Color} Color
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Color;

    /**
     * Verifies a Color message.
     * @param {Color|Object} message Color message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (Color|Object)): string;

    /**
     * Creates a Color message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {Color} Color
     */
    static fromObject(object: { [k: string]: any }): Color;

    /**
     * Creates a Color message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Color.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Color} Color
     */
    static from(object: { [k: string]: any }): Color;

    /**
     * Creates a plain object from a Color message. Also converts values to other types if specified.
     * @param {Color} message Color
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: Color, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this Color message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this Color to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new IgnoresUpdated.
 * @exports IgnoresUpdated
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class IgnoresUpdated {

    /**
     * Constructs a new IgnoresUpdated.
     * @exports IgnoresUpdated
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * IgnoresUpdated ignores.
     * @type {Array.<string>|undefined}
     */
    ignores?: string[];

    /**
     * Creates a new IgnoresUpdated instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {IgnoresUpdated} IgnoresUpdated instance
     */
    static create(properties?: Object): IgnoresUpdated;

    /**
     * Encodes the specified IgnoresUpdated message.
     * @param {IgnoresUpdated|Object} message IgnoresUpdated message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (IgnoresUpdated|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified IgnoresUpdated message, length delimited.
     * @param {IgnoresUpdated|Object} message IgnoresUpdated message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (IgnoresUpdated|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IgnoresUpdated message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {IgnoresUpdated} IgnoresUpdated
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IgnoresUpdated;

    /**
     * Decodes an IgnoresUpdated message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {IgnoresUpdated} IgnoresUpdated
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IgnoresUpdated;

    /**
     * Verifies an IgnoresUpdated message.
     * @param {IgnoresUpdated|Object} message IgnoresUpdated message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (IgnoresUpdated|Object)): string;

    /**
     * Creates an IgnoresUpdated message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {IgnoresUpdated} IgnoresUpdated
     */
    static fromObject(object: { [k: string]: any }): IgnoresUpdated;

    /**
     * Creates an IgnoresUpdated message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link IgnoresUpdated.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {IgnoresUpdated} IgnoresUpdated
     */
    static from(object: { [k: string]: any }): IgnoresUpdated;

    /**
     * Creates a plain object from an IgnoresUpdated message. Also converts values to other types if specified.
     * @param {IgnoresUpdated} message IgnoresUpdated
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: IgnoresUpdated, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this IgnoresUpdated message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this IgnoresUpdated to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new ModifyIgnores.
 * @exports ModifyIgnores
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class ModifyIgnores {

    /**
     * Constructs a new ModifyIgnores.
     * @exports ModifyIgnores
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * ModifyIgnores ignoreName.
     * @type {string|undefined}
     */
    ignoreName?: string;

    /**
     * ModifyIgnores isAdding.
     * @type {boolean|undefined}
     */
    isAdding?: boolean;

    /**
     * Creates a new ModifyIgnores instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {ModifyIgnores} ModifyIgnores instance
     */
    static create(properties?: Object): ModifyIgnores;

    /**
     * Encodes the specified ModifyIgnores message.
     * @param {ModifyIgnores|Object} message ModifyIgnores message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (ModifyIgnores|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ModifyIgnores message, length delimited.
     * @param {ModifyIgnores|Object} message ModifyIgnores message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (ModifyIgnores|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModifyIgnores message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModifyIgnores} ModifyIgnores
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModifyIgnores;

    /**
     * Decodes a ModifyIgnores message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModifyIgnores} ModifyIgnores
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModifyIgnores;

    /**
     * Verifies a ModifyIgnores message.
     * @param {ModifyIgnores|Object} message ModifyIgnores message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (ModifyIgnores|Object)): string;

    /**
     * Creates a ModifyIgnores message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {ModifyIgnores} ModifyIgnores
     */
    static fromObject(object: { [k: string]: any }): ModifyIgnores;

    /**
     * Creates a ModifyIgnores message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link ModifyIgnores.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {ModifyIgnores} ModifyIgnores
     */
    static from(object: { [k: string]: any }): ModifyIgnores;

    /**
     * Creates a plain object from a ModifyIgnores message. Also converts values to other types if specified.
     * @param {ModifyIgnores} message ModifyIgnores
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: ModifyIgnores, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this ModifyIgnores message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this ModifyIgnores to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new RemoveMessage.
 * @exports RemoveMessage
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class RemoveMessage {

    /**
     * Constructs a new RemoveMessage.
     * @exports RemoveMessage
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * RemoveMessage id.
     * @type {number|undefined}
     */
    id?: number;

    /**
     * RemoveMessage executionerId.
     * @type {number|undefined}
     */
    executionerId?: number;

    /**
     * RemoveMessage executionerDisplayName.
     * @type {string|undefined}
     */
    executionerDisplayName?: string;

    /**
     * Creates a new RemoveMessage instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {RemoveMessage} RemoveMessage instance
     */
    static create(properties?: Object): RemoveMessage;

    /**
     * Encodes the specified RemoveMessage message.
     * @param {RemoveMessage|Object} message RemoveMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (RemoveMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RemoveMessage message, length delimited.
     * @param {RemoveMessage|Object} message RemoveMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (RemoveMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RemoveMessage message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RemoveMessage} RemoveMessage
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RemoveMessage;

    /**
     * Decodes a RemoveMessage message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RemoveMessage} RemoveMessage
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RemoveMessage;

    /**
     * Verifies a RemoveMessage message.
     * @param {RemoveMessage|Object} message RemoveMessage message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (RemoveMessage|Object)): string;

    /**
     * Creates a RemoveMessage message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {RemoveMessage} RemoveMessage
     */
    static fromObject(object: { [k: string]: any }): RemoveMessage;

    /**
     * Creates a RemoveMessage message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link RemoveMessage.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {RemoveMessage} RemoveMessage
     */
    static from(object: { [k: string]: any }): RemoveMessage;

    /**
     * Creates a plain object from a RemoveMessage message. Also converts values to other types if specified.
     * @param {RemoveMessage} message RemoveMessage
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: RemoveMessage, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this RemoveMessage message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this RemoveMessage to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new ClearUserMessages.
 * @exports ClearUserMessages
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class ClearUserMessages {

    /**
     * Constructs a new ClearUserMessages.
     * @exports ClearUserMessages
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * ClearUserMessages username.
     * @type {string|undefined}
     */
    username?: string;

    /**
     * ClearUserMessages executionerId.
     * @type {number|undefined}
     */
    executionerId?: number;

    /**
     * ClearUserMessages executionerDisplayName.
     * @type {string|undefined}
     */
    executionerDisplayName?: string;

    /**
     * Creates a new ClearUserMessages instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {ClearUserMessages} ClearUserMessages instance
     */
    static create(properties?: Object): ClearUserMessages;

    /**
     * Encodes the specified ClearUserMessages message.
     * @param {ClearUserMessages|Object} message ClearUserMessages message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (ClearUserMessages|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClearUserMessages message, length delimited.
     * @param {ClearUserMessages|Object} message ClearUserMessages message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (ClearUserMessages|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClearUserMessages message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClearUserMessages} ClearUserMessages
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClearUserMessages;

    /**
     * Decodes a ClearUserMessages message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClearUserMessages} ClearUserMessages
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClearUserMessages;

    /**
     * Verifies a ClearUserMessages message.
     * @param {ClearUserMessages|Object} message ClearUserMessages message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (ClearUserMessages|Object)): string;

    /**
     * Creates a ClearUserMessages message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {ClearUserMessages} ClearUserMessages
     */
    static fromObject(object: { [k: string]: any }): ClearUserMessages;

    /**
     * Creates a ClearUserMessages message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link ClearUserMessages.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {ClearUserMessages} ClearUserMessages
     */
    static from(object: { [k: string]: any }): ClearUserMessages;

    /**
     * Creates a plain object from a ClearUserMessages message. Also converts values to other types if specified.
     * @param {ClearUserMessages} message ClearUserMessages
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: ClearUserMessages, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this ClearUserMessages message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this ClearUserMessages to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new ClearHistory.
 * @exports ClearHistory
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class ClearHistory {

    /**
     * Constructs a new ClearHistory.
     * @exports ClearHistory
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * ClearHistory executionerId.
     * @type {number|undefined}
     */
    executionerId?: number;

    /**
     * ClearHistory executionerDisplayName.
     * @type {string|undefined}
     */
    executionerDisplayName?: string;

    /**
     * Creates a new ClearHistory instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {ClearHistory} ClearHistory instance
     */
    static create(properties?: Object): ClearHistory;

    /**
     * Encodes the specified ClearHistory message.
     * @param {ClearHistory|Object} message ClearHistory message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (ClearHistory|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClearHistory message, length delimited.
     * @param {ClearHistory|Object} message ClearHistory message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (ClearHistory|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClearHistory message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClearHistory} ClearHistory
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClearHistory;

    /**
     * Decodes a ClearHistory message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClearHistory} ClearHistory
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClearHistory;

    /**
     * Verifies a ClearHistory message.
     * @param {ClearHistory|Object} message ClearHistory message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (ClearHistory|Object)): string;

    /**
     * Creates a ClearHistory message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {ClearHistory} ClearHistory
     */
    static fromObject(object: { [k: string]: any }): ClearHistory;

    /**
     * Creates a ClearHistory message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link ClearHistory.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {ClearHistory} ClearHistory
     */
    static from(object: { [k: string]: any }): ClearHistory;

    /**
     * Creates a plain object from a ClearHistory message. Also converts values to other types if specified.
     * @param {ClearHistory} message ClearHistory
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: ClearHistory, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this ClearHistory message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this ClearHistory to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new Kick.
 * @exports Kick
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class Kick {

    /**
     * Constructs a new Kick.
     * @exports Kick
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * Kick userId.
     * @type {number|undefined}
     */
    userId?: number;

    /**
     * Kick displayName.
     * @type {string|undefined}
     */
    displayName?: string;

    /**
     * Kick executionerId.
     * @type {number|undefined}
     */
    executionerId?: number;

    /**
     * Kick executionerDisplayName.
     * @type {string|undefined}
     */
    executionerDisplayName?: string;

    /**
     * Creates a new Kick instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {Kick} Kick instance
     */
    static create(properties?: Object): Kick;

    /**
     * Encodes the specified Kick message.
     * @param {Kick|Object} message Kick message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (Kick|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Kick message, length delimited.
     * @param {Kick|Object} message Kick message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (Kick|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Kick message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Kick} Kick
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Kick;

    /**
     * Decodes a Kick message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Kick} Kick
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Kick;

    /**
     * Verifies a Kick message.
     * @param {Kick|Object} message Kick message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (Kick|Object)): string;

    /**
     * Creates a Kick message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {Kick} Kick
     */
    static fromObject(object: { [k: string]: any }): Kick;

    /**
     * Creates a Kick message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Kick.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Kick} Kick
     */
    static from(object: { [k: string]: any }): Kick;

    /**
     * Creates a plain object from a Kick message. Also converts values to other types if specified.
     * @param {Kick} message Kick
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: Kick, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this Kick message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this Kick to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new Ban.
 * @exports Ban
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class Ban {

    /**
     * Constructs a new Ban.
     * @exports Ban
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * Ban userId.
     * @type {number|undefined}
     */
    userId?: number;

    /**
     * Ban displayName.
     * @type {string|undefined}
     */
    displayName?: string;

    /**
     * Ban executionerId.
     * @type {number|undefined}
     */
    executionerId?: number;

    /**
     * Ban executionerDisplayName.
     * @type {string|undefined}
     */
    executionerDisplayName?: string;

    /**
     * Ban isShadowBan.
     * @type {boolean|undefined}
     */
    isShadowBan?: boolean;

    /**
     * Creates a new Ban instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {Ban} Ban instance
     */
    static create(properties?: Object): Ban;

    /**
     * Encodes the specified Ban message.
     * @param {Ban|Object} message Ban message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (Ban|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Ban message, length delimited.
     * @param {Ban|Object} message Ban message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (Ban|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Ban message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Ban} Ban
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ban;

    /**
     * Decodes a Ban message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Ban} Ban
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ban;

    /**
     * Verifies a Ban message.
     * @param {Ban|Object} message Ban message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (Ban|Object)): string;

    /**
     * Creates a Ban message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {Ban} Ban
     */
    static fromObject(object: { [k: string]: any }): Ban;

    /**
     * Creates a Ban message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Ban.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Ban} Ban
     */
    static from(object: { [k: string]: any }): Ban;

    /**
     * Creates a plain object from a Ban message. Also converts values to other types if specified.
     * @param {Ban} message Ban
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: Ban, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this Ban message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this Ban to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new UnBan.
 * @exports UnBan
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class UnBan {

    /**
     * Constructs a new UnBan.
     * @exports UnBan
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * UnBan userId.
     * @type {number|undefined}
     */
    userId?: number;

    /**
     * UnBan displayName.
     * @type {string|undefined}
     */
    displayName?: string;

    /**
     * UnBan executionerId.
     * @type {number|undefined}
     */
    executionerId?: number;

    /**
     * UnBan executionerDisplayName.
     * @type {string|undefined}
     */
    executionerDisplayName?: string;

    /**
     * Creates a new UnBan instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {UnBan} UnBan instance
     */
    static create(properties?: Object): UnBan;

    /**
     * Encodes the specified UnBan message.
     * @param {UnBan|Object} message UnBan message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (UnBan|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnBan message, length delimited.
     * @param {UnBan|Object} message UnBan message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (UnBan|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnBan message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UnBan} UnBan
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnBan;

    /**
     * Decodes an UnBan message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UnBan} UnBan
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnBan;

    /**
     * Verifies an UnBan message.
     * @param {UnBan|Object} message UnBan message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (UnBan|Object)): string;

    /**
     * Creates an UnBan message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {UnBan} UnBan
     */
    static fromObject(object: { [k: string]: any }): UnBan;

    /**
     * Creates an UnBan message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link UnBan.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {UnBan} UnBan
     */
    static from(object: { [k: string]: any }): UnBan;

    /**
     * Creates a plain object from an UnBan message. Also converts values to other types if specified.
     * @param {UnBan} message UnBan
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: UnBan, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this UnBan message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this UnBan to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new Mod.
 * @exports Mod
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class Mod {

    /**
     * Constructs a new Mod.
     * @exports Mod
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * Mod userId.
     * @type {number|undefined}
     */
    userId?: number;

    /**
     * Mod displayName.
     * @type {string|undefined}
     */
    displayName?: string;

    /**
     * Mod isNowMod.
     * @type {boolean|undefined}
     */
    isNowMod?: boolean;

    /**
     * Creates a new Mod instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {Mod} Mod instance
     */
    static create(properties?: Object): Mod;

    /**
     * Encodes the specified Mod message.
     * @param {Mod|Object} message Mod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (Mod|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Mod message, length delimited.
     * @param {Mod|Object} message Mod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (Mod|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Mod message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Mod} Mod
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mod;

    /**
     * Decodes a Mod message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Mod} Mod
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mod;

    /**
     * Verifies a Mod message.
     * @param {Mod|Object} message Mod message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (Mod|Object)): string;

    /**
     * Creates a Mod message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {Mod} Mod
     */
    static fromObject(object: { [k: string]: any }): Mod;

    /**
     * Creates a Mod message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Mod.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Mod} Mod
     */
    static from(object: { [k: string]: any }): Mod;

    /**
     * Creates a plain object from a Mod message. Also converts values to other types if specified.
     * @param {Mod} message Mod
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: Mod, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this Mod message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this Mod to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new ModList.
 * @exports ModList
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class ModList {

    /**
     * Constructs a new ModList.
     * @exports ModList
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * ModList moderators.
     * @type {Array.<ModList.Moderator>|undefined}
     */
    moderators?: ModList.Moderator[];

    /**
     * Creates a new ModList instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {ModList} ModList instance
     */
    static create(properties?: Object): ModList;

    /**
     * Encodes the specified ModList message.
     * @param {ModList|Object} message ModList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (ModList|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ModList message, length delimited.
     * @param {ModList|Object} message ModList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (ModList|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModList message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModList} ModList
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModList;

    /**
     * Decodes a ModList message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModList} ModList
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModList;

    /**
     * Verifies a ModList message.
     * @param {ModList|Object} message ModList message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (ModList|Object)): string;

    /**
     * Creates a ModList message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {ModList} ModList
     */
    static fromObject(object: { [k: string]: any }): ModList;

    /**
     * Creates a ModList message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link ModList.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {ModList} ModList
     */
    static from(object: { [k: string]: any }): ModList;

    /**
     * Creates a plain object from a ModList message. Also converts values to other types if specified.
     * @param {ModList} message ModList
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: ModList, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this ModList message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this ModList to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

export namespace ModList {

    /**
     * Constructs a new Moderator.
     * @exports ModList.Moderator
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Moderator {

        /**
         * Constructs a new Moderator.
         * @exports ModList.Moderator
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Moderator userId.
         * @type {number|undefined}
         */
        userId?: number;

        /**
         * Moderator displayName.
         * @type {string|undefined}
         */
        displayName?: string;

        /**
         * Creates a new Moderator instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {ModList.Moderator} Moderator instance
         */
        static create(properties?: Object): ModList.Moderator;

        /**
         * Encodes the specified Moderator message.
         * @param {ModList.Moderator|Object} message Moderator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (ModList.Moderator|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Moderator message, length delimited.
         * @param {ModList.Moderator|Object} message Moderator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (ModList.Moderator|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Moderator message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ModList.Moderator} Moderator
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModList.Moderator;

        /**
         * Decodes a Moderator message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ModList.Moderator} Moderator
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModList.Moderator;

        /**
         * Verifies a Moderator message.
         * @param {ModList.Moderator|Object} message Moderator message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (ModList.Moderator|Object)): string;

        /**
         * Creates a Moderator message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {ModList.Moderator} Moderator
         */
        static fromObject(object: { [k: string]: any }): ModList.Moderator;

        /**
         * Creates a Moderator message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link ModList.Moderator.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {ModList.Moderator} Moderator
         */
        static from(object: { [k: string]: any }): ModList.Moderator;

        /**
         * Creates a plain object from a Moderator message. Also converts values to other types if specified.
         * @param {ModList.Moderator} message Moderator
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: ModList.Moderator, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Moderator message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Moderator to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }
}

/**
 * Constructs a new RaffleInit.
 * @exports RaffleInit
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class RaffleInit {

    /**
     * Constructs a new RaffleInit.
     * @exports RaffleInit
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * RaffleInit names.
     * @type {Array.<string>|undefined}
     */
    names?: string[];

    /**
     * Creates a new RaffleInit instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {RaffleInit} RaffleInit instance
     */
    static create(properties?: Object): RaffleInit;

    /**
     * Encodes the specified RaffleInit message.
     * @param {RaffleInit|Object} message RaffleInit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (RaffleInit|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RaffleInit message, length delimited.
     * @param {RaffleInit|Object} message RaffleInit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (RaffleInit|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RaffleInit message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RaffleInit} RaffleInit
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RaffleInit;

    /**
     * Decodes a RaffleInit message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RaffleInit} RaffleInit
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RaffleInit;

    /**
     * Verifies a RaffleInit message.
     * @param {RaffleInit|Object} message RaffleInit message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (RaffleInit|Object)): string;

    /**
     * Creates a RaffleInit message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {RaffleInit} RaffleInit
     */
    static fromObject(object: { [k: string]: any }): RaffleInit;

    /**
     * Creates a RaffleInit message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link RaffleInit.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {RaffleInit} RaffleInit
     */
    static from(object: { [k: string]: any }): RaffleInit;

    /**
     * Creates a plain object from a RaffleInit message. Also converts values to other types if specified.
     * @param {RaffleInit} message RaffleInit
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: RaffleInit, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this RaffleInit message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this RaffleInit to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new RaffleRun.
 * @exports RaffleRun
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class RaffleRun {

    /**
     * Constructs a new RaffleRun.
     * @exports RaffleRun
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * RaffleRun winner.
     * @type {string|undefined}
     */
    winner?: string;

    /**
     * RaffleRun names.
     * @type {Array.<string>|undefined}
     */
    names?: string[];

    /**
     * RaffleRun hostId.
     * @type {number|undefined}
     */
    hostId?: number;

    /**
     * RaffleRun hostDisplayName.
     * @type {string|undefined}
     */
    hostDisplayName?: string;

    /**
     * Creates a new RaffleRun instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {RaffleRun} RaffleRun instance
     */
    static create(properties?: Object): RaffleRun;

    /**
     * Encodes the specified RaffleRun message.
     * @param {RaffleRun|Object} message RaffleRun message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (RaffleRun|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RaffleRun message, length delimited.
     * @param {RaffleRun|Object} message RaffleRun message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (RaffleRun|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RaffleRun message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RaffleRun} RaffleRun
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RaffleRun;

    /**
     * Decodes a RaffleRun message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RaffleRun} RaffleRun
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RaffleRun;

    /**
     * Verifies a RaffleRun message.
     * @param {RaffleRun|Object} message RaffleRun message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (RaffleRun|Object)): string;

    /**
     * Creates a RaffleRun message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {RaffleRun} RaffleRun
     */
    static fromObject(object: { [k: string]: any }): RaffleRun;

    /**
     * Creates a RaffleRun message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link RaffleRun.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {RaffleRun} RaffleRun
     */
    static from(object: { [k: string]: any }): RaffleRun;

    /**
     * Creates a plain object from a RaffleRun message. Also converts values to other types if specified.
     * @param {RaffleRun} message RaffleRun
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: RaffleRun, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this RaffleRun message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this RaffleRun to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new PollInit.
 * @exports PollInit
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class PollInit {

    /**
     * Constructs a new PollInit.
     * @exports PollInit
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * PollInit question.
     * @type {string|undefined}
     */
    question?: string;

    /**
     * PollInit options.
     * @type {Array.<string>|undefined}
     */
    options?: string[];

    /**
     * PollInit hostId.
     * @type {number|undefined}
     */
    hostId?: number;

    /**
     * PollInit hostDisplayName.
     * @type {string|undefined}
     */
    hostDisplayName?: string;

    /**
     * Creates a new PollInit instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {PollInit} PollInit instance
     */
    static create(properties?: Object): PollInit;

    /**
     * Encodes the specified PollInit message.
     * @param {PollInit|Object} message PollInit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (PollInit|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollInit message, length delimited.
     * @param {PollInit|Object} message PollInit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (PollInit|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollInit message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PollInit} PollInit
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollInit;

    /**
     * Decodes a PollInit message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PollInit} PollInit
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollInit;

    /**
     * Verifies a PollInit message.
     * @param {PollInit|Object} message PollInit message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (PollInit|Object)): string;

    /**
     * Creates a PollInit message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {PollInit} PollInit
     */
    static fromObject(object: { [k: string]: any }): PollInit;

    /**
     * Creates a PollInit message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link PollInit.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {PollInit} PollInit
     */
    static from(object: { [k: string]: any }): PollInit;

    /**
     * Creates a plain object from a PollInit message. Also converts values to other types if specified.
     * @param {PollInit} message PollInit
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: PollInit, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this PollInit message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this PollInit to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new PollUpdate.
 * @exports PollUpdate
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class PollUpdate {

    /**
     * Constructs a new PollUpdate.
     * @exports PollUpdate
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * PollUpdate votes.
     * @type {Array.<number>|undefined}
     */
    votes?: number[];

    /**
     * PollUpdate hostId.
     * @type {number|undefined}
     */
    hostId?: number;

    /**
     * PollUpdate hostDisplayName.
     * @type {string|undefined}
     */
    hostDisplayName?: string;

    /**
     * Creates a new PollUpdate instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {PollUpdate} PollUpdate instance
     */
    static create(properties?: Object): PollUpdate;

    /**
     * Encodes the specified PollUpdate message.
     * @param {PollUpdate|Object} message PollUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (PollUpdate|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollUpdate message, length delimited.
     * @param {PollUpdate|Object} message PollUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (PollUpdate|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollUpdate message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PollUpdate} PollUpdate
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollUpdate;

    /**
     * Decodes a PollUpdate message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PollUpdate} PollUpdate
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollUpdate;

    /**
     * Verifies a PollUpdate message.
     * @param {PollUpdate|Object} message PollUpdate message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (PollUpdate|Object)): string;

    /**
     * Creates a PollUpdate message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {PollUpdate} PollUpdate
     */
    static fromObject(object: { [k: string]: any }): PollUpdate;

    /**
     * Creates a PollUpdate message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link PollUpdate.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {PollUpdate} PollUpdate
     */
    static from(object: { [k: string]: any }): PollUpdate;

    /**
     * Creates a plain object from a PollUpdate message. Also converts values to other types if specified.
     * @param {PollUpdate} message PollUpdate
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: PollUpdate, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this PollUpdate message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this PollUpdate to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new PollResult.
 * @exports PollResult
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class PollResult {

    /**
     * Constructs a new PollResult.
     * @exports PollResult
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * PollResult question.
     * @type {string|undefined}
     */
    question?: string;

    /**
     * PollResult winners.
     * @type {Array.<string>|undefined}
     */
    winners?: string[];

    /**
     * PollResult votes.
     * @type {number|undefined}
     */
    votes?: number;

    /**
     * PollResult hostId.
     * @type {number|undefined}
     */
    hostId?: number;

    /**
     * PollResult hostDisplayName.
     * @type {string|undefined}
     */
    hostDisplayName?: string;

    /**
     * Creates a new PollResult instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {PollResult} PollResult instance
     */
    static create(properties?: Object): PollResult;

    /**
     * Encodes the specified PollResult message.
     * @param {PollResult|Object} message PollResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (PollResult|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollResult message, length delimited.
     * @param {PollResult|Object} message PollResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (PollResult|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollResult message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PollResult} PollResult
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollResult;

    /**
     * Decodes a PollResult message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PollResult} PollResult
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollResult;

    /**
     * Verifies a PollResult message.
     * @param {PollResult|Object} message PollResult message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (PollResult|Object)): string;

    /**
     * Creates a PollResult message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {PollResult} PollResult
     */
    static fromObject(object: { [k: string]: any }): PollResult;

    /**
     * Creates a PollResult message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link PollResult.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {PollResult} PollResult
     */
    static from(object: { [k: string]: any }): PollResult;

    /**
     * Creates a plain object from a PollResult message. Also converts values to other types if specified.
     * @param {PollResult} message PollResult
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: PollResult, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this PollResult message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this PollResult to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new PollVote.
 * @exports PollVote
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class PollVote {

    /**
     * Constructs a new PollVote.
     * @exports PollVote
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * PollVote option.
     * @type {number|undefined}
     */
    option?: number;

    /**
     * Creates a new PollVote instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {PollVote} PollVote instance
     */
    static create(properties?: Object): PollVote;

    /**
     * Encodes the specified PollVote message.
     * @param {PollVote|Object} message PollVote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (PollVote|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollVote message, length delimited.
     * @param {PollVote|Object} message PollVote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (PollVote|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollVote message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PollVote} PollVote
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollVote;

    /**
     * Decodes a PollVote message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PollVote} PollVote
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollVote;

    /**
     * Verifies a PollVote message.
     * @param {PollVote|Object} message PollVote message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (PollVote|Object)): string;

    /**
     * Creates a PollVote message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {PollVote} PollVote
     */
    static fromObject(object: { [k: string]: any }): PollVote;

    /**
     * Creates a PollVote message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link PollVote.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {PollVote} PollVote
     */
    static from(object: { [k: string]: any }): PollVote;

    /**
     * Creates a plain object from a PollVote message. Also converts values to other types if specified.
     * @param {PollVote} message PollVote
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: PollVote, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this PollVote message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this PollVote to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new PollVoteResponse.
 * @exports PollVoteResponse
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class PollVoteResponse {

    /**
     * Constructs a new PollVoteResponse.
     * @exports PollVoteResponse
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * PollVoteResponse success.
     * @type {boolean|undefined}
     */
    success?: boolean;

    /**
     * Creates a new PollVoteResponse instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {PollVoteResponse} PollVoteResponse instance
     */
    static create(properties?: Object): PollVoteResponse;

    /**
     * Encodes the specified PollVoteResponse message.
     * @param {PollVoteResponse|Object} message PollVoteResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (PollVoteResponse|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollVoteResponse message, length delimited.
     * @param {PollVoteResponse|Object} message PollVoteResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (PollVoteResponse|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollVoteResponse message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PollVoteResponse} PollVoteResponse
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollVoteResponse;

    /**
     * Decodes a PollVoteResponse message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PollVoteResponse} PollVoteResponse
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollVoteResponse;

    /**
     * Verifies a PollVoteResponse message.
     * @param {PollVoteResponse|Object} message PollVoteResponse message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (PollVoteResponse|Object)): string;

    /**
     * Creates a PollVoteResponse message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {PollVoteResponse} PollVoteResponse
     */
    static fromObject(object: { [k: string]: any }): PollVoteResponse;

    /**
     * Creates a PollVoteResponse message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link PollVoteResponse.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {PollVoteResponse} PollVoteResponse
     */
    static from(object: { [k: string]: any }): PollVoteResponse;

    /**
     * Creates a plain object from a PollVoteResponse message. Also converts values to other types if specified.
     * @param {PollVoteResponse} message PollVoteResponse
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: PollVoteResponse, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this PollVoteResponse message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this PollVoteResponse to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new SetName.
 * @exports SetName
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class SetName {

    /**
     * Constructs a new SetName.
     * @exports SetName
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * SetName name.
     * @type {string|undefined}
     */
    name?: string;

    /**
     * Creates a new SetName instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {SetName} SetName instance
     */
    static create(properties?: Object): SetName;

    /**
     * Encodes the specified SetName message.
     * @param {SetName|Object} message SetName message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (SetName|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetName message, length delimited.
     * @param {SetName|Object} message SetName message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (SetName|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetName message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetName} SetName
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetName;

    /**
     * Decodes a SetName message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetName} SetName
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetName;

    /**
     * Verifies a SetName message.
     * @param {SetName|Object} message SetName message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (SetName|Object)): string;

    /**
     * Creates a SetName message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {SetName} SetName
     */
    static fromObject(object: { [k: string]: any }): SetName;

    /**
     * Creates a SetName message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link SetName.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {SetName} SetName
     */
    static from(object: { [k: string]: any }): SetName;

    /**
     * Creates a plain object from a SetName message. Also converts values to other types if specified.
     * @param {SetName} message SetName
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: SetName, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this SetName message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this SetName to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new NameConfirmation.
 * @exports NameConfirmation
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class NameConfirmation {

    /**
     * Constructs a new NameConfirmation.
     * @exports NameConfirmation
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * NameConfirmation response.
     * @type {string|undefined}
     */
    response?: string;

    /**
     * Creates a new NameConfirmation instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {NameConfirmation} NameConfirmation instance
     */
    static create(properties?: Object): NameConfirmation;

    /**
     * Encodes the specified NameConfirmation message.
     * @param {NameConfirmation|Object} message NameConfirmation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (NameConfirmation|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NameConfirmation message, length delimited.
     * @param {NameConfirmation|Object} message NameConfirmation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (NameConfirmation|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NameConfirmation message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NameConfirmation} NameConfirmation
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NameConfirmation;

    /**
     * Decodes a NameConfirmation message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NameConfirmation} NameConfirmation
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NameConfirmation;

    /**
     * Verifies a NameConfirmation message.
     * @param {NameConfirmation|Object} message NameConfirmation message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (NameConfirmation|Object)): string;

    /**
     * Creates a NameConfirmation message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {NameConfirmation} NameConfirmation
     */
    static fromObject(object: { [k: string]: any }): NameConfirmation;

    /**
     * Creates a NameConfirmation message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link NameConfirmation.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {NameConfirmation} NameConfirmation
     */
    static from(object: { [k: string]: any }): NameConfirmation;

    /**
     * Creates a plain object from a NameConfirmation message. Also converts values to other types if specified.
     * @param {NameConfirmation} message NameConfirmation
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: NameConfirmation, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this NameConfirmation message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this NameConfirmation to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new ModTools.
 * @exports ModTools
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class ModTools {

    /**
     * Constructs a new ModTools.
     * @exports ModTools
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * ModTools modToolsType.
     * @type {number|undefined}
     */
    modToolsType?: number;

    /**
     * Creates a new ModTools instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {ModTools} ModTools instance
     */
    static create(properties?: Object): ModTools;

    /**
     * Encodes the specified ModTools message.
     * @param {ModTools|Object} message ModTools message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (ModTools|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ModTools message, length delimited.
     * @param {ModTools|Object} message ModTools message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (ModTools|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModTools message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModTools} ModTools
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModTools;

    /**
     * Decodes a ModTools message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModTools} ModTools
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModTools;

    /**
     * Verifies a ModTools message.
     * @param {ModTools|Object} message ModTools message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (ModTools|Object)): string;

    /**
     * Creates a ModTools message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {ModTools} ModTools
     */
    static fromObject(object: { [k: string]: any }): ModTools;

    /**
     * Creates a ModTools message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link ModTools.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {ModTools} ModTools
     */
    static from(object: { [k: string]: any }): ModTools;

    /**
     * Creates a plain object from a ModTools message. Also converts values to other types if specified.
     * @param {ModTools} message ModTools
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: ModTools, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this ModTools message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this ModTools to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

export namespace ModTools {

    /**
     * ModToolsType enum.
     * @name ModToolsType
     * @memberof ModTools
     * @enum {number}
     * @property {number} NONE=0 NONE value
     * @property {number} MODERATOR=1 MODERATOR value
     * @property {number} STREAMER=2 STREAMER value
     * @property {number} PTV_ADMIN=3 PTV_ADMIN value
     */
    enum ModToolsType {
        NONE = 0,
        MODERATOR = 1,
        STREAMER = 2,
        PTV_ADMIN = 3
    }
}

/**
 * Constructs a new PollEnd.
 * @exports PollEnd
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class PollEnd {

    /**
     * Constructs a new PollEnd.
     * @exports PollEnd
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * Creates a new PollEnd instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {PollEnd} PollEnd instance
     */
    static create(properties?: Object): PollEnd;

    /**
     * Encodes the specified PollEnd message.
     * @param {PollEnd|Object} message PollEnd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (PollEnd|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollEnd message, length delimited.
     * @param {PollEnd|Object} message PollEnd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (PollEnd|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollEnd message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PollEnd} PollEnd
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollEnd;

    /**
     * Decodes a PollEnd message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PollEnd} PollEnd
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollEnd;

    /**
     * Verifies a PollEnd message.
     * @param {PollEnd|Object} message PollEnd message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (PollEnd|Object)): string;

    /**
     * Creates a PollEnd message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {PollEnd} PollEnd
     */
    static fromObject(object: { [k: string]: any }): PollEnd;

    /**
     * Creates a PollEnd message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link PollEnd.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {PollEnd} PollEnd
     */
    static from(object: { [k: string]: any }): PollEnd;

    /**
     * Creates a plain object from a PollEnd message. Also converts values to other types if specified.
     * @param {PollEnd} message PollEnd
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: PollEnd, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this PollEnd message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this PollEnd to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new Reminder.
 * @exports Reminder
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class Reminder {

    /**
     * Constructs a new Reminder.
     * @exports Reminder
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * Reminder message.
     * @type {string|undefined}
     */
    message?: string;

    /**
     * Creates a new Reminder instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {Reminder} Reminder instance
     */
    static create(properties?: Object): Reminder;

    /**
     * Encodes the specified Reminder message.
     * @param {Reminder|Object} message Reminder message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (Reminder|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Reminder message, length delimited.
     * @param {Reminder|Object} message Reminder message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (Reminder|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Reminder message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Reminder} Reminder
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Reminder;

    /**
     * Decodes a Reminder message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Reminder} Reminder
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Reminder;

    /**
     * Verifies a Reminder message.
     * @param {Reminder|Object} message Reminder message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (Reminder|Object)): string;

    /**
     * Creates a Reminder message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {Reminder} Reminder
     */
    static fromObject(object: { [k: string]: any }): Reminder;

    /**
     * Creates a Reminder message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Reminder.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Reminder} Reminder
     */
    static from(object: { [k: string]: any }): Reminder;

    /**
     * Creates a plain object from a Reminder message. Also converts values to other types if specified.
     * @param {Reminder} message Reminder
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: Reminder, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this Reminder message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this Reminder to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new Timer.
 * @exports Timer
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class Timer {

    /**
     * Constructs a new Timer.
     * @exports Timer
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * Timer message.
     * @type {string|undefined}
     */
    message?: string;

    /**
     * Creates a new Timer instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {Timer} Timer instance
     */
    static create(properties?: Object): Timer;

    /**
     * Encodes the specified Timer message.
     * @param {Timer|Object} message Timer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (Timer|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Timer message, length delimited.
     * @param {Timer|Object} message Timer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (Timer|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Timer message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Timer} Timer
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Timer;

    /**
     * Decodes a Timer message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Timer} Timer
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Timer;

    /**
     * Verifies a Timer message.
     * @param {Timer|Object} message Timer message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (Timer|Object)): string;

    /**
     * Creates a Timer message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {Timer} Timer
     */
    static fromObject(object: { [k: string]: any }): Timer;

    /**
     * Creates a Timer message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Timer.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Timer} Timer
     */
    static from(object: { [k: string]: any }): Timer;

    /**
     * Creates a plain object from a Timer message. Also converts values to other types if specified.
     * @param {Timer} message Timer
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: Timer, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this Timer message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this Timer to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new MonitorData.
 * @exports MonitorData
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class MonitorData {

    /**
     * Constructs a new MonitorData.
     * @exports MonitorData
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * MonitorData messageContent.
     * @type {Uint8Array|undefined}
     */
    messageContent?: Uint8Array;

    /**
     * MonitorData channel.
     * @type {number|undefined}
     */
    channel?: number;

    /**
     * MonitorData channelName.
     * @type {string|undefined}
     */
    channelName?: string;

    /**
     * Creates a new MonitorData instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {MonitorData} MonitorData instance
     */
    static create(properties?: Object): MonitorData;

    /**
     * Encodes the specified MonitorData message.
     * @param {MonitorData|Object} message MonitorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (MonitorData|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MonitorData message, length delimited.
     * @param {MonitorData|Object} message MonitorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (MonitorData|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MonitorData message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MonitorData} MonitorData
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MonitorData;

    /**
     * Decodes a MonitorData message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MonitorData} MonitorData
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MonitorData;

    /**
     * Verifies a MonitorData message.
     * @param {MonitorData|Object} message MonitorData message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (MonitorData|Object)): string;

    /**
     * Creates a MonitorData message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {MonitorData} MonitorData
     */
    static fromObject(object: { [k: string]: any }): MonitorData;

    /**
     * Creates a MonitorData message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link MonitorData.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {MonitorData} MonitorData
     */
    static from(object: { [k: string]: any }): MonitorData;

    /**
     * Creates a plain object from a MonitorData message. Also converts values to other types if specified.
     * @param {MonitorData} message MonitorData
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: MonitorData, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this MonitorData message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this MonitorData to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new ChatLevel.
 * @exports ChatLevel
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class ChatLevel {

    /**
     * Constructs a new ChatLevel.
     * @exports ChatLevel
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * ChatLevel chatLevel.
     * @type {number|undefined}
     */
    chatLevel?: number;

    /**
     * Creates a new ChatLevel instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {ChatLevel} ChatLevel instance
     */
    static create(properties?: Object): ChatLevel;

    /**
     * Encodes the specified ChatLevel message.
     * @param {ChatLevel|Object} message ChatLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (ChatLevel|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatLevel message, length delimited.
     * @param {ChatLevel|Object} message ChatLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (ChatLevel|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatLevel message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatLevel} ChatLevel
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatLevel;

    /**
     * Decodes a ChatLevel message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatLevel} ChatLevel
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatLevel;

    /**
     * Verifies a ChatLevel message.
     * @param {ChatLevel|Object} message ChatLevel message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (ChatLevel|Object)): string;

    /**
     * Creates a ChatLevel message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatLevel} ChatLevel
     */
    static fromObject(object: { [k: string]: any }): ChatLevel;

    /**
     * Creates a ChatLevel message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link ChatLevel.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatLevel} ChatLevel
     */
    static from(object: { [k: string]: any }): ChatLevel;

    /**
     * Creates a plain object from a ChatLevel message. Also converts values to other types if specified.
     * @param {ChatLevel} message ChatLevel
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: ChatLevel, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this ChatLevel message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatLevel to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

export namespace ChatLevel {

    /**
     * ChatLevelType enum.
     * @name ChatLevelType
     * @memberof ChatLevel
     * @enum {number}
     * @property {number} EVERYONE=0 EVERYONE value
     * @property {number} STREAMER=1 STREAMER value
     * @property {number} STREAMER_MODERATOR=2 STREAMER_MODERATOR value
     * @property {number} STREAMER_MODERATOR_SUBSCRIBER=3 STREAMER_MODERATOR_SUBSCRIBER value
     * @property {number} STREAMER_MODERATOR_FOLLOWER=4 STREAMER_MODERATOR_FOLLOWER value
     * @property {number} STREAMER_MODERATOR_SUBSCRIBER_FOLLOWER=5 STREAMER_MODERATOR_SUBSCRIBER_FOLLOWER value
     */
    enum ChatLevelType {
        EVERYONE = 0,
        STREAMER = 1,
        STREAMER_MODERATOR = 2,
        STREAMER_MODERATOR_SUBSCRIBER = 3,
        STREAMER_MODERATOR_FOLLOWER = 4,
        STREAMER_MODERATOR_SUBSCRIBER_FOLLOWER = 5
    }
}

/**
 * Constructs a new RequestUserlist.
 * @exports RequestUserlist
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class RequestUserlist {

    /**
     * Constructs a new RequestUserlist.
     * @exports RequestUserlist
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * Creates a new RequestUserlist instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {RequestUserlist} RequestUserlist instance
     */
    static create(properties?: Object): RequestUserlist;

    /**
     * Encodes the specified RequestUserlist message.
     * @param {RequestUserlist|Object} message RequestUserlist message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (RequestUserlist|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestUserlist message, length delimited.
     * @param {RequestUserlist|Object} message RequestUserlist message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (RequestUserlist|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestUserlist message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestUserlist} RequestUserlist
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestUserlist;

    /**
     * Decodes a RequestUserlist message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestUserlist} RequestUserlist
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestUserlist;

    /**
     * Verifies a RequestUserlist message.
     * @param {RequestUserlist|Object} message RequestUserlist message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (RequestUserlist|Object)): string;

    /**
     * Creates a RequestUserlist message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestUserlist} RequestUserlist
     */
    static fromObject(object: { [k: string]: any }): RequestUserlist;

    /**
     * Creates a RequestUserlist message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link RequestUserlist.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestUserlist} RequestUserlist
     */
    static from(object: { [k: string]: any }): RequestUserlist;

    /**
     * Creates a plain object from a RequestUserlist message. Also converts values to other types if specified.
     * @param {RequestUserlist} message RequestUserlist
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: RequestUserlist, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this RequestUserlist message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestUserlist to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new UserInfo.
 * @exports UserInfo
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class UserInfo {

    /**
     * Constructs a new UserInfo.
     * @exports UserInfo
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * UserInfo userId.
     * @type {number|undefined}
     */
    userId?: number;

    /**
     * UserInfo displayName.
     * @type {string|undefined}
     */
    displayName?: string;

    /**
     * UserInfo registered.
     * @type {boolean|undefined}
     */
    registered?: boolean;

    /**
     * UserInfo moderator.
     * @type {boolean|undefined}
     */
    moderator?: boolean;

    /**
     * UserInfo streamer.
     * @type {boolean|undefined}
     */
    streamer?: boolean;

    /**
     * UserInfo ptvAdmin.
     * @type {boolean|undefined}
     */
    ptvAdmin?: boolean;

    /**
     * UserInfo basic.
     * @type {boolean|undefined}
     */
    basic?: boolean;

    /**
     * UserInfo premium.
     * @type {boolean|undefined}
     */
    premium?: boolean;

    /**
     * UserInfo subscriber.
     * @type {boolean|undefined}
     */
    subscriber?: boolean;

    /**
     * UserInfo color.
     * @type {string|undefined}
     */
    color?: string;

    /**
     * UserInfo ignoring.
     * @type {boolean|undefined}
     */
    ignoring?: boolean;

    /**
     * UserInfo banned.
     * @type {boolean|undefined}
     */
    banned?: boolean;

    /**
     * UserInfo shadowBanned.
     * @type {boolean|undefined}
     */
    shadowBanned?: boolean;

    /**
     * Creates a new UserInfo instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {UserInfo} UserInfo instance
     */
    static create(properties?: Object): UserInfo;

    /**
     * Encodes the specified UserInfo message.
     * @param {UserInfo|Object} message UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (UserInfo|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserInfo message, length delimited.
     * @param {UserInfo|Object} message UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (UserInfo|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserInfo} UserInfo
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserInfo;

    /**
     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserInfo} UserInfo
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserInfo;

    /**
     * Verifies a UserInfo message.
     * @param {UserInfo|Object} message UserInfo message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (UserInfo|Object)): string;

    /**
     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {UserInfo} UserInfo
     */
    static fromObject(object: { [k: string]: any }): UserInfo;

    /**
     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link UserInfo.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {UserInfo} UserInfo
     */
    static from(object: { [k: string]: any }): UserInfo;

    /**
     * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
     * @param {UserInfo} message UserInfo
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: UserInfo, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this UserInfo message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this UserInfo to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new UserCount.
 * @exports UserCount
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class UserCount {

    /**
     * Constructs a new UserCount.
     * @exports UserCount
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * UserCount users.
     * @type {number|undefined}
     */
    users?: number;

    /**
     * Creates a new UserCount instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {UserCount} UserCount instance
     */
    static create(properties?: Object): UserCount;

    /**
     * Encodes the specified UserCount message.
     * @param {UserCount|Object} message UserCount message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (UserCount|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserCount message, length delimited.
     * @param {UserCount|Object} message UserCount message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (UserCount|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserCount message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserCount} UserCount
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserCount;

    /**
     * Decodes a UserCount message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserCount} UserCount
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserCount;

    /**
     * Verifies a UserCount message.
     * @param {UserCount|Object} message UserCount message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (UserCount|Object)): string;

    /**
     * Creates a UserCount message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {UserCount} UserCount
     */
    static fromObject(object: { [k: string]: any }): UserCount;

    /**
     * Creates a UserCount message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link UserCount.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {UserCount} UserCount
     */
    static from(object: { [k: string]: any }): UserCount;

    /**
     * Creates a plain object from a UserCount message. Also converts values to other types if specified.
     * @param {UserCount} message UserCount
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: UserCount, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this UserCount message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this UserCount to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

/**
 * Constructs a new ShowRaffle.
 * @exports ShowRaffle
 * @constructor
 * @param {Object} [properties] Properties to set
 */
export class ShowRaffle {

    /**
     * Constructs a new ShowRaffle.
     * @exports ShowRaffle
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    constructor(properties?: Object);

    /**
     * ShowRaffle userList.
     * @type {Array.<ShowRaffle.User>|undefined}
     */
    userList?: ShowRaffle.User[];

    /**
     * Creates a new ShowRaffle instance using the specified properties.
     * @param {Object} [properties] Properties to set
     * @returns {ShowRaffle} ShowRaffle instance
     */
    static create(properties?: Object): ShowRaffle;

    /**
     * Encodes the specified ShowRaffle message.
     * @param {ShowRaffle|Object} message ShowRaffle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encode(message: (ShowRaffle|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ShowRaffle message, length delimited.
     * @param {ShowRaffle|Object} message ShowRaffle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    static encodeDelimited(message: (ShowRaffle|Object), writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ShowRaffle message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ShowRaffle} ShowRaffle
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ShowRaffle;

    /**
     * Decodes a ShowRaffle message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ShowRaffle} ShowRaffle
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShowRaffle;

    /**
     * Verifies a ShowRaffle message.
     * @param {ShowRaffle|Object} message ShowRaffle message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    static verify(message: (ShowRaffle|Object)): string;

    /**
     * Creates a ShowRaffle message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {ShowRaffle} ShowRaffle
     */
    static fromObject(object: { [k: string]: any }): ShowRaffle;

    /**
     * Creates a ShowRaffle message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link ShowRaffle.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {ShowRaffle} ShowRaffle
     */
    static from(object: { [k: string]: any }): ShowRaffle;

    /**
     * Creates a plain object from a ShowRaffle message. Also converts values to other types if specified.
     * @param {ShowRaffle} message ShowRaffle
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    static toObject(message: ShowRaffle, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this ShowRaffle message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this ShowRaffle to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    toJSON(): { [k: string]: any };
}

export namespace ShowRaffle {

    /**
     * Constructs a new User.
     * @exports ShowRaffle.User
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class User {

        /**
         * Constructs a new User.
         * @exports ShowRaffle.User
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * User displayName.
         * @type {string|undefined}
         */
        displayName?: string;

        /**
         * User subscriber.
         * @type {boolean|undefined}
         */
        subscriber?: boolean;

        /**
         * Creates a new User instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {ShowRaffle.User} User instance
         */
        static create(properties?: Object): ShowRaffle.User;

        /**
         * Encodes the specified User message.
         * @param {ShowRaffle.User|Object} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (ShowRaffle.User|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited.
         * @param {ShowRaffle.User|Object} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (ShowRaffle.User|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ShowRaffle.User} User
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ShowRaffle.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ShowRaffle.User} User
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShowRaffle.User;

        /**
         * Verifies a User message.
         * @param {ShowRaffle.User|Object} message User message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (ShowRaffle.User|Object)): string;

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {ShowRaffle.User} User
         */
        static fromObject(object: { [k: string]: any }): ShowRaffle.User;

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link ShowRaffle.User.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {ShowRaffle.User} User
         */
        static from(object: { [k: string]: any }): ShowRaffle.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param {ShowRaffle.User} message User
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: ShowRaffle.User, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this User message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }
}
