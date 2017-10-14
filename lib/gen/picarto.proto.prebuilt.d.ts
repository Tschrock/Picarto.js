import * as $protobuf from "protobufjs";

/** Properties of a NewMessage. */
export interface INewMessage {

    /** NewMessage message */
    message?: string;
}

/** Represents a NewMessage. */
export class NewMessage {

    /**
     * Constructs a new NewMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: INewMessage);

    /** NewMessage message. */
    public message: string;

    /**
     * Creates a new NewMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NewMessage instance
     */
    public static create(properties?: INewMessage): NewMessage;

    /**
     * Encodes the specified NewMessage message. Does not implicitly {@link NewMessage.verify|verify} messages.
     * @param message NewMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INewMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NewMessage message, length delimited. Does not implicitly {@link NewMessage.verify|verify} messages.
     * @param message NewMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INewMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NewMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NewMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewMessage;

    /**
     * Decodes a NewMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NewMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewMessage;

    /**
     * Verifies a NewMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NewMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NewMessage
     */
    public static fromObject(object: { [k: string]: any }): NewMessage;

    /**
     * Creates a plain object from a NewMessage message. Also converts values to other types if specified.
     * @param message NewMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NewMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NewMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserList. */
export interface IUserList {

    /** UserList user */
    user?: UserList.IUser[];
}

/** Represents a UserList. */
export class UserList {

    /**
     * Constructs a new UserList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserList);

    /** UserList user. */
    public user: UserList.IUser[];

    /**
     * Creates a new UserList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserList instance
     */
    public static create(properties?: IUserList): UserList;

    /**
     * Encodes the specified UserList message. Does not implicitly {@link UserList.verify|verify} messages.
     * @param message UserList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserList message, length delimited. Does not implicitly {@link UserList.verify|verify} messages.
     * @param message UserList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserList;

    /**
     * Decodes a UserList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserList;

    /**
     * Verifies a UserList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserList
     */
    public static fromObject(object: { [k: string]: any }): UserList;

    /**
     * Creates a plain object from a UserList message. Also converts values to other types if specified.
     * @param message UserList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace UserList {

    /** Properties of a User. */
    interface IUser {

        /** User userId */
        userId?: number;

        /** User displayName */
        displayName?: string;

        /** User userData */
        userData?: UserList.User.IUserData;

        /** User banData */
        banData?: UserList.User.IBanData;
    }

    /** Represents a User. */
    class User {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserList.IUser);

        /** User userId. */
        public userId: number;

        /** User displayName. */
        public displayName: string;

        /** User userData. */
        public userData?: (UserList.User.IUserData|null);

        /** User banData. */
        public banData?: (UserList.User.IBanData|null);

