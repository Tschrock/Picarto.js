/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.NewMessage = (function() {
    
        /**
         * Properties of a NewMessage.
         * @exports INewMessage
         * @interface INewMessage
         * @property {string} [message] NewMessage message
         */
    
        /**
         * Constructs a new NewMessage.
         * @exports NewMessage
         * @classdesc Represents a NewMessage.
         * @constructor
         * @param {INewMessage=} [properties] Properties to set
         */
        function NewMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NewMessage message.
         * @member {string}message
         * @memberof NewMessage
         * @instance
         */
        NewMessage.prototype.message = "";
    
        /**
         * Creates a new NewMessage instance using the specified properties.
         * @function create
         * @memberof NewMessage
         * @static
         * @param {INewMessage=} [properties] Properties to set
         * @returns {NewMessage} NewMessage instance
         */
        NewMessage.create = function create(properties) {
            return new NewMessage(properties);
        };
    
        /**
         * Encodes the specified NewMessage message. Does not implicitly {@link NewMessage.verify|verify} messages.
         * @function encode
         * @memberof NewMessage
         * @static
         * @param {INewMessage} message NewMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified NewMessage message, length delimited. Does not implicitly {@link NewMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NewMessage
         * @static
         * @param {INewMessage} message NewMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NewMessage message from the specified reader or buffer.
         * @function decode
         * @memberof NewMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NewMessage} NewMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a NewMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NewMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NewMessage} NewMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NewMessage message.
         * @function verify
         * @memberof NewMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a NewMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NewMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NewMessage} NewMessage
         */
        NewMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.NewMessage)
                return object;
            var message = new $root.NewMessage();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a NewMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NewMessage
         * @static
         * @param {NewMessage} message NewMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this NewMessage to JSON.
         * @function toJSON
         * @memberof NewMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return NewMessage;
    })();
    
    $root.UserList = (function() {
    
        /**
         * Properties of a UserList.
         * @exports IUserList
         * @interface IUserList
         * @property {Array.<UserList.IUser>} [user] UserList user
         */
    
        /**
         * Constructs a new UserList.
         * @exports UserList
         * @classdesc Represents a UserList.
         * @constructor
         * @param {IUserList=} [properties] Properties to set
         */
        function UserList(properties) {
            this.user = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UserList user.
         * @member {Array.<UserList.IUser>}user
         * @memberof UserList
         * @instance
         */
        UserList.prototype.user = $util.emptyArray;
    
        /**
         * Creates a new UserList instance using the specified properties.
         * @function create
         * @memberof UserList
         * @static
         * @param {IUserList=} [properties] Properties to set
         * @returns {UserList} UserList instance
         */
        UserList.create = function create(properties) {
            return new UserList(properties);
        };
    
        /**
         * Encodes the specified UserList message. Does not implicitly {@link UserList.verify|verify} messages.
         * @function encode
         * @memberof UserList
         * @static
         * @param {IUserList} message UserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.user.length)
                for (var i = 0; i < message.user.length; ++i)
                    $root.UserList.User.encode(message.user[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified UserList message, length delimited. Does not implicitly {@link UserList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UserList
         * @static
         * @param {IUserList} message UserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a UserList message from the specified reader or buffer.
         * @function decode
         * @memberof UserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UserList} UserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.user && message.user.length))
                        message.user = [];
                    message.user.push($root.UserList.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a UserList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UserList} UserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a UserList message.
         * @function verify
         * @memberof UserList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                if (!Array.isArray(message.user))
                    return "user: array expected";
                for (var i = 0; i < message.user.length; ++i) {
                    var error = $root.UserList.User.verify(message.user[i]);
                    if (error)
                        return "user." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a UserList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UserList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UserList} UserList
         */
        UserList.fromObject = function fromObject(object) {
            if (object instanceof $root.UserList)
                return object;
            var message = new $root.UserList();
            if (object.user) {
                if (!Array.isArray(object.user))
                    throw TypeError(".UserList.user: array expected");
                message.user = [];
                for (var i = 0; i < object.user.length; ++i) {
                    if (typeof object.user[i] !== "object")
                        throw TypeError(".UserList.user: object expected");
                    message.user[i] = $root.UserList.User.fromObject(object.user[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a UserList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UserList
         * @static
         * @param {UserList} message UserList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.user = [];
            if (message.user && message.user.length) {
                object.user = [];
                for (var j = 0; j < message.user.length; ++j)
                    object.user[j] = $root.UserList.User.toObject(message.user[j], options);
            }
            return object;
        };
    
        /**
         * Converts this UserList to JSON.
         * @function toJSON
         * @memberof UserList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        UserList.User = (function() {
    
            /**
             * Properties of a User.
             * @memberof UserList
             * @interface IUser
             * @property {number} [userId] User userId
             * @property {string} [displayName] User displayName
             * @property {UserList.User.IUserData} [userData] User userData
             * @property {UserList.User.IBanData} [banData] User banData
             */
    
            /**
             * Constructs a new User.
             * @memberof UserList
             * @classdesc Represents a User.
             * @constructor
             * @param {UserList.IUser=} [properties] Properties to set
             */
            function User(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * User userId.
             * @member {number}userId
             * @memberof UserList.User
             * @instance
             */
            User.prototype.userId = 0;
    
            /**
             * User displayName.
             * @member {string}displayName
             * @memberof UserList.User
             * @instance
             */
            User.prototype.displayName = "";
    
            /**
             * User userData.
             * @member {(UserList.User.IUserData|null|undefined)}userData
             * @memberof UserList.User
             * @instance
             */
            User.prototype.userData = null;
    
            /**
             * User banData.
             * @member {(UserList.User.IBanData|null|undefined)}banData
             * @memberof UserList.User
             * @instance
             */
            User.prototype.banData = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * User userState.
             * @member {string|undefined} userState
             * @memberof UserList.User
             * @instance
             */
            Object.defineProperty(User.prototype, "userState", {
                get: $util.oneOfGetter($oneOfFields = ["userData", "banData"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof UserList.User
             * @static
             * @param {UserList.IUser=} [properties] Properties to set
             * @returns {UserList.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };
    
            /**
             * Encodes the specified User message. Does not implicitly {@link UserList.User.verify|verify} messages.
             * @function encode
             * @memberof UserList.User
             * @static
             * @param {UserList.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
                if (message.userData != null && message.hasOwnProperty("userData"))
                    $root.UserList.User.UserData.encode(message.userData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.banData != null && message.hasOwnProperty("banData"))
                    $root.UserList.User.BanData.encode(message.banData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link UserList.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof UserList.User
             * @static
             * @param {UserList.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof UserList.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {UserList.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserList.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.uint32();
                        break;
                    case 2:
                        message.displayName = reader.string();
                        break;
                    case 3:
                        message.userData = $root.UserList.User.UserData.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.banData = $root.UserList.User.BanData.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof UserList.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {UserList.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a User message.
             * @function verify
             * @memberof UserList.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    if (!$util.isString(message.displayName))
                        return "displayName: string expected";
                if (message.userData != null && message.hasOwnProperty("userData")) {
                    properties.userState = 1;
                    var error = $root.UserList.User.UserData.verify(message.userData);
                    if (error)
                        return "userData." + error;
                }
                if (message.banData != null && message.hasOwnProperty("banData")) {
                    if (properties.userState === 1)
                        return "userState: multiple values";
                    properties.userState = 1;
                    error = $root.UserList.User.BanData.verify(message.banData);
                    if (error)
                        return "banData." + error;
                }
                return null;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof UserList.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {UserList.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.UserList.User)
                    return object;
                var message = new $root.UserList.User();
                if (object.userId != null)
                    message.userId = object.userId >>> 0;
                if (object.displayName != null)
                    message.displayName = String(object.displayName);
                if (object.userData != null) {
                    if (typeof object.userData !== "object")
                        throw TypeError(".UserList.User.userData: object expected");
                    message.userData = $root.UserList.User.UserData.fromObject(object.userData);
                }
                if (object.banData != null) {
                    if (typeof object.banData !== "object")
                        throw TypeError(".UserList.User.banData: object expected");
                    message.banData = $root.UserList.User.BanData.fromObject(object.banData);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof UserList.User
             * @static
             * @param {UserList.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.displayName = "";
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    object.displayName = message.displayName;
                if (message.userData != null && message.hasOwnProperty("userData")) {
                    object.userData = $root.UserList.User.UserData.toObject(message.userData, options);
                    if (options.oneofs)
                        object.userState = "userData";
                }
                if (message.banData != null && message.hasOwnProperty("banData")) {
                    object.banData = $root.UserList.User.BanData.toObject(message.banData, options);
                    if (options.oneofs)
                        object.userState = "banData";
                }
                return object;
            };
    
            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof UserList.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            User.UserData = (function() {
    
                /**
                 * Properties of a UserData.
                 * @memberof UserList.User
                 * @interface IUserData
                 * @property {boolean} [registered] UserData registered
                 * @property {boolean} [moderator] UserData moderator
                 * @property {boolean} [streamer] UserData streamer
                 * @property {boolean} [ptvAdmin] UserData ptvAdmin
                 * @property {boolean} [basic] UserData basic
                 * @property {boolean} [premium] UserData premium
                 * @property {boolean} [subscriber] UserData subscriber
                 * @property {string} [color] UserData color
                 * @property {boolean} [ignoring] UserData ignoring
                 * @property {boolean} [bot] UserData bot
                 */
    
                /**
                 * Constructs a new UserData.
                 * @memberof UserList.User
                 * @classdesc Represents a UserData.
                 * @constructor
                 * @param {UserList.User.IUserData=} [properties] Properties to set
                 */
                function UserData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UserData registered.
                 * @member {boolean}registered
                 * @memberof UserList.User.UserData
                 * @instance
                 */
                UserData.prototype.registered = false;
    
                /**
                 * UserData moderator.
                 * @member {boolean}moderator
                 * @memberof UserList.User.UserData
                 * @instance
                 */
                UserData.prototype.moderator = false;
    
                /**
                 * UserData streamer.
                 * @member {boolean}streamer
                 * @memberof UserList.User.UserData
                 * @instance
                 */
                UserData.prototype.streamer = false;
    
                /**
                 * UserData ptvAdmin.
                 * @member {boolean}ptvAdmin
                 * @memberof UserList.User.UserData
                 * @instance
                 */
                UserData.prototype.ptvAdmin = false;
    
                /**
                 * UserData basic.
                 * @member {boolean}basic
                 * @memberof UserList.User.UserData
                 * @instance
                 */
                UserData.prototype.basic = false;
    
                /**
                 * UserData premium.
                 * @member {boolean}premium
                 * @memberof UserList.User.UserData
                 * @instance
                 */
                UserData.prototype.premium = false;
    
                /**
                 * UserData subscriber.
                 * @member {boolean}subscriber
                 * @memberof UserList.User.UserData
                 * @instance
                 */
                UserData.prototype.subscriber = false;
    
                /**
                 * UserData color.
                 * @member {string}color
                 * @memberof UserList.User.UserData
                 * @instance
                 */
                UserData.prototype.color = "";
    
                /**
                 * UserData ignoring.
                 * @member {boolean}ignoring
                 * @memberof UserList.User.UserData
                 * @instance
                 */
                UserData.prototype.ignoring = false;
    
                /**
                 * UserData bot.
                 * @member {boolean}bot
                 * @memberof UserList.User.UserData
                 * @instance
                 */
                UserData.prototype.bot = false;
    
                /**
                 * Creates a new UserData instance using the specified properties.
                 * @function create
                 * @memberof UserList.User.UserData
                 * @static
                 * @param {UserList.User.IUserData=} [properties] Properties to set
                 * @returns {UserList.User.UserData} UserData instance
                 */
                UserData.create = function create(properties) {
                    return new UserData(properties);
                };
    
                /**
                 * Encodes the specified UserData message. Does not implicitly {@link UserList.User.UserData.verify|verify} messages.
                 * @function encode
                 * @memberof UserList.User.UserData
                 * @static
                 * @param {UserList.User.IUserData} message UserData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserData.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.registered != null && message.hasOwnProperty("registered"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.registered);
                    if (message.moderator != null && message.hasOwnProperty("moderator"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.moderator);
                    if (message.streamer != null && message.hasOwnProperty("streamer"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.streamer);
                    if (message.ptvAdmin != null && message.hasOwnProperty("ptvAdmin"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.ptvAdmin);
                    if (message.basic != null && message.hasOwnProperty("basic"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.basic);
                    if (message.premium != null && message.hasOwnProperty("premium"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.premium);
                    if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.subscriber);
                    if (message.color != null && message.hasOwnProperty("color"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.color);
                    if (message.ignoring != null && message.hasOwnProperty("ignoring"))
                        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.ignoring);
                    if (message.bot != null && message.hasOwnProperty("bot"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.bot);
                    return writer;
                };
    
                /**
                 * Encodes the specified UserData message, length delimited. Does not implicitly {@link UserList.User.UserData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof UserList.User.UserData
                 * @static
                 * @param {UserList.User.IUserData} message UserData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a UserData message from the specified reader or buffer.
                 * @function decode
                 * @memberof UserList.User.UserData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {UserList.User.UserData} UserData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserData.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserList.User.UserData();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.registered = reader.bool();
                            break;
                        case 2:
                            message.moderator = reader.bool();
                            break;
                        case 3:
                            message.streamer = reader.bool();
                            break;
                        case 4:
                            message.ptvAdmin = reader.bool();
                            break;
                        case 5:
                            message.basic = reader.bool();
                            break;
                        case 6:
                            message.premium = reader.bool();
                            break;
                        case 7:
                            message.subscriber = reader.bool();
                            break;
                        case 8:
                            message.color = reader.string();
                            break;
                        case 9:
                            message.ignoring = reader.bool();
                            break;
                        case 10:
                            message.bot = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a UserData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof UserList.User.UserData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {UserList.User.UserData} UserData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a UserData message.
                 * @function verify
                 * @memberof UserList.User.UserData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UserData.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.registered != null && message.hasOwnProperty("registered"))
                        if (typeof message.registered !== "boolean")
                            return "registered: boolean expected";
                    if (message.moderator != null && message.hasOwnProperty("moderator"))
                        if (typeof message.moderator !== "boolean")
                            return "moderator: boolean expected";
                    if (message.streamer != null && message.hasOwnProperty("streamer"))
                        if (typeof message.streamer !== "boolean")
                            return "streamer: boolean expected";
                    if (message.ptvAdmin != null && message.hasOwnProperty("ptvAdmin"))
                        if (typeof message.ptvAdmin !== "boolean")
                            return "ptvAdmin: boolean expected";
                    if (message.basic != null && message.hasOwnProperty("basic"))
                        if (typeof message.basic !== "boolean")
                            return "basic: boolean expected";
                    if (message.premium != null && message.hasOwnProperty("premium"))
                        if (typeof message.premium !== "boolean")
                            return "premium: boolean expected";
                    if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                        if (typeof message.subscriber !== "boolean")
                            return "subscriber: boolean expected";
                    if (message.color != null && message.hasOwnProperty("color"))
                        if (!$util.isString(message.color))
                            return "color: string expected";
                    if (message.ignoring != null && message.hasOwnProperty("ignoring"))
                        if (typeof message.ignoring !== "boolean")
                            return "ignoring: boolean expected";
                    if (message.bot != null && message.hasOwnProperty("bot"))
                        if (typeof message.bot !== "boolean")
                            return "bot: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a UserData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof UserList.User.UserData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {UserList.User.UserData} UserData
                 */
                UserData.fromObject = function fromObject(object) {
                    if (object instanceof $root.UserList.User.UserData)
                        return object;
                    var message = new $root.UserList.User.UserData();
                    if (object.registered != null)
                        message.registered = Boolean(object.registered);
                    if (object.moderator != null)
                        message.moderator = Boolean(object.moderator);
                    if (object.streamer != null)
                        message.streamer = Boolean(object.streamer);
                    if (object.ptvAdmin != null)
                        message.ptvAdmin = Boolean(object.ptvAdmin);
                    if (object.basic != null)
                        message.basic = Boolean(object.basic);
                    if (object.premium != null)
                        message.premium = Boolean(object.premium);
                    if (object.subscriber != null)
                        message.subscriber = Boolean(object.subscriber);
                    if (object.color != null)
                        message.color = String(object.color);
                    if (object.ignoring != null)
                        message.ignoring = Boolean(object.ignoring);
                    if (object.bot != null)
                        message.bot = Boolean(object.bot);
                    return message;
                };
    
                /**
                 * Creates a plain object from a UserData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof UserList.User.UserData
                 * @static
                 * @param {UserList.User.UserData} message UserData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserData.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.registered = false;
                        object.moderator = false;
                        object.streamer = false;
                        object.ptvAdmin = false;
                        object.basic = false;
                        object.premium = false;
                        object.subscriber = false;
                        object.color = "";
                        object.ignoring = false;
                        object.bot = false;
                    }
                    if (message.registered != null && message.hasOwnProperty("registered"))
                        object.registered = message.registered;
                    if (message.moderator != null && message.hasOwnProperty("moderator"))
                        object.moderator = message.moderator;
                    if (message.streamer != null && message.hasOwnProperty("streamer"))
                        object.streamer = message.streamer;
                    if (message.ptvAdmin != null && message.hasOwnProperty("ptvAdmin"))
                        object.ptvAdmin = message.ptvAdmin;
                    if (message.basic != null && message.hasOwnProperty("basic"))
                        object.basic = message.basic;
                    if (message.premium != null && message.hasOwnProperty("premium"))
                        object.premium = message.premium;
                    if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                        object.subscriber = message.subscriber;
                    if (message.color != null && message.hasOwnProperty("color"))
                        object.color = message.color;
                    if (message.ignoring != null && message.hasOwnProperty("ignoring"))
                        object.ignoring = message.ignoring;
                    if (message.bot != null && message.hasOwnProperty("bot"))
                        object.bot = message.bot;
                    return object;
                };
    
                /**
                 * Converts this UserData to JSON.
                 * @function toJSON
                 * @memberof UserList.User.UserData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UserData;
            })();
    
            User.BanData = (function() {
    
                /**
                 * Properties of a BanData.
                 * @memberof UserList.User
                 * @interface IBanData
                 * @property {boolean} [isShadowBan] BanData isShadowBan
                 */
    
                /**
                 * Constructs a new BanData.
                 * @memberof UserList.User
                 * @classdesc Represents a BanData.
                 * @constructor
                 * @param {UserList.User.IBanData=} [properties] Properties to set
                 */
                function BanData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BanData isShadowBan.
                 * @member {boolean}isShadowBan
                 * @memberof UserList.User.BanData
                 * @instance
                 */
                BanData.prototype.isShadowBan = false;
    
                /**
                 * Creates a new BanData instance using the specified properties.
                 * @function create
                 * @memberof UserList.User.BanData
                 * @static
                 * @param {UserList.User.IBanData=} [properties] Properties to set
                 * @returns {UserList.User.BanData} BanData instance
                 */
                BanData.create = function create(properties) {
                    return new BanData(properties);
                };
    
                /**
                 * Encodes the specified BanData message. Does not implicitly {@link UserList.User.BanData.verify|verify} messages.
                 * @function encode
                 * @memberof UserList.User.BanData
                 * @static
                 * @param {UserList.User.IBanData} message BanData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BanData.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.isShadowBan != null && message.hasOwnProperty("isShadowBan"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isShadowBan);
                    return writer;
                };
    
                /**
                 * Encodes the specified BanData message, length delimited. Does not implicitly {@link UserList.User.BanData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof UserList.User.BanData
                 * @static
                 * @param {UserList.User.IBanData} message BanData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BanData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a BanData message from the specified reader or buffer.
                 * @function decode
                 * @memberof UserList.User.BanData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {UserList.User.BanData} BanData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BanData.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserList.User.BanData();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.isShadowBan = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a BanData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof UserList.User.BanData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {UserList.User.BanData} BanData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BanData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BanData message.
                 * @function verify
                 * @memberof UserList.User.BanData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BanData.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.isShadowBan != null && message.hasOwnProperty("isShadowBan"))
                        if (typeof message.isShadowBan !== "boolean")
                            return "isShadowBan: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a BanData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof UserList.User.BanData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {UserList.User.BanData} BanData
                 */
                BanData.fromObject = function fromObject(object) {
                    if (object instanceof $root.UserList.User.BanData)
                        return object;
                    var message = new $root.UserList.User.BanData();
                    if (object.isShadowBan != null)
                        message.isShadowBan = Boolean(object.isShadowBan);
                    return message;
                };
    
                /**
                 * Creates a plain object from a BanData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof UserList.User.BanData
                 * @static
                 * @param {UserList.User.BanData} message BanData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BanData.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.isShadowBan = false;
                    if (message.isShadowBan != null && message.hasOwnProperty("isShadowBan"))
                        object.isShadowBan = message.isShadowBan;
                    return object;
                };
    
                /**
                 * Converts this BanData to JSON.
                 * @function toJSON
                 * @memberof UserList.User.BanData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BanData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return BanData;
            })();
    
            return User;
        })();
    
        return UserList;
    })();
    
    $root.ChatMessage = (function() {
    
        /**
         * Properties of a ChatMessage.
         * @exports IChatMessage
         * @interface IChatMessage
         * @property {number} [id] ChatMessage id
         * @property {number} [userId] ChatMessage userId
         * @property {string} [displayName] ChatMessage displayName
         * @property {string} [message] ChatMessage message
         * @property {boolean} [registered] ChatMessage registered
         * @property {boolean} [moderator] ChatMessage moderator
         * @property {boolean} [streamer] ChatMessage streamer
         * @property {boolean} [ptvAdmin] ChatMessage ptvAdmin
         * @property {boolean} [basic] ChatMessage basic
         * @property {boolean} [premium] ChatMessage premium
         * @property {boolean} [subscriber] ChatMessage subscriber
         * @property {string} [color] ChatMessage color
         * @property {number|Long} [timeStamp] ChatMessage timeStamp
         * @property {boolean} [isMeMessage] ChatMessage isMeMessage
         * @property {Array.<ChatMessage.IMention>} [mentions] ChatMessage mentions
         * @property {Array.<ChatMessage.ICustomEmote>} [customEmotes] ChatMessage customEmotes
         * @property {boolean} [bot] ChatMessage bot
         */
    
        /**
         * Constructs a new ChatMessage.
         * @exports ChatMessage
         * @classdesc Represents a ChatMessage.
         * @constructor
         * @param {IChatMessage=} [properties] Properties to set
         */
        function ChatMessage(properties) {
            this.mentions = [];
            this.customEmotes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ChatMessage id.
         * @member {number}id
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.id = 0;
    
        /**
         * ChatMessage userId.
         * @member {number}userId
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.userId = 0;
    
        /**
         * ChatMessage displayName.
         * @member {string}displayName
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.displayName = "";
    
        /**
         * ChatMessage message.
         * @member {string}message
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.message = "";
    
        /**
         * ChatMessage registered.
         * @member {boolean}registered
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.registered = false;
    
        /**
         * ChatMessage moderator.
         * @member {boolean}moderator
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.moderator = false;
    
        /**
         * ChatMessage streamer.
         * @member {boolean}streamer
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.streamer = false;
    
        /**
         * ChatMessage ptvAdmin.
         * @member {boolean}ptvAdmin
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.ptvAdmin = false;
    
        /**
         * ChatMessage basic.
         * @member {boolean}basic
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.basic = false;
    
        /**
         * ChatMessage premium.
         * @member {boolean}premium
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.premium = false;
    
        /**
         * ChatMessage subscriber.
         * @member {boolean}subscriber
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.subscriber = false;
    
        /**
         * ChatMessage color.
         * @member {string}color
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.color = "";
    
        /**
         * ChatMessage timeStamp.
         * @member {number|Long}timeStamp
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.timeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * ChatMessage isMeMessage.
         * @member {boolean}isMeMessage
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.isMeMessage = false;
    
        /**
         * ChatMessage mentions.
         * @member {Array.<ChatMessage.IMention>}mentions
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.mentions = $util.emptyArray;
    
        /**
         * ChatMessage customEmotes.
         * @member {Array.<ChatMessage.ICustomEmote>}customEmotes
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.customEmotes = $util.emptyArray;
    
        /**
         * ChatMessage bot.
         * @member {boolean}bot
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.bot = false;
    
        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @function create
         * @memberof ChatMessage
         * @static
         * @param {IChatMessage=} [properties] Properties to set
         * @returns {ChatMessage} ChatMessage instance
         */
        ChatMessage.create = function create(properties) {
            return new ChatMessage(properties);
        };
    
        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage
         * @static
         * @param {IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.userId);
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.displayName);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.registered != null && message.hasOwnProperty("registered"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.registered);
            if (message.moderator != null && message.hasOwnProperty("moderator"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.moderator);
            if (message.streamer != null && message.hasOwnProperty("streamer"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.streamer);
            if (message.ptvAdmin != null && message.hasOwnProperty("ptvAdmin"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.ptvAdmin);
            if (message.basic != null && message.hasOwnProperty("basic"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.basic);
            if (message.premium != null && message.hasOwnProperty("premium"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.premium);
            if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.subscriber);
            if (message.color != null && message.hasOwnProperty("color"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.color);
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.timeStamp);
            if (message.isMeMessage != null && message.hasOwnProperty("isMeMessage"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.isMeMessage);
            if (message.mentions != null && message.mentions.length)
                for (var i = 0; i < message.mentions.length; ++i)
                    $root.ChatMessage.Mention.encode(message.mentions[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.customEmotes != null && message.customEmotes.length)
                for (var i = 0; i < message.customEmotes.length; ++i)
                    $root.ChatMessage.CustomEmote.encode(message.customEmotes[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.bot != null && message.hasOwnProperty("bot"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.bot);
            return writer;
        };
    
        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage
         * @static
         * @param {IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.userId = reader.uint32();
                    break;
                case 3:
                    message.displayName = reader.string();
                    break;
                case 4:
                    message.message = reader.string();
                    break;
                case 5:
                    message.registered = reader.bool();
                    break;
                case 6:
                    message.moderator = reader.bool();
                    break;
                case 7:
                    message.streamer = reader.bool();
                    break;
                case 8:
                    message.ptvAdmin = reader.bool();
                    break;
                case 9:
                    message.basic = reader.bool();
                    break;
                case 10:
                    message.premium = reader.bool();
                    break;
                case 11:
                    message.subscriber = reader.bool();
                    break;
                case 12:
                    message.color = reader.string();
                    break;
                case 13:
                    message.timeStamp = reader.int64();
                    break;
                case 14:
                    message.isMeMessage = reader.bool();
                    break;
                case 15:
                    if (!(message.mentions && message.mentions.length))
                        message.mentions = [];
                    message.mentions.push($root.ChatMessage.Mention.decode(reader, reader.uint32()));
                    break;
                case 16:
                    if (!(message.customEmotes && message.customEmotes.length))
                        message.customEmotes = [];
                    message.customEmotes.push($root.ChatMessage.CustomEmote.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.bot = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ChatMessage message.
         * @function verify
         * @memberof ChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.registered != null && message.hasOwnProperty("registered"))
                if (typeof message.registered !== "boolean")
                    return "registered: boolean expected";
            if (message.moderator != null && message.hasOwnProperty("moderator"))
                if (typeof message.moderator !== "boolean")
                    return "moderator: boolean expected";
            if (message.streamer != null && message.hasOwnProperty("streamer"))
                if (typeof message.streamer !== "boolean")
                    return "streamer: boolean expected";
            if (message.ptvAdmin != null && message.hasOwnProperty("ptvAdmin"))
                if (typeof message.ptvAdmin !== "boolean")
                    return "ptvAdmin: boolean expected";
            if (message.basic != null && message.hasOwnProperty("basic"))
                if (typeof message.basic !== "boolean")
                    return "basic: boolean expected";
            if (message.premium != null && message.hasOwnProperty("premium"))
                if (typeof message.premium !== "boolean")
                    return "premium: boolean expected";
            if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                if (typeof message.subscriber !== "boolean")
                    return "subscriber: boolean expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                if (!$util.isInteger(message.timeStamp) && !(message.timeStamp && $util.isInteger(message.timeStamp.low) && $util.isInteger(message.timeStamp.high)))
                    return "timeStamp: integer|Long expected";
            if (message.isMeMessage != null && message.hasOwnProperty("isMeMessage"))
                if (typeof message.isMeMessage !== "boolean")
                    return "isMeMessage: boolean expected";
            if (message.mentions != null && message.hasOwnProperty("mentions")) {
                if (!Array.isArray(message.mentions))
                    return "mentions: array expected";
                for (var i = 0; i < message.mentions.length; ++i) {
                    var error = $root.ChatMessage.Mention.verify(message.mentions[i]);
                    if (error)
                        return "mentions." + error;
                }
            }
            if (message.customEmotes != null && message.hasOwnProperty("customEmotes")) {
                if (!Array.isArray(message.customEmotes))
                    return "customEmotes: array expected";
                for (var i = 0; i < message.customEmotes.length; ++i) {
                    error = $root.ChatMessage.CustomEmote.verify(message.customEmotes[i]);
                    if (error)
                        return "customEmotes." + error;
                }
            }
            if (message.bot != null && message.hasOwnProperty("bot"))
                if (typeof message.bot !== "boolean")
                    return "bot: boolean expected";
            return null;
        };
    
        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage} ChatMessage
         */
        ChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage)
                return object;
            var message = new $root.ChatMessage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.message != null)
                message.message = String(object.message);
            if (object.registered != null)
                message.registered = Boolean(object.registered);
            if (object.moderator != null)
                message.moderator = Boolean(object.moderator);
            if (object.streamer != null)
                message.streamer = Boolean(object.streamer);
            if (object.ptvAdmin != null)
                message.ptvAdmin = Boolean(object.ptvAdmin);
            if (object.basic != null)
                message.basic = Boolean(object.basic);
            if (object.premium != null)
                message.premium = Boolean(object.premium);
            if (object.subscriber != null)
                message.subscriber = Boolean(object.subscriber);
            if (object.color != null)
                message.color = String(object.color);
            if (object.timeStamp != null)
                if ($util.Long)
                    (message.timeStamp = $util.Long.fromValue(object.timeStamp)).unsigned = false;
                else if (typeof object.timeStamp === "string")
                    message.timeStamp = parseInt(object.timeStamp, 10);
                else if (typeof object.timeStamp === "number")
                    message.timeStamp = object.timeStamp;
                else if (typeof object.timeStamp === "object")
                    message.timeStamp = new $util.LongBits(object.timeStamp.low >>> 0, object.timeStamp.high >>> 0).toNumber();
            if (object.isMeMessage != null)
                message.isMeMessage = Boolean(object.isMeMessage);
            if (object.mentions) {
                if (!Array.isArray(object.mentions))
                    throw TypeError(".ChatMessage.mentions: array expected");
                message.mentions = [];
                for (var i = 0; i < object.mentions.length; ++i) {
                    if (typeof object.mentions[i] !== "object")
                        throw TypeError(".ChatMessage.mentions: object expected");
                    message.mentions[i] = $root.ChatMessage.Mention.fromObject(object.mentions[i]);
                }
            }
            if (object.customEmotes) {
                if (!Array.isArray(object.customEmotes))
                    throw TypeError(".ChatMessage.customEmotes: array expected");
                message.customEmotes = [];
                for (var i = 0; i < object.customEmotes.length; ++i) {
                    if (typeof object.customEmotes[i] !== "object")
                        throw TypeError(".ChatMessage.customEmotes: object expected");
                    message.customEmotes[i] = $root.ChatMessage.CustomEmote.fromObject(object.customEmotes[i]);
                }
            }
            if (object.bot != null)
                message.bot = Boolean(object.bot);
            return message;
        };
    
        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage
         * @static
         * @param {ChatMessage} message ChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.mentions = [];
                object.customEmotes = [];
            }
            if (options.defaults) {
                object.id = 0;
                object.userId = 0;
                object.displayName = "";
                object.message = "";
                object.registered = false;
                object.moderator = false;
                object.streamer = false;
                object.ptvAdmin = false;
                object.basic = false;
                object.premium = false;
                object.subscriber = false;
                object.color = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeStamp = options.longs === String ? "0" : 0;
                object.isMeMessage = false;
                object.bot = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.registered != null && message.hasOwnProperty("registered"))
                object.registered = message.registered;
            if (message.moderator != null && message.hasOwnProperty("moderator"))
                object.moderator = message.moderator;
            if (message.streamer != null && message.hasOwnProperty("streamer"))
                object.streamer = message.streamer;
            if (message.ptvAdmin != null && message.hasOwnProperty("ptvAdmin"))
                object.ptvAdmin = message.ptvAdmin;
            if (message.basic != null && message.hasOwnProperty("basic"))
                object.basic = message.basic;
            if (message.premium != null && message.hasOwnProperty("premium"))
                object.premium = message.premium;
            if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                object.subscriber = message.subscriber;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                if (typeof message.timeStamp === "number")
                    object.timeStamp = options.longs === String ? String(message.timeStamp) : message.timeStamp;
                else
                    object.timeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.timeStamp) : options.longs === Number ? new $util.LongBits(message.timeStamp.low >>> 0, message.timeStamp.high >>> 0).toNumber() : message.timeStamp;
            if (message.isMeMessage != null && message.hasOwnProperty("isMeMessage"))
                object.isMeMessage = message.isMeMessage;
            if (message.mentions && message.mentions.length) {
                object.mentions = [];
                for (var j = 0; j < message.mentions.length; ++j)
                    object.mentions[j] = $root.ChatMessage.Mention.toObject(message.mentions[j], options);
            }
            if (message.customEmotes && message.customEmotes.length) {
                object.customEmotes = [];
                for (var j = 0; j < message.customEmotes.length; ++j)
                    object.customEmotes[j] = $root.ChatMessage.CustomEmote.toObject(message.customEmotes[j], options);
            }
            if (message.bot != null && message.hasOwnProperty("bot"))
                object.bot = message.bot;
            return object;
        };
    
        /**
         * Converts this ChatMessage to JSON.
         * @function toJSON
         * @memberof ChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        ChatMessage.Mention = (function() {
    
            /**
             * Properties of a Mention.
             * @memberof ChatMessage
             * @interface IMention
             * @property {number} [userId] Mention userId
             * @property {string} [displayName] Mention displayName
             * @property {string} [color] Mention color
             */
    
            /**
             * Constructs a new Mention.
             * @memberof ChatMessage
             * @classdesc Represents a Mention.
             * @constructor
             * @param {ChatMessage.IMention=} [properties] Properties to set
             */
            function Mention(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Mention userId.
             * @member {number}userId
             * @memberof ChatMessage.Mention
             * @instance
             */
            Mention.prototype.userId = 0;
    
            /**
             * Mention displayName.
             * @member {string}displayName
             * @memberof ChatMessage.Mention
             * @instance
             */
            Mention.prototype.displayName = "";
    
            /**
             * Mention color.
             * @member {string}color
             * @memberof ChatMessage.Mention
             * @instance
             */
            Mention.prototype.color = "";
    
            /**
             * Creates a new Mention instance using the specified properties.
             * @function create
             * @memberof ChatMessage.Mention
             * @static
             * @param {ChatMessage.IMention=} [properties] Properties to set
             * @returns {ChatMessage.Mention} Mention instance
             */
            Mention.create = function create(properties) {
                return new Mention(properties);
            };
    
            /**
             * Encodes the specified Mention message. Does not implicitly {@link ChatMessage.Mention.verify|verify} messages.
             * @function encode
             * @memberof ChatMessage.Mention
             * @static
             * @param {ChatMessage.IMention} message Mention message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Mention.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
                if (message.color != null && message.hasOwnProperty("color"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.color);
                return writer;
            };
    
            /**
             * Encodes the specified Mention message, length delimited. Does not implicitly {@link ChatMessage.Mention.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ChatMessage.Mention
             * @static
             * @param {ChatMessage.IMention} message Mention message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Mention.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Mention message from the specified reader or buffer.
             * @function decode
             * @memberof ChatMessage.Mention
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ChatMessage.Mention} Mention
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Mention.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.Mention();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.uint32();
                        break;
                    case 2:
                        message.displayName = reader.string();
                        break;
                    case 3:
                        message.color = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Mention message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ChatMessage.Mention
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ChatMessage.Mention} Mention
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Mention.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Mention message.
             * @function verify
             * @memberof ChatMessage.Mention
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Mention.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    if (!$util.isString(message.displayName))
                        return "displayName: string expected";
                if (message.color != null && message.hasOwnProperty("color"))
                    if (!$util.isString(message.color))
                        return "color: string expected";
                return null;
            };
    
            /**
             * Creates a Mention message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ChatMessage.Mention
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ChatMessage.Mention} Mention
             */
            Mention.fromObject = function fromObject(object) {
                if (object instanceof $root.ChatMessage.Mention)
                    return object;
                var message = new $root.ChatMessage.Mention();
                if (object.userId != null)
                    message.userId = object.userId >>> 0;
                if (object.displayName != null)
                    message.displayName = String(object.displayName);
                if (object.color != null)
                    message.color = String(object.color);
                return message;
            };
    
            /**
             * Creates a plain object from a Mention message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ChatMessage.Mention
             * @static
             * @param {ChatMessage.Mention} message Mention
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Mention.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.displayName = "";
                    object.color = "";
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    object.displayName = message.displayName;
                if (message.color != null && message.hasOwnProperty("color"))
                    object.color = message.color;
                return object;
            };
    
            /**
             * Converts this Mention to JSON.
             * @function toJSON
             * @memberof ChatMessage.Mention
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Mention.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Mention;
        })();
    
        ChatMessage.CustomEmote = (function() {
    
            /**
             * Properties of a CustomEmote.
             * @memberof ChatMessage
             * @interface ICustomEmote
             * @property {number|Long} [id] CustomEmote id
             * @property {string} [Channel] CustomEmote Channel
             * @property {string} [Alias] CustomEmote Alias
             */
    
            /**
             * Constructs a new CustomEmote.
             * @memberof ChatMessage
             * @classdesc Represents a CustomEmote.
             * @constructor
             * @param {ChatMessage.ICustomEmote=} [properties] Properties to set
             */
            function CustomEmote(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CustomEmote id.
             * @member {number|Long}id
             * @memberof ChatMessage.CustomEmote
             * @instance
             */
            CustomEmote.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * CustomEmote Channel.
             * @member {string}Channel
             * @memberof ChatMessage.CustomEmote
             * @instance
             */
            CustomEmote.prototype.Channel = "";
    
            /**
             * CustomEmote Alias.
             * @member {string}Alias
             * @memberof ChatMessage.CustomEmote
             * @instance
             */
            CustomEmote.prototype.Alias = "";
    
            /**
             * Creates a new CustomEmote instance using the specified properties.
             * @function create
             * @memberof ChatMessage.CustomEmote
             * @static
             * @param {ChatMessage.ICustomEmote=} [properties] Properties to set
             * @returns {ChatMessage.CustomEmote} CustomEmote instance
             */
            CustomEmote.create = function create(properties) {
                return new CustomEmote(properties);
            };
    
            /**
             * Encodes the specified CustomEmote message. Does not implicitly {@link ChatMessage.CustomEmote.verify|verify} messages.
             * @function encode
             * @memberof ChatMessage.CustomEmote
             * @static
             * @param {ChatMessage.ICustomEmote} message CustomEmote message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomEmote.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Channel);
                if (message.Alias != null && message.hasOwnProperty("Alias"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.Alias);
                return writer;
            };
    
            /**
             * Encodes the specified CustomEmote message, length delimited. Does not implicitly {@link ChatMessage.CustomEmote.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ChatMessage.CustomEmote
             * @static
             * @param {ChatMessage.ICustomEmote} message CustomEmote message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomEmote.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CustomEmote message from the specified reader or buffer.
             * @function decode
             * @memberof ChatMessage.CustomEmote
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ChatMessage.CustomEmote} CustomEmote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomEmote.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.CustomEmote();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.Channel = reader.string();
                        break;
                    case 3:
                        message.Alias = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CustomEmote message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ChatMessage.CustomEmote
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ChatMessage.CustomEmote} CustomEmote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomEmote.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CustomEmote message.
             * @function verify
             * @memberof ChatMessage.CustomEmote
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CustomEmote.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    if (!$util.isString(message.Channel))
                        return "Channel: string expected";
                if (message.Alias != null && message.hasOwnProperty("Alias"))
                    if (!$util.isString(message.Alias))
                        return "Alias: string expected";
                return null;
            };
    
            /**
             * Creates a CustomEmote message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ChatMessage.CustomEmote
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ChatMessage.CustomEmote} CustomEmote
             */
            CustomEmote.fromObject = function fromObject(object) {
                if (object instanceof $root.ChatMessage.CustomEmote)
                    return object;
                var message = new $root.ChatMessage.CustomEmote();
                if (object.id != null)
                    if ($util.Long)
                        (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                    else if (typeof object.id === "string")
                        message.id = parseInt(object.id, 10);
                    else if (typeof object.id === "number")
                        message.id = object.id;
                    else if (typeof object.id === "object")
                        message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.Channel != null)
                    message.Channel = String(object.Channel);
                if (object.Alias != null)
                    message.Alias = String(object.Alias);
                return message;
            };
    
            /**
             * Creates a plain object from a CustomEmote message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ChatMessage.CustomEmote
             * @static
             * @param {ChatMessage.CustomEmote} message CustomEmote
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CustomEmote.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.id = options.longs === String ? "0" : 0;
                    object.Channel = "";
                    object.Alias = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (typeof message.id === "number")
                        object.id = options.longs === String ? String(message.id) : message.id;
                    else
                        object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    object.Channel = message.Channel;
                if (message.Alias != null && message.hasOwnProperty("Alias"))
                    object.Alias = message.Alias;
                return object;
            };
    
            /**
             * Converts this CustomEmote to JSON.
             * @function toJSON
             * @memberof ChatMessage.CustomEmote
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CustomEmote.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CustomEmote;
        })();
    
        return ChatMessage;
    })();
    
    $root.GlobalMessage = (function() {
    
        /**
         * Properties of a GlobalMessage.
         * @exports IGlobalMessage
         * @interface IGlobalMessage
         * @property {string} [message] GlobalMessage message
         */
    
        /**
         * Constructs a new GlobalMessage.
         * @exports GlobalMessage
         * @classdesc Represents a GlobalMessage.
         * @constructor
         * @param {IGlobalMessage=} [properties] Properties to set
         */
        function GlobalMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * GlobalMessage message.
         * @member {string}message
         * @memberof GlobalMessage
         * @instance
         */
        GlobalMessage.prototype.message = "";
    
        /**
         * Creates a new GlobalMessage instance using the specified properties.
         * @function create
         * @memberof GlobalMessage
         * @static
         * @param {IGlobalMessage=} [properties] Properties to set
         * @returns {GlobalMessage} GlobalMessage instance
         */
        GlobalMessage.create = function create(properties) {
            return new GlobalMessage(properties);
        };
    
        /**
         * Encodes the specified GlobalMessage message. Does not implicitly {@link GlobalMessage.verify|verify} messages.
         * @function encode
         * @memberof GlobalMessage
         * @static
         * @param {IGlobalMessage} message GlobalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified GlobalMessage message, length delimited. Does not implicitly {@link GlobalMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GlobalMessage
         * @static
         * @param {IGlobalMessage} message GlobalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a GlobalMessage message from the specified reader or buffer.
         * @function decode
         * @memberof GlobalMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GlobalMessage} GlobalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GlobalMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a GlobalMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GlobalMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GlobalMessage} GlobalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a GlobalMessage message.
         * @function verify
         * @memberof GlobalMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GlobalMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a GlobalMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GlobalMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GlobalMessage} GlobalMessage
         */
        GlobalMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.GlobalMessage)
                return object;
            var message = new $root.GlobalMessage();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a GlobalMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GlobalMessage
         * @static
         * @param {GlobalMessage} message GlobalMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GlobalMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this GlobalMessage to JSON.
         * @function toJSON
         * @memberof GlobalMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GlobalMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return GlobalMessage;
    })();
    
    $root.Whisper = (function() {
    
        /**
         * Properties of a Whisper.
         * @exports IWhisper
         * @interface IWhisper
         * @property {number} [id] Whisper id
         * @property {number} [userId] Whisper userId
         * @property {string} [displayName] Whisper displayName
         * @property {string} [message] Whisper message
         * @property {boolean} [incomming] Whisper incomming
         * @property {number|Long} [timeStamp] Whisper timeStamp
         * @property {Array.<Whisper.ICustomEmote>} [customEmotes] Whisper customEmotes
         * @property {boolean} [bot] Whisper bot
         */
    
        /**
         * Constructs a new Whisper.
         * @exports Whisper
         * @classdesc Represents a Whisper.
         * @constructor
         * @param {IWhisper=} [properties] Properties to set
         */
        function Whisper(properties) {
            this.customEmotes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Whisper id.
         * @member {number}id
         * @memberof Whisper
         * @instance
         */
        Whisper.prototype.id = 0;
    
        /**
         * Whisper userId.
         * @member {number}userId
         * @memberof Whisper
         * @instance
         */
        Whisper.prototype.userId = 0;
    
        /**
         * Whisper displayName.
         * @member {string}displayName
         * @memberof Whisper
         * @instance
         */
        Whisper.prototype.displayName = "";
    
        /**
         * Whisper message.
         * @member {string}message
         * @memberof Whisper
         * @instance
         */
        Whisper.prototype.message = "";
    
        /**
         * Whisper incomming.
         * @member {boolean}incomming
         * @memberof Whisper
         * @instance
         */
        Whisper.prototype.incomming = false;
    
        /**
         * Whisper timeStamp.
         * @member {number|Long}timeStamp
         * @memberof Whisper
         * @instance
         */
        Whisper.prototype.timeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Whisper customEmotes.
         * @member {Array.<Whisper.ICustomEmote>}customEmotes
         * @memberof Whisper
         * @instance
         */
        Whisper.prototype.customEmotes = $util.emptyArray;
    
        /**
         * Whisper bot.
         * @member {boolean}bot
         * @memberof Whisper
         * @instance
         */
        Whisper.prototype.bot = false;
    
        /**
         * Creates a new Whisper instance using the specified properties.
         * @function create
         * @memberof Whisper
         * @static
         * @param {IWhisper=} [properties] Properties to set
         * @returns {Whisper} Whisper instance
         */
        Whisper.create = function create(properties) {
            return new Whisper(properties);
        };
    
        /**
         * Encodes the specified Whisper message. Does not implicitly {@link Whisper.verify|verify} messages.
         * @function encode
         * @memberof Whisper
         * @static
         * @param {IWhisper} message Whisper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Whisper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.userId);
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.displayName);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.incomming != null && message.hasOwnProperty("incomming"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.incomming);
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.timeStamp);
            if (message.customEmotes != null && message.customEmotes.length)
                for (var i = 0; i < message.customEmotes.length; ++i)
                    $root.Whisper.CustomEmote.encode(message.customEmotes[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.bot != null && message.hasOwnProperty("bot"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.bot);
            return writer;
        };
    
        /**
         * Encodes the specified Whisper message, length delimited. Does not implicitly {@link Whisper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Whisper
         * @static
         * @param {IWhisper} message Whisper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Whisper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Whisper message from the specified reader or buffer.
         * @function decode
         * @memberof Whisper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Whisper} Whisper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Whisper.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Whisper();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.userId = reader.uint32();
                    break;
                case 3:
                    message.displayName = reader.string();
                    break;
                case 4:
                    message.message = reader.string();
                    break;
                case 5:
                    message.incomming = reader.bool();
                    break;
                case 6:
                    message.timeStamp = reader.int64();
                    break;
                case 7:
                    if (!(message.customEmotes && message.customEmotes.length))
                        message.customEmotes = [];
                    message.customEmotes.push($root.Whisper.CustomEmote.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.bot = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Whisper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Whisper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Whisper} Whisper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Whisper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Whisper message.
         * @function verify
         * @memberof Whisper
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Whisper.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.incomming != null && message.hasOwnProperty("incomming"))
                if (typeof message.incomming !== "boolean")
                    return "incomming: boolean expected";
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                if (!$util.isInteger(message.timeStamp) && !(message.timeStamp && $util.isInteger(message.timeStamp.low) && $util.isInteger(message.timeStamp.high)))
                    return "timeStamp: integer|Long expected";
            if (message.customEmotes != null && message.hasOwnProperty("customEmotes")) {
                if (!Array.isArray(message.customEmotes))
                    return "customEmotes: array expected";
                for (var i = 0; i < message.customEmotes.length; ++i) {
                    var error = $root.Whisper.CustomEmote.verify(message.customEmotes[i]);
                    if (error)
                        return "customEmotes." + error;
                }
            }
            if (message.bot != null && message.hasOwnProperty("bot"))
                if (typeof message.bot !== "boolean")
                    return "bot: boolean expected";
            return null;
        };
    
        /**
         * Creates a Whisper message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Whisper
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Whisper} Whisper
         */
        Whisper.fromObject = function fromObject(object) {
            if (object instanceof $root.Whisper)
                return object;
            var message = new $root.Whisper();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.message != null)
                message.message = String(object.message);
            if (object.incomming != null)
                message.incomming = Boolean(object.incomming);
            if (object.timeStamp != null)
                if ($util.Long)
                    (message.timeStamp = $util.Long.fromValue(object.timeStamp)).unsigned = false;
                else if (typeof object.timeStamp === "string")
                    message.timeStamp = parseInt(object.timeStamp, 10);
                else if (typeof object.timeStamp === "number")
                    message.timeStamp = object.timeStamp;
                else if (typeof object.timeStamp === "object")
                    message.timeStamp = new $util.LongBits(object.timeStamp.low >>> 0, object.timeStamp.high >>> 0).toNumber();
            if (object.customEmotes) {
                if (!Array.isArray(object.customEmotes))
                    throw TypeError(".Whisper.customEmotes: array expected");
                message.customEmotes = [];
                for (var i = 0; i < object.customEmotes.length; ++i) {
                    if (typeof object.customEmotes[i] !== "object")
                        throw TypeError(".Whisper.customEmotes: object expected");
                    message.customEmotes[i] = $root.Whisper.CustomEmote.fromObject(object.customEmotes[i]);
                }
            }
            if (object.bot != null)
                message.bot = Boolean(object.bot);
            return message;
        };
    
        /**
         * Creates a plain object from a Whisper message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Whisper
         * @static
         * @param {Whisper} message Whisper
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Whisper.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.customEmotes = [];
            if (options.defaults) {
                object.id = 0;
                object.userId = 0;
                object.displayName = "";
                object.message = "";
                object.incomming = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeStamp = options.longs === String ? "0" : 0;
                object.bot = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.incomming != null && message.hasOwnProperty("incomming"))
                object.incomming = message.incomming;
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                if (typeof message.timeStamp === "number")
                    object.timeStamp = options.longs === String ? String(message.timeStamp) : message.timeStamp;
                else
                    object.timeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.timeStamp) : options.longs === Number ? new $util.LongBits(message.timeStamp.low >>> 0, message.timeStamp.high >>> 0).toNumber() : message.timeStamp;
            if (message.customEmotes && message.customEmotes.length) {
                object.customEmotes = [];
                for (var j = 0; j < message.customEmotes.length; ++j)
                    object.customEmotes[j] = $root.Whisper.CustomEmote.toObject(message.customEmotes[j], options);
            }
            if (message.bot != null && message.hasOwnProperty("bot"))
                object.bot = message.bot;
            return object;
        };
    
        /**
         * Converts this Whisper to JSON.
         * @function toJSON
         * @memberof Whisper
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Whisper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        Whisper.CustomEmote = (function() {
    
            /**
             * Properties of a CustomEmote.
             * @memberof Whisper
             * @interface ICustomEmote
             * @property {number|Long} [id] CustomEmote id
             * @property {string} [Channel] CustomEmote Channel
             * @property {string} [Alias] CustomEmote Alias
             */
    
            /**
             * Constructs a new CustomEmote.
             * @memberof Whisper
             * @classdesc Represents a CustomEmote.
             * @constructor
             * @param {Whisper.ICustomEmote=} [properties] Properties to set
             */
            function CustomEmote(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CustomEmote id.
             * @member {number|Long}id
             * @memberof Whisper.CustomEmote
             * @instance
             */
            CustomEmote.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * CustomEmote Channel.
             * @member {string}Channel
             * @memberof Whisper.CustomEmote
             * @instance
             */
            CustomEmote.prototype.Channel = "";
    
            /**
             * CustomEmote Alias.
             * @member {string}Alias
             * @memberof Whisper.CustomEmote
             * @instance
             */
            CustomEmote.prototype.Alias = "";
    
            /**
             * Creates a new CustomEmote instance using the specified properties.
             * @function create
             * @memberof Whisper.CustomEmote
             * @static
             * @param {Whisper.ICustomEmote=} [properties] Properties to set
             * @returns {Whisper.CustomEmote} CustomEmote instance
             */
            CustomEmote.create = function create(properties) {
                return new CustomEmote(properties);
            };
    
            /**
             * Encodes the specified CustomEmote message. Does not implicitly {@link Whisper.CustomEmote.verify|verify} messages.
             * @function encode
             * @memberof Whisper.CustomEmote
             * @static
             * @param {Whisper.ICustomEmote} message CustomEmote message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomEmote.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Channel);
                if (message.Alias != null && message.hasOwnProperty("Alias"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.Alias);
                return writer;
            };
    
            /**
             * Encodes the specified CustomEmote message, length delimited. Does not implicitly {@link Whisper.CustomEmote.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Whisper.CustomEmote
             * @static
             * @param {Whisper.ICustomEmote} message CustomEmote message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomEmote.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CustomEmote message from the specified reader or buffer.
             * @function decode
             * @memberof Whisper.CustomEmote
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Whisper.CustomEmote} CustomEmote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomEmote.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Whisper.CustomEmote();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int64();
                        break;
                    case 2:
                        message.Channel = reader.string();
                        break;
                    case 3:
                        message.Alias = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CustomEmote message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Whisper.CustomEmote
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Whisper.CustomEmote} CustomEmote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomEmote.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CustomEmote message.
             * @function verify
             * @memberof Whisper.CustomEmote
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CustomEmote.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    if (!$util.isString(message.Channel))
                        return "Channel: string expected";
                if (message.Alias != null && message.hasOwnProperty("Alias"))
                    if (!$util.isString(message.Alias))
                        return "Alias: string expected";
                return null;
            };
    
            /**
             * Creates a CustomEmote message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Whisper.CustomEmote
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Whisper.CustomEmote} CustomEmote
             */
            CustomEmote.fromObject = function fromObject(object) {
                if (object instanceof $root.Whisper.CustomEmote)
                    return object;
                var message = new $root.Whisper.CustomEmote();
                if (object.id != null)
                    if ($util.Long)
                        (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                    else if (typeof object.id === "string")
                        message.id = parseInt(object.id, 10);
                    else if (typeof object.id === "number")
                        message.id = object.id;
                    else if (typeof object.id === "object")
                        message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.Channel != null)
                    message.Channel = String(object.Channel);
                if (object.Alias != null)
                    message.Alias = String(object.Alias);
                return message;
            };
    
            /**
             * Creates a plain object from a CustomEmote message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Whisper.CustomEmote
             * @static
             * @param {Whisper.CustomEmote} message CustomEmote
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CustomEmote.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.id = options.longs === String ? "0" : 0;
                    object.Channel = "";
                    object.Alias = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (typeof message.id === "number")
                        object.id = options.longs === String ? String(message.id) : message.id;
                    else
                        object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    object.Channel = message.Channel;
                if (message.Alias != null && message.hasOwnProperty("Alias"))
                    object.Alias = message.Alias;
                return object;
            };
    
            /**
             * Converts this CustomEmote to JSON.
             * @function toJSON
             * @memberof Whisper.CustomEmote
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CustomEmote.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CustomEmote;
        })();
    
        return Whisper;
    })();
    
    $root.ServerMessage = (function() {
    
        /**
         * Properties of a ServerMessage.
         * @exports IServerMessage
         * @interface IServerMessage
         * @property {string} [message] ServerMessage message
         */
    
        /**
         * Constructs a new ServerMessage.
         * @exports ServerMessage
         * @classdesc Represents a ServerMessage.
         * @constructor
         * @param {IServerMessage=} [properties] Properties to set
         */
        function ServerMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ServerMessage message.
         * @member {string}message
         * @memberof ServerMessage
         * @instance
         */
        ServerMessage.prototype.message = "";
    
        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @function create
         * @memberof ServerMessage
         * @static
         * @param {IServerMessage=} [properties] Properties to set
         * @returns {ServerMessage} ServerMessage instance
         */
        ServerMessage.create = function create(properties) {
            return new ServerMessage(properties);
        };
    
        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link ServerMessage.verify|verify} messages.
         * @function encode
         * @memberof ServerMessage
         * @static
         * @param {IServerMessage} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link ServerMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerMessage
         * @static
         * @param {IServerMessage} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerMessage} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerMessage} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ServerMessage message.
         * @function verify
         * @memberof ServerMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerMessage} ServerMessage
         */
        ServerMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerMessage)
                return object;
            var message = new $root.ServerMessage();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerMessage
         * @static
         * @param {ServerMessage} message ServerMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this ServerMessage to JSON.
         * @function toJSON
         * @memberof ServerMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ServerMessage;
    })();
    
    $root.CommandHelp = (function() {
    
        /**
         * Properties of a CommandHelp.
         * @exports ICommandHelp
         * @interface ICommandHelp
         * @property {Array.<CommandHelp.ICommand>} [commands] CommandHelp commands
         */
    
        /**
         * Constructs a new CommandHelp.
         * @exports CommandHelp
         * @classdesc Represents a CommandHelp.
         * @constructor
         * @param {ICommandHelp=} [properties] Properties to set
         */
        function CommandHelp(properties) {
            this.commands = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CommandHelp commands.
         * @member {Array.<CommandHelp.ICommand>}commands
         * @memberof CommandHelp
         * @instance
         */
        CommandHelp.prototype.commands = $util.emptyArray;
    
        /**
         * Creates a new CommandHelp instance using the specified properties.
         * @function create
         * @memberof CommandHelp
         * @static
         * @param {ICommandHelp=} [properties] Properties to set
         * @returns {CommandHelp} CommandHelp instance
         */
        CommandHelp.create = function create(properties) {
            return new CommandHelp(properties);
        };
    
        /**
         * Encodes the specified CommandHelp message. Does not implicitly {@link CommandHelp.verify|verify} messages.
         * @function encode
         * @memberof CommandHelp
         * @static
         * @param {ICommandHelp} message CommandHelp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandHelp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.commands != null && message.commands.length)
                for (var i = 0; i < message.commands.length; ++i)
                    $root.CommandHelp.Command.encode(message.commands[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CommandHelp message, length delimited. Does not implicitly {@link CommandHelp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CommandHelp
         * @static
         * @param {ICommandHelp} message CommandHelp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandHelp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CommandHelp message from the specified reader or buffer.
         * @function decode
         * @memberof CommandHelp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommandHelp} CommandHelp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandHelp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommandHelp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.commands && message.commands.length))
                        message.commands = [];
                    message.commands.push($root.CommandHelp.Command.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CommandHelp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CommandHelp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommandHelp} CommandHelp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandHelp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CommandHelp message.
         * @function verify
         * @memberof CommandHelp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommandHelp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.commands != null && message.hasOwnProperty("commands")) {
                if (!Array.isArray(message.commands))
                    return "commands: array expected";
                for (var i = 0; i < message.commands.length; ++i) {
                    var error = $root.CommandHelp.Command.verify(message.commands[i]);
                    if (error)
                        return "commands." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CommandHelp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CommandHelp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CommandHelp} CommandHelp
         */
        CommandHelp.fromObject = function fromObject(object) {
            if (object instanceof $root.CommandHelp)
                return object;
            var message = new $root.CommandHelp();
            if (object.commands) {
                if (!Array.isArray(object.commands))
                    throw TypeError(".CommandHelp.commands: array expected");
                message.commands = [];
                for (var i = 0; i < object.commands.length; ++i) {
                    if (typeof object.commands[i] !== "object")
                        throw TypeError(".CommandHelp.commands: object expected");
                    message.commands[i] = $root.CommandHelp.Command.fromObject(object.commands[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CommandHelp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CommandHelp
         * @static
         * @param {CommandHelp} message CommandHelp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommandHelp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.commands = [];
            if (message.commands && message.commands.length) {
                object.commands = [];
                for (var j = 0; j < message.commands.length; ++j)
                    object.commands[j] = $root.CommandHelp.Command.toObject(message.commands[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CommandHelp to JSON.
         * @function toJSON
         * @memberof CommandHelp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommandHelp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CommandHelp.Command = (function() {
    
            /**
             * Properties of a Command.
             * @memberof CommandHelp
             * @interface ICommand
             * @property {Array.<string>} [triggers] Command triggers
             * @property {string} [description] Command description
             */
    
            /**
             * Constructs a new Command.
             * @memberof CommandHelp
             * @classdesc Represents a Command.
             * @constructor
             * @param {CommandHelp.ICommand=} [properties] Properties to set
             */
            function Command(properties) {
                this.triggers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Command triggers.
             * @member {Array.<string>}triggers
             * @memberof CommandHelp.Command
             * @instance
             */
            Command.prototype.triggers = $util.emptyArray;
    
            /**
             * Command description.
             * @member {string}description
             * @memberof CommandHelp.Command
             * @instance
             */
            Command.prototype.description = "";
    
            /**
             * Creates a new Command instance using the specified properties.
             * @function create
             * @memberof CommandHelp.Command
             * @static
             * @param {CommandHelp.ICommand=} [properties] Properties to set
             * @returns {CommandHelp.Command} Command instance
             */
            Command.create = function create(properties) {
                return new Command(properties);
            };
    
            /**
             * Encodes the specified Command message. Does not implicitly {@link CommandHelp.Command.verify|verify} messages.
             * @function encode
             * @memberof CommandHelp.Command
             * @static
             * @param {CommandHelp.ICommand} message Command message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Command.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.triggers != null && message.triggers.length)
                    for (var i = 0; i < message.triggers.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.triggers[i]);
                if (message.description != null && message.hasOwnProperty("description"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                return writer;
            };
    
            /**
             * Encodes the specified Command message, length delimited. Does not implicitly {@link CommandHelp.Command.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CommandHelp.Command
             * @static
             * @param {CommandHelp.ICommand} message Command message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Command.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Command message from the specified reader or buffer.
             * @function decode
             * @memberof CommandHelp.Command
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CommandHelp.Command} Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Command.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommandHelp.Command();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.triggers && message.triggers.length))
                            message.triggers = [];
                        message.triggers.push(reader.string());
                        break;
                    case 2:
                        message.description = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Command message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CommandHelp.Command
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CommandHelp.Command} Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Command.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Command message.
             * @function verify
             * @memberof CommandHelp.Command
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Command.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.triggers != null && message.hasOwnProperty("triggers")) {
                    if (!Array.isArray(message.triggers))
                        return "triggers: array expected";
                    for (var i = 0; i < message.triggers.length; ++i)
                        if (!$util.isString(message.triggers[i]))
                            return "triggers: string[] expected";
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                return null;
            };
    
            /**
             * Creates a Command message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CommandHelp.Command
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CommandHelp.Command} Command
             */
            Command.fromObject = function fromObject(object) {
                if (object instanceof $root.CommandHelp.Command)
                    return object;
                var message = new $root.CommandHelp.Command();
                if (object.triggers) {
                    if (!Array.isArray(object.triggers))
                        throw TypeError(".CommandHelp.Command.triggers: array expected");
                    message.triggers = [];
                    for (var i = 0; i < object.triggers.length; ++i)
                        message.triggers[i] = String(object.triggers[i]);
                }
                if (object.description != null)
                    message.description = String(object.description);
                return message;
            };
    
            /**
             * Creates a plain object from a Command message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CommandHelp.Command
             * @static
             * @param {CommandHelp.Command} message Command
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Command.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.triggers = [];
                if (options.defaults)
                    object.description = "";
                if (message.triggers && message.triggers.length) {
                    object.triggers = [];
                    for (var j = 0; j < message.triggers.length; ++j)
                        object.triggers[j] = message.triggers[j];
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                return object;
            };
    
            /**
             * Converts this Command to JSON.
             * @function toJSON
             * @memberof CommandHelp.Command
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Command.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Command;
        })();
    
        return CommandHelp;
    })();
    
    $root.Control = (function() {
    
        /**
         * Properties of a Control.
         * @exports IControl
         * @interface IControl
         * @property {Control.MessageType} [messageType] Control messageType
         * @property {boolean} [dataBool] Control dataBool
         */
    
        /**
         * Constructs a new Control.
         * @exports Control
         * @classdesc Represents a Control.
         * @constructor
         * @param {IControl=} [properties] Properties to set
         */
        function Control(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Control messageType.
         * @member {Control.MessageType}messageType
         * @memberof Control
         * @instance
         */
        Control.prototype.messageType = 0;
    
        /**
         * Control dataBool.
         * @member {boolean}dataBool
         * @memberof Control
         * @instance
         */
        Control.prototype.dataBool = false;
    
        /**
         * Creates a new Control instance using the specified properties.
         * @function create
         * @memberof Control
         * @static
         * @param {IControl=} [properties] Properties to set
         * @returns {Control} Control instance
         */
        Control.create = function create(properties) {
            return new Control(properties);
        };
    
        /**
         * Encodes the specified Control message. Does not implicitly {@link Control.verify|verify} messages.
         * @function encode
         * @memberof Control
         * @static
         * @param {IControl} message Control message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Control.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
            if (message.dataBool != null && message.hasOwnProperty("dataBool"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.dataBool);
            return writer;
        };
    
        /**
         * Encodes the specified Control message, length delimited. Does not implicitly {@link Control.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Control
         * @static
         * @param {IControl} message Control message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Control.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Control message from the specified reader or buffer.
         * @function decode
         * @memberof Control
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Control} Control
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Control.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Control();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageType = reader.int32();
                    break;
                case 2:
                    message.dataBool = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Control message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Control
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Control} Control
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Control.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Control message.
         * @function verify
         * @memberof Control
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Control.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                    break;
                }
            if (message.dataBool != null && message.hasOwnProperty("dataBool"))
                if (typeof message.dataBool !== "boolean")
                    return "dataBool: boolean expected";
            return null;
        };
    
        /**
         * Creates a Control message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Control
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Control} Control
         */
        Control.fromObject = function fromObject(object) {
            if (object instanceof $root.Control)
                return object;
            var message = new $root.Control();
            switch (object.messageType) {
            case "END_HISTORY":
            case 0:
                message.messageType = 0;
                break;
            case "KICK":
            case 1:
                message.messageType = 1;
                break;
            case "GAMING":
            case 2:
                message.messageType = 2;
                break;
            case "ADULT":
            case 3:
                message.messageType = 3;
                break;
            case "COMMISSIONS":
            case 4:
                message.messageType = 4;
                break;
            case "UNUSED_COMMISSION_DESCRIPTION":
            case 5:
                message.messageType = 5;
                break;
            case "UNUSED_DESCRIPTION":
            case 6:
                message.messageType = 6;
                break;
            case "CONTENT_TYPE":
            case 7:
                message.messageType = 7;
                break;
            case "CAN_TALK":
            case 8:
                message.messageType = 8;
                break;
            case "SHOW_POLL_CREATOR":
            case 9:
                message.messageType = 9;
                break;
            case "UNUSED_SHOW_RAFFLE_CREATOR":
            case 10:
                message.messageType = 10;
                break;
            case "NAME_TAKEN":
            case 11:
                message.messageType = 11;
                break;
            case "HIDE_POLL":
            case 12:
                message.messageType = 12;
                break;
            case "AWAY":
            case 13:
                message.messageType = 13;
                break;
            case "JWT_SUCCESS":
            case 14:
                message.messageType = 14;
                break;
            case "ENABLE_WHISPERS":
            case 15:
                message.messageType = 15;
                break;
            case "ALLOW_LINKS":
            case 16:
                message.messageType = 16;
                break;
            }
            if (object.dataBool != null)
                message.dataBool = Boolean(object.dataBool);
            return message;
        };
    
        /**
         * Creates a plain object from a Control message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Control
         * @static
         * @param {Control} message Control
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Control.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.messageType = options.enums === String ? "END_HISTORY" : 0;
                object.dataBool = false;
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.Control.MessageType[message.messageType] : message.messageType;
            if (message.dataBool != null && message.hasOwnProperty("dataBool"))
                object.dataBool = message.dataBool;
            return object;
        };
    
        /**
         * Converts this Control to JSON.
         * @function toJSON
         * @memberof Control
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Control.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * MessageType enum.
         * @enum {string}
         * @property {number} END_HISTORY=0 END_HISTORY value
         * @property {number} KICK=1 KICK value
         * @property {number} GAMING=2 GAMING value
         * @property {number} ADULT=3 ADULT value
         * @property {number} COMMISSIONS=4 COMMISSIONS value
         * @property {number} UNUSED_COMMISSION_DESCRIPTION=5 UNUSED_COMMISSION_DESCRIPTION value
         * @property {number} UNUSED_DESCRIPTION=6 UNUSED_DESCRIPTION value
         * @property {number} CONTENT_TYPE=7 CONTENT_TYPE value
         * @property {number} CAN_TALK=8 CAN_TALK value
         * @property {number} SHOW_POLL_CREATOR=9 SHOW_POLL_CREATOR value
         * @property {number} UNUSED_SHOW_RAFFLE_CREATOR=10 UNUSED_SHOW_RAFFLE_CREATOR value
         * @property {number} NAME_TAKEN=11 NAME_TAKEN value
         * @property {number} HIDE_POLL=12 HIDE_POLL value
         * @property {number} AWAY=13 AWAY value
         * @property {number} JWT_SUCCESS=14 JWT_SUCCESS value
         * @property {number} ENABLE_WHISPERS=15 ENABLE_WHISPERS value
         * @property {number} ALLOW_LINKS=16 ALLOW_LINKS value
         */
        Control.MessageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "END_HISTORY"] = 0;
            values[valuesById[1] = "KICK"] = 1;
            values[valuesById[2] = "GAMING"] = 2;
            values[valuesById[3] = "ADULT"] = 3;
            values[valuesById[4] = "COMMISSIONS"] = 4;
            values[valuesById[5] = "UNUSED_COMMISSION_DESCRIPTION"] = 5;
            values[valuesById[6] = "UNUSED_DESCRIPTION"] = 6;
            values[valuesById[7] = "CONTENT_TYPE"] = 7;
            values[valuesById[8] = "CAN_TALK"] = 8;
            values[valuesById[9] = "SHOW_POLL_CREATOR"] = 9;
            values[valuesById[10] = "UNUSED_SHOW_RAFFLE_CREATOR"] = 10;
            values[valuesById[11] = "NAME_TAKEN"] = 11;
            values[valuesById[12] = "HIDE_POLL"] = 12;
            values[valuesById[13] = "AWAY"] = 13;
            values[valuesById[14] = "JWT_SUCCESS"] = 14;
            values[valuesById[15] = "ENABLE_WHISPERS"] = 15;
            values[valuesById[16] = "ALLOW_LINKS"] = 16;
            return values;
        })();
    
        return Control;
    })();
    
    $root.AdminControl = (function() {
    
        /**
         * Properties of an AdminControl.
         * @exports IAdminControl
         * @interface IAdminControl
         * @property {AdminControl.MessageType} [messageType] AdminControl messageType
         */
    
        /**
         * Constructs a new AdminControl.
         * @exports AdminControl
         * @classdesc Represents an AdminControl.
         * @constructor
         * @param {IAdminControl=} [properties] Properties to set
         */
        function AdminControl(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * AdminControl messageType.
         * @member {AdminControl.MessageType}messageType
         * @memberof AdminControl
         * @instance
         */
        AdminControl.prototype.messageType = 0;
    
        /**
         * Creates a new AdminControl instance using the specified properties.
         * @function create
         * @memberof AdminControl
         * @static
         * @param {IAdminControl=} [properties] Properties to set
         * @returns {AdminControl} AdminControl instance
         */
        AdminControl.create = function create(properties) {
            return new AdminControl(properties);
        };
    
        /**
         * Encodes the specified AdminControl message. Does not implicitly {@link AdminControl.verify|verify} messages.
         * @function encode
         * @memberof AdminControl
         * @static
         * @param {IAdminControl} message AdminControl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminControl.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
            return writer;
        };
    
        /**
         * Encodes the specified AdminControl message, length delimited. Does not implicitly {@link AdminControl.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AdminControl
         * @static
         * @param {IAdminControl} message AdminControl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminControl.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an AdminControl message from the specified reader or buffer.
         * @function decode
         * @memberof AdminControl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AdminControl} AdminControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminControl.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AdminControl();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an AdminControl message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AdminControl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AdminControl} AdminControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminControl.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an AdminControl message.
         * @function verify
         * @memberof AdminControl
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdminControl.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };
    
        /**
         * Creates an AdminControl message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AdminControl
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AdminControl} AdminControl
         */
        AdminControl.fromObject = function fromObject(object) {
            if (object instanceof $root.AdminControl)
                return object;
            var message = new $root.AdminControl();
            switch (object.messageType) {
            case "ADULT":
            case 0:
                message.messageType = 0;
                break;
            case "GAMING":
            case 1:
                message.messageType = 1;
                break;
            case "MOVIE":
            case 2:
                message.messageType = 2;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from an AdminControl message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AdminControl
         * @static
         * @param {AdminControl} message AdminControl
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdminControl.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.messageType = options.enums === String ? "ADULT" : 0;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.AdminControl.MessageType[message.messageType] : message.messageType;
            return object;
        };
    
        /**
         * Converts this AdminControl to JSON.
         * @function toJSON
         * @memberof AdminControl
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdminControl.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * MessageType enum.
         * @enum {string}
         * @property {number} ADULT=0 ADULT value
         * @property {number} GAMING=1 GAMING value
         * @property {number} MOVIE=2 MOVIE value
         */
        AdminControl.MessageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ADULT"] = 0;
            values[valuesById[1] = "GAMING"] = 1;
            values[valuesById[2] = "MOVIE"] = 2;
            return values;
        })();
    
        return AdminControl;
    })();
    
    $root.OnlineState = (function() {
    
        /**
         * Properties of an OnlineState.
         * @exports IOnlineState
         * @interface IOnlineState
         * @property {boolean} [isLive] OnlineState isLive
         * @property {number} [viewers] OnlineState viewers
         * @property {number} [channel] OnlineState channel
         * @property {string} [channelName] OnlineState channelName
         */
    
        /**
         * Constructs a new OnlineState.
         * @exports OnlineState
         * @classdesc Represents an OnlineState.
         * @constructor
         * @param {IOnlineState=} [properties] Properties to set
         */
        function OnlineState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * OnlineState isLive.
         * @member {boolean}isLive
         * @memberof OnlineState
         * @instance
         */
        OnlineState.prototype.isLive = false;
    
        /**
         * OnlineState viewers.
         * @member {number}viewers
         * @memberof OnlineState
         * @instance
         */
        OnlineState.prototype.viewers = 0;
    
        /**
         * OnlineState channel.
         * @member {number}channel
         * @memberof OnlineState
         * @instance
         */
        OnlineState.prototype.channel = 0;
    
        /**
         * OnlineState channelName.
         * @member {string}channelName
         * @memberof OnlineState
         * @instance
         */
        OnlineState.prototype.channelName = "";
    
        /**
         * Creates a new OnlineState instance using the specified properties.
         * @function create
         * @memberof OnlineState
         * @static
         * @param {IOnlineState=} [properties] Properties to set
         * @returns {OnlineState} OnlineState instance
         */
        OnlineState.create = function create(properties) {
            return new OnlineState(properties);
        };
    
        /**
         * Encodes the specified OnlineState message. Does not implicitly {@link OnlineState.verify|verify} messages.
         * @function encode
         * @memberof OnlineState
         * @static
         * @param {IOnlineState} message OnlineState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isLive != null && message.hasOwnProperty("isLive"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isLive);
            if (message.viewers != null && message.hasOwnProperty("viewers"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.viewers);
            if (message.channel != null && message.hasOwnProperty("channel"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.channel);
            if (message.channelName != null && message.hasOwnProperty("channelName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.channelName);
            return writer;
        };
    
        /**
         * Encodes the specified OnlineState message, length delimited. Does not implicitly {@link OnlineState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OnlineState
         * @static
         * @param {IOnlineState} message OnlineState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an OnlineState message from the specified reader or buffer.
         * @function decode
         * @memberof OnlineState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlineState} OnlineState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OnlineState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isLive = reader.bool();
                    break;
                case 2:
                    message.viewers = reader.uint32();
                    break;
                case 3:
                    message.channel = reader.uint32();
                    break;
                case 4:
                    message.channelName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an OnlineState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OnlineState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlineState} OnlineState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an OnlineState message.
         * @function verify
         * @memberof OnlineState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnlineState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isLive != null && message.hasOwnProperty("isLive"))
                if (typeof message.isLive !== "boolean")
                    return "isLive: boolean expected";
            if (message.viewers != null && message.hasOwnProperty("viewers"))
                if (!$util.isInteger(message.viewers))
                    return "viewers: integer expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.channelName != null && message.hasOwnProperty("channelName"))
                if (!$util.isString(message.channelName))
                    return "channelName: string expected";
            return null;
        };
    
        /**
         * Creates an OnlineState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OnlineState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlineState} OnlineState
         */
        OnlineState.fromObject = function fromObject(object) {
            if (object instanceof $root.OnlineState)
                return object;
            var message = new $root.OnlineState();
            if (object.isLive != null)
                message.isLive = Boolean(object.isLive);
            if (object.viewers != null)
                message.viewers = object.viewers >>> 0;
            if (object.channel != null)
                message.channel = object.channel >>> 0;
            if (object.channelName != null)
                message.channelName = String(object.channelName);
            return message;
        };
    
        /**
         * Creates a plain object from an OnlineState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OnlineState
         * @static
         * @param {OnlineState} message OnlineState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnlineState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isLive = false;
                object.viewers = 0;
                object.channel = 0;
                object.channelName = "";
            }
            if (message.isLive != null && message.hasOwnProperty("isLive"))
                object.isLive = message.isLive;
            if (message.viewers != null && message.hasOwnProperty("viewers"))
                object.viewers = message.viewers;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.channelName != null && message.hasOwnProperty("channelName"))
                object.channelName = message.channelName;
            return object;
        };
    
        /**
         * Converts this OnlineState to JSON.
         * @function toJSON
         * @memberof OnlineState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnlineState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return OnlineState;
    })();
    
    $root.Multistream = (function() {
    
        /**
         * Properties of a Multistream.
         * @exports IMultistream
         * @interface IMultistream
         * @property {Multistream.IChannel} [host] Multistream host
         * @property {Array.<Multistream.IChannel>} [guests] Multistream guests
         */
    
        /**
         * Constructs a new Multistream.
         * @exports Multistream
         * @classdesc Represents a Multistream.
         * @constructor
         * @param {IMultistream=} [properties] Properties to set
         */
        function Multistream(properties) {
            this.guests = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Multistream host.
         * @member {(Multistream.IChannel|null|undefined)}host
         * @memberof Multistream
         * @instance
         */
        Multistream.prototype.host = null;
    
        /**
         * Multistream guests.
         * @member {Array.<Multistream.IChannel>}guests
         * @memberof Multistream
         * @instance
         */
        Multistream.prototype.guests = $util.emptyArray;
    
        /**
         * Creates a new Multistream instance using the specified properties.
         * @function create
         * @memberof Multistream
         * @static
         * @param {IMultistream=} [properties] Properties to set
         * @returns {Multistream} Multistream instance
         */
        Multistream.create = function create(properties) {
            return new Multistream(properties);
        };
    
        /**
         * Encodes the specified Multistream message. Does not implicitly {@link Multistream.verify|verify} messages.
         * @function encode
         * @memberof Multistream
         * @static
         * @param {IMultistream} message Multistream message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Multistream.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.host != null && message.hasOwnProperty("host"))
                $root.Multistream.Channel.encode(message.host, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.guests != null && message.guests.length)
                for (var i = 0; i < message.guests.length; ++i)
                    $root.Multistream.Channel.encode(message.guests[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Multistream message, length delimited. Does not implicitly {@link Multistream.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Multistream
         * @static
         * @param {IMultistream} message Multistream message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Multistream.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Multistream message from the specified reader or buffer.
         * @function decode
         * @memberof Multistream
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Multistream} Multistream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Multistream.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Multistream();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.host = $root.Multistream.Channel.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.guests && message.guests.length))
                        message.guests = [];
                    message.guests.push($root.Multistream.Channel.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Multistream message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Multistream
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Multistream} Multistream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Multistream.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Multistream message.
         * @function verify
         * @memberof Multistream
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Multistream.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.host != null && message.hasOwnProperty("host")) {
                var error = $root.Multistream.Channel.verify(message.host);
                if (error)
                    return "host." + error;
            }
            if (message.guests != null && message.hasOwnProperty("guests")) {
                if (!Array.isArray(message.guests))
                    return "guests: array expected";
                for (var i = 0; i < message.guests.length; ++i) {
                    error = $root.Multistream.Channel.verify(message.guests[i]);
                    if (error)
                        return "guests." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a Multistream message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Multistream
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Multistream} Multistream
         */
        Multistream.fromObject = function fromObject(object) {
            if (object instanceof $root.Multistream)
                return object;
            var message = new $root.Multistream();
            if (object.host != null) {
                if (typeof object.host !== "object")
                    throw TypeError(".Multistream.host: object expected");
                message.host = $root.Multistream.Channel.fromObject(object.host);
            }
            if (object.guests) {
                if (!Array.isArray(object.guests))
                    throw TypeError(".Multistream.guests: array expected");
                message.guests = [];
                for (var i = 0; i < object.guests.length; ++i) {
                    if (typeof object.guests[i] !== "object")
                        throw TypeError(".Multistream.guests: object expected");
                    message.guests[i] = $root.Multistream.Channel.fromObject(object.guests[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Multistream message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Multistream
         * @static
         * @param {Multistream} message Multistream
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Multistream.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.guests = [];
            if (options.defaults)
                object.host = null;
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = $root.Multistream.Channel.toObject(message.host, options);
            if (message.guests && message.guests.length) {
                object.guests = [];
                for (var j = 0; j < message.guests.length; ++j)
                    object.guests[j] = $root.Multistream.Channel.toObject(message.guests[j], options);
            }
            return object;
        };
    
        /**
         * Converts this Multistream to JSON.
         * @function toJSON
         * @memberof Multistream
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Multistream.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        Multistream.Channel = (function() {
    
            /**
             * Properties of a Channel.
             * @memberof Multistream
             * @interface IChannel
             * @property {number} [channel] Channel channel
             * @property {string} [channelName] Channel channelName
             */
    
            /**
             * Constructs a new Channel.
             * @memberof Multistream
             * @classdesc Represents a Channel.
             * @constructor
             * @param {Multistream.IChannel=} [properties] Properties to set
             */
            function Channel(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Channel channel.
             * @member {number}channel
             * @memberof Multistream.Channel
             * @instance
             */
            Channel.prototype.channel = 0;
    
            /**
             * Channel channelName.
             * @member {string}channelName
             * @memberof Multistream.Channel
             * @instance
             */
            Channel.prototype.channelName = "";
    
            /**
             * Creates a new Channel instance using the specified properties.
             * @function create
             * @memberof Multistream.Channel
             * @static
             * @param {Multistream.IChannel=} [properties] Properties to set
             * @returns {Multistream.Channel} Channel instance
             */
            Channel.create = function create(properties) {
                return new Channel(properties);
            };
    
            /**
             * Encodes the specified Channel message. Does not implicitly {@link Multistream.Channel.verify|verify} messages.
             * @function encode
             * @memberof Multistream.Channel
             * @static
             * @param {Multistream.IChannel} message Channel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Channel.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.channel != null && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.channel);
                if (message.channelName != null && message.hasOwnProperty("channelName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.channelName);
                return writer;
            };
    
            /**
             * Encodes the specified Channel message, length delimited. Does not implicitly {@link Multistream.Channel.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Multistream.Channel
             * @static
             * @param {Multistream.IChannel} message Channel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Channel.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Channel message from the specified reader or buffer.
             * @function decode
             * @memberof Multistream.Channel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Multistream.Channel} Channel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Channel.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Multistream.Channel();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.channel = reader.uint32();
                        break;
                    case 2:
                        message.channelName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Channel message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Multistream.Channel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Multistream.Channel} Channel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Channel.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Channel message.
             * @function verify
             * @memberof Multistream.Channel
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Channel.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isInteger(message.channel))
                        return "channel: integer expected";
                if (message.channelName != null && message.hasOwnProperty("channelName"))
                    if (!$util.isString(message.channelName))
                        return "channelName: string expected";
                return null;
            };
    
            /**
             * Creates a Channel message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Multistream.Channel
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Multistream.Channel} Channel
             */
            Channel.fromObject = function fromObject(object) {
                if (object instanceof $root.Multistream.Channel)
                    return object;
                var message = new $root.Multistream.Channel();
                if (object.channel != null)
                    message.channel = object.channel >>> 0;
                if (object.channelName != null)
                    message.channelName = String(object.channelName);
                return message;
            };
    
            /**
             * Creates a plain object from a Channel message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Multistream.Channel
             * @static
             * @param {Multistream.Channel} message Channel
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Channel.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.channel = 0;
                    object.channelName = "";
                }
                if (message.channel != null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                if (message.channelName != null && message.hasOwnProperty("channelName"))
                    object.channelName = message.channelName;
                return object;
            };
    
            /**
             * Converts this Channel to JSON.
             * @function toJSON
             * @memberof Multistream.Channel
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Channel.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Channel;
        })();
    
        return Multistream;
    })();
    
    $root.Color = (function() {
    
        /**
         * Properties of a Color.
         * @exports IColor
         * @interface IColor
         * @property {string} [color] Color color
         */
    
        /**
         * Constructs a new Color.
         * @exports Color
         * @classdesc Represents a Color.
         * @constructor
         * @param {IColor=} [properties] Properties to set
         */
        function Color(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Color color.
         * @member {string}color
         * @memberof Color
         * @instance
         */
        Color.prototype.color = "";
    
        /**
         * Creates a new Color instance using the specified properties.
         * @function create
         * @memberof Color
         * @static
         * @param {IColor=} [properties] Properties to set
         * @returns {Color} Color instance
         */
        Color.create = function create(properties) {
            return new Color(properties);
        };
    
        /**
         * Encodes the specified Color message. Does not implicitly {@link Color.verify|verify} messages.
         * @function encode
         * @memberof Color
         * @static
         * @param {IColor} message Color message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Color.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.color != null && message.hasOwnProperty("color"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.color);
            return writer;
        };
    
        /**
         * Encodes the specified Color message, length delimited. Does not implicitly {@link Color.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Color
         * @static
         * @param {IColor} message Color message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Color.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Color message from the specified reader or buffer.
         * @function decode
         * @memberof Color
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Color} Color
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Color.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Color();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.color = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Color message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Color
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Color} Color
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Color.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Color message.
         * @function verify
         * @memberof Color
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Color.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            return null;
        };
    
        /**
         * Creates a Color message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Color
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Color} Color
         */
        Color.fromObject = function fromObject(object) {
            if (object instanceof $root.Color)
                return object;
            var message = new $root.Color();
            if (object.color != null)
                message.color = String(object.color);
            return message;
        };
    
        /**
         * Creates a plain object from a Color message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Color
         * @static
         * @param {Color} message Color
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Color.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.color = "";
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            return object;
        };
    
        /**
         * Converts this Color to JSON.
         * @function toJSON
         * @memberof Color
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Color.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Color;
    })();
    
    $root.IgnoresUpdated = (function() {
    
        /**
         * Properties of an IgnoresUpdated.
         * @exports IIgnoresUpdated
         * @interface IIgnoresUpdated
         * @property {Array.<string>} [ignores] IgnoresUpdated ignores
         */
    
        /**
         * Constructs a new IgnoresUpdated.
         * @exports IgnoresUpdated
         * @classdesc Represents an IgnoresUpdated.
         * @constructor
         * @param {IIgnoresUpdated=} [properties] Properties to set
         */
        function IgnoresUpdated(properties) {
            this.ignores = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * IgnoresUpdated ignores.
         * @member {Array.<string>}ignores
         * @memberof IgnoresUpdated
         * @instance
         */
        IgnoresUpdated.prototype.ignores = $util.emptyArray;
    
        /**
         * Creates a new IgnoresUpdated instance using the specified properties.
         * @function create
         * @memberof IgnoresUpdated
         * @static
         * @param {IIgnoresUpdated=} [properties] Properties to set
         * @returns {IgnoresUpdated} IgnoresUpdated instance
         */
        IgnoresUpdated.create = function create(properties) {
            return new IgnoresUpdated(properties);
        };
    
        /**
         * Encodes the specified IgnoresUpdated message. Does not implicitly {@link IgnoresUpdated.verify|verify} messages.
         * @function encode
         * @memberof IgnoresUpdated
         * @static
         * @param {IIgnoresUpdated} message IgnoresUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IgnoresUpdated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ignores != null && message.ignores.length)
                for (var i = 0; i < message.ignores.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.ignores[i]);
            return writer;
        };
    
        /**
         * Encodes the specified IgnoresUpdated message, length delimited. Does not implicitly {@link IgnoresUpdated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof IgnoresUpdated
         * @static
         * @param {IIgnoresUpdated} message IgnoresUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IgnoresUpdated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an IgnoresUpdated message from the specified reader or buffer.
         * @function decode
         * @memberof IgnoresUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {IgnoresUpdated} IgnoresUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IgnoresUpdated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IgnoresUpdated();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ignores && message.ignores.length))
                        message.ignores = [];
                    message.ignores.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an IgnoresUpdated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof IgnoresUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {IgnoresUpdated} IgnoresUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IgnoresUpdated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an IgnoresUpdated message.
         * @function verify
         * @memberof IgnoresUpdated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IgnoresUpdated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ignores != null && message.hasOwnProperty("ignores")) {
                if (!Array.isArray(message.ignores))
                    return "ignores: array expected";
                for (var i = 0; i < message.ignores.length; ++i)
                    if (!$util.isString(message.ignores[i]))
                        return "ignores: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates an IgnoresUpdated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof IgnoresUpdated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {IgnoresUpdated} IgnoresUpdated
         */
        IgnoresUpdated.fromObject = function fromObject(object) {
            if (object instanceof $root.IgnoresUpdated)
                return object;
            var message = new $root.IgnoresUpdated();
            if (object.ignores) {
                if (!Array.isArray(object.ignores))
                    throw TypeError(".IgnoresUpdated.ignores: array expected");
                message.ignores = [];
                for (var i = 0; i < object.ignores.length; ++i)
                    message.ignores[i] = String(object.ignores[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from an IgnoresUpdated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof IgnoresUpdated
         * @static
         * @param {IgnoresUpdated} message IgnoresUpdated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IgnoresUpdated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ignores = [];
            if (message.ignores && message.ignores.length) {
                object.ignores = [];
                for (var j = 0; j < message.ignores.length; ++j)
                    object.ignores[j] = message.ignores[j];
            }
            return object;
        };
    
        /**
         * Converts this IgnoresUpdated to JSON.
         * @function toJSON
         * @memberof IgnoresUpdated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IgnoresUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return IgnoresUpdated;
    })();
    
    $root.ModifyIgnores = (function() {
    
        /**
         * Properties of a ModifyIgnores.
         * @exports IModifyIgnores
         * @interface IModifyIgnores
         * @property {string} [ignoreName] ModifyIgnores ignoreName
         * @property {boolean} [isAdding] ModifyIgnores isAdding
         */
    
        /**
         * Constructs a new ModifyIgnores.
         * @exports ModifyIgnores
         * @classdesc Represents a ModifyIgnores.
         * @constructor
         * @param {IModifyIgnores=} [properties] Properties to set
         */
        function ModifyIgnores(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ModifyIgnores ignoreName.
         * @member {string}ignoreName
         * @memberof ModifyIgnores
         * @instance
         */
        ModifyIgnores.prototype.ignoreName = "";
    
        /**
         * ModifyIgnores isAdding.
         * @member {boolean}isAdding
         * @memberof ModifyIgnores
         * @instance
         */
        ModifyIgnores.prototype.isAdding = false;
    
        /**
         * Creates a new ModifyIgnores instance using the specified properties.
         * @function create
         * @memberof ModifyIgnores
         * @static
         * @param {IModifyIgnores=} [properties] Properties to set
         * @returns {ModifyIgnores} ModifyIgnores instance
         */
        ModifyIgnores.create = function create(properties) {
            return new ModifyIgnores(properties);
        };
    
        /**
         * Encodes the specified ModifyIgnores message. Does not implicitly {@link ModifyIgnores.verify|verify} messages.
         * @function encode
         * @memberof ModifyIgnores
         * @static
         * @param {IModifyIgnores} message ModifyIgnores message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyIgnores.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ignoreName != null && message.hasOwnProperty("ignoreName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ignoreName);
            if (message.isAdding != null && message.hasOwnProperty("isAdding"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isAdding);
            return writer;
        };
    
        /**
         * Encodes the specified ModifyIgnores message, length delimited. Does not implicitly {@link ModifyIgnores.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ModifyIgnores
         * @static
         * @param {IModifyIgnores} message ModifyIgnores message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyIgnores.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ModifyIgnores message from the specified reader or buffer.
         * @function decode
         * @memberof ModifyIgnores
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ModifyIgnores} ModifyIgnores
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyIgnores.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModifyIgnores();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ignoreName = reader.string();
                    break;
                case 2:
                    message.isAdding = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ModifyIgnores message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ModifyIgnores
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ModifyIgnores} ModifyIgnores
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyIgnores.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ModifyIgnores message.
         * @function verify
         * @memberof ModifyIgnores
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyIgnores.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ignoreName != null && message.hasOwnProperty("ignoreName"))
                if (!$util.isString(message.ignoreName))
                    return "ignoreName: string expected";
            if (message.isAdding != null && message.hasOwnProperty("isAdding"))
                if (typeof message.isAdding !== "boolean")
                    return "isAdding: boolean expected";
            return null;
        };
    
        /**
         * Creates a ModifyIgnores message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ModifyIgnores
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ModifyIgnores} ModifyIgnores
         */
        ModifyIgnores.fromObject = function fromObject(object) {
            if (object instanceof $root.ModifyIgnores)
                return object;
            var message = new $root.ModifyIgnores();
            if (object.ignoreName != null)
                message.ignoreName = String(object.ignoreName);
            if (object.isAdding != null)
                message.isAdding = Boolean(object.isAdding);
            return message;
        };
    
        /**
         * Creates a plain object from a ModifyIgnores message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ModifyIgnores
         * @static
         * @param {ModifyIgnores} message ModifyIgnores
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyIgnores.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ignoreName = "";
                object.isAdding = false;
            }
            if (message.ignoreName != null && message.hasOwnProperty("ignoreName"))
                object.ignoreName = message.ignoreName;
            if (message.isAdding != null && message.hasOwnProperty("isAdding"))
                object.isAdding = message.isAdding;
            return object;
        };
    
        /**
         * Converts this ModifyIgnores to JSON.
         * @function toJSON
         * @memberof ModifyIgnores
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyIgnores.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ModifyIgnores;
    })();
    
    $root.RemoveMessage = (function() {
    
        /**
         * Properties of a RemoveMessage.
         * @exports IRemoveMessage
         * @interface IRemoveMessage
         * @property {number} [id] RemoveMessage id
         * @property {number} [executionerId] RemoveMessage executionerId
         * @property {string} [executionerDisplayName] RemoveMessage executionerDisplayName
         */
    
        /**
         * Constructs a new RemoveMessage.
         * @exports RemoveMessage
         * @classdesc Represents a RemoveMessage.
         * @constructor
         * @param {IRemoveMessage=} [properties] Properties to set
         */
        function RemoveMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RemoveMessage id.
         * @member {number}id
         * @memberof RemoveMessage
         * @instance
         */
        RemoveMessage.prototype.id = 0;
    
        /**
         * RemoveMessage executionerId.
         * @member {number}executionerId
         * @memberof RemoveMessage
         * @instance
         */
        RemoveMessage.prototype.executionerId = 0;
    
        /**
         * RemoveMessage executionerDisplayName.
         * @member {string}executionerDisplayName
         * @memberof RemoveMessage
         * @instance
         */
        RemoveMessage.prototype.executionerDisplayName = "";
    
        /**
         * Creates a new RemoveMessage instance using the specified properties.
         * @function create
         * @memberof RemoveMessage
         * @static
         * @param {IRemoveMessage=} [properties] Properties to set
         * @returns {RemoveMessage} RemoveMessage instance
         */
        RemoveMessage.create = function create(properties) {
            return new RemoveMessage(properties);
        };
    
        /**
         * Encodes the specified RemoveMessage message. Does not implicitly {@link RemoveMessage.verify|verify} messages.
         * @function encode
         * @memberof RemoveMessage
         * @static
         * @param {IRemoveMessage} message RemoveMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.executionerId);
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.executionerDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified RemoveMessage message, length delimited. Does not implicitly {@link RemoveMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RemoveMessage
         * @static
         * @param {IRemoveMessage} message RemoveMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RemoveMessage message from the specified reader or buffer.
         * @function decode
         * @memberof RemoveMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RemoveMessage} RemoveMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RemoveMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.executionerId = reader.uint32();
                    break;
                case 3:
                    message.executionerDisplayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a RemoveMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RemoveMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RemoveMessage} RemoveMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RemoveMessage message.
         * @function verify
         * @memberof RemoveMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a RemoveMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RemoveMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RemoveMessage} RemoveMessage
         */
        RemoveMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.RemoveMessage)
                return object;
            var message = new $root.RemoveMessage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.executionerId != null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName != null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            return message;
        };
    
        /**
         * Creates a plain object from a RemoveMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RemoveMessage
         * @static
         * @param {RemoveMessage} message RemoveMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.executionerId = 0;
                object.executionerDisplayName = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            return object;
        };
    
        /**
         * Converts this RemoveMessage to JSON.
         * @function toJSON
         * @memberof RemoveMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RemoveMessage;
    })();
    
    $root.ClearUserMessages = (function() {
    
        /**
         * Properties of a ClearUserMessages.
         * @exports IClearUserMessages
         * @interface IClearUserMessages
         * @property {string} [username] ClearUserMessages username
         * @property {number} [executionerId] ClearUserMessages executionerId
         * @property {string} [executionerDisplayName] ClearUserMessages executionerDisplayName
         */
    
        /**
         * Constructs a new ClearUserMessages.
         * @exports ClearUserMessages
         * @classdesc Represents a ClearUserMessages.
         * @constructor
         * @param {IClearUserMessages=} [properties] Properties to set
         */
        function ClearUserMessages(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ClearUserMessages username.
         * @member {string}username
         * @memberof ClearUserMessages
         * @instance
         */
        ClearUserMessages.prototype.username = "";
    
        /**
         * ClearUserMessages executionerId.
         * @member {number}executionerId
         * @memberof ClearUserMessages
         * @instance
         */
        ClearUserMessages.prototype.executionerId = 0;
    
        /**
         * ClearUserMessages executionerDisplayName.
         * @member {string}executionerDisplayName
         * @memberof ClearUserMessages
         * @instance
         */
        ClearUserMessages.prototype.executionerDisplayName = "";
    
        /**
         * Creates a new ClearUserMessages instance using the specified properties.
         * @function create
         * @memberof ClearUserMessages
         * @static
         * @param {IClearUserMessages=} [properties] Properties to set
         * @returns {ClearUserMessages} ClearUserMessages instance
         */
        ClearUserMessages.create = function create(properties) {
            return new ClearUserMessages(properties);
        };
    
        /**
         * Encodes the specified ClearUserMessages message. Does not implicitly {@link ClearUserMessages.verify|verify} messages.
         * @function encode
         * @memberof ClearUserMessages
         * @static
         * @param {IClearUserMessages} message ClearUserMessages message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearUserMessages.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.executionerId);
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.executionerDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified ClearUserMessages message, length delimited. Does not implicitly {@link ClearUserMessages.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClearUserMessages
         * @static
         * @param {IClearUserMessages} message ClearUserMessages message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearUserMessages.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ClearUserMessages message from the specified reader or buffer.
         * @function decode
         * @memberof ClearUserMessages
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClearUserMessages} ClearUserMessages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClearUserMessages.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClearUserMessages();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.executionerId = reader.uint32();
                    break;
                case 3:
                    message.executionerDisplayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ClearUserMessages message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClearUserMessages
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClearUserMessages} ClearUserMessages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClearUserMessages.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ClearUserMessages message.
         * @function verify
         * @memberof ClearUserMessages
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClearUserMessages.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a ClearUserMessages message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClearUserMessages
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClearUserMessages} ClearUserMessages
         */
        ClearUserMessages.fromObject = function fromObject(object) {
            if (object instanceof $root.ClearUserMessages)
                return object;
            var message = new $root.ClearUserMessages();
            if (object.username != null)
                message.username = String(object.username);
            if (object.executionerId != null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName != null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            return message;
        };
    
        /**
         * Creates a plain object from a ClearUserMessages message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClearUserMessages
         * @static
         * @param {ClearUserMessages} message ClearUserMessages
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClearUserMessages.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.executionerId = 0;
                object.executionerDisplayName = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            return object;
        };
    
        /**
         * Converts this ClearUserMessages to JSON.
         * @function toJSON
         * @memberof ClearUserMessages
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClearUserMessages.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ClearUserMessages;
    })();
    
    $root.ClearHistory = (function() {
    
        /**
         * Properties of a ClearHistory.
         * @exports IClearHistory
         * @interface IClearHistory
         * @property {number} [executionerId] ClearHistory executionerId
         * @property {string} [executionerDisplayName] ClearHistory executionerDisplayName
         */
    
        /**
         * Constructs a new ClearHistory.
         * @exports ClearHistory
         * @classdesc Represents a ClearHistory.
         * @constructor
         * @param {IClearHistory=} [properties] Properties to set
         */
        function ClearHistory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ClearHistory executionerId.
         * @member {number}executionerId
         * @memberof ClearHistory
         * @instance
         */
        ClearHistory.prototype.executionerId = 0;
    
        /**
         * ClearHistory executionerDisplayName.
         * @member {string}executionerDisplayName
         * @memberof ClearHistory
         * @instance
         */
        ClearHistory.prototype.executionerDisplayName = "";
    
        /**
         * Creates a new ClearHistory instance using the specified properties.
         * @function create
         * @memberof ClearHistory
         * @static
         * @param {IClearHistory=} [properties] Properties to set
         * @returns {ClearHistory} ClearHistory instance
         */
        ClearHistory.create = function create(properties) {
            return new ClearHistory(properties);
        };
    
        /**
         * Encodes the specified ClearHistory message. Does not implicitly {@link ClearHistory.verify|verify} messages.
         * @function encode
         * @memberof ClearHistory
         * @static
         * @param {IClearHistory} message ClearHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearHistory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.executionerId);
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.executionerDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified ClearHistory message, length delimited. Does not implicitly {@link ClearHistory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClearHistory
         * @static
         * @param {IClearHistory} message ClearHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearHistory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ClearHistory message from the specified reader or buffer.
         * @function decode
         * @memberof ClearHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClearHistory} ClearHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClearHistory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClearHistory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.executionerId = reader.uint32();
                    break;
                case 2:
                    message.executionerDisplayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ClearHistory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClearHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClearHistory} ClearHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClearHistory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ClearHistory message.
         * @function verify
         * @memberof ClearHistory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClearHistory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a ClearHistory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClearHistory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClearHistory} ClearHistory
         */
        ClearHistory.fromObject = function fromObject(object) {
            if (object instanceof $root.ClearHistory)
                return object;
            var message = new $root.ClearHistory();
            if (object.executionerId != null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName != null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            return message;
        };
    
        /**
         * Creates a plain object from a ClearHistory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClearHistory
         * @static
         * @param {ClearHistory} message ClearHistory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClearHistory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.executionerId = 0;
                object.executionerDisplayName = "";
            }
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            return object;
        };
    
        /**
         * Converts this ClearHistory to JSON.
         * @function toJSON
         * @memberof ClearHistory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClearHistory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ClearHistory;
    })();
    
    $root.Kick = (function() {
    
        /**
         * Properties of a Kick.
         * @exports IKick
         * @interface IKick
         * @property {number} [userId] Kick userId
         * @property {string} [displayName] Kick displayName
         * @property {number} [executionerId] Kick executionerId
         * @property {string} [executionerDisplayName] Kick executionerDisplayName
         */
    
        /**
         * Constructs a new Kick.
         * @exports Kick
         * @classdesc Represents a Kick.
         * @constructor
         * @param {IKick=} [properties] Properties to set
         */
        function Kick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Kick userId.
         * @member {number}userId
         * @memberof Kick
         * @instance
         */
        Kick.prototype.userId = 0;
    
        /**
         * Kick displayName.
         * @member {string}displayName
         * @memberof Kick
         * @instance
         */
        Kick.prototype.displayName = "";
    
        /**
         * Kick executionerId.
         * @member {number}executionerId
         * @memberof Kick
         * @instance
         */
        Kick.prototype.executionerId = 0;
    
        /**
         * Kick executionerDisplayName.
         * @member {string}executionerDisplayName
         * @memberof Kick
         * @instance
         */
        Kick.prototype.executionerDisplayName = "";
    
        /**
         * Creates a new Kick instance using the specified properties.
         * @function create
         * @memberof Kick
         * @static
         * @param {IKick=} [properties] Properties to set
         * @returns {Kick} Kick instance
         */
        Kick.create = function create(properties) {
            return new Kick(properties);
        };
    
        /**
         * Encodes the specified Kick message. Does not implicitly {@link Kick.verify|verify} messages.
         * @function encode
         * @memberof Kick
         * @static
         * @param {IKick} message Kick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Kick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.executionerId);
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.executionerDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified Kick message, length delimited. Does not implicitly {@link Kick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Kick
         * @static
         * @param {IKick} message Kick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Kick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Kick message from the specified reader or buffer.
         * @function decode
         * @memberof Kick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Kick} Kick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Kick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Kick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    message.displayName = reader.string();
                    break;
                case 3:
                    message.executionerId = reader.uint32();
                    break;
                case 4:
                    message.executionerDisplayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Kick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Kick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Kick} Kick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Kick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Kick message.
         * @function verify
         * @memberof Kick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Kick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a Kick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Kick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Kick} Kick
         */
        Kick.fromObject = function fromObject(object) {
            if (object instanceof $root.Kick)
                return object;
            var message = new $root.Kick();
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.executionerId != null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName != null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            return message;
        };
    
        /**
         * Creates a plain object from a Kick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Kick
         * @static
         * @param {Kick} message Kick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Kick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.displayName = "";
                object.executionerId = 0;
                object.executionerDisplayName = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            return object;
        };
    
        /**
         * Converts this Kick to JSON.
         * @function toJSON
         * @memberof Kick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Kick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Kick;
    })();
    
    $root.Ban = (function() {
    
        /**
         * Properties of a Ban.
         * @exports IBan
         * @interface IBan
         * @property {number} [userId] Ban userId
         * @property {string} [displayName] Ban displayName
         * @property {number} [executionerId] Ban executionerId
         * @property {string} [executionerDisplayName] Ban executionerDisplayName
         * @property {boolean} [isShadowBan] Ban isShadowBan
         */
    
        /**
         * Constructs a new Ban.
         * @exports Ban
         * @classdesc Represents a Ban.
         * @constructor
         * @param {IBan=} [properties] Properties to set
         */
        function Ban(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Ban userId.
         * @member {number}userId
         * @memberof Ban
         * @instance
         */
        Ban.prototype.userId = 0;
    
        /**
         * Ban displayName.
         * @member {string}displayName
         * @memberof Ban
         * @instance
         */
        Ban.prototype.displayName = "";
    
        /**
         * Ban executionerId.
         * @member {number}executionerId
         * @memberof Ban
         * @instance
         */
        Ban.prototype.executionerId = 0;
    
        /**
         * Ban executionerDisplayName.
         * @member {string}executionerDisplayName
         * @memberof Ban
         * @instance
         */
        Ban.prototype.executionerDisplayName = "";
    
        /**
         * Ban isShadowBan.
         * @member {boolean}isShadowBan
         * @memberof Ban
         * @instance
         */
        Ban.prototype.isShadowBan = false;
    
        /**
         * Creates a new Ban instance using the specified properties.
         * @function create
         * @memberof Ban
         * @static
         * @param {IBan=} [properties] Properties to set
         * @returns {Ban} Ban instance
         */
        Ban.create = function create(properties) {
            return new Ban(properties);
        };
    
        /**
         * Encodes the specified Ban message. Does not implicitly {@link Ban.verify|verify} messages.
         * @function encode
         * @memberof Ban
         * @static
         * @param {IBan} message Ban message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ban.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.executionerId);
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.executionerDisplayName);
            if (message.isShadowBan != null && message.hasOwnProperty("isShadowBan"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isShadowBan);
            return writer;
        };
    
        /**
         * Encodes the specified Ban message, length delimited. Does not implicitly {@link Ban.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Ban
         * @static
         * @param {IBan} message Ban message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ban.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Ban message from the specified reader or buffer.
         * @function decode
         * @memberof Ban
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Ban} Ban
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ban.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ban();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    message.displayName = reader.string();
                    break;
                case 3:
                    message.executionerId = reader.uint32();
                    break;
                case 4:
                    message.executionerDisplayName = reader.string();
                    break;
                case 5:
                    message.isShadowBan = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Ban message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Ban
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Ban} Ban
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ban.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Ban message.
         * @function verify
         * @memberof Ban
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ban.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            if (message.isShadowBan != null && message.hasOwnProperty("isShadowBan"))
                if (typeof message.isShadowBan !== "boolean")
                    return "isShadowBan: boolean expected";
            return null;
        };
    
        /**
         * Creates a Ban message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Ban
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Ban} Ban
         */
        Ban.fromObject = function fromObject(object) {
            if (object instanceof $root.Ban)
                return object;
            var message = new $root.Ban();
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.executionerId != null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName != null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            if (object.isShadowBan != null)
                message.isShadowBan = Boolean(object.isShadowBan);
            return message;
        };
    
        /**
         * Creates a plain object from a Ban message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Ban
         * @static
         * @param {Ban} message Ban
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ban.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.displayName = "";
                object.executionerId = 0;
                object.executionerDisplayName = "";
                object.isShadowBan = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            if (message.isShadowBan != null && message.hasOwnProperty("isShadowBan"))
                object.isShadowBan = message.isShadowBan;
            return object;
        };
    
        /**
         * Converts this Ban to JSON.
         * @function toJSON
         * @memberof Ban
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ban.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Ban;
    })();
    
    $root.UnBan = (function() {
    
        /**
         * Properties of an UnBan.
         * @exports IUnBan
         * @interface IUnBan
         * @property {number} [userId] UnBan userId
         * @property {string} [displayName] UnBan displayName
         * @property {number} [executionerId] UnBan executionerId
         * @property {string} [executionerDisplayName] UnBan executionerDisplayName
         */
    
        /**
         * Constructs a new UnBan.
         * @exports UnBan
         * @classdesc Represents an UnBan.
         * @constructor
         * @param {IUnBan=} [properties] Properties to set
         */
        function UnBan(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UnBan userId.
         * @member {number}userId
         * @memberof UnBan
         * @instance
         */
        UnBan.prototype.userId = 0;
    
        /**
         * UnBan displayName.
         * @member {string}displayName
         * @memberof UnBan
         * @instance
         */
        UnBan.prototype.displayName = "";
    
        /**
         * UnBan executionerId.
         * @member {number}executionerId
         * @memberof UnBan
         * @instance
         */
        UnBan.prototype.executionerId = 0;
    
        /**
         * UnBan executionerDisplayName.
         * @member {string}executionerDisplayName
         * @memberof UnBan
         * @instance
         */
        UnBan.prototype.executionerDisplayName = "";
    
        /**
         * Creates a new UnBan instance using the specified properties.
         * @function create
         * @memberof UnBan
         * @static
         * @param {IUnBan=} [properties] Properties to set
         * @returns {UnBan} UnBan instance
         */
        UnBan.create = function create(properties) {
            return new UnBan(properties);
        };
    
        /**
         * Encodes the specified UnBan message. Does not implicitly {@link UnBan.verify|verify} messages.
         * @function encode
         * @memberof UnBan
         * @static
         * @param {IUnBan} message UnBan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnBan.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.executionerId);
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.executionerDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified UnBan message, length delimited. Does not implicitly {@link UnBan.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UnBan
         * @static
         * @param {IUnBan} message UnBan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnBan.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an UnBan message from the specified reader or buffer.
         * @function decode
         * @memberof UnBan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UnBan} UnBan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnBan.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UnBan();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    message.displayName = reader.string();
                    break;
                case 3:
                    message.executionerId = reader.uint32();
                    break;
                case 4:
                    message.executionerDisplayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an UnBan message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UnBan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UnBan} UnBan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnBan.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an UnBan message.
         * @function verify
         * @memberof UnBan
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnBan.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates an UnBan message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UnBan
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UnBan} UnBan
         */
        UnBan.fromObject = function fromObject(object) {
            if (object instanceof $root.UnBan)
                return object;
            var message = new $root.UnBan();
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.executionerId != null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName != null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            return message;
        };
    
        /**
         * Creates a plain object from an UnBan message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UnBan
         * @static
         * @param {UnBan} message UnBan
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnBan.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.displayName = "";
                object.executionerId = 0;
                object.executionerDisplayName = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.executionerId != null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName != null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            return object;
        };
    
        /**
         * Converts this UnBan to JSON.
         * @function toJSON
         * @memberof UnBan
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnBan.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return UnBan;
    })();
    
    $root.Mod = (function() {
    
        /**
         * Properties of a Mod.
         * @exports IMod
         * @interface IMod
         * @property {number} [userId] Mod userId
         * @property {string} [displayName] Mod displayName
         * @property {boolean} [isNowMod] Mod isNowMod
         */
    
        /**
         * Constructs a new Mod.
         * @exports Mod
         * @classdesc Represents a Mod.
         * @constructor
         * @param {IMod=} [properties] Properties to set
         */
        function Mod(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Mod userId.
         * @member {number}userId
         * @memberof Mod
         * @instance
         */
        Mod.prototype.userId = 0;
    
        /**
         * Mod displayName.
         * @member {string}displayName
         * @memberof Mod
         * @instance
         */
        Mod.prototype.displayName = "";
    
        /**
         * Mod isNowMod.
         * @member {boolean}isNowMod
         * @memberof Mod
         * @instance
         */
        Mod.prototype.isNowMod = false;
    
        /**
         * Creates a new Mod instance using the specified properties.
         * @function create
         * @memberof Mod
         * @static
         * @param {IMod=} [properties] Properties to set
         * @returns {Mod} Mod instance
         */
        Mod.create = function create(properties) {
            return new Mod(properties);
        };
    
        /**
         * Encodes the specified Mod message. Does not implicitly {@link Mod.verify|verify} messages.
         * @function encode
         * @memberof Mod
         * @static
         * @param {IMod} message Mod message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mod.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
            if (message.isNowMod != null && message.hasOwnProperty("isNowMod"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isNowMod);
            return writer;
        };
    
        /**
         * Encodes the specified Mod message, length delimited. Does not implicitly {@link Mod.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Mod
         * @static
         * @param {IMod} message Mod message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mod.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Mod message from the specified reader or buffer.
         * @function decode
         * @memberof Mod
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Mod} Mod
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mod.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mod();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    message.displayName = reader.string();
                    break;
                case 3:
                    message.isNowMod = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Mod message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Mod
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Mod} Mod
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mod.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Mod message.
         * @function verify
         * @memberof Mod
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Mod.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.isNowMod != null && message.hasOwnProperty("isNowMod"))
                if (typeof message.isNowMod !== "boolean")
                    return "isNowMod: boolean expected";
            return null;
        };
    
        /**
         * Creates a Mod message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Mod
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Mod} Mod
         */
        Mod.fromObject = function fromObject(object) {
            if (object instanceof $root.Mod)
                return object;
            var message = new $root.Mod();
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.isNowMod != null)
                message.isNowMod = Boolean(object.isNowMod);
            return message;
        };
    
        /**
         * Creates a plain object from a Mod message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Mod
         * @static
         * @param {Mod} message Mod
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Mod.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.displayName = "";
                object.isNowMod = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.isNowMod != null && message.hasOwnProperty("isNowMod"))
                object.isNowMod = message.isNowMod;
            return object;
        };
    
        /**
         * Converts this Mod to JSON.
         * @function toJSON
         * @memberof Mod
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Mod.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Mod;
    })();
    
    $root.ModList = (function() {
    
        /**
         * Properties of a ModList.
         * @exports IModList
         * @interface IModList
         * @property {Array.<ModList.IModerator>} [moderators] ModList moderators
         */
    
        /**
         * Constructs a new ModList.
         * @exports ModList
         * @classdesc Represents a ModList.
         * @constructor
         * @param {IModList=} [properties] Properties to set
         */
        function ModList(properties) {
            this.moderators = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ModList moderators.
         * @member {Array.<ModList.IModerator>}moderators
         * @memberof ModList
         * @instance
         */
        ModList.prototype.moderators = $util.emptyArray;
    
        /**
         * Creates a new ModList instance using the specified properties.
         * @function create
         * @memberof ModList
         * @static
         * @param {IModList=} [properties] Properties to set
         * @returns {ModList} ModList instance
         */
        ModList.create = function create(properties) {
            return new ModList(properties);
        };
    
        /**
         * Encodes the specified ModList message. Does not implicitly {@link ModList.verify|verify} messages.
         * @function encode
         * @memberof ModList
         * @static
         * @param {IModList} message ModList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.moderators != null && message.moderators.length)
                for (var i = 0; i < message.moderators.length; ++i)
                    $root.ModList.Moderator.encode(message.moderators[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified ModList message, length delimited. Does not implicitly {@link ModList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ModList
         * @static
         * @param {IModList} message ModList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ModList message from the specified reader or buffer.
         * @function decode
         * @memberof ModList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ModList} ModList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.moderators && message.moderators.length))
                        message.moderators = [];
                    message.moderators.push($root.ModList.Moderator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ModList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ModList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ModList} ModList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ModList message.
         * @function verify
         * @memberof ModList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.moderators != null && message.hasOwnProperty("moderators")) {
                if (!Array.isArray(message.moderators))
                    return "moderators: array expected";
                for (var i = 0; i < message.moderators.length; ++i) {
                    var error = $root.ModList.Moderator.verify(message.moderators[i]);
                    if (error)
                        return "moderators." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a ModList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ModList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ModList} ModList
         */
        ModList.fromObject = function fromObject(object) {
            if (object instanceof $root.ModList)
                return object;
            var message = new $root.ModList();
            if (object.moderators) {
                if (!Array.isArray(object.moderators))
                    throw TypeError(".ModList.moderators: array expected");
                message.moderators = [];
                for (var i = 0; i < object.moderators.length; ++i) {
                    if (typeof object.moderators[i] !== "object")
                        throw TypeError(".ModList.moderators: object expected");
                    message.moderators[i] = $root.ModList.Moderator.fromObject(object.moderators[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a ModList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ModList
         * @static
         * @param {ModList} message ModList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.moderators = [];
            if (message.moderators && message.moderators.length) {
                object.moderators = [];
                for (var j = 0; j < message.moderators.length; ++j)
                    object.moderators[j] = $root.ModList.Moderator.toObject(message.moderators[j], options);
            }
            return object;
        };
    
        /**
         * Converts this ModList to JSON.
         * @function toJSON
         * @memberof ModList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        ModList.Moderator = (function() {
    
            /**
             * Properties of a Moderator.
             * @memberof ModList
             * @interface IModerator
             * @property {number} [userId] Moderator userId
             * @property {string} [displayName] Moderator displayName
             */
    
            /**
             * Constructs a new Moderator.
             * @memberof ModList
             * @classdesc Represents a Moderator.
             * @constructor
             * @param {ModList.IModerator=} [properties] Properties to set
             */
            function Moderator(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Moderator userId.
             * @member {number}userId
             * @memberof ModList.Moderator
             * @instance
             */
            Moderator.prototype.userId = 0;
    
            /**
             * Moderator displayName.
             * @member {string}displayName
             * @memberof ModList.Moderator
             * @instance
             */
            Moderator.prototype.displayName = "";
    
            /**
             * Creates a new Moderator instance using the specified properties.
             * @function create
             * @memberof ModList.Moderator
             * @static
             * @param {ModList.IModerator=} [properties] Properties to set
             * @returns {ModList.Moderator} Moderator instance
             */
            Moderator.create = function create(properties) {
                return new Moderator(properties);
            };
    
            /**
             * Encodes the specified Moderator message. Does not implicitly {@link ModList.Moderator.verify|verify} messages.
             * @function encode
             * @memberof ModList.Moderator
             * @static
             * @param {ModList.IModerator} message Moderator message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Moderator.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
                return writer;
            };
    
            /**
             * Encodes the specified Moderator message, length delimited. Does not implicitly {@link ModList.Moderator.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ModList.Moderator
             * @static
             * @param {ModList.IModerator} message Moderator message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Moderator.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Moderator message from the specified reader or buffer.
             * @function decode
             * @memberof ModList.Moderator
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ModList.Moderator} Moderator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Moderator.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModList.Moderator();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.uint32();
                        break;
                    case 2:
                        message.displayName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Moderator message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ModList.Moderator
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ModList.Moderator} Moderator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Moderator.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Moderator message.
             * @function verify
             * @memberof ModList.Moderator
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Moderator.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    if (!$util.isString(message.displayName))
                        return "displayName: string expected";
                return null;
            };
    
            /**
             * Creates a Moderator message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ModList.Moderator
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ModList.Moderator} Moderator
             */
            Moderator.fromObject = function fromObject(object) {
                if (object instanceof $root.ModList.Moderator)
                    return object;
                var message = new $root.ModList.Moderator();
                if (object.userId != null)
                    message.userId = object.userId >>> 0;
                if (object.displayName != null)
                    message.displayName = String(object.displayName);
                return message;
            };
    
            /**
             * Creates a plain object from a Moderator message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ModList.Moderator
             * @static
             * @param {ModList.Moderator} message Moderator
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Moderator.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.displayName = "";
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    object.displayName = message.displayName;
                return object;
            };
    
            /**
             * Converts this Moderator to JSON.
             * @function toJSON
             * @memberof ModList.Moderator
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Moderator.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Moderator;
        })();
    
        return ModList;
    })();
    
    $root.RaffleInit = (function() {
    
        /**
         * Properties of a RaffleInit.
         * @exports IRaffleInit
         * @interface IRaffleInit
         * @property {Array.<string>} [names] RaffleInit names
         */
    
        /**
         * Constructs a new RaffleInit.
         * @exports RaffleInit
         * @classdesc Represents a RaffleInit.
         * @constructor
         * @param {IRaffleInit=} [properties] Properties to set
         */
        function RaffleInit(properties) {
            this.names = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RaffleInit names.
         * @member {Array.<string>}names
         * @memberof RaffleInit
         * @instance
         */
        RaffleInit.prototype.names = $util.emptyArray;
    
        /**
         * Creates a new RaffleInit instance using the specified properties.
         * @function create
         * @memberof RaffleInit
         * @static
         * @param {IRaffleInit=} [properties] Properties to set
         * @returns {RaffleInit} RaffleInit instance
         */
        RaffleInit.create = function create(properties) {
            return new RaffleInit(properties);
        };
    
        /**
         * Encodes the specified RaffleInit message. Does not implicitly {@link RaffleInit.verify|verify} messages.
         * @function encode
         * @memberof RaffleInit
         * @static
         * @param {IRaffleInit} message RaffleInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaffleInit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.names != null && message.names.length)
                for (var i = 0; i < message.names.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.names[i]);
            return writer;
        };
    
        /**
         * Encodes the specified RaffleInit message, length delimited. Does not implicitly {@link RaffleInit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RaffleInit
         * @static
         * @param {IRaffleInit} message RaffleInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaffleInit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RaffleInit message from the specified reader or buffer.
         * @function decode
         * @memberof RaffleInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RaffleInit} RaffleInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaffleInit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RaffleInit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.names && message.names.length))
                        message.names = [];
                    message.names.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a RaffleInit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RaffleInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RaffleInit} RaffleInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaffleInit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RaffleInit message.
         * @function verify
         * @memberof RaffleInit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RaffleInit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.names != null && message.hasOwnProperty("names")) {
                if (!Array.isArray(message.names))
                    return "names: array expected";
                for (var i = 0; i < message.names.length; ++i)
                    if (!$util.isString(message.names[i]))
                        return "names: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a RaffleInit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RaffleInit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RaffleInit} RaffleInit
         */
        RaffleInit.fromObject = function fromObject(object) {
            if (object instanceof $root.RaffleInit)
                return object;
            var message = new $root.RaffleInit();
            if (object.names) {
                if (!Array.isArray(object.names))
                    throw TypeError(".RaffleInit.names: array expected");
                message.names = [];
                for (var i = 0; i < object.names.length; ++i)
                    message.names[i] = String(object.names[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a RaffleInit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RaffleInit
         * @static
         * @param {RaffleInit} message RaffleInit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RaffleInit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.names = [];
            if (message.names && message.names.length) {
                object.names = [];
                for (var j = 0; j < message.names.length; ++j)
                    object.names[j] = message.names[j];
            }
            return object;
        };
    
        /**
         * Converts this RaffleInit to JSON.
         * @function toJSON
         * @memberof RaffleInit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RaffleInit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RaffleInit;
    })();
    
    $root.RaffleRun = (function() {
    
        /**
         * Properties of a RaffleRun.
         * @exports IRaffleRun
         * @interface IRaffleRun
         * @property {string} [winner] RaffleRun winner
         * @property {Array.<string>} [names] RaffleRun names
         * @property {number} [hostId] RaffleRun hostId
         * @property {string} [hostDisplayName] RaffleRun hostDisplayName
         */
    
        /**
         * Constructs a new RaffleRun.
         * @exports RaffleRun
         * @classdesc Represents a RaffleRun.
         * @constructor
         * @param {IRaffleRun=} [properties] Properties to set
         */
        function RaffleRun(properties) {
            this.names = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RaffleRun winner.
         * @member {string}winner
         * @memberof RaffleRun
         * @instance
         */
        RaffleRun.prototype.winner = "";
    
        /**
         * RaffleRun names.
         * @member {Array.<string>}names
         * @memberof RaffleRun
         * @instance
         */
        RaffleRun.prototype.names = $util.emptyArray;
    
        /**
         * RaffleRun hostId.
         * @member {number}hostId
         * @memberof RaffleRun
         * @instance
         */
        RaffleRun.prototype.hostId = 0;
    
        /**
         * RaffleRun hostDisplayName.
         * @member {string}hostDisplayName
         * @memberof RaffleRun
         * @instance
         */
        RaffleRun.prototype.hostDisplayName = "";
    
        /**
         * Creates a new RaffleRun instance using the specified properties.
         * @function create
         * @memberof RaffleRun
         * @static
         * @param {IRaffleRun=} [properties] Properties to set
         * @returns {RaffleRun} RaffleRun instance
         */
        RaffleRun.create = function create(properties) {
            return new RaffleRun(properties);
        };
    
        /**
         * Encodes the specified RaffleRun message. Does not implicitly {@link RaffleRun.verify|verify} messages.
         * @function encode
         * @memberof RaffleRun
         * @static
         * @param {IRaffleRun} message RaffleRun message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaffleRun.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.winner != null && message.hasOwnProperty("winner"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.winner);
            if (message.names != null && message.names.length)
                for (var i = 0; i < message.names.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.names[i]);
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.hostId);
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.hostDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified RaffleRun message, length delimited. Does not implicitly {@link RaffleRun.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RaffleRun
         * @static
         * @param {IRaffleRun} message RaffleRun message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaffleRun.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RaffleRun message from the specified reader or buffer.
         * @function decode
         * @memberof RaffleRun
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RaffleRun} RaffleRun
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaffleRun.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RaffleRun();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.winner = reader.string();
                    break;
                case 2:
                    if (!(message.names && message.names.length))
                        message.names = [];
                    message.names.push(reader.string());
                    break;
                case 3:
                    message.hostId = reader.uint32();
                    break;
                case 4:
                    message.hostDisplayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a RaffleRun message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RaffleRun
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RaffleRun} RaffleRun
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaffleRun.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RaffleRun message.
         * @function verify
         * @memberof RaffleRun
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RaffleRun.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.winner != null && message.hasOwnProperty("winner"))
                if (!$util.isString(message.winner))
                    return "winner: string expected";
            if (message.names != null && message.hasOwnProperty("names")) {
                if (!Array.isArray(message.names))
                    return "names: array expected";
                for (var i = 0; i < message.names.length; ++i)
                    if (!$util.isString(message.names[i]))
                        return "names: string[] expected";
            }
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                if (!$util.isInteger(message.hostId))
                    return "hostId: integer expected";
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                if (!$util.isString(message.hostDisplayName))
                    return "hostDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a RaffleRun message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RaffleRun
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RaffleRun} RaffleRun
         */
        RaffleRun.fromObject = function fromObject(object) {
            if (object instanceof $root.RaffleRun)
                return object;
            var message = new $root.RaffleRun();
            if (object.winner != null)
                message.winner = String(object.winner);
            if (object.names) {
                if (!Array.isArray(object.names))
                    throw TypeError(".RaffleRun.names: array expected");
                message.names = [];
                for (var i = 0; i < object.names.length; ++i)
                    message.names[i] = String(object.names[i]);
            }
            if (object.hostId != null)
                message.hostId = object.hostId >>> 0;
            if (object.hostDisplayName != null)
                message.hostDisplayName = String(object.hostDisplayName);
            return message;
        };
    
        /**
         * Creates a plain object from a RaffleRun message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RaffleRun
         * @static
         * @param {RaffleRun} message RaffleRun
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RaffleRun.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.names = [];
            if (options.defaults) {
                object.winner = "";
                object.hostId = 0;
                object.hostDisplayName = "";
            }
            if (message.winner != null && message.hasOwnProperty("winner"))
                object.winner = message.winner;
            if (message.names && message.names.length) {
                object.names = [];
                for (var j = 0; j < message.names.length; ++j)
                    object.names[j] = message.names[j];
            }
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                object.hostId = message.hostId;
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                object.hostDisplayName = message.hostDisplayName;
            return object;
        };
    
        /**
         * Converts this RaffleRun to JSON.
         * @function toJSON
         * @memberof RaffleRun
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RaffleRun.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RaffleRun;
    })();
    
    $root.PollInit = (function() {
    
        /**
         * Properties of a PollInit.
         * @exports IPollInit
         * @interface IPollInit
         * @property {string} [question] PollInit question
         * @property {Array.<string>} [options] PollInit options
         * @property {number} [hostId] PollInit hostId
         * @property {string} [hostDisplayName] PollInit hostDisplayName
         */
    
        /**
         * Constructs a new PollInit.
         * @exports PollInit
         * @classdesc Represents a PollInit.
         * @constructor
         * @param {IPollInit=} [properties] Properties to set
         */
        function PollInit(properties) {
            this.options = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PollInit question.
         * @member {string}question
         * @memberof PollInit
         * @instance
         */
        PollInit.prototype.question = "";
    
        /**
         * PollInit options.
         * @member {Array.<string>}options
         * @memberof PollInit
         * @instance
         */
        PollInit.prototype.options = $util.emptyArray;
    
        /**
         * PollInit hostId.
         * @member {number}hostId
         * @memberof PollInit
         * @instance
         */
        PollInit.prototype.hostId = 0;
    
        /**
         * PollInit hostDisplayName.
         * @member {string}hostDisplayName
         * @memberof PollInit
         * @instance
         */
        PollInit.prototype.hostDisplayName = "";
    
        /**
         * Creates a new PollInit instance using the specified properties.
         * @function create
         * @memberof PollInit
         * @static
         * @param {IPollInit=} [properties] Properties to set
         * @returns {PollInit} PollInit instance
         */
        PollInit.create = function create(properties) {
            return new PollInit(properties);
        };
    
        /**
         * Encodes the specified PollInit message. Does not implicitly {@link PollInit.verify|verify} messages.
         * @function encode
         * @memberof PollInit
         * @static
         * @param {IPollInit} message PollInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollInit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.question != null && message.hasOwnProperty("question"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.question);
            if (message.options != null && message.options.length)
                for (var i = 0; i < message.options.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.options[i]);
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.hostId);
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.hostDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified PollInit message, length delimited. Does not implicitly {@link PollInit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PollInit
         * @static
         * @param {IPollInit} message PollInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollInit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollInit message from the specified reader or buffer.
         * @function decode
         * @memberof PollInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollInit} PollInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollInit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PollInit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.question = reader.string();
                    break;
                case 2:
                    if (!(message.options && message.options.length))
                        message.options = [];
                    message.options.push(reader.string());
                    break;
                case 3:
                    message.hostId = reader.uint32();
                    break;
                case 4:
                    message.hostDisplayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PollInit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PollInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollInit} PollInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollInit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollInit message.
         * @function verify
         * @memberof PollInit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PollInit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.question != null && message.hasOwnProperty("question"))
                if (!$util.isString(message.question))
                    return "question: string expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (var i = 0; i < message.options.length; ++i)
                    if (!$util.isString(message.options[i]))
                        return "options: string[] expected";
            }
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                if (!$util.isInteger(message.hostId))
                    return "hostId: integer expected";
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                if (!$util.isString(message.hostDisplayName))
                    return "hostDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a PollInit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PollInit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PollInit} PollInit
         */
        PollInit.fromObject = function fromObject(object) {
            if (object instanceof $root.PollInit)
                return object;
            var message = new $root.PollInit();
            if (object.question != null)
                message.question = String(object.question);
            if (object.options) {
                if (!Array.isArray(object.options))
                    throw TypeError(".PollInit.options: array expected");
                message.options = [];
                for (var i = 0; i < object.options.length; ++i)
                    message.options[i] = String(object.options[i]);
            }
            if (object.hostId != null)
                message.hostId = object.hostId >>> 0;
            if (object.hostDisplayName != null)
                message.hostDisplayName = String(object.hostDisplayName);
            return message;
        };
    
        /**
         * Creates a plain object from a PollInit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PollInit
         * @static
         * @param {PollInit} message PollInit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollInit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.options = [];
            if (options.defaults) {
                object.question = "";
                object.hostId = 0;
                object.hostDisplayName = "";
            }
            if (message.question != null && message.hasOwnProperty("question"))
                object.question = message.question;
            if (message.options && message.options.length) {
                object.options = [];
                for (var j = 0; j < message.options.length; ++j)
                    object.options[j] = message.options[j];
            }
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                object.hostId = message.hostId;
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                object.hostDisplayName = message.hostDisplayName;
            return object;
        };
    
        /**
         * Converts this PollInit to JSON.
         * @function toJSON
         * @memberof PollInit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PollInit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollInit;
    })();
    
    $root.PollUpdate = (function() {
    
        /**
         * Properties of a PollUpdate.
         * @exports IPollUpdate
         * @interface IPollUpdate
         * @property {Array.<number>} [votes] PollUpdate votes
         * @property {number} [hostId] PollUpdate hostId
         * @property {string} [hostDisplayName] PollUpdate hostDisplayName
         */
    
        /**
         * Constructs a new PollUpdate.
         * @exports PollUpdate
         * @classdesc Represents a PollUpdate.
         * @constructor
         * @param {IPollUpdate=} [properties] Properties to set
         */
        function PollUpdate(properties) {
            this.votes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PollUpdate votes.
         * @member {Array.<number>}votes
         * @memberof PollUpdate
         * @instance
         */
        PollUpdate.prototype.votes = $util.emptyArray;
    
        /**
         * PollUpdate hostId.
         * @member {number}hostId
         * @memberof PollUpdate
         * @instance
         */
        PollUpdate.prototype.hostId = 0;
    
        /**
         * PollUpdate hostDisplayName.
         * @member {string}hostDisplayName
         * @memberof PollUpdate
         * @instance
         */
        PollUpdate.prototype.hostDisplayName = "";
    
        /**
         * Creates a new PollUpdate instance using the specified properties.
         * @function create
         * @memberof PollUpdate
         * @static
         * @param {IPollUpdate=} [properties] Properties to set
         * @returns {PollUpdate} PollUpdate instance
         */
        PollUpdate.create = function create(properties) {
            return new PollUpdate(properties);
        };
    
        /**
         * Encodes the specified PollUpdate message. Does not implicitly {@link PollUpdate.verify|verify} messages.
         * @function encode
         * @memberof PollUpdate
         * @static
         * @param {IPollUpdate} message PollUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.votes != null && message.votes.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.votes.length; ++i)
                    writer.int32(message.votes[i]);
                writer.ldelim();
            }
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.hostId);
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.hostDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified PollUpdate message, length delimited. Does not implicitly {@link PollUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PollUpdate
         * @static
         * @param {IPollUpdate} message PollUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof PollUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollUpdate} PollUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PollUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.votes && message.votes.length))
                        message.votes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.votes.push(reader.int32());
                    } else
                        message.votes.push(reader.int32());
                    break;
                case 2:
                    message.hostId = reader.uint32();
                    break;
                case 3:
                    message.hostDisplayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PollUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PollUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollUpdate} PollUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollUpdate message.
         * @function verify
         * @memberof PollUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PollUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.votes != null && message.hasOwnProperty("votes")) {
                if (!Array.isArray(message.votes))
                    return "votes: array expected";
                for (var i = 0; i < message.votes.length; ++i)
                    if (!$util.isInteger(message.votes[i]))
                        return "votes: integer[] expected";
            }
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                if (!$util.isInteger(message.hostId))
                    return "hostId: integer expected";
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                if (!$util.isString(message.hostDisplayName))
                    return "hostDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a PollUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PollUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PollUpdate} PollUpdate
         */
        PollUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.PollUpdate)
                return object;
            var message = new $root.PollUpdate();
            if (object.votes) {
                if (!Array.isArray(object.votes))
                    throw TypeError(".PollUpdate.votes: array expected");
                message.votes = [];
                for (var i = 0; i < object.votes.length; ++i)
                    message.votes[i] = object.votes[i] | 0;
            }
            if (object.hostId != null)
                message.hostId = object.hostId >>> 0;
            if (object.hostDisplayName != null)
                message.hostDisplayName = String(object.hostDisplayName);
            return message;
        };
    
        /**
         * Creates a plain object from a PollUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PollUpdate
         * @static
         * @param {PollUpdate} message PollUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.votes = [];
            if (options.defaults) {
                object.hostId = 0;
                object.hostDisplayName = "";
            }
            if (message.votes && message.votes.length) {
                object.votes = [];
                for (var j = 0; j < message.votes.length; ++j)
                    object.votes[j] = message.votes[j];
            }
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                object.hostId = message.hostId;
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                object.hostDisplayName = message.hostDisplayName;
            return object;
        };
    
        /**
         * Converts this PollUpdate to JSON.
         * @function toJSON
         * @memberof PollUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PollUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollUpdate;
    })();
    
    $root.PollResult = (function() {
    
        /**
         * Properties of a PollResult.
         * @exports IPollResult
         * @interface IPollResult
         * @property {string} [question] PollResult question
         * @property {Array.<string>} [winners] PollResult winners
         * @property {number} [votes] PollResult votes
         * @property {number} [hostId] PollResult hostId
         * @property {string} [hostDisplayName] PollResult hostDisplayName
         */
    
        /**
         * Constructs a new PollResult.
         * @exports PollResult
         * @classdesc Represents a PollResult.
         * @constructor
         * @param {IPollResult=} [properties] Properties to set
         */
        function PollResult(properties) {
            this.winners = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PollResult question.
         * @member {string}question
         * @memberof PollResult
         * @instance
         */
        PollResult.prototype.question = "";
    
        /**
         * PollResult winners.
         * @member {Array.<string>}winners
         * @memberof PollResult
         * @instance
         */
        PollResult.prototype.winners = $util.emptyArray;
    
        /**
         * PollResult votes.
         * @member {number}votes
         * @memberof PollResult
         * @instance
         */
        PollResult.prototype.votes = 0;
    
        /**
         * PollResult hostId.
         * @member {number}hostId
         * @memberof PollResult
         * @instance
         */
        PollResult.prototype.hostId = 0;
    
        /**
         * PollResult hostDisplayName.
         * @member {string}hostDisplayName
         * @memberof PollResult
         * @instance
         */
        PollResult.prototype.hostDisplayName = "";
    
        /**
         * Creates a new PollResult instance using the specified properties.
         * @function create
         * @memberof PollResult
         * @static
         * @param {IPollResult=} [properties] Properties to set
         * @returns {PollResult} PollResult instance
         */
        PollResult.create = function create(properties) {
            return new PollResult(properties);
        };
    
        /**
         * Encodes the specified PollResult message. Does not implicitly {@link PollResult.verify|verify} messages.
         * @function encode
         * @memberof PollResult
         * @static
         * @param {IPollResult} message PollResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.question != null && message.hasOwnProperty("question"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.question);
            if (message.winners != null && message.winners.length)
                for (var i = 0; i < message.winners.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.winners[i]);
            if (message.votes != null && message.hasOwnProperty("votes"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.votes);
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.hostId);
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.hostDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified PollResult message, length delimited. Does not implicitly {@link PollResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PollResult
         * @static
         * @param {IPollResult} message PollResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollResult message from the specified reader or buffer.
         * @function decode
         * @memberof PollResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollResult} PollResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PollResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.question = reader.string();
                    break;
                case 2:
                    if (!(message.winners && message.winners.length))
                        message.winners = [];
                    message.winners.push(reader.string());
                    break;
                case 3:
                    message.votes = reader.int32();
                    break;
                case 4:
                    message.hostId = reader.uint32();
                    break;
                case 5:
                    message.hostDisplayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PollResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PollResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollResult} PollResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollResult message.
         * @function verify
         * @memberof PollResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PollResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.question != null && message.hasOwnProperty("question"))
                if (!$util.isString(message.question))
                    return "question: string expected";
            if (message.winners != null && message.hasOwnProperty("winners")) {
                if (!Array.isArray(message.winners))
                    return "winners: array expected";
                for (var i = 0; i < message.winners.length; ++i)
                    if (!$util.isString(message.winners[i]))
                        return "winners: string[] expected";
            }
            if (message.votes != null && message.hasOwnProperty("votes"))
                if (!$util.isInteger(message.votes))
                    return "votes: integer expected";
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                if (!$util.isInteger(message.hostId))
                    return "hostId: integer expected";
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                if (!$util.isString(message.hostDisplayName))
                    return "hostDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a PollResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PollResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PollResult} PollResult
         */
        PollResult.fromObject = function fromObject(object) {
            if (object instanceof $root.PollResult)
                return object;
            var message = new $root.PollResult();
            if (object.question != null)
                message.question = String(object.question);
            if (object.winners) {
                if (!Array.isArray(object.winners))
                    throw TypeError(".PollResult.winners: array expected");
                message.winners = [];
                for (var i = 0; i < object.winners.length; ++i)
                    message.winners[i] = String(object.winners[i]);
            }
            if (object.votes != null)
                message.votes = object.votes | 0;
            if (object.hostId != null)
                message.hostId = object.hostId >>> 0;
            if (object.hostDisplayName != null)
                message.hostDisplayName = String(object.hostDisplayName);
            return message;
        };
    
        /**
         * Creates a plain object from a PollResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PollResult
         * @static
         * @param {PollResult} message PollResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.winners = [];
            if (options.defaults) {
                object.question = "";
                object.votes = 0;
                object.hostId = 0;
                object.hostDisplayName = "";
            }
            if (message.question != null && message.hasOwnProperty("question"))
                object.question = message.question;
            if (message.winners && message.winners.length) {
                object.winners = [];
                for (var j = 0; j < message.winners.length; ++j)
                    object.winners[j] = message.winners[j];
            }
            if (message.votes != null && message.hasOwnProperty("votes"))
                object.votes = message.votes;
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                object.hostId = message.hostId;
            if (message.hostDisplayName != null && message.hasOwnProperty("hostDisplayName"))
                object.hostDisplayName = message.hostDisplayName;
            return object;
        };
    
        /**
         * Converts this PollResult to JSON.
         * @function toJSON
         * @memberof PollResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PollResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollResult;
    })();
    
    $root.PollVote = (function() {
    
        /**
         * Properties of a PollVote.
         * @exports IPollVote
         * @interface IPollVote
         * @property {number} [option] PollVote option
         */
    
        /**
         * Constructs a new PollVote.
         * @exports PollVote
         * @classdesc Represents a PollVote.
         * @constructor
         * @param {IPollVote=} [properties] Properties to set
         */
        function PollVote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PollVote option.
         * @member {number}option
         * @memberof PollVote
         * @instance
         */
        PollVote.prototype.option = 0;
    
        /**
         * Creates a new PollVote instance using the specified properties.
         * @function create
         * @memberof PollVote
         * @static
         * @param {IPollVote=} [properties] Properties to set
         * @returns {PollVote} PollVote instance
         */
        PollVote.create = function create(properties) {
            return new PollVote(properties);
        };
    
        /**
         * Encodes the specified PollVote message. Does not implicitly {@link PollVote.verify|verify} messages.
         * @function encode
         * @memberof PollVote
         * @static
         * @param {IPollVote} message PollVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollVote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.option != null && message.hasOwnProperty("option"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.option);
            return writer;
        };
    
        /**
         * Encodes the specified PollVote message, length delimited. Does not implicitly {@link PollVote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PollVote
         * @static
         * @param {IPollVote} message PollVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollVote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollVote message from the specified reader or buffer.
         * @function decode
         * @memberof PollVote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollVote} PollVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollVote.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PollVote();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.option = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PollVote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PollVote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollVote} PollVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollVote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollVote message.
         * @function verify
         * @memberof PollVote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PollVote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.option != null && message.hasOwnProperty("option"))
                if (!$util.isInteger(message.option))
                    return "option: integer expected";
            return null;
        };
    
        /**
         * Creates a PollVote message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PollVote
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PollVote} PollVote
         */
        PollVote.fromObject = function fromObject(object) {
            if (object instanceof $root.PollVote)
                return object;
            var message = new $root.PollVote();
            if (object.option != null)
                message.option = object.option >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a PollVote message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PollVote
         * @static
         * @param {PollVote} message PollVote
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollVote.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.option = 0;
            if (message.option != null && message.hasOwnProperty("option"))
                object.option = message.option;
            return object;
        };
    
        /**
         * Converts this PollVote to JSON.
         * @function toJSON
         * @memberof PollVote
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PollVote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollVote;
    })();
    
    $root.PollVoteResponse = (function() {
    
        /**
         * Properties of a PollVoteResponse.
         * @exports IPollVoteResponse
         * @interface IPollVoteResponse
         * @property {boolean} [success] PollVoteResponse success
         */
    
        /**
         * Constructs a new PollVoteResponse.
         * @exports PollVoteResponse
         * @classdesc Represents a PollVoteResponse.
         * @constructor
         * @param {IPollVoteResponse=} [properties] Properties to set
         */
        function PollVoteResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PollVoteResponse success.
         * @member {boolean}success
         * @memberof PollVoteResponse
         * @instance
         */
        PollVoteResponse.prototype.success = false;
    
        /**
         * Creates a new PollVoteResponse instance using the specified properties.
         * @function create
         * @memberof PollVoteResponse
         * @static
         * @param {IPollVoteResponse=} [properties] Properties to set
         * @returns {PollVoteResponse} PollVoteResponse instance
         */
        PollVoteResponse.create = function create(properties) {
            return new PollVoteResponse(properties);
        };
    
        /**
         * Encodes the specified PollVoteResponse message. Does not implicitly {@link PollVoteResponse.verify|verify} messages.
         * @function encode
         * @memberof PollVoteResponse
         * @static
         * @param {IPollVoteResponse} message PollVoteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollVoteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };
    
        /**
         * Encodes the specified PollVoteResponse message, length delimited. Does not implicitly {@link PollVoteResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PollVoteResponse
         * @static
         * @param {IPollVoteResponse} message PollVoteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollVoteResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollVoteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PollVoteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollVoteResponse} PollVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollVoteResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PollVoteResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PollVoteResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PollVoteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollVoteResponse} PollVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollVoteResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollVoteResponse message.
         * @function verify
         * @memberof PollVoteResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PollVoteResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };
    
        /**
         * Creates a PollVoteResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PollVoteResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PollVoteResponse} PollVoteResponse
         */
        PollVoteResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.PollVoteResponse)
                return object;
            var message = new $root.PollVoteResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };
    
        /**
         * Creates a plain object from a PollVoteResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PollVoteResponse
         * @static
         * @param {PollVoteResponse} message PollVoteResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollVoteResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };
    
        /**
         * Converts this PollVoteResponse to JSON.
         * @function toJSON
         * @memberof PollVoteResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PollVoteResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollVoteResponse;
    })();
    
    $root.SetName = (function() {
    
        /**
         * Properties of a SetName.
         * @exports ISetName
         * @interface ISetName
         * @property {string} [name] SetName name
         */
    
        /**
         * Constructs a new SetName.
         * @exports SetName
         * @classdesc Represents a SetName.
         * @constructor
         * @param {ISetName=} [properties] Properties to set
         */
        function SetName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SetName name.
         * @member {string}name
         * @memberof SetName
         * @instance
         */
        SetName.prototype.name = "";
    
        /**
         * Creates a new SetName instance using the specified properties.
         * @function create
         * @memberof SetName
         * @static
         * @param {ISetName=} [properties] Properties to set
         * @returns {SetName} SetName instance
         */
        SetName.create = function create(properties) {
            return new SetName(properties);
        };
    
        /**
         * Encodes the specified SetName message. Does not implicitly {@link SetName.verify|verify} messages.
         * @function encode
         * @memberof SetName
         * @static
         * @param {ISetName} message SetName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };
    
        /**
         * Encodes the specified SetName message, length delimited. Does not implicitly {@link SetName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SetName
         * @static
         * @param {ISetName} message SetName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SetName message from the specified reader or buffer.
         * @function decode
         * @memberof SetName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SetName} SetName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SetName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SetName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SetName} SetName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SetName message.
         * @function verify
         * @memberof SetName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };
    
        /**
         * Creates a SetName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SetName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SetName} SetName
         */
        SetName.fromObject = function fromObject(object) {
            if (object instanceof $root.SetName)
                return object;
            var message = new $root.SetName();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };
    
        /**
         * Creates a plain object from a SetName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SetName
         * @static
         * @param {SetName} message SetName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };
    
        /**
         * Converts this SetName to JSON.
         * @function toJSON
         * @memberof SetName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SetName;
    })();
    
    $root.NameConfirmation = (function() {
    
        /**
         * Properties of a NameConfirmation.
         * @exports INameConfirmation
         * @interface INameConfirmation
         * @property {string} [response] NameConfirmation response
         */
    
        /**
         * Constructs a new NameConfirmation.
         * @exports NameConfirmation
         * @classdesc Represents a NameConfirmation.
         * @constructor
         * @param {INameConfirmation=} [properties] Properties to set
         */
        function NameConfirmation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NameConfirmation response.
         * @member {string}response
         * @memberof NameConfirmation
         * @instance
         */
        NameConfirmation.prototype.response = "";
    
        /**
         * Creates a new NameConfirmation instance using the specified properties.
         * @function create
         * @memberof NameConfirmation
         * @static
         * @param {INameConfirmation=} [properties] Properties to set
         * @returns {NameConfirmation} NameConfirmation instance
         */
        NameConfirmation.create = function create(properties) {
            return new NameConfirmation(properties);
        };
    
        /**
         * Encodes the specified NameConfirmation message. Does not implicitly {@link NameConfirmation.verify|verify} messages.
         * @function encode
         * @memberof NameConfirmation
         * @static
         * @param {INameConfirmation} message NameConfirmation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NameConfirmation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.response != null && message.hasOwnProperty("response"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.response);
            return writer;
        };
    
        /**
         * Encodes the specified NameConfirmation message, length delimited. Does not implicitly {@link NameConfirmation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NameConfirmation
         * @static
         * @param {INameConfirmation} message NameConfirmation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NameConfirmation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NameConfirmation message from the specified reader or buffer.
         * @function decode
         * @memberof NameConfirmation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NameConfirmation} NameConfirmation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NameConfirmation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NameConfirmation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.response = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a NameConfirmation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NameConfirmation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NameConfirmation} NameConfirmation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NameConfirmation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NameConfirmation message.
         * @function verify
         * @memberof NameConfirmation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NameConfirmation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.response != null && message.hasOwnProperty("response"))
                if (!$util.isString(message.response))
                    return "response: string expected";
            return null;
        };
    
        /**
         * Creates a NameConfirmation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NameConfirmation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NameConfirmation} NameConfirmation
         */
        NameConfirmation.fromObject = function fromObject(object) {
            if (object instanceof $root.NameConfirmation)
                return object;
            var message = new $root.NameConfirmation();
            if (object.response != null)
                message.response = String(object.response);
            return message;
        };
    
        /**
         * Creates a plain object from a NameConfirmation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NameConfirmation
         * @static
         * @param {NameConfirmation} message NameConfirmation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NameConfirmation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.response = "";
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = message.response;
            return object;
        };
    
        /**
         * Converts this NameConfirmation to JSON.
         * @function toJSON
         * @memberof NameConfirmation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NameConfirmation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return NameConfirmation;
    })();
    
    $root.ModTools = (function() {
    
        /**
         * Properties of a ModTools.
         * @exports IModTools
         * @interface IModTools
         * @property {ModTools.ModToolsType} [modToolsType] ModTools modToolsType
         */
    
        /**
         * Constructs a new ModTools.
         * @exports ModTools
         * @classdesc Represents a ModTools.
         * @constructor
         * @param {IModTools=} [properties] Properties to set
         */
        function ModTools(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ModTools modToolsType.
         * @member {ModTools.ModToolsType}modToolsType
         * @memberof ModTools
         * @instance
         */
        ModTools.prototype.modToolsType = 0;
    
        /**
         * Creates a new ModTools instance using the specified properties.
         * @function create
         * @memberof ModTools
         * @static
         * @param {IModTools=} [properties] Properties to set
         * @returns {ModTools} ModTools instance
         */
        ModTools.create = function create(properties) {
            return new ModTools(properties);
        };
    
        /**
         * Encodes the specified ModTools message. Does not implicitly {@link ModTools.verify|verify} messages.
         * @function encode
         * @memberof ModTools
         * @static
         * @param {IModTools} message ModTools message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModTools.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.modToolsType != null && message.hasOwnProperty("modToolsType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.modToolsType);
            return writer;
        };
    
        /**
         * Encodes the specified ModTools message, length delimited. Does not implicitly {@link ModTools.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ModTools
         * @static
         * @param {IModTools} message ModTools message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModTools.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ModTools message from the specified reader or buffer.
         * @function decode
         * @memberof ModTools
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ModTools} ModTools
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModTools.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModTools();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.modToolsType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ModTools message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ModTools
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ModTools} ModTools
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModTools.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ModTools message.
         * @function verify
         * @memberof ModTools
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModTools.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.modToolsType != null && message.hasOwnProperty("modToolsType"))
                switch (message.modToolsType) {
                default:
                    return "modToolsType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a ModTools message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ModTools
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ModTools} ModTools
         */
        ModTools.fromObject = function fromObject(object) {
            if (object instanceof $root.ModTools)
                return object;
            var message = new $root.ModTools();
            switch (object.modToolsType) {
            case "NONE":
            case 0:
                message.modToolsType = 0;
                break;
            case "MODERATOR":
            case 1:
                message.modToolsType = 1;
                break;
            case "STREAMER":
            case 2:
                message.modToolsType = 2;
                break;
            case "PTV_ADMIN":
            case 3:
                message.modToolsType = 3;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a ModTools message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ModTools
         * @static
         * @param {ModTools} message ModTools
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModTools.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.modToolsType = options.enums === String ? "NONE" : 0;
            if (message.modToolsType != null && message.hasOwnProperty("modToolsType"))
                object.modToolsType = options.enums === String ? $root.ModTools.ModToolsType[message.modToolsType] : message.modToolsType;
            return object;
        };
    
        /**
         * Converts this ModTools to JSON.
         * @function toJSON
         * @memberof ModTools
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModTools.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * ModToolsType enum.
         * @enum {string}
         * @property {number} NONE=0 NONE value
         * @property {number} MODERATOR=1 MODERATOR value
         * @property {number} STREAMER=2 STREAMER value
         * @property {number} PTV_ADMIN=3 PTV_ADMIN value
         */
        ModTools.ModToolsType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "MODERATOR"] = 1;
            values[valuesById[2] = "STREAMER"] = 2;
            values[valuesById[3] = "PTV_ADMIN"] = 3;
            return values;
        })();
    
        return ModTools;
    })();
    
    $root.PollEnd = (function() {
    
        /**
         * Properties of a PollEnd.
         * @exports IPollEnd
         * @interface IPollEnd
         */
    
        /**
         * Constructs a new PollEnd.
         * @exports PollEnd
         * @classdesc Represents a PollEnd.
         * @constructor
         * @param {IPollEnd=} [properties] Properties to set
         */
        function PollEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new PollEnd instance using the specified properties.
         * @function create
         * @memberof PollEnd
         * @static
         * @param {IPollEnd=} [properties] Properties to set
         * @returns {PollEnd} PollEnd instance
         */
        PollEnd.create = function create(properties) {
            return new PollEnd(properties);
        };
    
        /**
         * Encodes the specified PollEnd message. Does not implicitly {@link PollEnd.verify|verify} messages.
         * @function encode
         * @memberof PollEnd
         * @static
         * @param {IPollEnd} message PollEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified PollEnd message, length delimited. Does not implicitly {@link PollEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PollEnd
         * @static
         * @param {IPollEnd} message PollEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollEnd message from the specified reader or buffer.
         * @function decode
         * @memberof PollEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollEnd} PollEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PollEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PollEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PollEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollEnd} PollEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PollEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollEnd message.
         * @function verify
         * @memberof PollEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PollEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a PollEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PollEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PollEnd} PollEnd
         */
        PollEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.PollEnd)
                return object;
            return new $root.PollEnd();
        };
    
        /**
         * Creates a plain object from a PollEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PollEnd
         * @static
         * @param {PollEnd} message PollEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollEnd.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this PollEnd to JSON.
         * @function toJSON
         * @memberof PollEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PollEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollEnd;
    })();
    
    $root.Reminder = (function() {
    
        /**
         * Properties of a Reminder.
         * @exports IReminder
         * @interface IReminder
         * @property {string} [message] Reminder message
         */
    
        /**
         * Constructs a new Reminder.
         * @exports Reminder
         * @classdesc Represents a Reminder.
         * @constructor
         * @param {IReminder=} [properties] Properties to set
         */
        function Reminder(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Reminder message.
         * @member {string}message
         * @memberof Reminder
         * @instance
         */
        Reminder.prototype.message = "";
    
        /**
         * Creates a new Reminder instance using the specified properties.
         * @function create
         * @memberof Reminder
         * @static
         * @param {IReminder=} [properties] Properties to set
         * @returns {Reminder} Reminder instance
         */
        Reminder.create = function create(properties) {
            return new Reminder(properties);
        };
    
        /**
         * Encodes the specified Reminder message. Does not implicitly {@link Reminder.verify|verify} messages.
         * @function encode
         * @memberof Reminder
         * @static
         * @param {IReminder} message Reminder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reminder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified Reminder message, length delimited. Does not implicitly {@link Reminder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Reminder
         * @static
         * @param {IReminder} message Reminder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reminder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Reminder message from the specified reader or buffer.
         * @function decode
         * @memberof Reminder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Reminder} Reminder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reminder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Reminder();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Reminder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Reminder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Reminder} Reminder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reminder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Reminder message.
         * @function verify
         * @memberof Reminder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reminder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a Reminder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Reminder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Reminder} Reminder
         */
        Reminder.fromObject = function fromObject(object) {
            if (object instanceof $root.Reminder)
                return object;
            var message = new $root.Reminder();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a Reminder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Reminder
         * @static
         * @param {Reminder} message Reminder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reminder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this Reminder to JSON.
         * @function toJSON
         * @memberof Reminder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reminder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Reminder;
    })();
    
    $root.Timer = (function() {
    
        /**
         * Properties of a Timer.
         * @exports ITimer
         * @interface ITimer
         * @property {string} [message] Timer message
         */
    
        /**
         * Constructs a new Timer.
         * @exports Timer
         * @classdesc Represents a Timer.
         * @constructor
         * @param {ITimer=} [properties] Properties to set
         */
        function Timer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Timer message.
         * @member {string}message
         * @memberof Timer
         * @instance
         */
        Timer.prototype.message = "";
    
        /**
         * Creates a new Timer instance using the specified properties.
         * @function create
         * @memberof Timer
         * @static
         * @param {ITimer=} [properties] Properties to set
         * @returns {Timer} Timer instance
         */
        Timer.create = function create(properties) {
            return new Timer(properties);
        };
    
        /**
         * Encodes the specified Timer message. Does not implicitly {@link Timer.verify|verify} messages.
         * @function encode
         * @memberof Timer
         * @static
         * @param {ITimer} message Timer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified Timer message, length delimited. Does not implicitly {@link Timer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Timer
         * @static
         * @param {ITimer} message Timer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Timer message from the specified reader or buffer.
         * @function decode
         * @memberof Timer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Timer} Timer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Timer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Timer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Timer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Timer} Timer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Timer message.
         * @function verify
         * @memberof Timer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Timer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a Timer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Timer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Timer} Timer
         */
        Timer.fromObject = function fromObject(object) {
            if (object instanceof $root.Timer)
                return object;
            var message = new $root.Timer();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a Timer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Timer
         * @static
         * @param {Timer} message Timer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Timer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this Timer to JSON.
         * @function toJSON
         * @memberof Timer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Timer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Timer;
    })();
    
    $root.MonitorData = (function() {
    
        /**
         * Properties of a MonitorData.
         * @exports IMonitorData
         * @interface IMonitorData
         * @property {Uint8Array} [messageContent] MonitorData messageContent
         * @property {number} [channel] MonitorData channel
         * @property {string} [channelName] MonitorData channelName
         */
    
        /**
         * Constructs a new MonitorData.
         * @exports MonitorData
         * @classdesc Represents a MonitorData.
         * @constructor
         * @param {IMonitorData=} [properties] Properties to set
         */
        function MonitorData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * MonitorData messageContent.
         * @member {Uint8Array}messageContent
         * @memberof MonitorData
         * @instance
         */
        MonitorData.prototype.messageContent = $util.newBuffer([]);
    
        /**
         * MonitorData channel.
         * @member {number}channel
         * @memberof MonitorData
         * @instance
         */
        MonitorData.prototype.channel = 0;
    
        /**
         * MonitorData channelName.
         * @member {string}channelName
         * @memberof MonitorData
         * @instance
         */
        MonitorData.prototype.channelName = "";
    
        /**
         * Creates a new MonitorData instance using the specified properties.
         * @function create
         * @memberof MonitorData
         * @static
         * @param {IMonitorData=} [properties] Properties to set
         * @returns {MonitorData} MonitorData instance
         */
        MonitorData.create = function create(properties) {
            return new MonitorData(properties);
        };
    
        /**
         * Encodes the specified MonitorData message. Does not implicitly {@link MonitorData.verify|verify} messages.
         * @function encode
         * @memberof MonitorData
         * @static
         * @param {IMonitorData} message MonitorData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonitorData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageContent != null && message.hasOwnProperty("messageContent"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.messageContent);
            if (message.channel != null && message.hasOwnProperty("channel"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.channel);
            if (message.channelName != null && message.hasOwnProperty("channelName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.channelName);
            return writer;
        };
    
        /**
         * Encodes the specified MonitorData message, length delimited. Does not implicitly {@link MonitorData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MonitorData
         * @static
         * @param {IMonitorData} message MonitorData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonitorData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a MonitorData message from the specified reader or buffer.
         * @function decode
         * @memberof MonitorData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MonitorData} MonitorData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonitorData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MonitorData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageContent = reader.bytes();
                    break;
                case 2:
                    message.channel = reader.uint32();
                    break;
                case 3:
                    message.channelName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a MonitorData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MonitorData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MonitorData} MonitorData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonitorData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a MonitorData message.
         * @function verify
         * @memberof MonitorData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MonitorData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageContent != null && message.hasOwnProperty("messageContent"))
                if (!(message.messageContent && typeof message.messageContent.length === "number" || $util.isString(message.messageContent)))
                    return "messageContent: buffer expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.channelName != null && message.hasOwnProperty("channelName"))
                if (!$util.isString(message.channelName))
                    return "channelName: string expected";
            return null;
        };
    
        /**
         * Creates a MonitorData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MonitorData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MonitorData} MonitorData
         */
        MonitorData.fromObject = function fromObject(object) {
            if (object instanceof $root.MonitorData)
                return object;
            var message = new $root.MonitorData();
            if (object.messageContent != null)
                if (typeof object.messageContent === "string")
                    $util.base64.decode(object.messageContent, message.messageContent = $util.newBuffer($util.base64.length(object.messageContent)), 0);
                else if (object.messageContent.length)
                    message.messageContent = object.messageContent;
            if (object.channel != null)
                message.channel = object.channel >>> 0;
            if (object.channelName != null)
                message.channelName = String(object.channelName);
            return message;
        };
    
        /**
         * Creates a plain object from a MonitorData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MonitorData
         * @static
         * @param {MonitorData} message MonitorData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MonitorData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.messageContent = options.bytes === String ? "" : [];
                object.channel = 0;
                object.channelName = "";
            }
            if (message.messageContent != null && message.hasOwnProperty("messageContent"))
                object.messageContent = options.bytes === String ? $util.base64.encode(message.messageContent, 0, message.messageContent.length) : options.bytes === Array ? Array.prototype.slice.call(message.messageContent) : message.messageContent;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.channelName != null && message.hasOwnProperty("channelName"))
                object.channelName = message.channelName;
            return object;
        };
    
        /**
         * Converts this MonitorData to JSON.
         * @function toJSON
         * @memberof MonitorData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MonitorData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return MonitorData;
    })();
    
    $root.ChatLevel = (function() {
    
        /**
         * Properties of a ChatLevel.
         * @exports IChatLevel
         * @interface IChatLevel
         * @property {ChatLevel.ChatLevelType} [chatLevel] ChatLevel chatLevel
         */
    
        /**
         * Constructs a new ChatLevel.
         * @exports ChatLevel
         * @classdesc Represents a ChatLevel.
         * @constructor
         * @param {IChatLevel=} [properties] Properties to set
         */
        function ChatLevel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ChatLevel chatLevel.
         * @member {ChatLevel.ChatLevelType}chatLevel
         * @memberof ChatLevel
         * @instance
         */
        ChatLevel.prototype.chatLevel = 0;
    
        /**
         * Creates a new ChatLevel instance using the specified properties.
         * @function create
         * @memberof ChatLevel
         * @static
         * @param {IChatLevel=} [properties] Properties to set
         * @returns {ChatLevel} ChatLevel instance
         */
        ChatLevel.create = function create(properties) {
            return new ChatLevel(properties);
        };
    
        /**
         * Encodes the specified ChatLevel message. Does not implicitly {@link ChatLevel.verify|verify} messages.
         * @function encode
         * @memberof ChatLevel
         * @static
         * @param {IChatLevel} message ChatLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatLevel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chatLevel != null && message.hasOwnProperty("chatLevel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatLevel);
            return writer;
        };
    
        /**
         * Encodes the specified ChatLevel message, length delimited. Does not implicitly {@link ChatLevel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatLevel
         * @static
         * @param {IChatLevel} message ChatLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatLevel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ChatLevel message from the specified reader or buffer.
         * @function decode
         * @memberof ChatLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatLevel} ChatLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatLevel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatLevel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chatLevel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ChatLevel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatLevel} ChatLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatLevel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ChatLevel message.
         * @function verify
         * @memberof ChatLevel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatLevel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chatLevel != null && message.hasOwnProperty("chatLevel"))
                switch (message.chatLevel) {
                default:
                    return "chatLevel: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a ChatLevel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatLevel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatLevel} ChatLevel
         */
        ChatLevel.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatLevel)
                return object;
            var message = new $root.ChatLevel();
            switch (object.chatLevel) {
            case "EVERYONE":
            case 0:
                message.chatLevel = 0;
                break;
            case "STREAMER":
            case 1:
                message.chatLevel = 1;
                break;
            case "STREAMER_MODERATOR":
            case 2:
                message.chatLevel = 2;
                break;
            case "STREAMER_MODERATOR_SUBSCRIBER":
            case 3:
                message.chatLevel = 3;
                break;
            case "STREAMER_MODERATOR_FOLLOWER":
            case 4:
                message.chatLevel = 4;
                break;
            case "STREAMER_MODERATOR_SUBSCRIBER_FOLLOWER":
            case 5:
                message.chatLevel = 5;
                break;
            case "NO_GUEST":
            case 6:
                message.chatLevel = 6;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a ChatLevel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatLevel
         * @static
         * @param {ChatLevel} message ChatLevel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatLevel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.chatLevel = options.enums === String ? "EVERYONE" : 0;
            if (message.chatLevel != null && message.hasOwnProperty("chatLevel"))
                object.chatLevel = options.enums === String ? $root.ChatLevel.ChatLevelType[message.chatLevel] : message.chatLevel;
            return object;
        };
    
        /**
         * Converts this ChatLevel to JSON.
         * @function toJSON
         * @memberof ChatLevel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatLevel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * ChatLevelType enum.
         * @enum {string}
         * @property {number} EVERYONE=0 EVERYONE value
         * @property {number} STREAMER=1 STREAMER value
         * @property {number} STREAMER_MODERATOR=2 STREAMER_MODERATOR value
         * @property {number} STREAMER_MODERATOR_SUBSCRIBER=3 STREAMER_MODERATOR_SUBSCRIBER value
         * @property {number} STREAMER_MODERATOR_FOLLOWER=4 STREAMER_MODERATOR_FOLLOWER value
         * @property {number} STREAMER_MODERATOR_SUBSCRIBER_FOLLOWER=5 STREAMER_MODERATOR_SUBSCRIBER_FOLLOWER value
         * @property {number} NO_GUEST=6 NO_GUEST value
         */
        ChatLevel.ChatLevelType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EVERYONE"] = 0;
            values[valuesById[1] = "STREAMER"] = 1;
            values[valuesById[2] = "STREAMER_MODERATOR"] = 2;
            values[valuesById[3] = "STREAMER_MODERATOR_SUBSCRIBER"] = 3;
            values[valuesById[4] = "STREAMER_MODERATOR_FOLLOWER"] = 4;
            values[valuesById[5] = "STREAMER_MODERATOR_SUBSCRIBER_FOLLOWER"] = 5;
            values[valuesById[6] = "NO_GUEST"] = 6;
            return values;
        })();
    
        return ChatLevel;
    })();
    
    $root.RequestUserlist = (function() {
    
        /**
         * Properties of a RequestUserlist.
         * @exports IRequestUserlist
         * @interface IRequestUserlist
         */
    
        /**
         * Constructs a new RequestUserlist.
         * @exports RequestUserlist
         * @classdesc Represents a RequestUserlist.
         * @constructor
         * @param {IRequestUserlist=} [properties] Properties to set
         */
        function RequestUserlist(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new RequestUserlist instance using the specified properties.
         * @function create
         * @memberof RequestUserlist
         * @static
         * @param {IRequestUserlist=} [properties] Properties to set
         * @returns {RequestUserlist} RequestUserlist instance
         */
        RequestUserlist.create = function create(properties) {
            return new RequestUserlist(properties);
        };
    
        /**
         * Encodes the specified RequestUserlist message. Does not implicitly {@link RequestUserlist.verify|verify} messages.
         * @function encode
         * @memberof RequestUserlist
         * @static
         * @param {IRequestUserlist} message RequestUserlist message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestUserlist.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified RequestUserlist message, length delimited. Does not implicitly {@link RequestUserlist.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RequestUserlist
         * @static
         * @param {IRequestUserlist} message RequestUserlist message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestUserlist.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RequestUserlist message from the specified reader or buffer.
         * @function decode
         * @memberof RequestUserlist
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RequestUserlist} RequestUserlist
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestUserlist.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestUserlist();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a RequestUserlist message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RequestUserlist
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RequestUserlist} RequestUserlist
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestUserlist.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RequestUserlist message.
         * @function verify
         * @memberof RequestUserlist
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestUserlist.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a RequestUserlist message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RequestUserlist
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RequestUserlist} RequestUserlist
         */
        RequestUserlist.fromObject = function fromObject(object) {
            if (object instanceof $root.RequestUserlist)
                return object;
            return new $root.RequestUserlist();
        };
    
        /**
         * Creates a plain object from a RequestUserlist message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RequestUserlist
         * @static
         * @param {RequestUserlist} message RequestUserlist
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestUserlist.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this RequestUserlist to JSON.
         * @function toJSON
         * @memberof RequestUserlist
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestUserlist.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RequestUserlist;
    })();
    
    $root.UserInfo = (function() {
    
        /**
         * Properties of a UserInfo.
         * @exports IUserInfo
         * @interface IUserInfo
         * @property {number} [userId] UserInfo userId
         * @property {string} [displayName] UserInfo displayName
         * @property {boolean} [registered] UserInfo registered
         * @property {boolean} [moderator] UserInfo moderator
         * @property {boolean} [streamer] UserInfo streamer
         * @property {boolean} [ptvAdmin] UserInfo ptvAdmin
         * @property {boolean} [basic] UserInfo basic
         * @property {boolean} [premium] UserInfo premium
         * @property {boolean} [subscriber] UserInfo subscriber
         * @property {string} [color] UserInfo color
         * @property {boolean} [ignoring] UserInfo ignoring
         * @property {boolean} [banned] UserInfo banned
         * @property {boolean} [shadowBanned] UserInfo shadowBanned
         * @property {boolean} [bot] UserInfo bot
         */
    
        /**
         * Constructs a new UserInfo.
         * @exports UserInfo
         * @classdesc Represents a UserInfo.
         * @constructor
         * @param {IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UserInfo userId.
         * @member {number}userId
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.userId = 0;
    
        /**
         * UserInfo displayName.
         * @member {string}displayName
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.displayName = "";
    
        /**
         * UserInfo registered.
         * @member {boolean}registered
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.registered = false;
    
        /**
         * UserInfo moderator.
         * @member {boolean}moderator
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.moderator = false;
    
        /**
         * UserInfo streamer.
         * @member {boolean}streamer
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.streamer = false;
    
        /**
         * UserInfo ptvAdmin.
         * @member {boolean}ptvAdmin
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.ptvAdmin = false;
    
        /**
         * UserInfo basic.
         * @member {boolean}basic
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.basic = false;
    
        /**
         * UserInfo premium.
         * @member {boolean}premium
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.premium = false;
    
        /**
         * UserInfo subscriber.
         * @member {boolean}subscriber
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.subscriber = false;
    
        /**
         * UserInfo color.
         * @member {string}color
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.color = "";
    
        /**
         * UserInfo ignoring.
         * @member {boolean}ignoring
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.ignoring = false;
    
        /**
         * UserInfo banned.
         * @member {boolean}banned
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.banned = false;
    
        /**
         * UserInfo shadowBanned.
         * @member {boolean}shadowBanned
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.shadowBanned = false;
    
        /**
         * UserInfo bot.
         * @member {boolean}bot
         * @memberof UserInfo
         * @instance
         */
        UserInfo.prototype.bot = false;
    
        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof UserInfo
         * @static
         * @param {IUserInfo=} [properties] Properties to set
         * @returns {UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };
    
        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link UserInfo.verify|verify} messages.
         * @function encode
         * @memberof UserInfo
         * @static
         * @param {IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
            if (message.registered != null && message.hasOwnProperty("registered"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.registered);
            if (message.moderator != null && message.hasOwnProperty("moderator"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.moderator);
            if (message.streamer != null && message.hasOwnProperty("streamer"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.streamer);
            if (message.ptvAdmin != null && message.hasOwnProperty("ptvAdmin"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.ptvAdmin);
            if (message.basic != null && message.hasOwnProperty("basic"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.basic);
            if (message.premium != null && message.hasOwnProperty("premium"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.premium);
            if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.subscriber);
            if (message.color != null && message.hasOwnProperty("color"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.color);
            if (message.ignoring != null && message.hasOwnProperty("ignoring"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.ignoring);
            if (message.banned != null && message.hasOwnProperty("banned"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.banned);
            if (message.shadowBanned != null && message.hasOwnProperty("shadowBanned"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.shadowBanned);
            if (message.bot != null && message.hasOwnProperty("bot"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.bot);
            return writer;
        };
    
        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UserInfo
         * @static
         * @param {IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    message.displayName = reader.string();
                    break;
                case 3:
                    message.registered = reader.bool();
                    break;
                case 4:
                    message.moderator = reader.bool();
                    break;
                case 5:
                    message.streamer = reader.bool();
                    break;
                case 6:
                    message.ptvAdmin = reader.bool();
                    break;
                case 7:
                    message.basic = reader.bool();
                    break;
                case 8:
                    message.premium = reader.bool();
                    break;
                case 9:
                    message.subscriber = reader.bool();
                    break;
                case 10:
                    message.color = reader.string();
                    break;
                case 11:
                    message.ignoring = reader.bool();
                    break;
                case 12:
                    message.banned = reader.bool();
                    break;
                case 13:
                    message.shadowBanned = reader.bool();
                    break;
                case 14:
                    message.bot = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.registered != null && message.hasOwnProperty("registered"))
                if (typeof message.registered !== "boolean")
                    return "registered: boolean expected";
            if (message.moderator != null && message.hasOwnProperty("moderator"))
                if (typeof message.moderator !== "boolean")
                    return "moderator: boolean expected";
            if (message.streamer != null && message.hasOwnProperty("streamer"))
                if (typeof message.streamer !== "boolean")
                    return "streamer: boolean expected";
            if (message.ptvAdmin != null && message.hasOwnProperty("ptvAdmin"))
                if (typeof message.ptvAdmin !== "boolean")
                    return "ptvAdmin: boolean expected";
            if (message.basic != null && message.hasOwnProperty("basic"))
                if (typeof message.basic !== "boolean")
                    return "basic: boolean expected";
            if (message.premium != null && message.hasOwnProperty("premium"))
                if (typeof message.premium !== "boolean")
                    return "premium: boolean expected";
            if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                if (typeof message.subscriber !== "boolean")
                    return "subscriber: boolean expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.ignoring != null && message.hasOwnProperty("ignoring"))
                if (typeof message.ignoring !== "boolean")
                    return "ignoring: boolean expected";
            if (message.banned != null && message.hasOwnProperty("banned"))
                if (typeof message.banned !== "boolean")
                    return "banned: boolean expected";
            if (message.shadowBanned != null && message.hasOwnProperty("shadowBanned"))
                if (typeof message.shadowBanned !== "boolean")
                    return "shadowBanned: boolean expected";
            if (message.bot != null && message.hasOwnProperty("bot"))
                if (typeof message.bot !== "boolean")
                    return "bot: boolean expected";
            return null;
        };
    
        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.UserInfo)
                return object;
            var message = new $root.UserInfo();
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.registered != null)
                message.registered = Boolean(object.registered);
            if (object.moderator != null)
                message.moderator = Boolean(object.moderator);
            if (object.streamer != null)
                message.streamer = Boolean(object.streamer);
            if (object.ptvAdmin != null)
                message.ptvAdmin = Boolean(object.ptvAdmin);
            if (object.basic != null)
                message.basic = Boolean(object.basic);
            if (object.premium != null)
                message.premium = Boolean(object.premium);
            if (object.subscriber != null)
                message.subscriber = Boolean(object.subscriber);
            if (object.color != null)
                message.color = String(object.color);
            if (object.ignoring != null)
                message.ignoring = Boolean(object.ignoring);
            if (object.banned != null)
                message.banned = Boolean(object.banned);
            if (object.shadowBanned != null)
                message.shadowBanned = Boolean(object.shadowBanned);
            if (object.bot != null)
                message.bot = Boolean(object.bot);
            return message;
        };
    
        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UserInfo
         * @static
         * @param {UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.displayName = "";
                object.registered = false;
                object.moderator = false;
                object.streamer = false;
                object.ptvAdmin = false;
                object.basic = false;
                object.premium = false;
                object.subscriber = false;
                object.color = "";
                object.ignoring = false;
                object.banned = false;
                object.shadowBanned = false;
                object.bot = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.registered != null && message.hasOwnProperty("registered"))
                object.registered = message.registered;
            if (message.moderator != null && message.hasOwnProperty("moderator"))
                object.moderator = message.moderator;
            if (message.streamer != null && message.hasOwnProperty("streamer"))
                object.streamer = message.streamer;
            if (message.ptvAdmin != null && message.hasOwnProperty("ptvAdmin"))
                object.ptvAdmin = message.ptvAdmin;
            if (message.basic != null && message.hasOwnProperty("basic"))
                object.basic = message.basic;
            if (message.premium != null && message.hasOwnProperty("premium"))
                object.premium = message.premium;
            if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                object.subscriber = message.subscriber;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.ignoring != null && message.hasOwnProperty("ignoring"))
                object.ignoring = message.ignoring;
            if (message.banned != null && message.hasOwnProperty("banned"))
                object.banned = message.banned;
            if (message.shadowBanned != null && message.hasOwnProperty("shadowBanned"))
                object.shadowBanned = message.shadowBanned;
            if (message.bot != null && message.hasOwnProperty("bot"))
                object.bot = message.bot;
            return object;
        };
    
        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return UserInfo;
    })();
    
    $root.UserCount = (function() {
    
        /**
         * Properties of a UserCount.
         * @exports IUserCount
         * @interface IUserCount
         * @property {number} [users] UserCount users
         */
    
        /**
         * Constructs a new UserCount.
         * @exports UserCount
         * @classdesc Represents a UserCount.
         * @constructor
         * @param {IUserCount=} [properties] Properties to set
         */
        function UserCount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UserCount users.
         * @member {number}users
         * @memberof UserCount
         * @instance
         */
        UserCount.prototype.users = 0;
    
        /**
         * Creates a new UserCount instance using the specified properties.
         * @function create
         * @memberof UserCount
         * @static
         * @param {IUserCount=} [properties] Properties to set
         * @returns {UserCount} UserCount instance
         */
        UserCount.create = function create(properties) {
            return new UserCount(properties);
        };
    
        /**
         * Encodes the specified UserCount message. Does not implicitly {@link UserCount.verify|verify} messages.
         * @function encode
         * @memberof UserCount
         * @static
         * @param {IUserCount} message UserCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.hasOwnProperty("users"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.users);
            return writer;
        };
    
        /**
         * Encodes the specified UserCount message, length delimited. Does not implicitly {@link UserCount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UserCount
         * @static
         * @param {IUserCount} message UserCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a UserCount message from the specified reader or buffer.
         * @function decode
         * @memberof UserCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UserCount} UserCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserCount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.users = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a UserCount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UserCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UserCount} UserCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a UserCount message.
         * @function verify
         * @memberof UserCount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserCount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users"))
                if (!$util.isInteger(message.users))
                    return "users: integer expected";
            return null;
        };
    
        /**
         * Creates a UserCount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UserCount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UserCount} UserCount
         */
        UserCount.fromObject = function fromObject(object) {
            if (object instanceof $root.UserCount)
                return object;
            var message = new $root.UserCount();
            if (object.users != null)
                message.users = object.users >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a UserCount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UserCount
         * @static
         * @param {UserCount} message UserCount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserCount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.users = 0;
            if (message.users != null && message.hasOwnProperty("users"))
                object.users = message.users;
            return object;
        };
    
        /**
         * Converts this UserCount to JSON.
         * @function toJSON
         * @memberof UserCount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserCount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return UserCount;
    })();
    
    $root.ShowRaffle = (function() {
    
        /**
         * Properties of a ShowRaffle.
         * @exports IShowRaffle
         * @interface IShowRaffle
         * @property {Array.<ShowRaffle.IUser>} [user] ShowRaffle user
         */
    
        /**
         * Constructs a new ShowRaffle.
         * @exports ShowRaffle
         * @classdesc Represents a ShowRaffle.
         * @constructor
         * @param {IShowRaffle=} [properties] Properties to set
         */
        function ShowRaffle(properties) {
            this.user = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ShowRaffle user.
         * @member {Array.<ShowRaffle.IUser>}user
         * @memberof ShowRaffle
         * @instance
         */
        ShowRaffle.prototype.user = $util.emptyArray;
    
        /**
         * Creates a new ShowRaffle instance using the specified properties.
         * @function create
         * @memberof ShowRaffle
         * @static
         * @param {IShowRaffle=} [properties] Properties to set
         * @returns {ShowRaffle} ShowRaffle instance
         */
        ShowRaffle.create = function create(properties) {
            return new ShowRaffle(properties);
        };
    
        /**
         * Encodes the specified ShowRaffle message. Does not implicitly {@link ShowRaffle.verify|verify} messages.
         * @function encode
         * @memberof ShowRaffle
         * @static
         * @param {IShowRaffle} message ShowRaffle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowRaffle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.user.length)
                for (var i = 0; i < message.user.length; ++i)
                    $root.ShowRaffle.User.encode(message.user[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified ShowRaffle message, length delimited. Does not implicitly {@link ShowRaffle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ShowRaffle
         * @static
         * @param {IShowRaffle} message ShowRaffle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowRaffle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ShowRaffle message from the specified reader or buffer.
         * @function decode
         * @memberof ShowRaffle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ShowRaffle} ShowRaffle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowRaffle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ShowRaffle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.user && message.user.length))
                        message.user = [];
                    message.user.push($root.ShowRaffle.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ShowRaffle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ShowRaffle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ShowRaffle} ShowRaffle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowRaffle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ShowRaffle message.
         * @function verify
         * @memberof ShowRaffle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShowRaffle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                if (!Array.isArray(message.user))
                    return "user: array expected";
                for (var i = 0; i < message.user.length; ++i) {
                    var error = $root.ShowRaffle.User.verify(message.user[i]);
                    if (error)
                        return "user." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a ShowRaffle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ShowRaffle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ShowRaffle} ShowRaffle
         */
        ShowRaffle.fromObject = function fromObject(object) {
            if (object instanceof $root.ShowRaffle)
                return object;
            var message = new $root.ShowRaffle();
            if (object.user) {
                if (!Array.isArray(object.user))
                    throw TypeError(".ShowRaffle.user: array expected");
                message.user = [];
                for (var i = 0; i < object.user.length; ++i) {
                    if (typeof object.user[i] !== "object")
                        throw TypeError(".ShowRaffle.user: object expected");
                    message.user[i] = $root.ShowRaffle.User.fromObject(object.user[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a ShowRaffle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ShowRaffle
         * @static
         * @param {ShowRaffle} message ShowRaffle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShowRaffle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.user = [];
            if (message.user && message.user.length) {
                object.user = [];
                for (var j = 0; j < message.user.length; ++j)
                    object.user[j] = $root.ShowRaffle.User.toObject(message.user[j], options);
            }
            return object;
        };
    
        /**
         * Converts this ShowRaffle to JSON.
         * @function toJSON
         * @memberof ShowRaffle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShowRaffle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        ShowRaffle.User = (function() {
    
            /**
             * Properties of a User.
             * @memberof ShowRaffle
             * @interface IUser
             * @property {string} [displayName] User displayName
             * @property {boolean} [subscriber] User subscriber
             */
    
            /**
             * Constructs a new User.
             * @memberof ShowRaffle
             * @classdesc Represents a User.
             * @constructor
             * @param {ShowRaffle.IUser=} [properties] Properties to set
             */
            function User(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * User displayName.
             * @member {string}displayName
             * @memberof ShowRaffle.User
             * @instance
             */
            User.prototype.displayName = "";
    
            /**
             * User subscriber.
             * @member {boolean}subscriber
             * @memberof ShowRaffle.User
             * @instance
             */
            User.prototype.subscriber = false;
    
            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof ShowRaffle.User
             * @static
             * @param {ShowRaffle.IUser=} [properties] Properties to set
             * @returns {ShowRaffle.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };
    
            /**
             * Encodes the specified User message. Does not implicitly {@link ShowRaffle.User.verify|verify} messages.
             * @function encode
             * @memberof ShowRaffle.User
             * @static
             * @param {ShowRaffle.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.displayName);
                if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.subscriber);
                return writer;
            };
    
            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link ShowRaffle.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ShowRaffle.User
             * @static
             * @param {ShowRaffle.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof ShowRaffle.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ShowRaffle.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ShowRaffle.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.displayName = reader.string();
                        break;
                    case 2:
                        message.subscriber = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ShowRaffle.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ShowRaffle.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a User message.
             * @function verify
             * @memberof ShowRaffle.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    if (!$util.isString(message.displayName))
                        return "displayName: string expected";
                if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                    if (typeof message.subscriber !== "boolean")
                        return "subscriber: boolean expected";
                return null;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ShowRaffle.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ShowRaffle.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.ShowRaffle.User)
                    return object;
                var message = new $root.ShowRaffle.User();
                if (object.displayName != null)
                    message.displayName = String(object.displayName);
                if (object.subscriber != null)
                    message.subscriber = Boolean(object.subscriber);
                return message;
            };
    
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ShowRaffle.User
             * @static
             * @param {ShowRaffle.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.displayName = "";
                    object.subscriber = false;
                }
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    object.displayName = message.displayName;
                if (message.subscriber != null && message.hasOwnProperty("subscriber"))
                    object.subscriber = message.subscriber;
                return object;
            };
    
            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof ShowRaffle.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return User;
        })();
    
        return ShowRaffle;
    })();
    
    $root.Event = (function() {
    
        /**
         * Properties of an Event.
         * @exports IEvent
         * @interface IEvent
         * @property {string} [eventId] Event eventId
         * @property {boolean} [starting] Event starting
         * @property {boolean} [shouldRedirect] Event shouldRedirect
         */
    
        /**
         * Constructs a new Event.
         * @exports Event
         * @classdesc Represents an Event.
         * @constructor
         * @param {IEvent=} [properties] Properties to set
         */
        function Event(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Event eventId.
         * @member {string}eventId
         * @memberof Event
         * @instance
         */
        Event.prototype.eventId = "";
    
        /**
         * Event starting.
         * @member {boolean}starting
         * @memberof Event
         * @instance
         */
        Event.prototype.starting = false;
    
        /**
         * Event shouldRedirect.
         * @member {boolean}shouldRedirect
         * @memberof Event
         * @instance
         */
        Event.prototype.shouldRedirect = false;
    
        /**
         * Creates a new Event instance using the specified properties.
         * @function create
         * @memberof Event
         * @static
         * @param {IEvent=} [properties] Properties to set
         * @returns {Event} Event instance
         */
        Event.create = function create(properties) {
            return new Event(properties);
        };
    
        /**
         * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
         * @function encode
         * @memberof Event
         * @static
         * @param {IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.starting != null && message.hasOwnProperty("starting"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.starting);
            if (message.shouldRedirect != null && message.hasOwnProperty("shouldRedirect"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.shouldRedirect);
            return writer;
        };
    
        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Event
         * @static
         * @param {IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an Event message from the specified reader or buffer.
         * @function decode
         * @memberof Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Event();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.string();
                    break;
                case 2:
                    message.starting = reader.bool();
                    break;
                case 3:
                    message.shouldRedirect = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an Event message.
         * @function verify
         * @memberof Event
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Event.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.starting != null && message.hasOwnProperty("starting"))
                if (typeof message.starting !== "boolean")
                    return "starting: boolean expected";
            if (message.shouldRedirect != null && message.hasOwnProperty("shouldRedirect"))
                if (typeof message.shouldRedirect !== "boolean")
                    return "shouldRedirect: boolean expected";
            return null;
        };
    
        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Event
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Event} Event
         */
        Event.fromObject = function fromObject(object) {
            if (object instanceof $root.Event)
                return object;
            var message = new $root.Event();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.starting != null)
                message.starting = Boolean(object.starting);
            if (object.shouldRedirect != null)
                message.shouldRedirect = Boolean(object.shouldRedirect);
            return message;
        };
    
        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Event
         * @static
         * @param {Event} message Event
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Event.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = "";
                object.starting = false;
                object.shouldRedirect = false;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.starting != null && message.hasOwnProperty("starting"))
                object.starting = message.starting;
            if (message.shouldRedirect != null && message.hasOwnProperty("shouldRedirect"))
                object.shouldRedirect = message.shouldRedirect;
            return object;
        };
    
        /**
         * Converts this Event to JSON.
         * @function toJSON
         * @memberof Event
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Event.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Event;
    })();
    
    $root.SetJWT = (function() {
    
        /**
         * Properties of a SetJWT.
         * @exports ISetJWT
         * @interface ISetJWT
         * @property {string} [key] SetJWT key
         * @property {string} [name] SetJWT name
         * @property {boolean} [registered] SetJWT registered
         * @property {boolean} [premium] SetJWT premium
         * @property {boolean} [basic] SetJWT basic
         * @property {boolean} [streamer] SetJWT streamer
         */
    
        /**
         * Constructs a new SetJWT.
         * @exports SetJWT
         * @classdesc Represents a SetJWT.
         * @constructor
         * @param {ISetJWT=} [properties] Properties to set
         */
        function SetJWT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SetJWT key.
         * @member {string}key
         * @memberof SetJWT
         * @instance
         */
        SetJWT.prototype.key = "";
    
        /**
         * SetJWT name.
         * @member {string}name
         * @memberof SetJWT
         * @instance
         */
        SetJWT.prototype.name = "";
    
        /**
         * SetJWT registered.
         * @member {boolean}registered
         * @memberof SetJWT
         * @instance
         */
        SetJWT.prototype.registered = false;
    
        /**
         * SetJWT premium.
         * @member {boolean}premium
         * @memberof SetJWT
         * @instance
         */
        SetJWT.prototype.premium = false;
    
        /**
         * SetJWT basic.
         * @member {boolean}basic
         * @memberof SetJWT
         * @instance
         */
        SetJWT.prototype.basic = false;
    
        /**
         * SetJWT streamer.
         * @member {boolean}streamer
         * @memberof SetJWT
         * @instance
         */
        SetJWT.prototype.streamer = false;
    
        /**
         * Creates a new SetJWT instance using the specified properties.
         * @function create
         * @memberof SetJWT
         * @static
         * @param {ISetJWT=} [properties] Properties to set
         * @returns {SetJWT} SetJWT instance
         */
        SetJWT.create = function create(properties) {
            return new SetJWT(properties);
        };
    
        /**
         * Encodes the specified SetJWT message. Does not implicitly {@link SetJWT.verify|verify} messages.
         * @function encode
         * @memberof SetJWT
         * @static
         * @param {ISetJWT} message SetJWT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetJWT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.registered != null && message.hasOwnProperty("registered"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.registered);
            if (message.premium != null && message.hasOwnProperty("premium"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.premium);
            if (message.basic != null && message.hasOwnProperty("basic"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.basic);
            if (message.streamer != null && message.hasOwnProperty("streamer"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.streamer);
            return writer;
        };
    
        /**
         * Encodes the specified SetJWT message, length delimited. Does not implicitly {@link SetJWT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SetJWT
         * @static
         * @param {ISetJWT} message SetJWT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetJWT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SetJWT message from the specified reader or buffer.
         * @function decode
         * @memberof SetJWT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SetJWT} SetJWT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetJWT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetJWT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.registered = reader.bool();
                    break;
                case 4:
                    message.premium = reader.bool();
                    break;
                case 5:
                    message.basic = reader.bool();
                    break;
                case 6:
                    message.streamer = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SetJWT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SetJWT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SetJWT} SetJWT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetJWT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SetJWT message.
         * @function verify
         * @memberof SetJWT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetJWT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.registered != null && message.hasOwnProperty("registered"))
                if (typeof message.registered !== "boolean")
                    return "registered: boolean expected";
            if (message.premium != null && message.hasOwnProperty("premium"))
                if (typeof message.premium !== "boolean")
                    return "premium: boolean expected";
            if (message.basic != null && message.hasOwnProperty("basic"))
                if (typeof message.basic !== "boolean")
                    return "basic: boolean expected";
            if (message.streamer != null && message.hasOwnProperty("streamer"))
                if (typeof message.streamer !== "boolean")
                    return "streamer: boolean expected";
            return null;
        };
    
        /**
         * Creates a SetJWT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SetJWT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SetJWT} SetJWT
         */
        SetJWT.fromObject = function fromObject(object) {
            if (object instanceof $root.SetJWT)
                return object;
            var message = new $root.SetJWT();
            if (object.key != null)
                message.key = String(object.key);
            if (object.name != null)
                message.name = String(object.name);
            if (object.registered != null)
                message.registered = Boolean(object.registered);
            if (object.premium != null)
                message.premium = Boolean(object.premium);
            if (object.basic != null)
                message.basic = Boolean(object.basic);
            if (object.streamer != null)
                message.streamer = Boolean(object.streamer);
            return message;
        };
    
        /**
         * Creates a plain object from a SetJWT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SetJWT
         * @static
         * @param {SetJWT} message SetJWT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetJWT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.name = "";
                object.registered = false;
                object.premium = false;
                object.basic = false;
                object.streamer = false;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.registered != null && message.hasOwnProperty("registered"))
                object.registered = message.registered;
            if (message.premium != null && message.hasOwnProperty("premium"))
                object.premium = message.premium;
            if (message.basic != null && message.hasOwnProperty("basic"))
                object.basic = message.basic;
            if (message.streamer != null && message.hasOwnProperty("streamer"))
                object.streamer = message.streamer;
            return object;
        };
    
        /**
         * Converts this SetJWT to JSON.
         * @function toJSON
         * @memberof SetJWT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetJWT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SetJWT;
    })();
    
    $root.UpdateEmotes = (function() {
    
        /**
         * Properties of an UpdateEmotes.
         * @exports IUpdateEmotes
         * @interface IUpdateEmotes
         * @property {string} [emotes] UpdateEmotes emotes
         */
    
        /**
         * Constructs a new UpdateEmotes.
         * @exports UpdateEmotes
         * @classdesc Represents an UpdateEmotes.
         * @constructor
         * @param {IUpdateEmotes=} [properties] Properties to set
         */
        function UpdateEmotes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UpdateEmotes emotes.
         * @member {string}emotes
         * @memberof UpdateEmotes
         * @instance
         */
        UpdateEmotes.prototype.emotes = "";
    
        /**
         * Creates a new UpdateEmotes instance using the specified properties.
         * @function create
         * @memberof UpdateEmotes
         * @static
         * @param {IUpdateEmotes=} [properties] Properties to set
         * @returns {UpdateEmotes} UpdateEmotes instance
         */
        UpdateEmotes.create = function create(properties) {
            return new UpdateEmotes(properties);
        };
    
        /**
         * Encodes the specified UpdateEmotes message. Does not implicitly {@link UpdateEmotes.verify|verify} messages.
         * @function encode
         * @memberof UpdateEmotes
         * @static
         * @param {IUpdateEmotes} message UpdateEmotes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateEmotes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.emotes != null && message.hasOwnProperty("emotes"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.emotes);
            return writer;
        };
    
        /**
         * Encodes the specified UpdateEmotes message, length delimited. Does not implicitly {@link UpdateEmotes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UpdateEmotes
         * @static
         * @param {IUpdateEmotes} message UpdateEmotes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateEmotes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an UpdateEmotes message from the specified reader or buffer.
         * @function decode
         * @memberof UpdateEmotes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UpdateEmotes} UpdateEmotes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateEmotes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateEmotes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.emotes = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an UpdateEmotes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UpdateEmotes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UpdateEmotes} UpdateEmotes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateEmotes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an UpdateEmotes message.
         * @function verify
         * @memberof UpdateEmotes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateEmotes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.emotes != null && message.hasOwnProperty("emotes"))
                if (!$util.isString(message.emotes))
                    return "emotes: string expected";
            return null;
        };
    
        /**
         * Creates an UpdateEmotes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UpdateEmotes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UpdateEmotes} UpdateEmotes
         */
        UpdateEmotes.fromObject = function fromObject(object) {
            if (object instanceof $root.UpdateEmotes)
                return object;
            var message = new $root.UpdateEmotes();
            if (object.emotes != null)
                message.emotes = String(object.emotes);
            return message;
        };
    
        /**
         * Creates a plain object from an UpdateEmotes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UpdateEmotes
         * @static
         * @param {UpdateEmotes} message UpdateEmotes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateEmotes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.emotes = "";
            if (message.emotes != null && message.hasOwnProperty("emotes"))
                object.emotes = message.emotes;
            return object;
        };
    
        /**
         * Converts this UpdateEmotes to JSON.
         * @function toJSON
         * @memberof UpdateEmotes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateEmotes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return UpdateEmotes;
    })();
    
    $root.PingPong = (function() {
    
        /**
         * Properties of a PingPong.
         * @exports IPingPong
         * @interface IPingPong
         * @property {PingPong.PingType} [type] PingPong type
         */
    
        /**
         * Constructs a new PingPong.
         * @exports PingPong
         * @classdesc Represents a PingPong.
         * @constructor
         * @param {IPingPong=} [properties] Properties to set
         */
        function PingPong(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PingPong type.
         * @member {PingPong.PingType}type
         * @memberof PingPong
         * @instance
         */
        PingPong.prototype.type = 0;
    
        /**
         * Creates a new PingPong instance using the specified properties.
         * @function create
         * @memberof PingPong
         * @static
         * @param {IPingPong=} [properties] Properties to set
         * @returns {PingPong} PingPong instance
         */
        PingPong.create = function create(properties) {
            return new PingPong(properties);
        };
    
        /**
         * Encodes the specified PingPong message. Does not implicitly {@link PingPong.verify|verify} messages.
         * @function encode
         * @memberof PingPong
         * @static
         * @param {IPingPong} message PingPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingPong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };
    
        /**
         * Encodes the specified PingPong message, length delimited. Does not implicitly {@link PingPong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PingPong
         * @static
         * @param {IPingPong} message PingPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingPong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PingPong message from the specified reader or buffer.
         * @function decode
         * @memberof PingPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PingPong} PingPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingPong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PingPong();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PingPong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PingPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PingPong} PingPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingPong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PingPong message.
         * @function verify
         * @memberof PingPong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingPong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a PingPong message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PingPong
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PingPong} PingPong
         */
        PingPong.fromObject = function fromObject(object) {
            if (object instanceof $root.PingPong)
                return object;
            var message = new $root.PingPong();
            switch (object.type) {
            case "PING":
            case 0:
                message.type = 0;
                break;
            case "PONG":
            case 1:
                message.type = 1;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a PingPong message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PingPong
         * @static
         * @param {PingPong} message PingPong
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingPong.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = options.enums === String ? "PING" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.PingPong.PingType[message.type] : message.type;
            return object;
        };
    
        /**
         * Converts this PingPong to JSON.
         * @function toJSON
         * @memberof PingPong
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingPong.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * PingType enum.
         * @enum {string}
         * @property {number} PING=0 PING value
         * @property {number} PONG=1 PONG value
         */
        PingPong.PingType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PING"] = 0;
            values[valuesById[1] = "PONG"] = 1;
            return values;
        })();
    
        return PingPong;
    })();

    return $root;
});