        /** User userState. */
        public userState?: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: UserList.IUser): UserList.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link UserList.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserList.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link UserList.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserList.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserList.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserList.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): UserList.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserList.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace User {

        /** Properties of a UserData. */
        interface IUserData {

            /** UserData registered */
            registered?: boolean;

            /** UserData moderator */
            moderator?: boolean;

            /** UserData streamer */
            streamer?: boolean;

            /** UserData ptvAdmin */
            ptvAdmin?: boolean;

            /** UserData basic */
            basic?: boolean;

            /** UserData premium */
            premium?: boolean;

            /** UserData subscriber */
            subscriber?: boolean;

            /** UserData color */
            color?: string;

            /** UserData ignoring */
            ignoring?: boolean;

            /** UserData bot */
            bot?: boolean;
        }

        /** Represents a UserData. */
        class UserData {

            /**
             * Constructs a new UserData.
             * @param [properties] Properties to set
             */
            constructor(properties?: UserList.User.IUserData);

            /** UserData registered. */
            public registered: boolean;

            /** UserData moderator. */
            public moderator: boolean;

            /** UserData streamer. */
            public streamer: boolean;

            /** UserData ptvAdmin. */
            public ptvAdmin: boolean;

            /** UserData basic. */
            public basic: boolean;

            /** UserData premium. */
            public premium: boolean;

            /** UserData subscriber. */
            public subscriber: boolean;

            /** UserData color. */
            public color: string;

            /** UserData ignoring. */
            public ignoring: boolean;

            /** UserData bot. */
            public bot: boolean;

            /**
             * Creates a new UserData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserData instance
             */
            public static create(properties?: UserList.User.IUserData): UserList.User.UserData;

            /**
             * Encodes the specified UserData message. Does not implicitly {@link UserList.User.UserData.verify|verify} messages.
             * @param message UserData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UserList.User.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserData message, length delimited. Does not implicitly {@link UserList.User.UserData.verify|verify} messages.
             * @param message UserData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UserList.User.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserList.User.UserData;

            /**
             * Decodes a UserData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserList.User.UserData;

            /**
             * Verifies a UserData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserData
             */
            public static fromObject(object: { [k: string]: any }): UserList.User.UserData;

            /**
             * Creates a plain object from a UserData message. Also converts values to other types if specified.
             * @param message UserData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UserList.User.UserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BanData. */
        interface IBanData {

            /** BanData isShadowBan */
            isShadowBan?: boolean;
        }

        /** Represents a BanData. */
        class BanData {

            /**
             * Constructs a new BanData.
             * @param [properties] Properties to set
             */
            constructor(properties?: UserList.User.IBanData);

            /** BanData isShadowBan. */
            public isShadowBan: boolean;

            /**
             * Creates a new BanData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BanData instance
             */
            public static create(properties?: UserList.User.IBanData): UserList.User.BanData;

            /**
             * Encodes the specified BanData message. Does not implicitly {@link UserList.User.BanData.verify|verify} messages.
             * @param message BanData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UserList.User.IBanData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BanData message, length delimited. Does not implicitly {@link UserList.User.BanData.verify|verify} messages.
             * @param message BanData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UserList.User.IBanData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BanData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BanData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserList.User.BanData;

            /**
             * Decodes a BanData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BanData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserList.User.BanData;

            /**
             * Verifies a BanData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BanData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BanData
             */
            public static fromObject(object: { [k: string]: any }): UserList.User.BanData;

            /**
             * Creates a plain object from a BanData message. Also converts values to other types if specified.
             * @param message BanData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UserList.User.BanData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BanData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Properties of a ChatMessage. */
export interface IChatMessage {

    /** ChatMessage id */
    id?: number;

    /** ChatMessage userId */
    userId?: number;

    /** ChatMessage displayName */
    displayName?: string;

    /** ChatMessage message */
    message?: string;

    /** ChatMessage registered */
    registered?: boolean;

    /** ChatMessage moderator */
    moderator?: boolean;

    /** ChatMessage streamer */
    streamer?: boolean;

    /** ChatMessage ptvAdmin */
    ptvAdmin?: boolean;

    /** ChatMessage basic */
    basic?: boolean;

    /** ChatMessage premium */
    premium?: boolean;

    /** ChatMessage subscriber */
    subscriber?: boolean;

    /** ChatMessage color */
    color?: string;

    /** ChatMessage timeStamp */
    timeStamp?: (number|Long);

    /** ChatMessage isMeMessage */
    isMeMessage?: boolean;

    /** ChatMessage mentions */
    mentions?: ChatMessage.IMention[];

    /** ChatMessage customEmotes */
    customEmotes?: ChatMessage.ICustomEmote[];

    /** ChatMessage bot */
    bot?: boolean;
}

/** Represents a ChatMessage. */
export class ChatMessage {

    /**
     * Constructs a new ChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatMessage);

    /** ChatMessage id. */
    public id: number;

    /** ChatMessage userId. */
    public userId: number;

    /** ChatMessage displayName. */
    public displayName: string;

    /** ChatMessage message. */
    public message: string;

    /** ChatMessage registered. */
    public registered: boolean;

    /** ChatMessage moderator. */
    public moderator: boolean;

    /** ChatMessage streamer. */
    public streamer: boolean;

    /** ChatMessage ptvAdmin. */
    public ptvAdmin: boolean;

    /** ChatMessage basic. */
    public basic: boolean;

    /** ChatMessage premium. */
    public premium: boolean;

    /** ChatMessage subscriber. */
    public subscriber: boolean;

    /** ChatMessage color. */
    public color: string;

    /** ChatMessage timeStamp. */
    public timeStamp: (number|Long);

    /** ChatMessage isMeMessage. */
    public isMeMessage: boolean;

    /** ChatMessage mentions. */
    public mentions: ChatMessage.IMention[];

    /** ChatMessage customEmotes. */
    public customEmotes: ChatMessage.ICustomEmote[];

    /** ChatMessage bot. */
    public bot: boolean;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessage instance
     */
    public static create(properties?: IChatMessage): ChatMessage;

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage;

    /**
     * Verifies a ChatMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatMessage
     */
    public static fromObject(object: { [k: string]: any }): ChatMessage;

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @param message ChatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ChatMessage {

    /** Properties of a Mention. */
    interface IMention {

        /** Mention userId */
        userId?: number;

        /** Mention displayName */
        displayName?: string;

        /** Mention color */
        color?: string;
    }

    /** Represents a Mention. */
    class Mention {

        /**
         * Constructs a new Mention.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatMessage.IMention);

        /** Mention userId. */
        public userId: number;

        /** Mention displayName. */
        public displayName: string;

        /** Mention color. */
        public color: string;

        /**
         * Creates a new Mention instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mention instance
         */
        public static create(properties?: ChatMessage.IMention): ChatMessage.Mention;

        /**
         * Encodes the specified Mention message. Does not implicitly {@link ChatMessage.Mention.verify|verify} messages.
         * @param message Mention message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChatMessage.IMention, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Mention message, length delimited. Does not implicitly {@link ChatMessage.Mention.verify|verify} messages.
         * @param message Mention message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ChatMessage.IMention, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mention message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Mention
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage.Mention;

        /**
         * Decodes a Mention message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Mention
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage.Mention;

        /**
         * Verifies a Mention message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Mention message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Mention
         */
        public static fromObject(object: { [k: string]: any }): ChatMessage.Mention;

        /**
         * Creates a plain object from a Mention message. Also converts values to other types if specified.
         * @param message Mention
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChatMessage.Mention, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Mention to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CustomEmote. */
    interface ICustomEmote {

        /** CustomEmote id */
        id?: (number|Long);

        /** CustomEmote Channel */
        Channel?: string;

        /** CustomEmote Alias */
        Alias?: string;
    }

    /** Represents a CustomEmote. */
    class CustomEmote {

        /**
         * Constructs a new CustomEmote.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatMessage.ICustomEmote);

        /** CustomEmote id. */
        public id: (number|Long);

        /** CustomEmote Channel. */
        public Channel: string;

        /** CustomEmote Alias. */
        public Alias: string;

        /**
         * Creates a new CustomEmote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomEmote instance
         */
        public static create(properties?: ChatMessage.ICustomEmote): ChatMessage.CustomEmote;

        /**
         * Encodes the specified CustomEmote message. Does not implicitly {@link ChatMessage.CustomEmote.verify|verify} messages.
         * @param message CustomEmote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChatMessage.ICustomEmote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomEmote message, length delimited. Does not implicitly {@link ChatMessage.CustomEmote.verify|verify} messages.
         * @param message CustomEmote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ChatMessage.ICustomEmote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomEmote message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CustomEmote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage.CustomEmote;

        /**
         * Decodes a CustomEmote message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CustomEmote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage.CustomEmote;

        /**
         * Verifies a CustomEmote message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CustomEmote message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomEmote
         */
        public static fromObject(object: { [k: string]: any }): ChatMessage.CustomEmote;

        /**
         * Creates a plain object from a CustomEmote message. Also converts values to other types if specified.
         * @param message CustomEmote
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChatMessage.CustomEmote, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomEmote to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a GlobalMessage. */
export interface IGlobalMessage {

    /** GlobalMessage message */
    message?: string;
}

/** Represents a GlobalMessage. */
export class GlobalMessage {

    /**
     * Constructs a new GlobalMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGlobalMessage);

    /** GlobalMessage message. */
    public message: string;

    /**
     * Creates a new GlobalMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GlobalMessage instance
     */
    public static create(properties?: IGlobalMessage): GlobalMessage;

    /**
     * Encodes the specified GlobalMessage message. Does not implicitly {@link GlobalMessage.verify|verify} messages.
     * @param message GlobalMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGlobalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GlobalMessage message, length delimited. Does not implicitly {@link GlobalMessage.verify|verify} messages.
     * @param message GlobalMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGlobalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GlobalMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GlobalMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GlobalMessage;

    /**
     * Decodes a GlobalMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GlobalMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GlobalMessage;

    /**
     * Verifies a GlobalMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GlobalMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GlobalMessage
     */
    public static fromObject(object: { [k: string]: any }): GlobalMessage;

    /**
     * Creates a plain object from a GlobalMessage message. Also converts values to other types if specified.
     * @param message GlobalMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GlobalMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GlobalMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Whisper. */
export interface IWhisper {

    /** Whisper id */
    id?: number;

    /** Whisper userId */
    userId?: number;

    /** Whisper displayName */
    displayName?: string;

    /** Whisper message */
    message?: string;

    /** Whisper incomming */
    incomming?: boolean;

    /** Whisper timeStamp */
    timeStamp?: (number|Long);

    /** Whisper customEmotes */
    customEmotes?: Whisper.ICustomEmote[];

    /** Whisper bot */
    bot?: boolean;
}

/** Represents a Whisper. */
export class Whisper {

    /**
     * Constructs a new Whisper.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWhisper);

    /** Whisper id. */
    public id: number;

    /** Whisper userId. */
    public userId: number;

    /** Whisper displayName. */
    public displayName: string;

    /** Whisper message. */
    public message: string;

    /** Whisper incomming. */
    public incomming: boolean;

    /** Whisper timeStamp. */
    public timeStamp: (number|Long);

    /** Whisper customEmotes. */
    public customEmotes: Whisper.ICustomEmote[];

    /** Whisper bot. */
    public bot: boolean;

    /**
     * Creates a new Whisper instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Whisper instance
     */
    public static create(properties?: IWhisper): Whisper;

    /**
     * Encodes the specified Whisper message. Does not implicitly {@link Whisper.verify|verify} messages.
     * @param message Whisper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWhisper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Whisper message, length delimited. Does not implicitly {@link Whisper.verify|verify} messages.
     * @param message Whisper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWhisper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Whisper message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Whisper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Whisper;

    /**
     * Decodes a Whisper message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Whisper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Whisper;

    /**
     * Verifies a Whisper message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Whisper message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Whisper
     */
    public static fromObject(object: { [k: string]: any }): Whisper;

    /**
     * Creates a plain object from a Whisper message. Also converts values to other types if specified.
     * @param message Whisper
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Whisper, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Whisper to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Whisper {

    /** Properties of a CustomEmote. */
    interface ICustomEmote {

        /** CustomEmote id */
        id?: (number|Long);

        /** CustomEmote Channel */
        Channel?: string;

        /** CustomEmote Alias */
        Alias?: string;
    }

    /** Represents a CustomEmote. */
    class CustomEmote {

        /**
         * Constructs a new CustomEmote.
         * @param [properties] Properties to set
         */
        constructor(properties?: Whisper.ICustomEmote);

        /** CustomEmote id. */
        public id: (number|Long);

        /** CustomEmote Channel. */
        public Channel: string;

        /** CustomEmote Alias. */
        public Alias: string;

        /**
         * Creates a new CustomEmote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomEmote instance
         */
        public static create(properties?: Whisper.ICustomEmote): Whisper.CustomEmote;

        /**
         * Encodes the specified CustomEmote message. Does not implicitly {@link Whisper.CustomEmote.verify|verify} messages.
         * @param message CustomEmote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Whisper.ICustomEmote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomEmote message, length delimited. Does not implicitly {@link Whisper.CustomEmote.verify|verify} messages.
         * @param message CustomEmote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Whisper.ICustomEmote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomEmote message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CustomEmote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Whisper.CustomEmote;

        /**
         * Decodes a CustomEmote message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CustomEmote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Whisper.CustomEmote;

        /**
         * Verifies a CustomEmote message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CustomEmote message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomEmote
         */
        public static fromObject(object: { [k: string]: any }): Whisper.CustomEmote;

        /**
         * Creates a plain object from a CustomEmote message. Also converts values to other types if specified.
         * @param message CustomEmote
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Whisper.CustomEmote, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomEmote to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a ServerMessage. */
export interface IServerMessage {

    /** ServerMessage message */
    message?: string;
}

/** Represents a ServerMessage. */
export class ServerMessage {

    /**
     * Constructs a new ServerMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerMessage);

    /** ServerMessage message. */
    public message: string;

    /**
     * Creates a new ServerMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerMessage instance
     */
    public static create(properties?: IServerMessage): ServerMessage;

    /**
     * Encodes the specified ServerMessage message. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @param message ServerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @param message ServerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerMessage;

    /**
     * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerMessage;

    /**
     * Verifies a ServerMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerMessage
     */
    public static fromObject(object: { [k: string]: any }): ServerMessage;

    /**
     * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
     * @param message ServerMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommandHelp. */
export interface ICommandHelp {

    /** CommandHelp commands */
    commands?: CommandHelp.ICommand[];
}

/** Represents a CommandHelp. */
export class CommandHelp {

    /**
     * Constructs a new CommandHelp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommandHelp);

    /** CommandHelp commands. */
    public commands: CommandHelp.ICommand[];

    /**
     * Creates a new CommandHelp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommandHelp instance
     */
    public static create(properties?: ICommandHelp): CommandHelp;

    /**
     * Encodes the specified CommandHelp message. Does not implicitly {@link CommandHelp.verify|verify} messages.
     * @param message CommandHelp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommandHelp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommandHelp message, length delimited. Does not implicitly {@link CommandHelp.verify|verify} messages.
     * @param message CommandHelp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommandHelp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommandHelp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommandHelp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommandHelp;

    /**
     * Decodes a CommandHelp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommandHelp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommandHelp;

    /**
     * Verifies a CommandHelp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommandHelp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommandHelp
     */
    public static fromObject(object: { [k: string]: any }): CommandHelp;

    /**
     * Creates a plain object from a CommandHelp message. Also converts values to other types if specified.
     * @param message CommandHelp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommandHelp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommandHelp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace CommandHelp {

    /** Properties of a Command. */
    interface ICommand {

        /** Command triggers */
        triggers?: string[];

        /** Command description */
        description?: string;
    }

    /** Represents a Command. */
    class Command {

        /**
         * Constructs a new Command.
         * @param [properties] Properties to set
         */
        constructor(properties?: CommandHelp.ICommand);

        /** Command triggers. */
        public triggers: string[];

        /** Command description. */
        public description: string;

        /**
         * Creates a new Command instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Command instance
         */
        public static create(properties?: CommandHelp.ICommand): CommandHelp.Command;

        /**
         * Encodes the specified Command message. Does not implicitly {@link CommandHelp.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CommandHelp.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link CommandHelp.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CommandHelp.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommandHelp.Command;

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommandHelp.Command;

        /**
         * Verifies a Command message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Command
         */
        public static fromObject(object: { [k: string]: any }): CommandHelp.Command;

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param message Command
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CommandHelp.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Command to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a Control. */
export interface IControl {

    /** Control messageType */
    messageType?: Control.MessageType;

    /** Control dataBool */
    dataBool?: boolean;
}

/** Represents a Control. */
export class Control {

    /**
     * Constructs a new Control.
     * @param [properties] Properties to set
     */
    constructor(properties?: IControl);

    /** Control messageType. */
    public messageType: Control.MessageType;

    /** Control dataBool. */
    public dataBool: boolean;

    /**
     * Creates a new Control instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Control instance
     */
    public static create(properties?: IControl): Control;

    /**
     * Encodes the specified Control message. Does not implicitly {@link Control.verify|verify} messages.
     * @param message Control message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IControl, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Control message, length delimited. Does not implicitly {@link Control.verify|verify} messages.
     * @param message Control message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IControl, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Control message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Control
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Control;

    /**
     * Decodes a Control message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Control
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Control;

    /**
     * Verifies a Control message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Control message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Control
     */
    public static fromObject(object: { [k: string]: any }): Control;

    /**
     * Creates a plain object from a Control message. Also converts values to other types if specified.
     * @param message Control
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Control, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Control to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Control {

    /** MessageType enum. */
    enum MessageType {
        END_HISTORY = 0,
        KICK = 1,
        GAMING = 2,
        ADULT = 3,
        COMMISSIONS = 4,
        UNUSED_COMMISSION_DESCRIPTION = 5,
        UNUSED_DESCRIPTION = 6,
        CONTENT_TYPE = 7,
        CAN_TALK = 8,
        SHOW_POLL_CREATOR = 9,
        UNUSED_SHOW_RAFFLE_CREATOR = 10,
        NAME_TAKEN = 11,
        HIDE_POLL = 12,
        AWAY = 13,
        JWT_SUCCESS = 14,
        ENABLE_WHISPERS = 15,
        ALLOW_LINKS = 16
    }
}

/** Properties of an AdminControl. */
export interface IAdminControl {

    /** AdminControl messageType */
    messageType?: AdminControl.MessageType;
}

/** Represents an AdminControl. */
export class AdminControl {

    /**
     * Constructs a new AdminControl.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAdminControl);

    /** AdminControl messageType. */
    public messageType: AdminControl.MessageType;

    /**
     * Creates a new AdminControl instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdminControl instance
     */
    public static create(properties?: IAdminControl): AdminControl;

    /**
     * Encodes the specified AdminControl message. Does not implicitly {@link AdminControl.verify|verify} messages.
     * @param message AdminControl message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAdminControl, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AdminControl message, length delimited. Does not implicitly {@link AdminControl.verify|verify} messages.
     * @param message AdminControl message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAdminControl, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AdminControl message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdminControl
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AdminControl;

    /**
     * Decodes an AdminControl message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdminControl
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AdminControl;

    /**
     * Verifies an AdminControl message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AdminControl message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AdminControl
     */
    public static fromObject(object: { [k: string]: any }): AdminControl;

    /**
     * Creates a plain object from an AdminControl message. Also converts values to other types if specified.
     * @param message AdminControl
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AdminControl, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AdminControl to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace AdminControl {

    /** MessageType enum. */
    enum MessageType {
        ADULT = 0,
        GAMING = 1,
        MOVIE = 2
    }
}

/** Properties of an OnlineState. */
export interface IOnlineState {

    /** OnlineState isLive */
    isLive?: boolean;

    /** OnlineState viewers */
    viewers?: number;

    /** OnlineState channel */
    channel?: number;

    /** OnlineState channelName */
    channelName?: string;
}

/** Represents an OnlineState. */
export class OnlineState {

    /**
     * Constructs a new OnlineState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOnlineState);

    /** OnlineState isLive. */
    public isLive: boolean;

    /** OnlineState viewers. */
    public viewers: number;

    /** OnlineState channel. */
    public channel: number;

    /** OnlineState channelName. */
    public channelName: string;

    /**
     * Creates a new OnlineState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OnlineState instance
     */
    public static create(properties?: IOnlineState): OnlineState;

    /**
     * Encodes the specified OnlineState message. Does not implicitly {@link OnlineState.verify|verify} messages.
     * @param message OnlineState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOnlineState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OnlineState message, length delimited. Does not implicitly {@link OnlineState.verify|verify} messages.
     * @param message OnlineState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOnlineState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OnlineState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OnlineState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlineState;

    /**
     * Decodes an OnlineState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OnlineState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlineState;

    /**
     * Verifies an OnlineState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OnlineState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OnlineState
     */
    public static fromObject(object: { [k: string]: any }): OnlineState;

    /**
     * Creates a plain object from an OnlineState message. Also converts values to other types if specified.
     * @param message OnlineState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OnlineState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OnlineState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Multistream. */
export interface IMultistream {

    /** Multistream host */
    host?: Multistream.IChannel;

    /** Multistream guests */
    guests?: Multistream.IChannel[];
}

/** Represents a Multistream. */
export class Multistream {

    /**
     * Constructs a new Multistream.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMultistream);

    /** Multistream host. */
    public host?: (Multistream.IChannel|null);

    /** Multistream guests. */
    public guests: Multistream.IChannel[];

    /**
     * Creates a new Multistream instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Multistream instance
     */
    public static create(properties?: IMultistream): Multistream;

    /**
     * Encodes the specified Multistream message. Does not implicitly {@link Multistream.verify|verify} messages.
     * @param message Multistream message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMultistream, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Multistream message, length delimited. Does not implicitly {@link Multistream.verify|verify} messages.
     * @param message Multistream message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMultistream, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Multistream message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Multistream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Multistream;

    /**
     * Decodes a Multistream message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Multistream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Multistream;

    /**
     * Verifies a Multistream message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Multistream message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Multistream
     */
    public static fromObject(object: { [k: string]: any }): Multistream;

    /**
     * Creates a plain object from a Multistream message. Also converts values to other types if specified.
     * @param message Multistream
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Multistream, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Multistream to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Multistream {

    /** Properties of a Channel. */
    interface IChannel {

        /** Channel channel */
        channel?: number;

        /** Channel channelName */
        channelName?: string;
    }

    /** Represents a Channel. */
    class Channel {

        /**
         * Constructs a new Channel.
         * @param [properties] Properties to set
         */
        constructor(properties?: Multistream.IChannel);

        /** Channel channel. */
        public channel: number;

        /** Channel channelName. */
        public channelName: string;

        /**
         * Creates a new Channel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Channel instance
         */
        public static create(properties?: Multistream.IChannel): Multistream.Channel;

        /**
         * Encodes the specified Channel message. Does not implicitly {@link Multistream.Channel.verify|verify} messages.
         * @param message Channel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Multistream.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Channel message, length delimited. Does not implicitly {@link Multistream.Channel.verify|verify} messages.
         * @param message Channel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Multistream.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Channel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Channel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Multistream.Channel;

        /**
         * Decodes a Channel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Channel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Multistream.Channel;

        /**
         * Verifies a Channel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Channel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Channel
         */
        public static fromObject(object: { [k: string]: any }): Multistream.Channel;

        /**
         * Creates a plain object from a Channel message. Also converts values to other types if specified.
         * @param message Channel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Multistream.Channel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Channel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a Color. */
export interface IColor {

    /** Color color */
    color?: string;
}

/** Represents a Color. */
export class Color {

    /**
     * Constructs a new Color.
     * @param [properties] Properties to set
     */
    constructor(properties?: IColor);

    /** Color color. */
    public color: string;

    /**
     * Creates a new Color instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Color instance
     */
    public static create(properties?: IColor): Color;

    /**
     * Encodes the specified Color message. Does not implicitly {@link Color.verify|verify} messages.
     * @param message Color message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Color message, length delimited. Does not implicitly {@link Color.verify|verify} messages.
     * @param message Color message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Color message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Color
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Color;

    /**
     * Decodes a Color message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Color
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Color;

    /**
     * Verifies a Color message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Color message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Color
     */
    public static fromObject(object: { [k: string]: any }): Color;

    /**
     * Creates a plain object from a Color message. Also converts values to other types if specified.
     * @param message Color
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Color, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Color to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an IgnoresUpdated. */
export interface IIgnoresUpdated {

    /** IgnoresUpdated ignores */
    ignores?: string[];
}

/** Represents an IgnoresUpdated. */
export class IgnoresUpdated {

    /**
     * Constructs a new IgnoresUpdated.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIgnoresUpdated);

    /** IgnoresUpdated ignores. */
    public ignores: string[];

    /**
     * Creates a new IgnoresUpdated instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IgnoresUpdated instance
     */
    public static create(properties?: IIgnoresUpdated): IgnoresUpdated;

    /**
     * Encodes the specified IgnoresUpdated message. Does not implicitly {@link IgnoresUpdated.verify|verify} messages.
     * @param message IgnoresUpdated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IIgnoresUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified IgnoresUpdated message, length delimited. Does not implicitly {@link IgnoresUpdated.verify|verify} messages.
     * @param message IgnoresUpdated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IIgnoresUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IgnoresUpdated message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IgnoresUpdated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IgnoresUpdated;

    /**
     * Decodes an IgnoresUpdated message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns IgnoresUpdated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IgnoresUpdated;

    /**
     * Verifies an IgnoresUpdated message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an IgnoresUpdated message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns IgnoresUpdated
     */
    public static fromObject(object: { [k: string]: any }): IgnoresUpdated;

    /**
     * Creates a plain object from an IgnoresUpdated message. Also converts values to other types if specified.
     * @param message IgnoresUpdated
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: IgnoresUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this IgnoresUpdated to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ModifyIgnores. */
export interface IModifyIgnores {

    /** ModifyIgnores ignoreName */
    ignoreName?: string;

    /** ModifyIgnores isAdding */
    isAdding?: boolean;
}

/** Represents a ModifyIgnores. */
export class ModifyIgnores {

    /**
     * Constructs a new ModifyIgnores.
     * @param [properties] Properties to set
     */
    constructor(properties?: IModifyIgnores);

    /** ModifyIgnores ignoreName. */
    public ignoreName: string;

    /** ModifyIgnores isAdding. */
    public isAdding: boolean;

    /**
     * Creates a new ModifyIgnores instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModifyIgnores instance
     */
    public static create(properties?: IModifyIgnores): ModifyIgnores;

    /**
     * Encodes the specified ModifyIgnores message. Does not implicitly {@link ModifyIgnores.verify|verify} messages.
     * @param message ModifyIgnores message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IModifyIgnores, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ModifyIgnores message, length delimited. Does not implicitly {@link ModifyIgnores.verify|verify} messages.
     * @param message ModifyIgnores message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IModifyIgnores, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModifyIgnores message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ModifyIgnores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModifyIgnores;

    /**
     * Decodes a ModifyIgnores message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ModifyIgnores
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModifyIgnores;

    /**
     * Verifies a ModifyIgnores message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ModifyIgnores message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ModifyIgnores
     */
    public static fromObject(object: { [k: string]: any }): ModifyIgnores;

    /**
     * Creates a plain object from a ModifyIgnores message. Also converts values to other types if specified.
     * @param message ModifyIgnores
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ModifyIgnores, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ModifyIgnores to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RemoveMessage. */
export interface IRemoveMessage {

    /** RemoveMessage id */
    id?: number;

    /** RemoveMessage executionerId */
    executionerId?: number;

    /** RemoveMessage executionerDisplayName */
    executionerDisplayName?: string;
}

/** Represents a RemoveMessage. */
export class RemoveMessage {

    /**
     * Constructs a new RemoveMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRemoveMessage);

    /** RemoveMessage id. */
    public id: number;

    /** RemoveMessage executionerId. */
    public executionerId: number;

    /** RemoveMessage executionerDisplayName. */
    public executionerDisplayName: string;

    /**
     * Creates a new RemoveMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RemoveMessage instance
     */
    public static create(properties?: IRemoveMessage): RemoveMessage;

    /**
     * Encodes the specified RemoveMessage message. Does not implicitly {@link RemoveMessage.verify|verify} messages.
     * @param message RemoveMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRemoveMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RemoveMessage message, length delimited. Does not implicitly {@link RemoveMessage.verify|verify} messages.
     * @param message RemoveMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRemoveMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RemoveMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RemoveMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RemoveMessage;

    /**
     * Decodes a RemoveMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RemoveMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RemoveMessage;

    /**
     * Verifies a RemoveMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RemoveMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RemoveMessage
     */
    public static fromObject(object: { [k: string]: any }): RemoveMessage;

    /**
     * Creates a plain object from a RemoveMessage message. Also converts values to other types if specified.
     * @param message RemoveMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RemoveMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RemoveMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClearUserMessages. */
export interface IClearUserMessages {

    /** ClearUserMessages username */
    username?: string;

    /** ClearUserMessages executionerId */
    executionerId?: number;

    /** ClearUserMessages executionerDisplayName */
    executionerDisplayName?: string;
}

/** Represents a ClearUserMessages. */
export class ClearUserMessages {

    /**
     * Constructs a new ClearUserMessages.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClearUserMessages);

    /** ClearUserMessages username. */
    public username: string;

    /** ClearUserMessages executionerId. */
    public executionerId: number;

    /** ClearUserMessages executionerDisplayName. */
    public executionerDisplayName: string;

    /**
     * Creates a new ClearUserMessages instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClearUserMessages instance
     */
    public static create(properties?: IClearUserMessages): ClearUserMessages;

    /**
     * Encodes the specified ClearUserMessages message. Does not implicitly {@link ClearUserMessages.verify|verify} messages.
     * @param message ClearUserMessages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClearUserMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClearUserMessages message, length delimited. Does not implicitly {@link ClearUserMessages.verify|verify} messages.
     * @param message ClearUserMessages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClearUserMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClearUserMessages message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClearUserMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClearUserMessages;

    /**
     * Decodes a ClearUserMessages message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClearUserMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClearUserMessages;

    /**
     * Verifies a ClearUserMessages message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClearUserMessages message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClearUserMessages
     */
    public static fromObject(object: { [k: string]: any }): ClearUserMessages;

    /**
     * Creates a plain object from a ClearUserMessages message. Also converts values to other types if specified.
     * @param message ClearUserMessages
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClearUserMessages, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClearUserMessages to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClearHistory. */
export interface IClearHistory {

    /** ClearHistory executionerId */
    executionerId?: number;

    /** ClearHistory executionerDisplayName */
    executionerDisplayName?: string;
}

/** Represents a ClearHistory. */
export class ClearHistory {

    /**
     * Constructs a new ClearHistory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClearHistory);

    /** ClearHistory executionerId. */
    public executionerId: number;

    /** ClearHistory executionerDisplayName. */
    public executionerDisplayName: string;

    /**
     * Creates a new ClearHistory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClearHistory instance
     */
    public static create(properties?: IClearHistory): ClearHistory;

    /**
     * Encodes the specified ClearHistory message. Does not implicitly {@link ClearHistory.verify|verify} messages.
     * @param message ClearHistory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClearHistory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClearHistory message, length delimited. Does not implicitly {@link ClearHistory.verify|verify} messages.
     * @param message ClearHistory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClearHistory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClearHistory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClearHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClearHistory;

    /**
     * Decodes a ClearHistory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClearHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClearHistory;

    /**
     * Verifies a ClearHistory message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClearHistory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClearHistory
     */
    public static fromObject(object: { [k: string]: any }): ClearHistory;

    /**
     * Creates a plain object from a ClearHistory message. Also converts values to other types if specified.
     * @param message ClearHistory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClearHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClearHistory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Kick. */
export interface IKick {

    /** Kick userId */
    userId?: number;

    /** Kick displayName */
    displayName?: string;

    /** Kick executionerId */
    executionerId?: number;

    /** Kick executionerDisplayName */
    executionerDisplayName?: string;
}

/** Represents a Kick. */
export class Kick {

    /**
     * Constructs a new Kick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IKick);

    /** Kick userId. */
    public userId: number;

    /** Kick displayName. */
    public displayName: string;

    /** Kick executionerId. */
    public executionerId: number;

    /** Kick executionerDisplayName. */
    public executionerDisplayName: string;

    /**
     * Creates a new Kick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Kick instance
     */
    public static create(properties?: IKick): Kick;

    /**
     * Encodes the specified Kick message. Does not implicitly {@link Kick.verify|verify} messages.
     * @param message Kick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IKick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Kick message, length delimited. Does not implicitly {@link Kick.verify|verify} messages.
     * @param message Kick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IKick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Kick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Kick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Kick;

    /**
     * Decodes a Kick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Kick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Kick;

    /**
     * Verifies a Kick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Kick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Kick
     */
    public static fromObject(object: { [k: string]: any }): Kick;

    /**
     * Creates a plain object from a Kick message. Also converts values to other types if specified.
     * @param message Kick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Kick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Kick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Ban. */
export interface IBan {

    /** Ban userId */
    userId?: number;

    /** Ban displayName */
    displayName?: string;

    /** Ban executionerId */
    executionerId?: number;

    /** Ban executionerDisplayName */
    executionerDisplayName?: string;

    /** Ban isShadowBan */
    isShadowBan?: boolean;
}

/** Represents a Ban. */
export class Ban {

    /**
     * Constructs a new Ban.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBan);

    /** Ban userId. */
    public userId: number;

    /** Ban displayName. */
    public displayName: string;

    /** Ban executionerId. */
    public executionerId: number;

    /** Ban executionerDisplayName. */
    public executionerDisplayName: string;

    /** Ban isShadowBan. */
    public isShadowBan: boolean;

    /**
     * Creates a new Ban instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ban instance
     */
    public static create(properties?: IBan): Ban;

    /**
     * Encodes the specified Ban message. Does not implicitly {@link Ban.verify|verify} messages.
     * @param message Ban message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBan, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Ban message, length delimited. Does not implicitly {@link Ban.verify|verify} messages.
     * @param message Ban message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBan, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Ban message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ban
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ban;

    /**
     * Decodes a Ban message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Ban
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ban;

    /**
     * Verifies a Ban message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Ban message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Ban
     */
    public static fromObject(object: { [k: string]: any }): Ban;

    /**
     * Creates a plain object from a Ban message. Also converts values to other types if specified.
     * @param message Ban
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Ban, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Ban to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UnBan. */
export interface IUnBan {

    /** UnBan userId */
    userId?: number;

    /** UnBan displayName */
    displayName?: string;

    /** UnBan executionerId */
    executionerId?: number;

    /** UnBan executionerDisplayName */
    executionerDisplayName?: string;
}

/** Represents an UnBan. */
export class UnBan {

    /**
     * Constructs a new UnBan.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnBan);

    /** UnBan userId. */
    public userId: number;

    /** UnBan displayName. */
    public displayName: string;

    /** UnBan executionerId. */
    public executionerId: number;

    /** UnBan executionerDisplayName. */
    public executionerDisplayName: string;

    /**
     * Creates a new UnBan instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnBan instance
     */
    public static create(properties?: IUnBan): UnBan;

    /**
     * Encodes the specified UnBan message. Does not implicitly {@link UnBan.verify|verify} messages.
     * @param message UnBan message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnBan, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnBan message, length delimited. Does not implicitly {@link UnBan.verify|verify} messages.
     * @param message UnBan message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUnBan, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnBan message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnBan
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnBan;

    /**
     * Decodes an UnBan message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnBan
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnBan;

    /**
     * Verifies an UnBan message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UnBan message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnBan
     */
    public static fromObject(object: { [k: string]: any }): UnBan;

    /**
     * Creates a plain object from an UnBan message. Also converts values to other types if specified.
     * @param message UnBan
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UnBan, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UnBan to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Mod. */
export interface IMod {

    /** Mod userId */
    userId?: number;

    /** Mod displayName */
    displayName?: string;

    /** Mod isNowMod */
    isNowMod?: boolean;
}

/** Represents a Mod. */
export class Mod {

    /**
     * Constructs a new Mod.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMod);

    /** Mod userId. */
    public userId: number;

    /** Mod displayName. */
    public displayName: string;

    /** Mod isNowMod. */
    public isNowMod: boolean;

    /**
     * Creates a new Mod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Mod instance
     */
    public static create(properties?: IMod): Mod;

    /**
     * Encodes the specified Mod message. Does not implicitly {@link Mod.verify|verify} messages.
     * @param message Mod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Mod message, length delimited. Does not implicitly {@link Mod.verify|verify} messages.
     * @param message Mod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Mod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Mod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mod;

    /**
     * Decodes a Mod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Mod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mod;

    /**
     * Verifies a Mod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Mod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Mod
     */
    public static fromObject(object: { [k: string]: any }): Mod;

    /**
     * Creates a plain object from a Mod message. Also converts values to other types if specified.
     * @param message Mod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Mod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Mod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ModList. */
export interface IModList {

    /** ModList moderators */
    moderators?: ModList.IModerator[];
}

/** Represents a ModList. */
export class ModList {

    /**
     * Constructs a new ModList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IModList);

    /** ModList moderators. */
    public moderators: ModList.IModerator[];

    /**
     * Creates a new ModList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModList instance
     */
    public static create(properties?: IModList): ModList;

    /**
     * Encodes the specified ModList message. Does not implicitly {@link ModList.verify|verify} messages.
     * @param message ModList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IModList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ModList message, length delimited. Does not implicitly {@link ModList.verify|verify} messages.
     * @param message ModList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IModList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ModList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModList;

    /**
     * Decodes a ModList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ModList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModList;

    /**
     * Verifies a ModList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ModList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ModList
     */
    public static fromObject(object: { [k: string]: any }): ModList;

    /**
     * Creates a plain object from a ModList message. Also converts values to other types if specified.
     * @param message ModList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ModList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ModList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ModList {

    /** Properties of a Moderator. */
    interface IModerator {

        /** Moderator userId */
        userId?: number;

        /** Moderator displayName */
        displayName?: string;
    }

    /** Represents a Moderator. */
    class Moderator {

        /**
         * Constructs a new Moderator.
         * @param [properties] Properties to set
         */
        constructor(properties?: ModList.IModerator);

        /** Moderator userId. */
        public userId: number;

        /** Moderator displayName. */
        public displayName: string;

        /**
         * Creates a new Moderator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Moderator instance
         */
        public static create(properties?: ModList.IModerator): ModList.Moderator;

        /**
         * Encodes the specified Moderator message. Does not implicitly {@link ModList.Moderator.verify|verify} messages.
         * @param message Moderator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ModList.IModerator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Moderator message, length delimited. Does not implicitly {@link ModList.Moderator.verify|verify} messages.
         * @param message Moderator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ModList.IModerator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Moderator message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Moderator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModList.Moderator;

        /**
         * Decodes a Moderator message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Moderator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModList.Moderator;

        /**
         * Verifies a Moderator message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Moderator message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Moderator
         */
        public static fromObject(object: { [k: string]: any }): ModList.Moderator;

        /**
         * Creates a plain object from a Moderator message. Also converts values to other types if specified.
         * @param message Moderator
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ModList.Moderator, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Moderator to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a RaffleInit. */
export interface IRaffleInit {

    /** RaffleInit names */
    names?: string[];
}

/** Represents a RaffleInit. */
export class RaffleInit {

    /**
     * Constructs a new RaffleInit.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRaffleInit);

    /** RaffleInit names. */
    public names: string[];

    /**
     * Creates a new RaffleInit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RaffleInit instance
     */
    public static create(properties?: IRaffleInit): RaffleInit;

    /**
     * Encodes the specified RaffleInit message. Does not implicitly {@link RaffleInit.verify|verify} messages.
     * @param message RaffleInit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRaffleInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RaffleInit message, length delimited. Does not implicitly {@link RaffleInit.verify|verify} messages.
     * @param message RaffleInit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRaffleInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RaffleInit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RaffleInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RaffleInit;

    /**
     * Decodes a RaffleInit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RaffleInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RaffleInit;

    /**
     * Verifies a RaffleInit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RaffleInit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RaffleInit
     */
    public static fromObject(object: { [k: string]: any }): RaffleInit;

    /**
     * Creates a plain object from a RaffleInit message. Also converts values to other types if specified.
     * @param message RaffleInit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RaffleInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RaffleInit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RaffleRun. */
export interface IRaffleRun {

    /** RaffleRun winner */
    winner?: string;

    /** RaffleRun names */
    names?: string[];

    /** RaffleRun hostId */
    hostId?: number;

    /** RaffleRun hostDisplayName */
    hostDisplayName?: string;
}

/** Represents a RaffleRun. */
export class RaffleRun {

    /**
     * Constructs a new RaffleRun.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRaffleRun);

    /** RaffleRun winner. */
    public winner: string;

    /** RaffleRun names. */
    public names: string[];

    /** RaffleRun hostId. */
    public hostId: number;

    /** RaffleRun hostDisplayName. */
    public hostDisplayName: string;

    /**
     * Creates a new RaffleRun instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RaffleRun instance
     */
    public static create(properties?: IRaffleRun): RaffleRun;

    /**
     * Encodes the specified RaffleRun message. Does not implicitly {@link RaffleRun.verify|verify} messages.
     * @param message RaffleRun message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRaffleRun, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RaffleRun message, length delimited. Does not implicitly {@link RaffleRun.verify|verify} messages.
     * @param message RaffleRun message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRaffleRun, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RaffleRun message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RaffleRun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RaffleRun;

    /**
     * Decodes a RaffleRun message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RaffleRun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RaffleRun;

    /**
     * Verifies a RaffleRun message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RaffleRun message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RaffleRun
     */
    public static fromObject(object: { [k: string]: any }): RaffleRun;

    /**
     * Creates a plain object from a RaffleRun message. Also converts values to other types if specified.
     * @param message RaffleRun
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RaffleRun, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RaffleRun to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PollInit. */
export interface IPollInit {

    /** PollInit question */
    question?: string;

    /** PollInit options */
    options?: string[];

    /** PollInit hostId */
    hostId?: number;

    /** PollInit hostDisplayName */
    hostDisplayName?: string;
}

/** Represents a PollInit. */
export class PollInit {

    /**
     * Constructs a new PollInit.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPollInit);

    /** PollInit question. */
    public question: string;

    /** PollInit options. */
    public options: string[];

    /** PollInit hostId. */
    public hostId: number;

    /** PollInit hostDisplayName. */
    public hostDisplayName: string;

    /**
     * Creates a new PollInit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PollInit instance
     */
    public static create(properties?: IPollInit): PollInit;

    /**
     * Encodes the specified PollInit message. Does not implicitly {@link PollInit.verify|verify} messages.
     * @param message PollInit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPollInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollInit message, length delimited. Does not implicitly {@link PollInit.verify|verify} messages.
     * @param message PollInit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPollInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollInit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PollInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollInit;

    /**
     * Decodes a PollInit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PollInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollInit;

    /**
     * Verifies a PollInit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PollInit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PollInit
     */
    public static fromObject(object: { [k: string]: any }): PollInit;

    /**
     * Creates a plain object from a PollInit message. Also converts values to other types if specified.
     * @param message PollInit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PollInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PollInit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PollUpdate. */
export interface IPollUpdate {

    /** PollUpdate votes */
    votes?: number[];

    /** PollUpdate hostId */
    hostId?: number;

    /** PollUpdate hostDisplayName */
    hostDisplayName?: string;
}

/** Represents a PollUpdate. */
export class PollUpdate {

    /**
     * Constructs a new PollUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPollUpdate);

    /** PollUpdate votes. */
    public votes: number[];

    /** PollUpdate hostId. */
    public hostId: number;

    /** PollUpdate hostDisplayName. */
    public hostDisplayName: string;

    /**
     * Creates a new PollUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PollUpdate instance
     */
    public static create(properties?: IPollUpdate): PollUpdate;

    /**
     * Encodes the specified PollUpdate message. Does not implicitly {@link PollUpdate.verify|verify} messages.
     * @param message PollUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPollUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollUpdate message, length delimited. Does not implicitly {@link PollUpdate.verify|verify} messages.
     * @param message PollUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPollUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PollUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollUpdate;

    /**
     * Decodes a PollUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PollUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollUpdate;

    /**
     * Verifies a PollUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PollUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PollUpdate
     */
    public static fromObject(object: { [k: string]: any }): PollUpdate;

    /**
     * Creates a plain object from a PollUpdate message. Also converts values to other types if specified.
     * @param message PollUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PollUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PollUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PollResult. */
export interface IPollResult {

    /** PollResult question */
    question?: string;

    /** PollResult winners */
    winners?: string[];

    /** PollResult votes */
    votes?: number;

    /** PollResult hostId */
    hostId?: number;

    /** PollResult hostDisplayName */
    hostDisplayName?: string;
}

/** Represents a PollResult. */
export class PollResult {

    /**
     * Constructs a new PollResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPollResult);

    /** PollResult question. */
    public question: string;

    /** PollResult winners. */
    public winners: string[];

    /** PollResult votes. */
    public votes: number;

    /** PollResult hostId. */
    public hostId: number;

    /** PollResult hostDisplayName. */
    public hostDisplayName: string;

    /**
     * Creates a new PollResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PollResult instance
     */
    public static create(properties?: IPollResult): PollResult;

    /**
     * Encodes the specified PollResult message. Does not implicitly {@link PollResult.verify|verify} messages.
     * @param message PollResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPollResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollResult message, length delimited. Does not implicitly {@link PollResult.verify|verify} messages.
     * @param message PollResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPollResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PollResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollResult;

    /**
     * Decodes a PollResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PollResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollResult;

    /**
     * Verifies a PollResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PollResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PollResult
     */
    public static fromObject(object: { [k: string]: any }): PollResult;

    /**
     * Creates a plain object from a PollResult message. Also converts values to other types if specified.
     * @param message PollResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PollResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PollResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PollVote. */
export interface IPollVote {

    /** PollVote option */
    option?: number;
}

/** Represents a PollVote. */
export class PollVote {

    /**
     * Constructs a new PollVote.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPollVote);

    /** PollVote option. */
    public option: number;

    /**
     * Creates a new PollVote instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PollVote instance
     */
    public static create(properties?: IPollVote): PollVote;

    /**
     * Encodes the specified PollVote message. Does not implicitly {@link PollVote.verify|verify} messages.
     * @param message PollVote message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPollVote, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollVote message, length delimited. Does not implicitly {@link PollVote.verify|verify} messages.
     * @param message PollVote message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPollVote, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollVote message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PollVote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollVote;

    /**
     * Decodes a PollVote message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PollVote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollVote;

    /**
     * Verifies a PollVote message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PollVote message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PollVote
     */
    public static fromObject(object: { [k: string]: any }): PollVote;

    /**
     * Creates a plain object from a PollVote message. Also converts values to other types if specified.
     * @param message PollVote
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PollVote, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PollVote to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PollVoteResponse. */
export interface IPollVoteResponse {

    /** PollVoteResponse success */
    success?: boolean;
}

/** Represents a PollVoteResponse. */
export class PollVoteResponse {

    /**
     * Constructs a new PollVoteResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPollVoteResponse);

    /** PollVoteResponse success. */
    public success: boolean;

    /**
     * Creates a new PollVoteResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PollVoteResponse instance
     */
    public static create(properties?: IPollVoteResponse): PollVoteResponse;

    /**
     * Encodes the specified PollVoteResponse message. Does not implicitly {@link PollVoteResponse.verify|verify} messages.
     * @param message PollVoteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPollVoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollVoteResponse message, length delimited. Does not implicitly {@link PollVoteResponse.verify|verify} messages.
     * @param message PollVoteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPollVoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollVoteResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PollVoteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollVoteResponse;

    /**
     * Decodes a PollVoteResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PollVoteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollVoteResponse;

    /**
     * Verifies a PollVoteResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PollVoteResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PollVoteResponse
     */
    public static fromObject(object: { [k: string]: any }): PollVoteResponse;

    /**
     * Creates a plain object from a PollVoteResponse message. Also converts values to other types if specified.
     * @param message PollVoteResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PollVoteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PollVoteResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetName. */
export interface ISetName {

    /** SetName name */
    name?: string;
}

/** Represents a SetName. */
export class SetName {

    /**
     * Constructs a new SetName.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetName);

    /** SetName name. */
    public name: string;

    /**
     * Creates a new SetName instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetName instance
     */
    public static create(properties?: ISetName): SetName;

    /**
     * Encodes the specified SetName message. Does not implicitly {@link SetName.verify|verify} messages.
     * @param message SetName message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetName, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetName message, length delimited. Does not implicitly {@link SetName.verify|verify} messages.
     * @param message SetName message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetName, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetName message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetName
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetName;

    /**
     * Decodes a SetName message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetName
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetName;

    /**
     * Verifies a SetName message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetName message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetName
     */
    public static fromObject(object: { [k: string]: any }): SetName;

    /**
     * Creates a plain object from a SetName message. Also converts values to other types if specified.
     * @param message SetName
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetName, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetName to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NameConfirmation. */
export interface INameConfirmation {

    /** NameConfirmation response */
    response?: string;
}

/** Represents a NameConfirmation. */
export class NameConfirmation {

    /**
     * Constructs a new NameConfirmation.
     * @param [properties] Properties to set
     */
    constructor(properties?: INameConfirmation);

    /** NameConfirmation response. */
    public response: string;

    /**
     * Creates a new NameConfirmation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NameConfirmation instance
     */
    public static create(properties?: INameConfirmation): NameConfirmation;

    /**
     * Encodes the specified NameConfirmation message. Does not implicitly {@link NameConfirmation.verify|verify} messages.
     * @param message NameConfirmation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INameConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NameConfirmation message, length delimited. Does not implicitly {@link NameConfirmation.verify|verify} messages.
     * @param message NameConfirmation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INameConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NameConfirmation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NameConfirmation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NameConfirmation;

    /**
     * Decodes a NameConfirmation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NameConfirmation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NameConfirmation;

    /**
     * Verifies a NameConfirmation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NameConfirmation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NameConfirmation
     */
    public static fromObject(object: { [k: string]: any }): NameConfirmation;

    /**
     * Creates a plain object from a NameConfirmation message. Also converts values to other types if specified.
     * @param message NameConfirmation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NameConfirmation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NameConfirmation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ModTools. */
export interface IModTools {

    /** ModTools modToolsType */
    modToolsType?: ModTools.ModToolsType;
}

/** Represents a ModTools. */
export class ModTools {

    /**
     * Constructs a new ModTools.
     * @param [properties] Properties to set
     */
    constructor(properties?: IModTools);

    /** ModTools modToolsType. */
    public modToolsType: ModTools.ModToolsType;

    /**
     * Creates a new ModTools instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModTools instance
     */
    public static create(properties?: IModTools): ModTools;

    /**
     * Encodes the specified ModTools message. Does not implicitly {@link ModTools.verify|verify} messages.
     * @param message ModTools message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IModTools, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ModTools message, length delimited. Does not implicitly {@link ModTools.verify|verify} messages.
     * @param message ModTools message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IModTools, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModTools message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ModTools
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModTools;

    /**
     * Decodes a ModTools message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ModTools
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModTools;

    /**
     * Verifies a ModTools message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ModTools message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ModTools
     */
    public static fromObject(object: { [k: string]: any }): ModTools;

    /**
     * Creates a plain object from a ModTools message. Also converts values to other types if specified.
     * @param message ModTools
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ModTools, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ModTools to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ModTools {

    /** ModToolsType enum. */
    enum ModToolsType {
        NONE = 0,
        MODERATOR = 1,
        STREAMER = 2,
        PTV_ADMIN = 3
    }
}

/** Properties of a PollEnd. */
export interface IPollEnd {
}

/** Represents a PollEnd. */
export class PollEnd {

    /**
     * Constructs a new PollEnd.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPollEnd);

    /**
     * Creates a new PollEnd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PollEnd instance
     */
    public static create(properties?: IPollEnd): PollEnd;

    /**
     * Encodes the specified PollEnd message. Does not implicitly {@link PollEnd.verify|verify} messages.
     * @param message PollEnd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPollEnd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PollEnd message, length delimited. Does not implicitly {@link PollEnd.verify|verify} messages.
     * @param message PollEnd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPollEnd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PollEnd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PollEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PollEnd;

    /**
     * Decodes a PollEnd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PollEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PollEnd;

    /**
     * Verifies a PollEnd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PollEnd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PollEnd
     */
    public static fromObject(object: { [k: string]: any }): PollEnd;

    /**
     * Creates a plain object from a PollEnd message. Also converts values to other types if specified.
     * @param message PollEnd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PollEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PollEnd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Reminder. */
export interface IReminder {

    /** Reminder message */
    message?: string;
}

/** Represents a Reminder. */
export class Reminder {

    /**
     * Constructs a new Reminder.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReminder);

    /** Reminder message. */
    public message: string;

    /**
     * Creates a new Reminder instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Reminder instance
     */
    public static create(properties?: IReminder): Reminder;

    /**
     * Encodes the specified Reminder message. Does not implicitly {@link Reminder.verify|verify} messages.
     * @param message Reminder message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReminder, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Reminder message, length delimited. Does not implicitly {@link Reminder.verify|verify} messages.
     * @param message Reminder message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReminder, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Reminder message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Reminder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Reminder;

    /**
     * Decodes a Reminder message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Reminder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Reminder;

    /**
     * Verifies a Reminder message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Reminder message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Reminder
     */
    public static fromObject(object: { [k: string]: any }): Reminder;

    /**
     * Creates a plain object from a Reminder message. Also converts values to other types if specified.
     * @param message Reminder
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Reminder, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Reminder to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Timer. */
export interface ITimer {

    /** Timer message */
    message?: string;
}

/** Represents a Timer. */
export class Timer {

    /**
     * Constructs a new Timer.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITimer);

    /** Timer message. */
    public message: string;

    /**
     * Creates a new Timer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Timer instance
     */
    public static create(properties?: ITimer): Timer;

    /**
     * Encodes the specified Timer message. Does not implicitly {@link Timer.verify|verify} messages.
     * @param message Timer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITimer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Timer message, length delimited. Does not implicitly {@link Timer.verify|verify} messages.
     * @param message Timer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITimer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Timer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Timer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Timer;

    /**
     * Decodes a Timer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Timer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Timer;

    /**
     * Verifies a Timer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Timer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Timer
     */
    public static fromObject(object: { [k: string]: any }): Timer;

    /**
     * Creates a plain object from a Timer message. Also converts values to other types if specified.
     * @param message Timer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Timer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Timer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MonitorData. */
export interface IMonitorData {

    /** MonitorData messageContent */
    messageContent?: Uint8Array;

    /** MonitorData channel */
    channel?: number;

    /** MonitorData channelName */
    channelName?: string;
}

/** Represents a MonitorData. */
export class MonitorData {

    /**
     * Constructs a new MonitorData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMonitorData);

    /** MonitorData messageContent. */
    public messageContent: Uint8Array;

    /** MonitorData channel. */
    public channel: number;

    /** MonitorData channelName. */
    public channelName: string;

    /**
     * Creates a new MonitorData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MonitorData instance
     */
    public static create(properties?: IMonitorData): MonitorData;

    /**
     * Encodes the specified MonitorData message. Does not implicitly {@link MonitorData.verify|verify} messages.
     * @param message MonitorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMonitorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MonitorData message, length delimited. Does not implicitly {@link MonitorData.verify|verify} messages.
     * @param message MonitorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMonitorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MonitorData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MonitorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MonitorData;

    /**
     * Decodes a MonitorData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MonitorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MonitorData;

    /**
     * Verifies a MonitorData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MonitorData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MonitorData
     */
    public static fromObject(object: { [k: string]: any }): MonitorData;

    /**
     * Creates a plain object from a MonitorData message. Also converts values to other types if specified.
     * @param message MonitorData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MonitorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MonitorData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatLevel. */
export interface IChatLevel {

    /** ChatLevel chatLevel */
    chatLevel?: ChatLevel.ChatLevelType;
}

/** Represents a ChatLevel. */
export class ChatLevel {

    /**
     * Constructs a new ChatLevel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatLevel);

    /** ChatLevel chatLevel. */
    public chatLevel: ChatLevel.ChatLevelType;

    /**
     * Creates a new ChatLevel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatLevel instance
     */
    public static create(properties?: IChatLevel): ChatLevel;

    /**
     * Encodes the specified ChatLevel message. Does not implicitly {@link ChatLevel.verify|verify} messages.
     * @param message ChatLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatLevel message, length delimited. Does not implicitly {@link ChatLevel.verify|verify} messages.
     * @param message ChatLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatLevel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatLevel;

    /**
     * Decodes a ChatLevel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatLevel;

    /**
     * Verifies a ChatLevel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatLevel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatLevel
     */
    public static fromObject(object: { [k: string]: any }): ChatLevel;

    /**
     * Creates a plain object from a ChatLevel message. Also converts values to other types if specified.
     * @param message ChatLevel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatLevel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ChatLevel {

    /** ChatLevelType enum. */
    enum ChatLevelType {
        EVERYONE = 0,
        STREAMER = 1,
        STREAMER_MODERATOR = 2,
        STREAMER_MODERATOR_SUBSCRIBER = 3,
        STREAMER_MODERATOR_FOLLOWER = 4,
        STREAMER_MODERATOR_SUBSCRIBER_FOLLOWER = 5,
        NO_GUEST = 6
    }
}

/** Properties of a RequestUserlist. */
export interface IRequestUserlist {
}

/** Represents a RequestUserlist. */
export class RequestUserlist {

    /**
     * Constructs a new RequestUserlist.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestUserlist);

    /**
     * Creates a new RequestUserlist instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestUserlist instance
     */
    public static create(properties?: IRequestUserlist): RequestUserlist;

    /**
     * Encodes the specified RequestUserlist message. Does not implicitly {@link RequestUserlist.verify|verify} messages.
     * @param message RequestUserlist message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestUserlist, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestUserlist message, length delimited. Does not implicitly {@link RequestUserlist.verify|verify} messages.
     * @param message RequestUserlist message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestUserlist, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestUserlist message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestUserlist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestUserlist;

    /**
     * Decodes a RequestUserlist message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestUserlist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestUserlist;

    /**
     * Verifies a RequestUserlist message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestUserlist message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestUserlist
     */
    public static fromObject(object: { [k: string]: any }): RequestUserlist;

    /**
     * Creates a plain object from a RequestUserlist message. Also converts values to other types if specified.
     * @param message RequestUserlist
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestUserlist, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestUserlist to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserInfo. */
export interface IUserInfo {

    /** UserInfo userId */
    userId?: number;

    /** UserInfo displayName */
    displayName?: string;

    /** UserInfo registered */
    registered?: boolean;

    /** UserInfo moderator */
    moderator?: boolean;

    /** UserInfo streamer */
    streamer?: boolean;

    /** UserInfo ptvAdmin */
    ptvAdmin?: boolean;

    /** UserInfo basic */
    basic?: boolean;

    /** UserInfo premium */
    premium?: boolean;

    /** UserInfo subscriber */
    subscriber?: boolean;

    /** UserInfo color */
    color?: string;

    /** UserInfo ignoring */
    ignoring?: boolean;

    /** UserInfo banned */
    banned?: boolean;

    /** UserInfo shadowBanned */
    shadowBanned?: boolean;

    /** UserInfo bot */
    bot?: boolean;
}

/** Represents a UserInfo. */
export class UserInfo {

    /**
     * Constructs a new UserInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserInfo);

    /** UserInfo userId. */
    public userId: number;

    /** UserInfo displayName. */
    public displayName: string;

    /** UserInfo registered. */
    public registered: boolean;

    /** UserInfo moderator. */
    public moderator: boolean;

    /** UserInfo streamer. */
    public streamer: boolean;

    /** UserInfo ptvAdmin. */
    public ptvAdmin: boolean;

    /** UserInfo basic. */
    public basic: boolean;

    /** UserInfo premium. */
    public premium: boolean;

    /** UserInfo subscriber. */
    public subscriber: boolean;

    /** UserInfo color. */
    public color: string;

    /** UserInfo ignoring. */
    public ignoring: boolean;

    /** UserInfo banned. */
    public banned: boolean;

    /** UserInfo shadowBanned. */
    public shadowBanned: boolean;

    /** UserInfo bot. */
    public bot: boolean;

    /**
     * Creates a new UserInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserInfo instance
     */
    public static create(properties?: IUserInfo): UserInfo;

    /**
     * Encodes the specified UserInfo message. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @param message UserInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @param message UserInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserInfo;

    /**
     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserInfo;

    /**
     * Verifies a UserInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserInfo
     */
    public static fromObject(object: { [k: string]: any }): UserInfo;

    /**
     * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
     * @param message UserInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserCount. */
export interface IUserCount {

    /** UserCount users */
    users?: number;
}

/** Represents a UserCount. */
export class UserCount {

    /**
     * Constructs a new UserCount.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserCount);

    /** UserCount users. */
    public users: number;

    /**
     * Creates a new UserCount instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserCount instance
     */
    public static create(properties?: IUserCount): UserCount;

    /**
     * Encodes the specified UserCount message. Does not implicitly {@link UserCount.verify|verify} messages.
     * @param message UserCount message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserCount, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserCount message, length delimited. Does not implicitly {@link UserCount.verify|verify} messages.
     * @param message UserCount message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserCount, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserCount message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserCount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserCount;

    /**
     * Decodes a UserCount message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserCount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserCount;

    /**
     * Verifies a UserCount message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserCount message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserCount
     */
    public static fromObject(object: { [k: string]: any }): UserCount;

    /**
     * Creates a plain object from a UserCount message. Also converts values to other types if specified.
     * @param message UserCount
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserCount to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ShowRaffle. */
export interface IShowRaffle {

    /** ShowRaffle user */
    user?: ShowRaffle.IUser[];
}

/** Represents a ShowRaffle. */
export class ShowRaffle {

    /**
     * Constructs a new ShowRaffle.
     * @param [properties] Properties to set
     */
    constructor(properties?: IShowRaffle);

    /** ShowRaffle user. */
    public user: ShowRaffle.IUser[];

    /**
     * Creates a new ShowRaffle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShowRaffle instance
     */
    public static create(properties?: IShowRaffle): ShowRaffle;

    /**
     * Encodes the specified ShowRaffle message. Does not implicitly {@link ShowRaffle.verify|verify} messages.
     * @param message ShowRaffle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IShowRaffle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ShowRaffle message, length delimited. Does not implicitly {@link ShowRaffle.verify|verify} messages.
     * @param message ShowRaffle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IShowRaffle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ShowRaffle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ShowRaffle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ShowRaffle;

    /**
     * Decodes a ShowRaffle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ShowRaffle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShowRaffle;

    /**
     * Verifies a ShowRaffle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ShowRaffle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ShowRaffle
     */
    public static fromObject(object: { [k: string]: any }): ShowRaffle;

    /**
     * Creates a plain object from a ShowRaffle message. Also converts values to other types if specified.
     * @param message ShowRaffle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ShowRaffle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ShowRaffle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ShowRaffle {

    /** Properties of a User. */
    interface IUser {

        /** User displayName */
        displayName?: string;

        /** User subscriber */
        subscriber?: boolean;
    }

    /** Represents a User. */
    class User {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: ShowRaffle.IUser);

        /** User displayName. */
        public displayName: string;

        /** User subscriber. */
        public subscriber: boolean;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: ShowRaffle.IUser): ShowRaffle.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link ShowRaffle.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ShowRaffle.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link ShowRaffle.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ShowRaffle.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ShowRaffle.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShowRaffle.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): ShowRaffle.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ShowRaffle.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of an Event. */
export interface IEvent {

    /** Event eventId */
    eventId?: string;

    /** Event starting */
    starting?: boolean;

    /** Event shouldRedirect */
    shouldRedirect?: boolean;
}

/** Represents an Event. */
export class Event {

    /**
     * Constructs a new Event.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEvent);

    /** Event eventId. */
    public eventId: string;

    /** Event starting. */
    public starting: boolean;

    /** Event shouldRedirect. */
    public shouldRedirect: boolean;

    /**
     * Creates a new Event instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Event instance
     */
    public static create(properties?: IEvent): Event;

    /**
     * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Event message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Event;

    /**
     * Decodes an Event message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Event;

    /**
     * Verifies an Event message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Event message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Event
     */
    public static fromObject(object: { [k: string]: any }): Event;

    /**
     * Creates a plain object from an Event message. Also converts values to other types if specified.
     * @param message Event
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Event to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetJWT. */
export interface ISetJWT {

    /** SetJWT key */
    key?: string;

    /** SetJWT name */
    name?: string;

    /** SetJWT registered */
    registered?: boolean;

    /** SetJWT premium */
    premium?: boolean;

    /** SetJWT basic */
    basic?: boolean;

    /** SetJWT streamer */
    streamer?: boolean;
}

/** Represents a SetJWT. */
export class SetJWT {

    /**
     * Constructs a new SetJWT.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetJWT);

    /** SetJWT key. */
    public key: string;

    /** SetJWT name. */
    public name: string;

    /** SetJWT registered. */
    public registered: boolean;

    /** SetJWT premium. */
    public premium: boolean;

    /** SetJWT basic. */
    public basic: boolean;

    /** SetJWT streamer. */
    public streamer: boolean;

    /**
     * Creates a new SetJWT instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetJWT instance
     */
    public static create(properties?: ISetJWT): SetJWT;

    /**
     * Encodes the specified SetJWT message. Does not implicitly {@link SetJWT.verify|verify} messages.
     * @param message SetJWT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetJWT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetJWT message, length delimited. Does not implicitly {@link SetJWT.verify|verify} messages.
     * @param message SetJWT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetJWT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetJWT message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetJWT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetJWT;

    /**
     * Decodes a SetJWT message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetJWT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetJWT;

    /**
     * Verifies a SetJWT message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetJWT message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetJWT
     */
    public static fromObject(object: { [k: string]: any }): SetJWT;

    /**
     * Creates a plain object from a SetJWT message. Also converts values to other types if specified.
     * @param message SetJWT
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetJWT, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetJWT to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateEmotes. */
export interface IUpdateEmotes {

    /** UpdateEmotes emotes */
    emotes?: string;
}

/** Represents an UpdateEmotes. */
export class UpdateEmotes {

    /**
     * Constructs a new UpdateEmotes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateEmotes);

    /** UpdateEmotes emotes. */
    public emotes: string;

    /**
     * Creates a new UpdateEmotes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateEmotes instance
     */
    public static create(properties?: IUpdateEmotes): UpdateEmotes;

    /**
     * Encodes the specified UpdateEmotes message. Does not implicitly {@link UpdateEmotes.verify|verify} messages.
     * @param message UpdateEmotes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateEmotes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateEmotes message, length delimited. Does not implicitly {@link UpdateEmotes.verify|verify} messages.
     * @param message UpdateEmotes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateEmotes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateEmotes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateEmotes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateEmotes;

    /**
     * Decodes an UpdateEmotes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateEmotes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateEmotes;

    /**
     * Verifies an UpdateEmotes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateEmotes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateEmotes
     */
    public static fromObject(object: { [k: string]: any }): UpdateEmotes;

    /**
     * Creates a plain object from an UpdateEmotes message. Also converts values to other types if specified.
     * @param message UpdateEmotes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateEmotes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateEmotes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PingPong. */
export interface IPingPong {

    /** PingPong type */
    type?: PingPong.PingType;
}

/** Represents a PingPong. */
export class PingPong {

    /**
     * Constructs a new PingPong.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPingPong);

    /** PingPong type. */
    public type: PingPong.PingType;

    /**
     * Creates a new PingPong instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PingPong instance
     */
    public static create(properties?: IPingPong): PingPong;

    /**
     * Encodes the specified PingPong message. Does not implicitly {@link PingPong.verify|verify} messages.
     * @param message PingPong message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPingPong, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PingPong message, length delimited. Does not implicitly {@link PingPong.verify|verify} messages.
     * @param message PingPong message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPingPong, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PingPong message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PingPong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PingPong;

    /**
     * Decodes a PingPong message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PingPong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PingPong;

    /**
     * Verifies a PingPong message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PingPong message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PingPong
     */
    public static fromObject(object: { [k: string]: any }): PingPong;

    /**
     * Creates a plain object from a PingPong message. Also converts values to other types if specified.
     * @param message PingPong
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PingPong, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PingPong to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace PingPong {

    /** PingType enum. */
    enum PingType {
        PING = 0,
        PONG = 1
    }
}
