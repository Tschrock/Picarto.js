/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobuf"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Lazily resolved type references
    var $lazyTypes = [];
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.NewMessage = (function() {
    
        /**
         * Constructs a new NewMessage.
         * @exports NewMessage
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function NewMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NewMessage message.
         * @type {string|undefined}
         */
        NewMessage.prototype.message = "";
    
        /**
         * Creates a new NewMessage instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {NewMessage} NewMessage instance
         */
        NewMessage.create = function create(properties) {
            return new NewMessage(properties);
        };
    
        /**
         * Encodes the specified NewMessage message.
         * @param {NewMessage|Object} message NewMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewMessage.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.message !== undefined && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified NewMessage message, length delimited.
         * @param {NewMessage|Object} message NewMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NewMessage message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NewMessage} NewMessage
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NewMessage} NewMessage
         */
        NewMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NewMessage message.
         * @param {NewMessage|Object} message NewMessage message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        NewMessage.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message !== undefined)
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a NewMessage message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {NewMessage} NewMessage
         */
        NewMessage.fromObject = function fromObject(object) {    
            if (object instanceof $root.NewMessage)
                return object;
            var message = new $root.NewMessage();
            if (object.message !== undefined && object.message !== null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a NewMessage message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link NewMessage.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {NewMessage} NewMessage
         */
        NewMessage.from = NewMessage.fromObject;
    
        /**
         * Creates a plain object from a NewMessage message. Also converts values to other types if specified.
         * @param {NewMessage} message NewMessage
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewMessage.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message !== undefined && message.message !== null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Creates a plain object from this NewMessage message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewMessage.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this NewMessage to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        NewMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return NewMessage;
    })();
    
    $root.UserList = (function() {
    
        /**
         * Constructs a new UserList.
         * @exports UserList
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function UserList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UserList user.
         * @type {Array.<UserList.User>|undefined}
         */
        UserList.prototype.user = $util.emptyArray;
    
        // Lazily resolved type references
        var $types = {
            0: "UserList.User"
        }; $lazyTypes.push($types);
    
        /**
         * Creates a new UserList instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {UserList} UserList instance
         */
        UserList.create = function create(properties) {
            return new UserList(properties);
        };
    
        /**
         * Encodes the specified UserList message.
         * @param {UserList|Object} message UserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserList.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.user !== undefined && message.hasOwnProperty("user"))
                for (var i = 0; i < message.user.length; ++i)
                    $types[0].encode(message.user[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified UserList message, length delimited.
         * @param {UserList|Object} message UserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a UserList message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UserList} UserList
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
                    message.user.push($types[0].decode(reader, reader.uint32()));
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UserList} UserList
         */
        UserList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a UserList message.
         * @param {UserList|Object} message UserList message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        UserList.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user !== undefined) {
                if (!Array.isArray(message.user))
                    return "user: array expected";
                for (var i = 0; i < message.user.length; ++i) {
                    var error = $types[0].verify(message.user[i]);
                    if (error)
                        return "user." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a UserList message from a plain object. Also converts values to their respective internal types.
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
                    message.user[i] = $types[0].fromObject(object.user[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a UserList message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link UserList.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {UserList} UserList
         */
        UserList.from = UserList.fromObject;
    
        /**
         * Creates a plain object from a UserList message. Also converts values to other types if specified.
         * @param {UserList} message UserList
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserList.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.user = [];
            if (message.user !== undefined && message.user !== null && message.hasOwnProperty("user")) {
                object.user = [];
                for (var j = 0; j < message.user.length; ++j)
                    object.user[j] = $types[0].toObject(message.user[j], options);
            }
            return object;
        };
    
        /**
         * Creates a plain object from this UserList message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserList.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this UserList to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        UserList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        UserList.User = (function() {
    
            /**
             * Constructs a new User.
             * @exports UserList.User
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function User(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * User userId.
             * @type {number|undefined}
             */
            User.prototype.userId = 0;
    
            /**
             * User displayName.
             * @type {string|undefined}
             */
            User.prototype.displayName = "";
    
            /**
             * User userData.
             * @type {UserList.User.UserData|undefined}
             */
            User.prototype.userData = null;
    
            /**
             * User banData.
             * @type {UserList.User.BanData|undefined}
             */
            User.prototype.banData = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * User userState.
             * @name UserList.User#userState
             * @type {string|undefined}
             */
            Object.defineProperty(User.prototype, "userState", {
                get: $util.oneOfGetter($oneOfFields = ["userData", "banData"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            // Lazily resolved type references
            var $types = {
                2: "UserList.User.UserData",
                3: "UserList.User.BanData"
            }; $lazyTypes.push($types);
    
            /**
             * Creates a new User instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {UserList.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };
    
            /**
             * Encodes the specified User message.
             * @param {UserList.User|Object} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {    
                if (!writer)
                    writer = $Writer.create();
                if (message.userId !== undefined && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
                if (message.displayName !== undefined && message.hasOwnProperty("displayName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
                switch (message.userState) {
                case "userData":
                    $types[2].encode(message.userData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    break;
                case "banData":
                    $types[3].encode(message.banData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    break;
                }
                return writer;
            };
    
            /**
             * Encodes the specified User message, length delimited.
             * @param {UserList.User|Object} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a User message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {UserList.User} User
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
                        message.userData = $types[2].decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.banData = $types[3].decode(reader, reader.uint32());
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
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {UserList.User} User
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a User message.
             * @param {UserList.User|Object} message User message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {    
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId !== undefined)
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.displayName !== undefined)
                    if (!$util.isString(message.displayName))
                        return "displayName: string expected";
                if (message.userData !== undefined && message.userData !== null) {
                    var error = $types[2].verify(message.userData);
                    if (error)
                        return "userData." + error;
                }
                if (message.banData !== undefined && message.banData !== null) {
                    var error = $types[3].verify(message.banData);
                    if (error)
                        return "banData." + error;
                }
                return null;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {UserList.User} User
             */
            User.fromObject = function fromObject(object) {    
                if (object instanceof $root.UserList.User)
                    return object;
                var message = new $root.UserList.User();
                if (object.userId !== undefined && object.userId !== null)
                    message.userId = object.userId >>> 0;
                if (object.displayName !== undefined && object.displayName !== null)
                    message.displayName = String(object.displayName);
                if (object.userData !== undefined && object.userData !== null) {
                    if (typeof object.userData !== "object")
                        throw TypeError(".UserList.User.userData: object expected");
                    message.userData = $types[2].fromObject(object.userData);
                }
                if (object.banData !== undefined && object.banData !== null) {
                    if (typeof object.banData !== "object")
                        throw TypeError(".UserList.User.banData: object expected");
                    message.banData = $types[3].fromObject(object.banData);
                }
                return message;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link UserList.User.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {UserList.User} User
             */
            User.from = User.fromObject;
    
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param {UserList.User} message User
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {    
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.displayName = "";
                    object.userData = null;
                    object.banData = null;
                }
                if (message.userId !== undefined && message.userId !== null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.displayName !== undefined && message.displayName !== null && message.hasOwnProperty("displayName"))
                    object.displayName = message.displayName;
                if (message.userData !== undefined && message.userData !== null && message.hasOwnProperty("userData"))
                    object.userData = $types[2].toObject(message.userData, options);
                if (message.banData !== undefined && message.banData !== null && message.hasOwnProperty("banData"))
                    object.banData = $types[3].toObject(message.banData, options);
                return object;
            };
    
            /**
             * Creates a plain object from this User message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };
    
            /**
             * Converts this User to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            User.UserData = (function() {
    
                /**
                 * Constructs a new UserData.
                 * @exports UserList.User.UserData
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function UserData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UserData registered.
                 * @type {boolean|undefined}
                 */
                UserData.prototype.registered = false;
    
                /**
                 * UserData moderator.
                 * @type {boolean|undefined}
                 */
                UserData.prototype.moderator = false;
    
                /**
                 * UserData streamer.
                 * @type {boolean|undefined}
                 */
                UserData.prototype.streamer = false;
    
                /**
                 * UserData ptvAdmin.
                 * @type {boolean|undefined}
                 */
                UserData.prototype.ptvAdmin = false;
    
                /**
                 * UserData basic.
                 * @type {boolean|undefined}
                 */
                UserData.prototype.basic = false;
    
                /**
                 * UserData premium.
                 * @type {boolean|undefined}
                 */
                UserData.prototype.premium = false;
    
                /**
                 * UserData subscriber.
                 * @type {boolean|undefined}
                 */
                UserData.prototype.subscriber = false;
    
                /**
                 * UserData color.
                 * @type {string|undefined}
                 */
                UserData.prototype.color = "";
    
                /**
                 * UserData ignoring.
                 * @type {boolean|undefined}
                 */
                UserData.prototype.ignoring = false;
    
                /**
                 * Creates a new UserData instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {UserList.User.UserData} UserData instance
                 */
                UserData.create = function create(properties) {
                    return new UserData(properties);
                };
    
                /**
                 * Encodes the specified UserData message.
                 * @param {UserList.User.UserData|Object} message UserData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserData.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.registered !== undefined && message.hasOwnProperty("registered"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.registered);
                    if (message.moderator !== undefined && message.hasOwnProperty("moderator"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.moderator);
                    if (message.streamer !== undefined && message.hasOwnProperty("streamer"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.streamer);
                    if (message.ptvAdmin !== undefined && message.hasOwnProperty("ptvAdmin"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.ptvAdmin);
                    if (message.basic !== undefined && message.hasOwnProperty("basic"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.basic);
                    if (message.premium !== undefined && message.hasOwnProperty("premium"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.premium);
                    if (message.subscriber !== undefined && message.hasOwnProperty("subscriber"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.subscriber);
                    if (message.color !== undefined && message.hasOwnProperty("color"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.color);
                    if (message.ignoring !== undefined && message.hasOwnProperty("ignoring"))
                        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.ignoring);
                    return writer;
                };
    
                /**
                 * Encodes the specified UserData message, length delimited.
                 * @param {UserList.User.UserData|Object} message UserData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a UserData message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {UserList.User.UserData} UserData
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
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a UserData message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {UserList.User.UserData} UserData
                 */
                UserData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a UserData message.
                 * @param {UserList.User.UserData|Object} message UserData message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                UserData.verify = function verify(message) {    
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.registered !== undefined)
                        if (typeof message.registered !== "boolean")
                            return "registered: boolean expected";
                    if (message.moderator !== undefined)
                        if (typeof message.moderator !== "boolean")
                            return "moderator: boolean expected";
                    if (message.streamer !== undefined)
                        if (typeof message.streamer !== "boolean")
                            return "streamer: boolean expected";
                    if (message.ptvAdmin !== undefined)
                        if (typeof message.ptvAdmin !== "boolean")
                            return "ptvAdmin: boolean expected";
                    if (message.basic !== undefined)
                        if (typeof message.basic !== "boolean")
                            return "basic: boolean expected";
                    if (message.premium !== undefined)
                        if (typeof message.premium !== "boolean")
                            return "premium: boolean expected";
                    if (message.subscriber !== undefined)
                        if (typeof message.subscriber !== "boolean")
                            return "subscriber: boolean expected";
                    if (message.color !== undefined)
                        if (!$util.isString(message.color))
                            return "color: string expected";
                    if (message.ignoring !== undefined)
                        if (typeof message.ignoring !== "boolean")
                            return "ignoring: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a UserData message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {UserList.User.UserData} UserData
                 */
                UserData.fromObject = function fromObject(object) {    
                    if (object instanceof $root.UserList.User.UserData)
                        return object;
                    var message = new $root.UserList.User.UserData();
                    if (object.registered !== undefined && object.registered !== null)
                        message.registered = Boolean(object.registered);
                    if (object.moderator !== undefined && object.moderator !== null)
                        message.moderator = Boolean(object.moderator);
                    if (object.streamer !== undefined && object.streamer !== null)
                        message.streamer = Boolean(object.streamer);
                    if (object.ptvAdmin !== undefined && object.ptvAdmin !== null)
                        message.ptvAdmin = Boolean(object.ptvAdmin);
                    if (object.basic !== undefined && object.basic !== null)
                        message.basic = Boolean(object.basic);
                    if (object.premium !== undefined && object.premium !== null)
                        message.premium = Boolean(object.premium);
                    if (object.subscriber !== undefined && object.subscriber !== null)
                        message.subscriber = Boolean(object.subscriber);
                    if (object.color !== undefined && object.color !== null)
                        message.color = String(object.color);
                    if (object.ignoring !== undefined && object.ignoring !== null)
                        message.ignoring = Boolean(object.ignoring);
                    return message;
                };
    
                /**
                 * Creates a UserData message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link UserList.User.UserData.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {UserList.User.UserData} UserData
                 */
                UserData.from = UserData.fromObject;
    
                /**
                 * Creates a plain object from a UserData message. Also converts values to other types if specified.
                 * @param {UserList.User.UserData} message UserData
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
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
                    }
                    if (message.registered !== undefined && message.registered !== null && message.hasOwnProperty("registered"))
                        object.registered = message.registered;
                    if (message.moderator !== undefined && message.moderator !== null && message.hasOwnProperty("moderator"))
                        object.moderator = message.moderator;
                    if (message.streamer !== undefined && message.streamer !== null && message.hasOwnProperty("streamer"))
                        object.streamer = message.streamer;
                    if (message.ptvAdmin !== undefined && message.ptvAdmin !== null && message.hasOwnProperty("ptvAdmin"))
                        object.ptvAdmin = message.ptvAdmin;
                    if (message.basic !== undefined && message.basic !== null && message.hasOwnProperty("basic"))
                        object.basic = message.basic;
                    if (message.premium !== undefined && message.premium !== null && message.hasOwnProperty("premium"))
                        object.premium = message.premium;
                    if (message.subscriber !== undefined && message.subscriber !== null && message.hasOwnProperty("subscriber"))
                        object.subscriber = message.subscriber;
                    if (message.color !== undefined && message.color !== null && message.hasOwnProperty("color"))
                        object.color = message.color;
                    if (message.ignoring !== undefined && message.ignoring !== null && message.hasOwnProperty("ignoring"))
                        object.ignoring = message.ignoring;
                    return object;
                };
    
                /**
                 * Creates a plain object from this UserData message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserData.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this UserData to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                UserData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UserData;
            })();
    
            User.BanData = (function() {
    
                /**
                 * Constructs a new BanData.
                 * @exports UserList.User.BanData
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function BanData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BanData isShadowBan.
                 * @type {boolean|undefined}
                 */
                BanData.prototype.isShadowBan = false;
    
                /**
                 * Creates a new BanData instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {UserList.User.BanData} BanData instance
                 */
                BanData.create = function create(properties) {
                    return new BanData(properties);
                };
    
                /**
                 * Encodes the specified BanData message.
                 * @param {UserList.User.BanData|Object} message BanData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BanData.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.isShadowBan !== undefined && message.hasOwnProperty("isShadowBan"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isShadowBan);
                    return writer;
                };
    
                /**
                 * Encodes the specified BanData message, length delimited.
                 * @param {UserList.User.BanData|Object} message BanData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BanData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a BanData message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {UserList.User.BanData} BanData
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
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {UserList.User.BanData} BanData
                 */
                BanData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BanData message.
                 * @param {UserList.User.BanData|Object} message BanData message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                BanData.verify = function verify(message) {    
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.isShadowBan !== undefined)
                        if (typeof message.isShadowBan !== "boolean")
                            return "isShadowBan: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a BanData message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {UserList.User.BanData} BanData
                 */
                BanData.fromObject = function fromObject(object) {    
                    if (object instanceof $root.UserList.User.BanData)
                        return object;
                    var message = new $root.UserList.User.BanData();
                    if (object.isShadowBan !== undefined && object.isShadowBan !== null)
                        message.isShadowBan = Boolean(object.isShadowBan);
                    return message;
                };
    
                /**
                 * Creates a BanData message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link UserList.User.BanData.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {UserList.User.BanData} BanData
                 */
                BanData.from = BanData.fromObject;
    
                /**
                 * Creates a plain object from a BanData message. Also converts values to other types if specified.
                 * @param {UserList.User.BanData} message BanData
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BanData.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.isShadowBan = false;
                    if (message.isShadowBan !== undefined && message.isShadowBan !== null && message.hasOwnProperty("isShadowBan"))
                        object.isShadowBan = message.isShadowBan;
                    return object;
                };
    
                /**
                 * Creates a plain object from this BanData message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BanData.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this BanData to JSON.
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
         * Constructs a new ChatMessage.
         * @exports ChatMessage
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function ChatMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ChatMessage id.
         * @type {number|undefined}
         */
        ChatMessage.prototype.id = 0;
    
        /**
         * ChatMessage userId.
         * @type {number|undefined}
         */
        ChatMessage.prototype.userId = 0;
    
        /**
         * ChatMessage displayName.
         * @type {string|undefined}
         */
        ChatMessage.prototype.displayName = "";
    
        /**
         * ChatMessage message.
         * @type {string|undefined}
         */
        ChatMessage.prototype.message = "";
    
        /**
         * ChatMessage registered.
         * @type {boolean|undefined}
         */
        ChatMessage.prototype.registered = false;
    
        /**
         * ChatMessage moderator.
         * @type {boolean|undefined}
         */
        ChatMessage.prototype.moderator = false;
    
        /**
         * ChatMessage streamer.
         * @type {boolean|undefined}
         */
        ChatMessage.prototype.streamer = false;
    
        /**
         * ChatMessage ptvAdmin.
         * @type {boolean|undefined}
         */
        ChatMessage.prototype.ptvAdmin = false;
    
        /**
         * ChatMessage basic.
         * @type {boolean|undefined}
         */
        ChatMessage.prototype.basic = false;
    
        /**
         * ChatMessage premium.
         * @type {boolean|undefined}
         */
        ChatMessage.prototype.premium = false;
    
        /**
         * ChatMessage subscriber.
         * @type {boolean|undefined}
         */
        ChatMessage.prototype.subscriber = false;
    
        /**
         * ChatMessage color.
         * @type {string|undefined}
         */
        ChatMessage.prototype.color = "";
    
        /**
         * ChatMessage timeStamp.
         * @type {number|$protobuf.Long|undefined}
         */
        ChatMessage.prototype.timeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * ChatMessage isMeMessage.
         * @type {boolean|undefined}
         */
        ChatMessage.prototype.isMeMessage = false;
    
        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {ChatMessage} ChatMessage instance
         */
        ChatMessage.create = function create(properties) {
            return new ChatMessage(properties);
        };
    
        /**
         * Encodes the specified ChatMessage message.
         * @param {ChatMessage|Object} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.id !== undefined && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.userId !== undefined && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.userId);
            if (message.displayName !== undefined && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.displayName);
            if (message.message !== undefined && message.hasOwnProperty("message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.registered !== undefined && message.hasOwnProperty("registered"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.registered);
            if (message.moderator !== undefined && message.hasOwnProperty("moderator"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.moderator);
            if (message.streamer !== undefined && message.hasOwnProperty("streamer"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.streamer);
            if (message.ptvAdmin !== undefined && message.hasOwnProperty("ptvAdmin"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.ptvAdmin);
            if (message.basic !== undefined && message.hasOwnProperty("basic"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.basic);
            if (message.premium !== undefined && message.hasOwnProperty("premium"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.premium);
            if (message.subscriber !== undefined && message.hasOwnProperty("subscriber"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.subscriber);
            if (message.color !== undefined && message.hasOwnProperty("color"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.color);
            if (message.timeStamp !== undefined && message.timeStamp !== null && message.hasOwnProperty("timeStamp"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.timeStamp);
            if (message.isMeMessage !== undefined && message.hasOwnProperty("isMeMessage"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.isMeMessage);
            return writer;
        };
    
        /**
         * Encodes the specified ChatMessage message, length delimited.
         * @param {ChatMessage|Object} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage} ChatMessage
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage} ChatMessage
         */
        ChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ChatMessage message.
         * @param {ChatMessage|Object} message ChatMessage message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ChatMessage.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id !== undefined)
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.userId !== undefined)
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName !== undefined)
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.message !== undefined)
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.registered !== undefined)
                if (typeof message.registered !== "boolean")
                    return "registered: boolean expected";
            if (message.moderator !== undefined)
                if (typeof message.moderator !== "boolean")
                    return "moderator: boolean expected";
            if (message.streamer !== undefined)
                if (typeof message.streamer !== "boolean")
                    return "streamer: boolean expected";
            if (message.ptvAdmin !== undefined)
                if (typeof message.ptvAdmin !== "boolean")
                    return "ptvAdmin: boolean expected";
            if (message.basic !== undefined)
                if (typeof message.basic !== "boolean")
                    return "basic: boolean expected";
            if (message.premium !== undefined)
                if (typeof message.premium !== "boolean")
                    return "premium: boolean expected";
            if (message.subscriber !== undefined)
                if (typeof message.subscriber !== "boolean")
                    return "subscriber: boolean expected";
            if (message.color !== undefined)
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.timeStamp !== undefined)
                if (!$util.isInteger(message.timeStamp) && !(message.timeStamp && $util.isInteger(message.timeStamp.low) && $util.isInteger(message.timeStamp.high)))
                    return "timeStamp: integer|Long expected";
            if (message.isMeMessage !== undefined)
                if (typeof message.isMeMessage !== "boolean")
                    return "isMeMessage: boolean expected";
            return null;
        };
    
        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage} ChatMessage
         */
        ChatMessage.fromObject = function fromObject(object) {    
            if (object instanceof $root.ChatMessage)
                return object;
            var message = new $root.ChatMessage();
            if (object.id !== undefined && object.id !== null)
                message.id = object.id >>> 0;
            if (object.userId !== undefined && object.userId !== null)
                message.userId = object.userId >>> 0;
            if (object.displayName !== undefined && object.displayName !== null)
                message.displayName = String(object.displayName);
            if (object.message !== undefined && object.message !== null)
                message.message = String(object.message);
            if (object.registered !== undefined && object.registered !== null)
                message.registered = Boolean(object.registered);
            if (object.moderator !== undefined && object.moderator !== null)
                message.moderator = Boolean(object.moderator);
            if (object.streamer !== undefined && object.streamer !== null)
                message.streamer = Boolean(object.streamer);
            if (object.ptvAdmin !== undefined && object.ptvAdmin !== null)
                message.ptvAdmin = Boolean(object.ptvAdmin);
            if (object.basic !== undefined && object.basic !== null)
                message.basic = Boolean(object.basic);
            if (object.premium !== undefined && object.premium !== null)
                message.premium = Boolean(object.premium);
            if (object.subscriber !== undefined && object.subscriber !== null)
                message.subscriber = Boolean(object.subscriber);
            if (object.color !== undefined && object.color !== null)
                message.color = String(object.color);
            if (object.timeStamp !== undefined && object.timeStamp !== null)
                if ($util.Long)
                    (message.timeStamp = $util.Long.fromValue(object.timeStamp)).unsigned = false;
                else if (typeof object.timeStamp === "string")
                    message.timeStamp = parseInt(object.timeStamp, 10);
                else if (typeof object.timeStamp === "number")
                    message.timeStamp = object.timeStamp;
                else if (typeof object.timeStamp === "object")
                    message.timeStamp = new $util.LongBits(object.timeStamp.low >>> 0, object.timeStamp.high >>> 0).toNumber();
            if (object.isMeMessage !== undefined && object.isMeMessage !== null)
                message.isMeMessage = Boolean(object.isMeMessage);
            return message;
        };
    
        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link ChatMessage.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage} ChatMessage
         */
        ChatMessage.from = ChatMessage.fromObject;
    
        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @param {ChatMessage} message ChatMessage
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessage.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
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
            }
            if (message.id !== undefined && message.id !== null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.userId !== undefined && message.userId !== null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName !== undefined && message.displayName !== null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.message !== undefined && message.message !== null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.registered !== undefined && message.registered !== null && message.hasOwnProperty("registered"))
                object.registered = message.registered;
            if (message.moderator !== undefined && message.moderator !== null && message.hasOwnProperty("moderator"))
                object.moderator = message.moderator;
            if (message.streamer !== undefined && message.streamer !== null && message.hasOwnProperty("streamer"))
                object.streamer = message.streamer;
            if (message.ptvAdmin !== undefined && message.ptvAdmin !== null && message.hasOwnProperty("ptvAdmin"))
                object.ptvAdmin = message.ptvAdmin;
            if (message.basic !== undefined && message.basic !== null && message.hasOwnProperty("basic"))
                object.basic = message.basic;
            if (message.premium !== undefined && message.premium !== null && message.hasOwnProperty("premium"))
                object.premium = message.premium;
            if (message.subscriber !== undefined && message.subscriber !== null && message.hasOwnProperty("subscriber"))
                object.subscriber = message.subscriber;
            if (message.color !== undefined && message.color !== null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.timeStamp !== undefined && message.timeStamp !== null && message.hasOwnProperty("timeStamp"))
                if (typeof message.timeStamp === "number")
                    object.timeStamp = options.longs === String ? String(message.timeStamp) : message.timeStamp;
                else
                    object.timeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.timeStamp) : options.longs === Number ? new $util.LongBits(message.timeStamp.low >>> 0, message.timeStamp.high >>> 0).toNumber() : message.timeStamp;
            if (message.isMeMessage !== undefined && message.isMeMessage !== null && message.hasOwnProperty("isMeMessage"))
                object.isMeMessage = message.isMeMessage;
            return object;
        };
    
        /**
         * Creates a plain object from this ChatMessage message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessage.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this ChatMessage to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ChatMessage;
    })();
    
    $root.GlobalMessage = (function() {
    
        /**
         * Constructs a new GlobalMessage.
         * @exports GlobalMessage
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function GlobalMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * GlobalMessage message.
         * @type {string|undefined}
         */
        GlobalMessage.prototype.message = "";
    
        /**
         * Creates a new GlobalMessage instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {GlobalMessage} GlobalMessage instance
         */
        GlobalMessage.create = function create(properties) {
            return new GlobalMessage(properties);
        };
    
        /**
         * Encodes the specified GlobalMessage message.
         * @param {GlobalMessage|Object} message GlobalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalMessage.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.message !== undefined && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified GlobalMessage message, length delimited.
         * @param {GlobalMessage|Object} message GlobalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a GlobalMessage message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GlobalMessage} GlobalMessage
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GlobalMessage} GlobalMessage
         */
        GlobalMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a GlobalMessage message.
         * @param {GlobalMessage|Object} message GlobalMessage message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        GlobalMessage.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message !== undefined)
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a GlobalMessage message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {GlobalMessage} GlobalMessage
         */
        GlobalMessage.fromObject = function fromObject(object) {    
            if (object instanceof $root.GlobalMessage)
                return object;
            var message = new $root.GlobalMessage();
            if (object.message !== undefined && object.message !== null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a GlobalMessage message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link GlobalMessage.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {GlobalMessage} GlobalMessage
         */
        GlobalMessage.from = GlobalMessage.fromObject;
    
        /**
         * Creates a plain object from a GlobalMessage message. Also converts values to other types if specified.
         * @param {GlobalMessage} message GlobalMessage
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GlobalMessage.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message !== undefined && message.message !== null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Creates a plain object from this GlobalMessage message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GlobalMessage.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this GlobalMessage to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        GlobalMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return GlobalMessage;
    })();
    
    $root.Whisper = (function() {
    
        /**
         * Constructs a new Whisper.
         * @exports Whisper
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Whisper(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Whisper id.
         * @type {number|undefined}
         */
        Whisper.prototype.id = 0;
    
        /**
         * Whisper userId.
         * @type {number|undefined}
         */
        Whisper.prototype.userId = 0;
    
        /**
         * Whisper displayName.
         * @type {string|undefined}
         */
        Whisper.prototype.displayName = "";
    
        /**
         * Whisper message.
         * @type {string|undefined}
         */
        Whisper.prototype.message = "";
    
        /**
         * Whisper incomming.
         * @type {boolean|undefined}
         */
        Whisper.prototype.incomming = false;
    
        /**
         * Whisper timeStamp.
         * @type {number|$protobuf.Long|undefined}
         */
        Whisper.prototype.timeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new Whisper instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {Whisper} Whisper instance
         */
        Whisper.create = function create(properties) {
            return new Whisper(properties);
        };
    
        /**
         * Encodes the specified Whisper message.
         * @param {Whisper|Object} message Whisper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Whisper.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.id !== undefined && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.userId !== undefined && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.userId);
            if (message.displayName !== undefined && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.displayName);
            if (message.message !== undefined && message.hasOwnProperty("message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.incomming !== undefined && message.hasOwnProperty("incomming"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.incomming);
            if (message.timeStamp !== undefined && message.timeStamp !== null && message.hasOwnProperty("timeStamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.timeStamp);
            return writer;
        };
    
        /**
         * Encodes the specified Whisper message, length delimited.
         * @param {Whisper|Object} message Whisper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Whisper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Whisper message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Whisper} Whisper
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Whisper message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Whisper} Whisper
         */
        Whisper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Whisper message.
         * @param {Whisper|Object} message Whisper message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Whisper.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id !== undefined)
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.userId !== undefined)
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName !== undefined)
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.message !== undefined)
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.incomming !== undefined)
                if (typeof message.incomming !== "boolean")
                    return "incomming: boolean expected";
            if (message.timeStamp !== undefined)
                if (!$util.isInteger(message.timeStamp) && !(message.timeStamp && $util.isInteger(message.timeStamp.low) && $util.isInteger(message.timeStamp.high)))
                    return "timeStamp: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a Whisper message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {Whisper} Whisper
         */
        Whisper.fromObject = function fromObject(object) {    
            if (object instanceof $root.Whisper)
                return object;
            var message = new $root.Whisper();
            if (object.id !== undefined && object.id !== null)
                message.id = object.id >>> 0;
            if (object.userId !== undefined && object.userId !== null)
                message.userId = object.userId >>> 0;
            if (object.displayName !== undefined && object.displayName !== null)
                message.displayName = String(object.displayName);
            if (object.message !== undefined && object.message !== null)
                message.message = String(object.message);
            if (object.incomming !== undefined && object.incomming !== null)
                message.incomming = Boolean(object.incomming);
            if (object.timeStamp !== undefined && object.timeStamp !== null)
                if ($util.Long)
                    (message.timeStamp = $util.Long.fromValue(object.timeStamp)).unsigned = false;
                else if (typeof object.timeStamp === "string")
                    message.timeStamp = parseInt(object.timeStamp, 10);
                else if (typeof object.timeStamp === "number")
                    message.timeStamp = object.timeStamp;
                else if (typeof object.timeStamp === "object")
                    message.timeStamp = new $util.LongBits(object.timeStamp.low >>> 0, object.timeStamp.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a Whisper message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link Whisper.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {Whisper} Whisper
         */
        Whisper.from = Whisper.fromObject;
    
        /**
         * Creates a plain object from a Whisper message. Also converts values to other types if specified.
         * @param {Whisper} message Whisper
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Whisper.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
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
            }
            if (message.id !== undefined && message.id !== null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.userId !== undefined && message.userId !== null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName !== undefined && message.displayName !== null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.message !== undefined && message.message !== null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.incomming !== undefined && message.incomming !== null && message.hasOwnProperty("incomming"))
                object.incomming = message.incomming;
            if (message.timeStamp !== undefined && message.timeStamp !== null && message.hasOwnProperty("timeStamp"))
                if (typeof message.timeStamp === "number")
                    object.timeStamp = options.longs === String ? String(message.timeStamp) : message.timeStamp;
                else
                    object.timeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.timeStamp) : options.longs === Number ? new $util.LongBits(message.timeStamp.low >>> 0, message.timeStamp.high >>> 0).toNumber() : message.timeStamp;
            return object;
        };
    
        /**
         * Creates a plain object from this Whisper message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Whisper.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this Whisper to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Whisper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Whisper;
    })();
    
    $root.ServerMessage = (function() {
    
        /**
         * Constructs a new ServerMessage.
         * @exports ServerMessage
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function ServerMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ServerMessage message.
         * @type {string|undefined}
         */
        ServerMessage.prototype.message = "";
    
        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {ServerMessage} ServerMessage instance
         */
        ServerMessage.create = function create(properties) {
            return new ServerMessage(properties);
        };
    
        /**
         * Encodes the specified ServerMessage message.
         * @param {ServerMessage|Object} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.message !== undefined && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified ServerMessage message, length delimited.
         * @param {ServerMessage|Object} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerMessage} ServerMessage
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerMessage} ServerMessage
         */
        ServerMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ServerMessage message.
         * @param {ServerMessage|Object} message ServerMessage message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ServerMessage.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message !== undefined)
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerMessage} ServerMessage
         */
        ServerMessage.fromObject = function fromObject(object) {    
            if (object instanceof $root.ServerMessage)
                return object;
            var message = new $root.ServerMessage();
            if (object.message !== undefined && object.message !== null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link ServerMessage.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerMessage} ServerMessage
         */
        ServerMessage.from = ServerMessage.fromObject;
    
        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @param {ServerMessage} message ServerMessage
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerMessage.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message !== undefined && message.message !== null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Creates a plain object from this ServerMessage message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerMessage.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this ServerMessage to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ServerMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ServerMessage;
    })();
    
    $root.CommandHelp = (function() {
    
        /**
         * Constructs a new CommandHelp.
         * @exports CommandHelp
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function CommandHelp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CommandHelp commands.
         * @type {Array.<CommandHelp.Command>|undefined}
         */
        CommandHelp.prototype.commands = $util.emptyArray;
    
        // Lazily resolved type references
        var $types = {
            0: "CommandHelp.Command"
        }; $lazyTypes.push($types);
    
        /**
         * Creates a new CommandHelp instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {CommandHelp} CommandHelp instance
         */
        CommandHelp.create = function create(properties) {
            return new CommandHelp(properties);
        };
    
        /**
         * Encodes the specified CommandHelp message.
         * @param {CommandHelp|Object} message CommandHelp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandHelp.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.commands !== undefined && message.hasOwnProperty("commands"))
                for (var i = 0; i < message.commands.length; ++i)
                    $types[0].encode(message.commands[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CommandHelp message, length delimited.
         * @param {CommandHelp|Object} message CommandHelp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandHelp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CommandHelp message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommandHelp} CommandHelp
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
                    message.commands.push($types[0].decode(reader, reader.uint32()));
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommandHelp} CommandHelp
         */
        CommandHelp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CommandHelp message.
         * @param {CommandHelp|Object} message CommandHelp message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        CommandHelp.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.commands !== undefined) {
                if (!Array.isArray(message.commands))
                    return "commands: array expected";
                for (var i = 0; i < message.commands.length; ++i) {
                    var error = $types[0].verify(message.commands[i]);
                    if (error)
                        return "commands." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CommandHelp message from a plain object. Also converts values to their respective internal types.
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
                    message.commands[i] = $types[0].fromObject(object.commands[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a CommandHelp message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link CommandHelp.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {CommandHelp} CommandHelp
         */
        CommandHelp.from = CommandHelp.fromObject;
    
        /**
         * Creates a plain object from a CommandHelp message. Also converts values to other types if specified.
         * @param {CommandHelp} message CommandHelp
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommandHelp.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.commands = [];
            if (message.commands !== undefined && message.commands !== null && message.hasOwnProperty("commands")) {
                object.commands = [];
                for (var j = 0; j < message.commands.length; ++j)
                    object.commands[j] = $types[0].toObject(message.commands[j], options);
            }
            return object;
        };
    
        /**
         * Creates a plain object from this CommandHelp message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommandHelp.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this CommandHelp to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        CommandHelp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CommandHelp.Command = (function() {
    
            /**
             * Constructs a new Command.
             * @exports CommandHelp.Command
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function Command(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Command triggers.
             * @type {Array.<string>|undefined}
             */
            Command.prototype.triggers = $util.emptyArray;
    
            /**
             * Command description.
             * @type {string|undefined}
             */
            Command.prototype.description = "";
    
            /**
             * Creates a new Command instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {CommandHelp.Command} Command instance
             */
            Command.create = function create(properties) {
                return new Command(properties);
            };
    
            /**
             * Encodes the specified Command message.
             * @param {CommandHelp.Command|Object} message Command message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Command.encode = function encode(message, writer) {    
                if (!writer)
                    writer = $Writer.create();
                if (message.triggers !== undefined && message.hasOwnProperty("triggers"))
                    for (var i = 0; i < message.triggers.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.triggers[i]);
                if (message.description !== undefined && message.hasOwnProperty("description"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                return writer;
            };
    
            /**
             * Encodes the specified Command message, length delimited.
             * @param {CommandHelp.Command|Object} message Command message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Command.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Command message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CommandHelp.Command} Command
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
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CommandHelp.Command} Command
             */
            Command.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Command message.
             * @param {CommandHelp.Command|Object} message Command message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            Command.verify = function verify(message) {    
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.triggers !== undefined) {
                    if (!Array.isArray(message.triggers))
                        return "triggers: array expected";
                    for (var i = 0; i < message.triggers.length; ++i)
                        if (!$util.isString(message.triggers[i]))
                            return "triggers: string[] expected";
                }
                if (message.description !== undefined)
                    if (!$util.isString(message.description))
                        return "description: string expected";
                return null;
            };
    
            /**
             * Creates a Command message from a plain object. Also converts values to their respective internal types.
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
                if (object.description !== undefined && object.description !== null)
                    message.description = String(object.description);
                return message;
            };
    
            /**
             * Creates a Command message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link CommandHelp.Command.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {CommandHelp.Command} Command
             */
            Command.from = Command.fromObject;
    
            /**
             * Creates a plain object from a Command message. Also converts values to other types if specified.
             * @param {CommandHelp.Command} message Command
             * @param {$protobuf.ConversionOptions} [options] Conversion options
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
                if (message.triggers !== undefined && message.triggers !== null && message.hasOwnProperty("triggers")) {
                    object.triggers = [];
                    for (var j = 0; j < message.triggers.length; ++j)
                        object.triggers[j] = message.triggers[j];
                }
                if (message.description !== undefined && message.description !== null && message.hasOwnProperty("description"))
                    object.description = message.description;
                return object;
            };
    
            /**
             * Creates a plain object from this Command message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Command.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };
    
            /**
             * Converts this Command to JSON.
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
         * Constructs a new Control.
         * @exports Control
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Control(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Control messageType.
         * @type {number|undefined}
         */
        Control.prototype.messageType = 0;
    
        /**
         * Control dataBool.
         * @type {boolean|undefined}
         */
        Control.prototype.dataBool = false;
    
        // Lazily resolved type references
        var $types = {
            0: "Control.MessageType"
        }; $lazyTypes.push($types);
    
        /**
         * Creates a new Control instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {Control} Control instance
         */
        Control.create = function create(properties) {
            return new Control(properties);
        };
    
        /**
         * Encodes the specified Control message.
         * @param {Control|Object} message Control message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Control.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.messageType !== undefined && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.messageType);
            if (message.dataBool !== undefined && message.hasOwnProperty("dataBool"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.dataBool);
            return writer;
        };
    
        /**
         * Encodes the specified Control message, length delimited.
         * @param {Control|Object} message Control message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Control.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Control message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Control} Control
         */
        Control.decode = function decode(reader, length) {    
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Control();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageType = reader.uint32();
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Control} Control
         */
        Control.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Control message.
         * @param {Control|Object} message Control message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Control.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType !== undefined)
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
                    break;
                }
            if (message.dataBool !== undefined)
                if (typeof message.dataBool !== "boolean")
                    return "dataBool: boolean expected";
            return null;
        };
    
        /**
         * Creates a Control message from a plain object. Also converts values to their respective internal types.
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
            case "COMMISSION_DESCRIPTION":
            case 5:
                message.messageType = 5;
                break;
            case "DESCRIPTION":
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
            case "SHOW_RAFFLE_CREATOR":
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
            }
            if (object.dataBool !== undefined && object.dataBool !== null)
                message.dataBool = Boolean(object.dataBool);
            return message;
        };
    
        /**
         * Creates a Control message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link Control.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {Control} Control
         */
        Control.from = Control.fromObject;
    
        /**
         * Creates a plain object from a Control message. Also converts values to other types if specified.
         * @param {Control} message Control
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.messageType !== undefined && message.messageType !== null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $types[0][message.messageType] : message.messageType;
            if (message.dataBool !== undefined && message.dataBool !== null && message.hasOwnProperty("dataBool"))
                object.dataBool = message.dataBool;
            return object;
        };
    
        /**
         * Creates a plain object from this Control message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Control.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this Control to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Control.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
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
        Control.MessageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values["END_HISTORY"] = 0;
            values["KICK"] = 1;
            values["GAMING"] = 2;
            values["ADULT"] = 3;
            values["COMMISSIONS"] = 4;
            values["COMMISSION_DESCRIPTION"] = 5;
            values["DESCRIPTION"] = 6;
            values["CONTENT_TYPE"] = 7;
            values["CAN_TALK"] = 8;
            values["SHOW_POLL_CREATOR"] = 9;
            values["SHOW_RAFFLE_CREATOR"] = 10;
            values["NAME_TAKEN"] = 11;
            values["HIDE_POLL"] = 12;
            return values;
        })();
    
        return Control;
    })();
    
    $root.AdminControl = (function() {
    
        /**
         * Constructs a new AdminControl.
         * @exports AdminControl
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function AdminControl(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * AdminControl messageType.
         * @type {number|undefined}
         */
        AdminControl.prototype.messageType = 0;
    
        // Lazily resolved type references
        var $types = {
            0: "AdminControl.MessageType"
        }; $lazyTypes.push($types);
    
        /**
         * Creates a new AdminControl instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {AdminControl} AdminControl instance
         */
        AdminControl.create = function create(properties) {
            return new AdminControl(properties);
        };
    
        /**
         * Encodes the specified AdminControl message.
         * @param {AdminControl|Object} message AdminControl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminControl.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.messageType !== undefined && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.messageType);
            return writer;
        };
    
        /**
         * Encodes the specified AdminControl message, length delimited.
         * @param {AdminControl|Object} message AdminControl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminControl.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an AdminControl message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AdminControl} AdminControl
         */
        AdminControl.decode = function decode(reader, length) {    
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AdminControl();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageType = reader.uint32();
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AdminControl} AdminControl
         */
        AdminControl.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an AdminControl message.
         * @param {AdminControl|Object} message AdminControl message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        AdminControl.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType !== undefined)
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
         * Creates an AdminControl message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link AdminControl.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {AdminControl} AdminControl
         */
        AdminControl.from = AdminControl.fromObject;
    
        /**
         * Creates a plain object from an AdminControl message. Also converts values to other types if specified.
         * @param {AdminControl} message AdminControl
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdminControl.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.messageType = options.enums === String ? "ADULT" : 0;
            if (message.messageType !== undefined && message.messageType !== null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $types[0][message.messageType] : message.messageType;
            return object;
        };
    
        /**
         * Creates a plain object from this AdminControl message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdminControl.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this AdminControl to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        AdminControl.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * MessageType enum.
         * @name MessageType
         * @memberof AdminControl
         * @enum {number}
         * @property {number} ADULT=0 ADULT value
         * @property {number} GAMING=1 GAMING value
         * @property {number} MOVIE=2 MOVIE value
         */
        AdminControl.MessageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values["ADULT"] = 0;
            values["GAMING"] = 1;
            values["MOVIE"] = 2;
            return values;
        })();
    
        return AdminControl;
    })();
    
    $root.OnlineState = (function() {
    
        /**
         * Constructs a new OnlineState.
         * @exports OnlineState
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function OnlineState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * OnlineState isLive.
         * @type {boolean|undefined}
         */
        OnlineState.prototype.isLive = false;
    
        /**
         * OnlineState viewers.
         * @type {number|undefined}
         */
        OnlineState.prototype.viewers = 0;
    
        /**
         * OnlineState channel.
         * @type {number|undefined}
         */
        OnlineState.prototype.channel = 0;
    
        /**
         * OnlineState channelName.
         * @type {string|undefined}
         */
        OnlineState.prototype.channelName = "";
    
        /**
         * Creates a new OnlineState instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {OnlineState} OnlineState instance
         */
        OnlineState.create = function create(properties) {
            return new OnlineState(properties);
        };
    
        /**
         * Encodes the specified OnlineState message.
         * @param {OnlineState|Object} message OnlineState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineState.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.isLive !== undefined && message.hasOwnProperty("isLive"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isLive);
            if (message.viewers !== undefined && message.hasOwnProperty("viewers"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.viewers);
            if (message.channel !== undefined && message.hasOwnProperty("channel"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.channel);
            if (message.channelName !== undefined && message.hasOwnProperty("channelName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.channelName);
            return writer;
        };
    
        /**
         * Encodes the specified OnlineState message, length delimited.
         * @param {OnlineState|Object} message OnlineState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an OnlineState message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlineState} OnlineState
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlineState} OnlineState
         */
        OnlineState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an OnlineState message.
         * @param {OnlineState|Object} message OnlineState message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        OnlineState.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isLive !== undefined)
                if (typeof message.isLive !== "boolean")
                    return "isLive: boolean expected";
            if (message.viewers !== undefined)
                if (!$util.isInteger(message.viewers))
                    return "viewers: integer expected";
            if (message.channel !== undefined)
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.channelName !== undefined)
                if (!$util.isString(message.channelName))
                    return "channelName: string expected";
            return null;
        };
    
        /**
         * Creates an OnlineState message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlineState} OnlineState
         */
        OnlineState.fromObject = function fromObject(object) {    
            if (object instanceof $root.OnlineState)
                return object;
            var message = new $root.OnlineState();
            if (object.isLive !== undefined && object.isLive !== null)
                message.isLive = Boolean(object.isLive);
            if (object.viewers !== undefined && object.viewers !== null)
                message.viewers = object.viewers >>> 0;
            if (object.channel !== undefined && object.channel !== null)
                message.channel = object.channel >>> 0;
            if (object.channelName !== undefined && object.channelName !== null)
                message.channelName = String(object.channelName);
            return message;
        };
    
        /**
         * Creates an OnlineState message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link OnlineState.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlineState} OnlineState
         */
        OnlineState.from = OnlineState.fromObject;
    
        /**
         * Creates a plain object from an OnlineState message. Also converts values to other types if specified.
         * @param {OnlineState} message OnlineState
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.isLive !== undefined && message.isLive !== null && message.hasOwnProperty("isLive"))
                object.isLive = message.isLive;
            if (message.viewers !== undefined && message.viewers !== null && message.hasOwnProperty("viewers"))
                object.viewers = message.viewers;
            if (message.channel !== undefined && message.channel !== null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.channelName !== undefined && message.channelName !== null && message.hasOwnProperty("channelName"))
                object.channelName = message.channelName;
            return object;
        };
    
        /**
         * Creates a plain object from this OnlineState message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnlineState.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this OnlineState to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        OnlineState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return OnlineState;
    })();
    
    $root.Multistream = (function() {
    
        /**
         * Constructs a new Multistream.
         * @exports Multistream
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Multistream(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Multistream host.
         * @type {Multistream.Channel|undefined}
         */
        Multistream.prototype.host = null;
    
        /**
         * Multistream guests.
         * @type {Array.<Multistream.Channel>|undefined}
         */
        Multistream.prototype.guests = $util.emptyArray;
    
        // Lazily resolved type references
        var $types = {
            0: "Multistream.Channel",
            1: "Multistream.Channel"
        }; $lazyTypes.push($types);
    
        /**
         * Creates a new Multistream instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {Multistream} Multistream instance
         */
        Multistream.create = function create(properties) {
            return new Multistream(properties);
        };
    
        /**
         * Encodes the specified Multistream message.
         * @param {Multistream|Object} message Multistream message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Multistream.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.host && message.hasOwnProperty("host"))
                $types[0].encode(message.host, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.guests !== undefined && message.hasOwnProperty("guests"))
                for (var i = 0; i < message.guests.length; ++i)
                    $types[1].encode(message.guests[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Multistream message, length delimited.
         * @param {Multistream|Object} message Multistream message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Multistream.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Multistream message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Multistream} Multistream
         */
        Multistream.decode = function decode(reader, length) {    
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Multistream();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.host = $types[0].decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.guests && message.guests.length))
                        message.guests = [];
                    message.guests.push($types[1].decode(reader, reader.uint32()));
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Multistream} Multistream
         */
        Multistream.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Multistream message.
         * @param {Multistream|Object} message Multistream message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Multistream.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.host !== undefined && message.host !== null) {
                var error = $types[0].verify(message.host);
                if (error)
                    return "host." + error;
            }
            if (message.guests !== undefined) {
                if (!Array.isArray(message.guests))
                    return "guests: array expected";
                for (var i = 0; i < message.guests.length; ++i) {
                    var error = $types[1].verify(message.guests[i]);
                    if (error)
                        return "guests." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a Multistream message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {Multistream} Multistream
         */
        Multistream.fromObject = function fromObject(object) {    
            if (object instanceof $root.Multistream)
                return object;
            var message = new $root.Multistream();
            if (object.host !== undefined && object.host !== null) {
                if (typeof object.host !== "object")
                    throw TypeError(".Multistream.host: object expected");
                message.host = $types[0].fromObject(object.host);
            }
            if (object.guests) {
                if (!Array.isArray(object.guests))
                    throw TypeError(".Multistream.guests: array expected");
                message.guests = [];
                for (var i = 0; i < object.guests.length; ++i) {
                    if (typeof object.guests[i] !== "object")
                        throw TypeError(".Multistream.guests: object expected");
                    message.guests[i] = $types[1].fromObject(object.guests[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a Multistream message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link Multistream.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {Multistream} Multistream
         */
        Multistream.from = Multistream.fromObject;
    
        /**
         * Creates a plain object from a Multistream message. Also converts values to other types if specified.
         * @param {Multistream} message Multistream
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.host !== undefined && message.host !== null && message.hasOwnProperty("host"))
                object.host = $types[0].toObject(message.host, options);
            if (message.guests !== undefined && message.guests !== null && message.hasOwnProperty("guests")) {
                object.guests = [];
                for (var j = 0; j < message.guests.length; ++j)
                    object.guests[j] = $types[1].toObject(message.guests[j], options);
            }
            return object;
        };
    
        /**
         * Creates a plain object from this Multistream message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Multistream.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this Multistream to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Multistream.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        Multistream.Channel = (function() {
    
            /**
             * Constructs a new Channel.
             * @exports Multistream.Channel
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function Channel(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Channel channel.
             * @type {number|undefined}
             */
            Channel.prototype.channel = 0;
    
            /**
             * Channel channelName.
             * @type {string|undefined}
             */
            Channel.prototype.channelName = "";
    
            /**
             * Creates a new Channel instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {Multistream.Channel} Channel instance
             */
            Channel.create = function create(properties) {
                return new Channel(properties);
            };
    
            /**
             * Encodes the specified Channel message.
             * @param {Multistream.Channel|Object} message Channel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Channel.encode = function encode(message, writer) {    
                if (!writer)
                    writer = $Writer.create();
                if (message.channel !== undefined && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.channel);
                if (message.channelName !== undefined && message.hasOwnProperty("channelName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.channelName);
                return writer;
            };
    
            /**
             * Encodes the specified Channel message, length delimited.
             * @param {Multistream.Channel|Object} message Channel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Channel.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Channel message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Multistream.Channel} Channel
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
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Multistream.Channel} Channel
             */
            Channel.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Channel message.
             * @param {Multistream.Channel|Object} message Channel message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            Channel.verify = function verify(message) {    
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.channel !== undefined)
                    if (!$util.isInteger(message.channel))
                        return "channel: integer expected";
                if (message.channelName !== undefined)
                    if (!$util.isString(message.channelName))
                        return "channelName: string expected";
                return null;
            };
    
            /**
             * Creates a Channel message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {Multistream.Channel} Channel
             */
            Channel.fromObject = function fromObject(object) {    
                if (object instanceof $root.Multistream.Channel)
                    return object;
                var message = new $root.Multistream.Channel();
                if (object.channel !== undefined && object.channel !== null)
                    message.channel = object.channel >>> 0;
                if (object.channelName !== undefined && object.channelName !== null)
                    message.channelName = String(object.channelName);
                return message;
            };
    
            /**
             * Creates a Channel message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link Multistream.Channel.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {Multistream.Channel} Channel
             */
            Channel.from = Channel.fromObject;
    
            /**
             * Creates a plain object from a Channel message. Also converts values to other types if specified.
             * @param {Multistream.Channel} message Channel
             * @param {$protobuf.ConversionOptions} [options] Conversion options
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
                if (message.channel !== undefined && message.channel !== null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                if (message.channelName !== undefined && message.channelName !== null && message.hasOwnProperty("channelName"))
                    object.channelName = message.channelName;
                return object;
            };
    
            /**
             * Creates a plain object from this Channel message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Channel.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };
    
            /**
             * Converts this Channel to JSON.
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
         * Constructs a new Color.
         * @exports Color
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Color(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Color color.
         * @type {string|undefined}
         */
        Color.prototype.color = "";
    
        /**
         * Creates a new Color instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {Color} Color instance
         */
        Color.create = function create(properties) {
            return new Color(properties);
        };
    
        /**
         * Encodes the specified Color message.
         * @param {Color|Object} message Color message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Color.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.color !== undefined && message.hasOwnProperty("color"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.color);
            return writer;
        };
    
        /**
         * Encodes the specified Color message, length delimited.
         * @param {Color|Object} message Color message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Color.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Color message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Color} Color
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Color} Color
         */
        Color.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Color message.
         * @param {Color|Object} message Color message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Color.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.color !== undefined)
                if (!$util.isString(message.color))
                    return "color: string expected";
            return null;
        };
    
        /**
         * Creates a Color message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {Color} Color
         */
        Color.fromObject = function fromObject(object) {    
            if (object instanceof $root.Color)
                return object;
            var message = new $root.Color();
            if (object.color !== undefined && object.color !== null)
                message.color = String(object.color);
            return message;
        };
    
        /**
         * Creates a Color message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link Color.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {Color} Color
         */
        Color.from = Color.fromObject;
    
        /**
         * Creates a plain object from a Color message. Also converts values to other types if specified.
         * @param {Color} message Color
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Color.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.color = "";
            if (message.color !== undefined && message.color !== null && message.hasOwnProperty("color"))
                object.color = message.color;
            return object;
        };
    
        /**
         * Creates a plain object from this Color message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Color.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this Color to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Color.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Color;
    })();
    
    $root.IgnoresUpdated = (function() {
    
        /**
         * Constructs a new IgnoresUpdated.
         * @exports IgnoresUpdated
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function IgnoresUpdated(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * IgnoresUpdated ignores.
         * @type {Array.<string>|undefined}
         */
        IgnoresUpdated.prototype.ignores = $util.emptyArray;
    
        /**
         * Creates a new IgnoresUpdated instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {IgnoresUpdated} IgnoresUpdated instance
         */
        IgnoresUpdated.create = function create(properties) {
            return new IgnoresUpdated(properties);
        };
    
        /**
         * Encodes the specified IgnoresUpdated message.
         * @param {IgnoresUpdated|Object} message IgnoresUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IgnoresUpdated.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.ignores !== undefined && message.hasOwnProperty("ignores"))
                for (var i = 0; i < message.ignores.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.ignores[i]);
            return writer;
        };
    
        /**
         * Encodes the specified IgnoresUpdated message, length delimited.
         * @param {IgnoresUpdated|Object} message IgnoresUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IgnoresUpdated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an IgnoresUpdated message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {IgnoresUpdated} IgnoresUpdated
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {IgnoresUpdated} IgnoresUpdated
         */
        IgnoresUpdated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an IgnoresUpdated message.
         * @param {IgnoresUpdated|Object} message IgnoresUpdated message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        IgnoresUpdated.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ignores !== undefined) {
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
         * Creates an IgnoresUpdated message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link IgnoresUpdated.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {IgnoresUpdated} IgnoresUpdated
         */
        IgnoresUpdated.from = IgnoresUpdated.fromObject;
    
        /**
         * Creates a plain object from an IgnoresUpdated message. Also converts values to other types if specified.
         * @param {IgnoresUpdated} message IgnoresUpdated
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IgnoresUpdated.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ignores = [];
            if (message.ignores !== undefined && message.ignores !== null && message.hasOwnProperty("ignores")) {
                object.ignores = [];
                for (var j = 0; j < message.ignores.length; ++j)
                    object.ignores[j] = message.ignores[j];
            }
            return object;
        };
    
        /**
         * Creates a plain object from this IgnoresUpdated message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IgnoresUpdated.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this IgnoresUpdated to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        IgnoresUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return IgnoresUpdated;
    })();
    
    $root.ModifyIgnores = (function() {
    
        /**
         * Constructs a new ModifyIgnores.
         * @exports ModifyIgnores
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function ModifyIgnores(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ModifyIgnores ignoreName.
         * @type {string|undefined}
         */
        ModifyIgnores.prototype.ignoreName = "";
    
        /**
         * ModifyIgnores isAdding.
         * @type {boolean|undefined}
         */
        ModifyIgnores.prototype.isAdding = false;
    
        /**
         * Creates a new ModifyIgnores instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {ModifyIgnores} ModifyIgnores instance
         */
        ModifyIgnores.create = function create(properties) {
            return new ModifyIgnores(properties);
        };
    
        /**
         * Encodes the specified ModifyIgnores message.
         * @param {ModifyIgnores|Object} message ModifyIgnores message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyIgnores.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.ignoreName !== undefined && message.hasOwnProperty("ignoreName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ignoreName);
            if (message.isAdding !== undefined && message.hasOwnProperty("isAdding"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isAdding);
            return writer;
        };
    
        /**
         * Encodes the specified ModifyIgnores message, length delimited.
         * @param {ModifyIgnores|Object} message ModifyIgnores message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyIgnores.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ModifyIgnores message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ModifyIgnores} ModifyIgnores
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ModifyIgnores} ModifyIgnores
         */
        ModifyIgnores.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ModifyIgnores message.
         * @param {ModifyIgnores|Object} message ModifyIgnores message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ModifyIgnores.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ignoreName !== undefined)
                if (!$util.isString(message.ignoreName))
                    return "ignoreName: string expected";
            if (message.isAdding !== undefined)
                if (typeof message.isAdding !== "boolean")
                    return "isAdding: boolean expected";
            return null;
        };
    
        /**
         * Creates a ModifyIgnores message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {ModifyIgnores} ModifyIgnores
         */
        ModifyIgnores.fromObject = function fromObject(object) {    
            if (object instanceof $root.ModifyIgnores)
                return object;
            var message = new $root.ModifyIgnores();
            if (object.ignoreName !== undefined && object.ignoreName !== null)
                message.ignoreName = String(object.ignoreName);
            if (object.isAdding !== undefined && object.isAdding !== null)
                message.isAdding = Boolean(object.isAdding);
            return message;
        };
    
        /**
         * Creates a ModifyIgnores message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link ModifyIgnores.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {ModifyIgnores} ModifyIgnores
         */
        ModifyIgnores.from = ModifyIgnores.fromObject;
    
        /**
         * Creates a plain object from a ModifyIgnores message. Also converts values to other types if specified.
         * @param {ModifyIgnores} message ModifyIgnores
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.ignoreName !== undefined && message.ignoreName !== null && message.hasOwnProperty("ignoreName"))
                object.ignoreName = message.ignoreName;
            if (message.isAdding !== undefined && message.isAdding !== null && message.hasOwnProperty("isAdding"))
                object.isAdding = message.isAdding;
            return object;
        };
    
        /**
         * Creates a plain object from this ModifyIgnores message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyIgnores.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this ModifyIgnores to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ModifyIgnores.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ModifyIgnores;
    })();
    
    $root.RemoveMessage = (function() {
    
        /**
         * Constructs a new RemoveMessage.
         * @exports RemoveMessage
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function RemoveMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RemoveMessage id.
         * @type {number|undefined}
         */
        RemoveMessage.prototype.id = 0;
    
        /**
         * RemoveMessage executionerId.
         * @type {number|undefined}
         */
        RemoveMessage.prototype.executionerId = 0;
    
        /**
         * RemoveMessage executionerDisplayName.
         * @type {string|undefined}
         */
        RemoveMessage.prototype.executionerDisplayName = "";
    
        /**
         * Creates a new RemoveMessage instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {RemoveMessage} RemoveMessage instance
         */
        RemoveMessage.create = function create(properties) {
            return new RemoveMessage(properties);
        };
    
        /**
         * Encodes the specified RemoveMessage message.
         * @param {RemoveMessage|Object} message RemoveMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveMessage.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.id !== undefined && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.executionerId !== undefined && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.executionerId);
            if (message.executionerDisplayName !== undefined && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.executionerDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified RemoveMessage message, length delimited.
         * @param {RemoveMessage|Object} message RemoveMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RemoveMessage message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RemoveMessage} RemoveMessage
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RemoveMessage} RemoveMessage
         */
        RemoveMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RemoveMessage message.
         * @param {RemoveMessage|Object} message RemoveMessage message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        RemoveMessage.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id !== undefined)
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.executionerId !== undefined)
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName !== undefined)
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a RemoveMessage message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {RemoveMessage} RemoveMessage
         */
        RemoveMessage.fromObject = function fromObject(object) {    
            if (object instanceof $root.RemoveMessage)
                return object;
            var message = new $root.RemoveMessage();
            if (object.id !== undefined && object.id !== null)
                message.id = object.id >>> 0;
            if (object.executionerId !== undefined && object.executionerId !== null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName !== undefined && object.executionerDisplayName !== null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            return message;
        };
    
        /**
         * Creates a RemoveMessage message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link RemoveMessage.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {RemoveMessage} RemoveMessage
         */
        RemoveMessage.from = RemoveMessage.fromObject;
    
        /**
         * Creates a plain object from a RemoveMessage message. Also converts values to other types if specified.
         * @param {RemoveMessage} message RemoveMessage
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.id !== undefined && message.id !== null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.executionerId !== undefined && message.executionerId !== null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName !== undefined && message.executionerDisplayName !== null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            return object;
        };
    
        /**
         * Creates a plain object from this RemoveMessage message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveMessage.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this RemoveMessage to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        RemoveMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RemoveMessage;
    })();
    
    $root.ClearUserMessages = (function() {
    
        /**
         * Constructs a new ClearUserMessages.
         * @exports ClearUserMessages
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function ClearUserMessages(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ClearUserMessages username.
         * @type {string|undefined}
         */
        ClearUserMessages.prototype.username = "";
    
        /**
         * ClearUserMessages executionerId.
         * @type {number|undefined}
         */
        ClearUserMessages.prototype.executionerId = 0;
    
        /**
         * ClearUserMessages executionerDisplayName.
         * @type {string|undefined}
         */
        ClearUserMessages.prototype.executionerDisplayName = "";
    
        /**
         * Creates a new ClearUserMessages instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {ClearUserMessages} ClearUserMessages instance
         */
        ClearUserMessages.create = function create(properties) {
            return new ClearUserMessages(properties);
        };
    
        /**
         * Encodes the specified ClearUserMessages message.
         * @param {ClearUserMessages|Object} message ClearUserMessages message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearUserMessages.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.username !== undefined && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.executionerId !== undefined && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.executionerId);
            if (message.executionerDisplayName !== undefined && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.executionerDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified ClearUserMessages message, length delimited.
         * @param {ClearUserMessages|Object} message ClearUserMessages message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearUserMessages.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ClearUserMessages message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClearUserMessages} ClearUserMessages
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClearUserMessages} ClearUserMessages
         */
        ClearUserMessages.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ClearUserMessages message.
         * @param {ClearUserMessages|Object} message ClearUserMessages message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ClearUserMessages.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username !== undefined)
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.executionerId !== undefined)
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName !== undefined)
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a ClearUserMessages message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {ClearUserMessages} ClearUserMessages
         */
        ClearUserMessages.fromObject = function fromObject(object) {    
            if (object instanceof $root.ClearUserMessages)
                return object;
            var message = new $root.ClearUserMessages();
            if (object.username !== undefined && object.username !== null)
                message.username = String(object.username);
            if (object.executionerId !== undefined && object.executionerId !== null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName !== undefined && object.executionerDisplayName !== null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            return message;
        };
    
        /**
         * Creates a ClearUserMessages message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link ClearUserMessages.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {ClearUserMessages} ClearUserMessages
         */
        ClearUserMessages.from = ClearUserMessages.fromObject;
    
        /**
         * Creates a plain object from a ClearUserMessages message. Also converts values to other types if specified.
         * @param {ClearUserMessages} message ClearUserMessages
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.username !== undefined && message.username !== null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.executionerId !== undefined && message.executionerId !== null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName !== undefined && message.executionerDisplayName !== null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            return object;
        };
    
        /**
         * Creates a plain object from this ClearUserMessages message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClearUserMessages.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this ClearUserMessages to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ClearUserMessages.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ClearUserMessages;
    })();
    
    $root.ClearHistory = (function() {
    
        /**
         * Constructs a new ClearHistory.
         * @exports ClearHistory
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function ClearHistory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ClearHistory executionerId.
         * @type {number|undefined}
         */
        ClearHistory.prototype.executionerId = 0;
    
        /**
         * ClearHistory executionerDisplayName.
         * @type {string|undefined}
         */
        ClearHistory.prototype.executionerDisplayName = "";
    
        /**
         * Creates a new ClearHistory instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {ClearHistory} ClearHistory instance
         */
        ClearHistory.create = function create(properties) {
            return new ClearHistory(properties);
        };
    
        /**
         * Encodes the specified ClearHistory message.
         * @param {ClearHistory|Object} message ClearHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearHistory.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.executionerId !== undefined && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.executionerId);
            if (message.executionerDisplayName !== undefined && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.executionerDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified ClearHistory message, length delimited.
         * @param {ClearHistory|Object} message ClearHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearHistory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ClearHistory message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClearHistory} ClearHistory
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClearHistory} ClearHistory
         */
        ClearHistory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ClearHistory message.
         * @param {ClearHistory|Object} message ClearHistory message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ClearHistory.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.executionerId !== undefined)
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName !== undefined)
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a ClearHistory message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {ClearHistory} ClearHistory
         */
        ClearHistory.fromObject = function fromObject(object) {    
            if (object instanceof $root.ClearHistory)
                return object;
            var message = new $root.ClearHistory();
            if (object.executionerId !== undefined && object.executionerId !== null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName !== undefined && object.executionerDisplayName !== null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            return message;
        };
    
        /**
         * Creates a ClearHistory message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link ClearHistory.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {ClearHistory} ClearHistory
         */
        ClearHistory.from = ClearHistory.fromObject;
    
        /**
         * Creates a plain object from a ClearHistory message. Also converts values to other types if specified.
         * @param {ClearHistory} message ClearHistory
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.executionerId !== undefined && message.executionerId !== null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName !== undefined && message.executionerDisplayName !== null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            return object;
        };
    
        /**
         * Creates a plain object from this ClearHistory message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClearHistory.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this ClearHistory to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ClearHistory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ClearHistory;
    })();
    
    $root.Kick = (function() {
    
        /**
         * Constructs a new Kick.
         * @exports Kick
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Kick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Kick userId.
         * @type {number|undefined}
         */
        Kick.prototype.userId = 0;
    
        /**
         * Kick displayName.
         * @type {string|undefined}
         */
        Kick.prototype.displayName = "";
    
        /**
         * Kick executionerId.
         * @type {number|undefined}
         */
        Kick.prototype.executionerId = 0;
    
        /**
         * Kick executionerDisplayName.
         * @type {string|undefined}
         */
        Kick.prototype.executionerDisplayName = "";
    
        /**
         * Creates a new Kick instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {Kick} Kick instance
         */
        Kick.create = function create(properties) {
            return new Kick(properties);
        };
    
        /**
         * Encodes the specified Kick message.
         * @param {Kick|Object} message Kick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Kick.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.userId !== undefined && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.displayName !== undefined && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
            if (message.executionerId !== undefined && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.executionerId);
            if (message.executionerDisplayName !== undefined && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.executionerDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified Kick message, length delimited.
         * @param {Kick|Object} message Kick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Kick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Kick message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Kick} Kick
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Kick} Kick
         */
        Kick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Kick message.
         * @param {Kick|Object} message Kick message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Kick.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId !== undefined)
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName !== undefined)
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.executionerId !== undefined)
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName !== undefined)
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a Kick message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {Kick} Kick
         */
        Kick.fromObject = function fromObject(object) {    
            if (object instanceof $root.Kick)
                return object;
            var message = new $root.Kick();
            if (object.userId !== undefined && object.userId !== null)
                message.userId = object.userId >>> 0;
            if (object.displayName !== undefined && object.displayName !== null)
                message.displayName = String(object.displayName);
            if (object.executionerId !== undefined && object.executionerId !== null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName !== undefined && object.executionerDisplayName !== null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            return message;
        };
    
        /**
         * Creates a Kick message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link Kick.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {Kick} Kick
         */
        Kick.from = Kick.fromObject;
    
        /**
         * Creates a plain object from a Kick message. Also converts values to other types if specified.
         * @param {Kick} message Kick
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.userId !== undefined && message.userId !== null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName !== undefined && message.displayName !== null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.executionerId !== undefined && message.executionerId !== null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName !== undefined && message.executionerDisplayName !== null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            return object;
        };
    
        /**
         * Creates a plain object from this Kick message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Kick.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this Kick to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Kick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Kick;
    })();
    
    $root.Ban = (function() {
    
        /**
         * Constructs a new Ban.
         * @exports Ban
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Ban(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Ban userId.
         * @type {number|undefined}
         */
        Ban.prototype.userId = 0;
    
        /**
         * Ban displayName.
         * @type {string|undefined}
         */
        Ban.prototype.displayName = "";
    
        /**
         * Ban executionerId.
         * @type {number|undefined}
         */
        Ban.prototype.executionerId = 0;
    
        /**
         * Ban executionerDisplayName.
         * @type {string|undefined}
         */
        Ban.prototype.executionerDisplayName = "";
    
        /**
         * Ban isShadowBan.
         * @type {boolean|undefined}
         */
        Ban.prototype.isShadowBan = false;
    
        /**
         * Creates a new Ban instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {Ban} Ban instance
         */
        Ban.create = function create(properties) {
            return new Ban(properties);
        };
    
        /**
         * Encodes the specified Ban message.
         * @param {Ban|Object} message Ban message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ban.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.userId !== undefined && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.displayName !== undefined && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
            if (message.executionerId !== undefined && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.executionerId);
            if (message.executionerDisplayName !== undefined && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.executionerDisplayName);
            if (message.isShadowBan !== undefined && message.hasOwnProperty("isShadowBan"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isShadowBan);
            return writer;
        };
    
        /**
         * Encodes the specified Ban message, length delimited.
         * @param {Ban|Object} message Ban message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ban.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Ban message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Ban} Ban
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Ban} Ban
         */
        Ban.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Ban message.
         * @param {Ban|Object} message Ban message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Ban.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId !== undefined)
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName !== undefined)
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.executionerId !== undefined)
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName !== undefined)
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            if (message.isShadowBan !== undefined)
                if (typeof message.isShadowBan !== "boolean")
                    return "isShadowBan: boolean expected";
            return null;
        };
    
        /**
         * Creates a Ban message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {Ban} Ban
         */
        Ban.fromObject = function fromObject(object) {    
            if (object instanceof $root.Ban)
                return object;
            var message = new $root.Ban();
            if (object.userId !== undefined && object.userId !== null)
                message.userId = object.userId >>> 0;
            if (object.displayName !== undefined && object.displayName !== null)
                message.displayName = String(object.displayName);
            if (object.executionerId !== undefined && object.executionerId !== null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName !== undefined && object.executionerDisplayName !== null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            if (object.isShadowBan !== undefined && object.isShadowBan !== null)
                message.isShadowBan = Boolean(object.isShadowBan);
            return message;
        };
    
        /**
         * Creates a Ban message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link Ban.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {Ban} Ban
         */
        Ban.from = Ban.fromObject;
    
        /**
         * Creates a plain object from a Ban message. Also converts values to other types if specified.
         * @param {Ban} message Ban
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.userId !== undefined && message.userId !== null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName !== undefined && message.displayName !== null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.executionerId !== undefined && message.executionerId !== null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName !== undefined && message.executionerDisplayName !== null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            if (message.isShadowBan !== undefined && message.isShadowBan !== null && message.hasOwnProperty("isShadowBan"))
                object.isShadowBan = message.isShadowBan;
            return object;
        };
    
        /**
         * Creates a plain object from this Ban message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ban.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this Ban to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Ban.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Ban;
    })();
    
    $root.UnBan = (function() {
    
        /**
         * Constructs a new UnBan.
         * @exports UnBan
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function UnBan(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UnBan userId.
         * @type {number|undefined}
         */
        UnBan.prototype.userId = 0;
    
        /**
         * UnBan displayName.
         * @type {string|undefined}
         */
        UnBan.prototype.displayName = "";
    
        /**
         * UnBan executionerId.
         * @type {number|undefined}
         */
        UnBan.prototype.executionerId = 0;
    
        /**
         * UnBan executionerDisplayName.
         * @type {string|undefined}
         */
        UnBan.prototype.executionerDisplayName = "";
    
        /**
         * Creates a new UnBan instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {UnBan} UnBan instance
         */
        UnBan.create = function create(properties) {
            return new UnBan(properties);
        };
    
        /**
         * Encodes the specified UnBan message.
         * @param {UnBan|Object} message UnBan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnBan.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.userId !== undefined && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.displayName !== undefined && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
            if (message.executionerId !== undefined && message.hasOwnProperty("executionerId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.executionerId);
            if (message.executionerDisplayName !== undefined && message.hasOwnProperty("executionerDisplayName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.executionerDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified UnBan message, length delimited.
         * @param {UnBan|Object} message UnBan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnBan.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an UnBan message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UnBan} UnBan
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UnBan} UnBan
         */
        UnBan.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an UnBan message.
         * @param {UnBan|Object} message UnBan message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        UnBan.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId !== undefined)
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName !== undefined)
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.executionerId !== undefined)
                if (!$util.isInteger(message.executionerId))
                    return "executionerId: integer expected";
            if (message.executionerDisplayName !== undefined)
                if (!$util.isString(message.executionerDisplayName))
                    return "executionerDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates an UnBan message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {UnBan} UnBan
         */
        UnBan.fromObject = function fromObject(object) {    
            if (object instanceof $root.UnBan)
                return object;
            var message = new $root.UnBan();
            if (object.userId !== undefined && object.userId !== null)
                message.userId = object.userId >>> 0;
            if (object.displayName !== undefined && object.displayName !== null)
                message.displayName = String(object.displayName);
            if (object.executionerId !== undefined && object.executionerId !== null)
                message.executionerId = object.executionerId >>> 0;
            if (object.executionerDisplayName !== undefined && object.executionerDisplayName !== null)
                message.executionerDisplayName = String(object.executionerDisplayName);
            return message;
        };
    
        /**
         * Creates an UnBan message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link UnBan.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {UnBan} UnBan
         */
        UnBan.from = UnBan.fromObject;
    
        /**
         * Creates a plain object from an UnBan message. Also converts values to other types if specified.
         * @param {UnBan} message UnBan
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.userId !== undefined && message.userId !== null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName !== undefined && message.displayName !== null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.executionerId !== undefined && message.executionerId !== null && message.hasOwnProperty("executionerId"))
                object.executionerId = message.executionerId;
            if (message.executionerDisplayName !== undefined && message.executionerDisplayName !== null && message.hasOwnProperty("executionerDisplayName"))
                object.executionerDisplayName = message.executionerDisplayName;
            return object;
        };
    
        /**
         * Creates a plain object from this UnBan message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnBan.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this UnBan to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        UnBan.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return UnBan;
    })();
    
    $root.Mod = (function() {
    
        /**
         * Constructs a new Mod.
         * @exports Mod
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Mod(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Mod userId.
         * @type {number|undefined}
         */
        Mod.prototype.userId = 0;
    
        /**
         * Mod displayName.
         * @type {string|undefined}
         */
        Mod.prototype.displayName = "";
    
        /**
         * Mod isNowMod.
         * @type {boolean|undefined}
         */
        Mod.prototype.isNowMod = false;
    
        /**
         * Creates a new Mod instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {Mod} Mod instance
         */
        Mod.create = function create(properties) {
            return new Mod(properties);
        };
    
        /**
         * Encodes the specified Mod message.
         * @param {Mod|Object} message Mod message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mod.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.userId !== undefined && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.displayName !== undefined && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
            if (message.isNowMod !== undefined && message.hasOwnProperty("isNowMod"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isNowMod);
            return writer;
        };
    
        /**
         * Encodes the specified Mod message, length delimited.
         * @param {Mod|Object} message Mod message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mod.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Mod message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Mod} Mod
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Mod} Mod
         */
        Mod.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Mod message.
         * @param {Mod|Object} message Mod message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Mod.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId !== undefined)
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName !== undefined)
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.isNowMod !== undefined)
                if (typeof message.isNowMod !== "boolean")
                    return "isNowMod: boolean expected";
            return null;
        };
    
        /**
         * Creates a Mod message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {Mod} Mod
         */
        Mod.fromObject = function fromObject(object) {    
            if (object instanceof $root.Mod)
                return object;
            var message = new $root.Mod();
            if (object.userId !== undefined && object.userId !== null)
                message.userId = object.userId >>> 0;
            if (object.displayName !== undefined && object.displayName !== null)
                message.displayName = String(object.displayName);
            if (object.isNowMod !== undefined && object.isNowMod !== null)
                message.isNowMod = Boolean(object.isNowMod);
            return message;
        };
    
        /**
         * Creates a Mod message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link Mod.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {Mod} Mod
         */
        Mod.from = Mod.fromObject;
    
        /**
         * Creates a plain object from a Mod message. Also converts values to other types if specified.
         * @param {Mod} message Mod
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.userId !== undefined && message.userId !== null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName !== undefined && message.displayName !== null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.isNowMod !== undefined && message.isNowMod !== null && message.hasOwnProperty("isNowMod"))
                object.isNowMod = message.isNowMod;
            return object;
        };
    
        /**
         * Creates a plain object from this Mod message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Mod.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this Mod to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Mod.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Mod;
    })();
    
    $root.ModList = (function() {
    
        /**
         * Constructs a new ModList.
         * @exports ModList
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function ModList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ModList moderators.
         * @type {Array.<ModList.Moderator>|undefined}
         */
        ModList.prototype.moderators = $util.emptyArray;
    
        // Lazily resolved type references
        var $types = {
            0: "ModList.Moderator"
        }; $lazyTypes.push($types);
    
        /**
         * Creates a new ModList instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {ModList} ModList instance
         */
        ModList.create = function create(properties) {
            return new ModList(properties);
        };
    
        /**
         * Encodes the specified ModList message.
         * @param {ModList|Object} message ModList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModList.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.moderators !== undefined && message.hasOwnProperty("moderators"))
                for (var i = 0; i < message.moderators.length; ++i)
                    $types[0].encode(message.moderators[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified ModList message, length delimited.
         * @param {ModList|Object} message ModList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ModList message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ModList} ModList
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
                    message.moderators.push($types[0].decode(reader, reader.uint32()));
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ModList} ModList
         */
        ModList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ModList message.
         * @param {ModList|Object} message ModList message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ModList.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.moderators !== undefined) {
                if (!Array.isArray(message.moderators))
                    return "moderators: array expected";
                for (var i = 0; i < message.moderators.length; ++i) {
                    var error = $types[0].verify(message.moderators[i]);
                    if (error)
                        return "moderators." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a ModList message from a plain object. Also converts values to their respective internal types.
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
                    message.moderators[i] = $types[0].fromObject(object.moderators[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a ModList message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link ModList.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {ModList} ModList
         */
        ModList.from = ModList.fromObject;
    
        /**
         * Creates a plain object from a ModList message. Also converts values to other types if specified.
         * @param {ModList} message ModList
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModList.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.moderators = [];
            if (message.moderators !== undefined && message.moderators !== null && message.hasOwnProperty("moderators")) {
                object.moderators = [];
                for (var j = 0; j < message.moderators.length; ++j)
                    object.moderators[j] = $types[0].toObject(message.moderators[j], options);
            }
            return object;
        };
    
        /**
         * Creates a plain object from this ModList message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModList.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this ModList to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ModList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        ModList.Moderator = (function() {
    
            /**
             * Constructs a new Moderator.
             * @exports ModList.Moderator
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function Moderator(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Moderator userId.
             * @type {number|undefined}
             */
            Moderator.prototype.userId = 0;
    
            /**
             * Moderator displayName.
             * @type {string|undefined}
             */
            Moderator.prototype.displayName = "";
    
            /**
             * Creates a new Moderator instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {ModList.Moderator} Moderator instance
             */
            Moderator.create = function create(properties) {
                return new Moderator(properties);
            };
    
            /**
             * Encodes the specified Moderator message.
             * @param {ModList.Moderator|Object} message Moderator message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Moderator.encode = function encode(message, writer) {    
                if (!writer)
                    writer = $Writer.create();
                if (message.userId !== undefined && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
                if (message.displayName !== undefined && message.hasOwnProperty("displayName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
                return writer;
            };
    
            /**
             * Encodes the specified Moderator message, length delimited.
             * @param {ModList.Moderator|Object} message Moderator message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Moderator.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Moderator message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ModList.Moderator} Moderator
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
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ModList.Moderator} Moderator
             */
            Moderator.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Moderator message.
             * @param {ModList.Moderator|Object} message Moderator message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            Moderator.verify = function verify(message) {    
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId !== undefined)
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.displayName !== undefined)
                    if (!$util.isString(message.displayName))
                        return "displayName: string expected";
                return null;
            };
    
            /**
             * Creates a Moderator message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {ModList.Moderator} Moderator
             */
            Moderator.fromObject = function fromObject(object) {    
                if (object instanceof $root.ModList.Moderator)
                    return object;
                var message = new $root.ModList.Moderator();
                if (object.userId !== undefined && object.userId !== null)
                    message.userId = object.userId >>> 0;
                if (object.displayName !== undefined && object.displayName !== null)
                    message.displayName = String(object.displayName);
                return message;
            };
    
            /**
             * Creates a Moderator message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link ModList.Moderator.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {ModList.Moderator} Moderator
             */
            Moderator.from = Moderator.fromObject;
    
            /**
             * Creates a plain object from a Moderator message. Also converts values to other types if specified.
             * @param {ModList.Moderator} message Moderator
             * @param {$protobuf.ConversionOptions} [options] Conversion options
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
                if (message.userId !== undefined && message.userId !== null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.displayName !== undefined && message.displayName !== null && message.hasOwnProperty("displayName"))
                    object.displayName = message.displayName;
                return object;
            };
    
            /**
             * Creates a plain object from this Moderator message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Moderator.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };
    
            /**
             * Converts this Moderator to JSON.
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
         * Constructs a new RaffleInit.
         * @exports RaffleInit
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function RaffleInit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RaffleInit names.
         * @type {Array.<string>|undefined}
         */
        RaffleInit.prototype.names = $util.emptyArray;
    
        /**
         * Creates a new RaffleInit instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {RaffleInit} RaffleInit instance
         */
        RaffleInit.create = function create(properties) {
            return new RaffleInit(properties);
        };
    
        /**
         * Encodes the specified RaffleInit message.
         * @param {RaffleInit|Object} message RaffleInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaffleInit.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.names !== undefined && message.hasOwnProperty("names"))
                for (var i = 0; i < message.names.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.names[i]);
            return writer;
        };
    
        /**
         * Encodes the specified RaffleInit message, length delimited.
         * @param {RaffleInit|Object} message RaffleInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaffleInit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RaffleInit message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RaffleInit} RaffleInit
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RaffleInit} RaffleInit
         */
        RaffleInit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RaffleInit message.
         * @param {RaffleInit|Object} message RaffleInit message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        RaffleInit.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.names !== undefined) {
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
         * Creates a RaffleInit message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link RaffleInit.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {RaffleInit} RaffleInit
         */
        RaffleInit.from = RaffleInit.fromObject;
    
        /**
         * Creates a plain object from a RaffleInit message. Also converts values to other types if specified.
         * @param {RaffleInit} message RaffleInit
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RaffleInit.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.names = [];
            if (message.names !== undefined && message.names !== null && message.hasOwnProperty("names")) {
                object.names = [];
                for (var j = 0; j < message.names.length; ++j)
                    object.names[j] = message.names[j];
            }
            return object;
        };
    
        /**
         * Creates a plain object from this RaffleInit message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RaffleInit.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this RaffleInit to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        RaffleInit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RaffleInit;
    })();
    
    $root.RaffleRun = (function() {
    
        /**
         * Constructs a new RaffleRun.
         * @exports RaffleRun
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function RaffleRun(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RaffleRun winner.
         * @type {string|undefined}
         */
        RaffleRun.prototype.winner = "";
    
        /**
         * RaffleRun names.
         * @type {Array.<string>|undefined}
         */
        RaffleRun.prototype.names = $util.emptyArray;
    
        /**
         * RaffleRun hostId.
         * @type {number|undefined}
         */
        RaffleRun.prototype.hostId = 0;
    
        /**
         * RaffleRun hostDisplayName.
         * @type {string|undefined}
         */
        RaffleRun.prototype.hostDisplayName = "";
    
        /**
         * Creates a new RaffleRun instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {RaffleRun} RaffleRun instance
         */
        RaffleRun.create = function create(properties) {
            return new RaffleRun(properties);
        };
    
        /**
         * Encodes the specified RaffleRun message.
         * @param {RaffleRun|Object} message RaffleRun message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaffleRun.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.winner !== undefined && message.hasOwnProperty("winner"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.winner);
            if (message.names !== undefined && message.hasOwnProperty("names"))
                for (var i = 0; i < message.names.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.names[i]);
            if (message.hostId !== undefined && message.hasOwnProperty("hostId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.hostId);
            if (message.hostDisplayName !== undefined && message.hasOwnProperty("hostDisplayName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.hostDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified RaffleRun message, length delimited.
         * @param {RaffleRun|Object} message RaffleRun message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaffleRun.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RaffleRun message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RaffleRun} RaffleRun
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RaffleRun} RaffleRun
         */
        RaffleRun.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RaffleRun message.
         * @param {RaffleRun|Object} message RaffleRun message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        RaffleRun.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.winner !== undefined)
                if (!$util.isString(message.winner))
                    return "winner: string expected";
            if (message.names !== undefined) {
                if (!Array.isArray(message.names))
                    return "names: array expected";
                for (var i = 0; i < message.names.length; ++i)
                    if (!$util.isString(message.names[i]))
                        return "names: string[] expected";
            }
            if (message.hostId !== undefined)
                if (!$util.isInteger(message.hostId))
                    return "hostId: integer expected";
            if (message.hostDisplayName !== undefined)
                if (!$util.isString(message.hostDisplayName))
                    return "hostDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a RaffleRun message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {RaffleRun} RaffleRun
         */
        RaffleRun.fromObject = function fromObject(object) {    
            if (object instanceof $root.RaffleRun)
                return object;
            var message = new $root.RaffleRun();
            if (object.winner !== undefined && object.winner !== null)
                message.winner = String(object.winner);
            if (object.names) {
                if (!Array.isArray(object.names))
                    throw TypeError(".RaffleRun.names: array expected");
                message.names = [];
                for (var i = 0; i < object.names.length; ++i)
                    message.names[i] = String(object.names[i]);
            }
            if (object.hostId !== undefined && object.hostId !== null)
                message.hostId = object.hostId >>> 0;
            if (object.hostDisplayName !== undefined && object.hostDisplayName !== null)
                message.hostDisplayName = String(object.hostDisplayName);
            return message;
        };
    
        /**
         * Creates a RaffleRun message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link RaffleRun.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {RaffleRun} RaffleRun
         */
        RaffleRun.from = RaffleRun.fromObject;
    
        /**
         * Creates a plain object from a RaffleRun message. Also converts values to other types if specified.
         * @param {RaffleRun} message RaffleRun
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.winner !== undefined && message.winner !== null && message.hasOwnProperty("winner"))
                object.winner = message.winner;
            if (message.names !== undefined && message.names !== null && message.hasOwnProperty("names")) {
                object.names = [];
                for (var j = 0; j < message.names.length; ++j)
                    object.names[j] = message.names[j];
            }
            if (message.hostId !== undefined && message.hostId !== null && message.hasOwnProperty("hostId"))
                object.hostId = message.hostId;
            if (message.hostDisplayName !== undefined && message.hostDisplayName !== null && message.hasOwnProperty("hostDisplayName"))
                object.hostDisplayName = message.hostDisplayName;
            return object;
        };
    
        /**
         * Creates a plain object from this RaffleRun message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RaffleRun.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this RaffleRun to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        RaffleRun.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RaffleRun;
    })();
    
    $root.PollInit = (function() {
    
        /**
         * Constructs a new PollInit.
         * @exports PollInit
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function PollInit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PollInit question.
         * @type {string|undefined}
         */
        PollInit.prototype.question = "";
    
        /**
         * PollInit options.
         * @type {Array.<string>|undefined}
         */
        PollInit.prototype.options = $util.emptyArray;
    
        /**
         * PollInit hostId.
         * @type {number|undefined}
         */
        PollInit.prototype.hostId = 0;
    
        /**
         * PollInit hostDisplayName.
         * @type {string|undefined}
         */
        PollInit.prototype.hostDisplayName = "";
    
        /**
         * Creates a new PollInit instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {PollInit} PollInit instance
         */
        PollInit.create = function create(properties) {
            return new PollInit(properties);
        };
    
        /**
         * Encodes the specified PollInit message.
         * @param {PollInit|Object} message PollInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollInit.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.question !== undefined && message.hasOwnProperty("question"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.question);
            if (message.options !== undefined && message.hasOwnProperty("options"))
                for (var i = 0; i < message.options.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.options[i]);
            if (message.hostId !== undefined && message.hasOwnProperty("hostId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.hostId);
            if (message.hostDisplayName !== undefined && message.hasOwnProperty("hostDisplayName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.hostDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified PollInit message, length delimited.
         * @param {PollInit|Object} message PollInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollInit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollInit message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollInit} PollInit
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollInit} PollInit
         */
        PollInit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollInit message.
         * @param {PollInit|Object} message PollInit message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        PollInit.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.question !== undefined)
                if (!$util.isString(message.question))
                    return "question: string expected";
            if (message.options !== undefined) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (var i = 0; i < message.options.length; ++i)
                    if (!$util.isString(message.options[i]))
                        return "options: string[] expected";
            }
            if (message.hostId !== undefined)
                if (!$util.isInteger(message.hostId))
                    return "hostId: integer expected";
            if (message.hostDisplayName !== undefined)
                if (!$util.isString(message.hostDisplayName))
                    return "hostDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a PollInit message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {PollInit} PollInit
         */
        PollInit.fromObject = function fromObject(object) {    
            if (object instanceof $root.PollInit)
                return object;
            var message = new $root.PollInit();
            if (object.question !== undefined && object.question !== null)
                message.question = String(object.question);
            if (object.options) {
                if (!Array.isArray(object.options))
                    throw TypeError(".PollInit.options: array expected");
                message.options = [];
                for (var i = 0; i < object.options.length; ++i)
                    message.options[i] = String(object.options[i]);
            }
            if (object.hostId !== undefined && object.hostId !== null)
                message.hostId = object.hostId >>> 0;
            if (object.hostDisplayName !== undefined && object.hostDisplayName !== null)
                message.hostDisplayName = String(object.hostDisplayName);
            return message;
        };
    
        /**
         * Creates a PollInit message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link PollInit.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {PollInit} PollInit
         */
        PollInit.from = PollInit.fromObject;
    
        /**
         * Creates a plain object from a PollInit message. Also converts values to other types if specified.
         * @param {PollInit} message PollInit
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.question !== undefined && message.question !== null && message.hasOwnProperty("question"))
                object.question = message.question;
            if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options")) {
                object.options = [];
                for (var j = 0; j < message.options.length; ++j)
                    object.options[j] = message.options[j];
            }
            if (message.hostId !== undefined && message.hostId !== null && message.hasOwnProperty("hostId"))
                object.hostId = message.hostId;
            if (message.hostDisplayName !== undefined && message.hostDisplayName !== null && message.hasOwnProperty("hostDisplayName"))
                object.hostDisplayName = message.hostDisplayName;
            return object;
        };
    
        /**
         * Creates a plain object from this PollInit message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollInit.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this PollInit to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        PollInit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollInit;
    })();
    
    $root.PollUpdate = (function() {
    
        /**
         * Constructs a new PollUpdate.
         * @exports PollUpdate
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function PollUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PollUpdate votes.
         * @type {Array.<number>|undefined}
         */
        PollUpdate.prototype.votes = $util.emptyArray;
    
        /**
         * PollUpdate hostId.
         * @type {number|undefined}
         */
        PollUpdate.prototype.hostId = 0;
    
        /**
         * PollUpdate hostDisplayName.
         * @type {string|undefined}
         */
        PollUpdate.prototype.hostDisplayName = "";
    
        /**
         * Creates a new PollUpdate instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {PollUpdate} PollUpdate instance
         */
        PollUpdate.create = function create(properties) {
            return new PollUpdate(properties);
        };
    
        /**
         * Encodes the specified PollUpdate message.
         * @param {PollUpdate|Object} message PollUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollUpdate.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.votes && message.votes.length && message.hasOwnProperty("votes")) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.votes.length; ++i)
                    writer.int32(message.votes[i]);
                writer.ldelim();
            }
            if (message.hostId !== undefined && message.hasOwnProperty("hostId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.hostId);
            if (message.hostDisplayName !== undefined && message.hasOwnProperty("hostDisplayName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.hostDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified PollUpdate message, length delimited.
         * @param {PollUpdate|Object} message PollUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollUpdate message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollUpdate} PollUpdate
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollUpdate} PollUpdate
         */
        PollUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollUpdate message.
         * @param {PollUpdate|Object} message PollUpdate message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        PollUpdate.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.votes !== undefined) {
                if (!Array.isArray(message.votes))
                    return "votes: array expected";
                for (var i = 0; i < message.votes.length; ++i)
                    if (!$util.isInteger(message.votes[i]))
                        return "votes: integer[] expected";
            }
            if (message.hostId !== undefined)
                if (!$util.isInteger(message.hostId))
                    return "hostId: integer expected";
            if (message.hostDisplayName !== undefined)
                if (!$util.isString(message.hostDisplayName))
                    return "hostDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a PollUpdate message from a plain object. Also converts values to their respective internal types.
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
            if (object.hostId !== undefined && object.hostId !== null)
                message.hostId = object.hostId >>> 0;
            if (object.hostDisplayName !== undefined && object.hostDisplayName !== null)
                message.hostDisplayName = String(object.hostDisplayName);
            return message;
        };
    
        /**
         * Creates a PollUpdate message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link PollUpdate.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {PollUpdate} PollUpdate
         */
        PollUpdate.from = PollUpdate.fromObject;
    
        /**
         * Creates a plain object from a PollUpdate message. Also converts values to other types if specified.
         * @param {PollUpdate} message PollUpdate
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.votes !== undefined && message.votes !== null && message.hasOwnProperty("votes")) {
                object.votes = [];
                for (var j = 0; j < message.votes.length; ++j)
                    object.votes[j] = message.votes[j];
            }
            if (message.hostId !== undefined && message.hostId !== null && message.hasOwnProperty("hostId"))
                object.hostId = message.hostId;
            if (message.hostDisplayName !== undefined && message.hostDisplayName !== null && message.hasOwnProperty("hostDisplayName"))
                object.hostDisplayName = message.hostDisplayName;
            return object;
        };
    
        /**
         * Creates a plain object from this PollUpdate message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollUpdate.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this PollUpdate to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        PollUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollUpdate;
    })();
    
    $root.PollResult = (function() {
    
        /**
         * Constructs a new PollResult.
         * @exports PollResult
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function PollResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PollResult question.
         * @type {string|undefined}
         */
        PollResult.prototype.question = "";
    
        /**
         * PollResult winners.
         * @type {Array.<string>|undefined}
         */
        PollResult.prototype.winners = $util.emptyArray;
    
        /**
         * PollResult votes.
         * @type {number|undefined}
         */
        PollResult.prototype.votes = 0;
    
        /**
         * PollResult hostId.
         * @type {number|undefined}
         */
        PollResult.prototype.hostId = 0;
    
        /**
         * PollResult hostDisplayName.
         * @type {string|undefined}
         */
        PollResult.prototype.hostDisplayName = "";
    
        /**
         * Creates a new PollResult instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {PollResult} PollResult instance
         */
        PollResult.create = function create(properties) {
            return new PollResult(properties);
        };
    
        /**
         * Encodes the specified PollResult message.
         * @param {PollResult|Object} message PollResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollResult.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.question !== undefined && message.hasOwnProperty("question"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.question);
            if (message.winners !== undefined && message.hasOwnProperty("winners"))
                for (var i = 0; i < message.winners.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.winners[i]);
            if (message.votes !== undefined && message.hasOwnProperty("votes"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.votes);
            if (message.hostId !== undefined && message.hasOwnProperty("hostId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.hostId);
            if (message.hostDisplayName !== undefined && message.hasOwnProperty("hostDisplayName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.hostDisplayName);
            return writer;
        };
    
        /**
         * Encodes the specified PollResult message, length delimited.
         * @param {PollResult|Object} message PollResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollResult message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollResult} PollResult
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollResult} PollResult
         */
        PollResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollResult message.
         * @param {PollResult|Object} message PollResult message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        PollResult.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.question !== undefined)
                if (!$util.isString(message.question))
                    return "question: string expected";
            if (message.winners !== undefined) {
                if (!Array.isArray(message.winners))
                    return "winners: array expected";
                for (var i = 0; i < message.winners.length; ++i)
                    if (!$util.isString(message.winners[i]))
                        return "winners: string[] expected";
            }
            if (message.votes !== undefined)
                if (!$util.isInteger(message.votes))
                    return "votes: integer expected";
            if (message.hostId !== undefined)
                if (!$util.isInteger(message.hostId))
                    return "hostId: integer expected";
            if (message.hostDisplayName !== undefined)
                if (!$util.isString(message.hostDisplayName))
                    return "hostDisplayName: string expected";
            return null;
        };
    
        /**
         * Creates a PollResult message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {PollResult} PollResult
         */
        PollResult.fromObject = function fromObject(object) {    
            if (object instanceof $root.PollResult)
                return object;
            var message = new $root.PollResult();
            if (object.question !== undefined && object.question !== null)
                message.question = String(object.question);
            if (object.winners) {
                if (!Array.isArray(object.winners))
                    throw TypeError(".PollResult.winners: array expected");
                message.winners = [];
                for (var i = 0; i < object.winners.length; ++i)
                    message.winners[i] = String(object.winners[i]);
            }
            if (object.votes !== undefined && object.votes !== null)
                message.votes = object.votes | 0;
            if (object.hostId !== undefined && object.hostId !== null)
                message.hostId = object.hostId >>> 0;
            if (object.hostDisplayName !== undefined && object.hostDisplayName !== null)
                message.hostDisplayName = String(object.hostDisplayName);
            return message;
        };
    
        /**
         * Creates a PollResult message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link PollResult.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {PollResult} PollResult
         */
        PollResult.from = PollResult.fromObject;
    
        /**
         * Creates a plain object from a PollResult message. Also converts values to other types if specified.
         * @param {PollResult} message PollResult
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.question !== undefined && message.question !== null && message.hasOwnProperty("question"))
                object.question = message.question;
            if (message.winners !== undefined && message.winners !== null && message.hasOwnProperty("winners")) {
                object.winners = [];
                for (var j = 0; j < message.winners.length; ++j)
                    object.winners[j] = message.winners[j];
            }
            if (message.votes !== undefined && message.votes !== null && message.hasOwnProperty("votes"))
                object.votes = message.votes;
            if (message.hostId !== undefined && message.hostId !== null && message.hasOwnProperty("hostId"))
                object.hostId = message.hostId;
            if (message.hostDisplayName !== undefined && message.hostDisplayName !== null && message.hasOwnProperty("hostDisplayName"))
                object.hostDisplayName = message.hostDisplayName;
            return object;
        };
    
        /**
         * Creates a plain object from this PollResult message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollResult.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this PollResult to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        PollResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollResult;
    })();
    
    $root.PollVote = (function() {
    
        /**
         * Constructs a new PollVote.
         * @exports PollVote
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function PollVote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PollVote option.
         * @type {number|undefined}
         */
        PollVote.prototype.option = 0;
    
        /**
         * Creates a new PollVote instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {PollVote} PollVote instance
         */
        PollVote.create = function create(properties) {
            return new PollVote(properties);
        };
    
        /**
         * Encodes the specified PollVote message.
         * @param {PollVote|Object} message PollVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollVote.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.option !== undefined && message.hasOwnProperty("option"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.option);
            return writer;
        };
    
        /**
         * Encodes the specified PollVote message, length delimited.
         * @param {PollVote|Object} message PollVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollVote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollVote message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollVote} PollVote
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollVote} PollVote
         */
        PollVote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollVote message.
         * @param {PollVote|Object} message PollVote message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        PollVote.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.option !== undefined)
                if (!$util.isInteger(message.option))
                    return "option: integer expected";
            return null;
        };
    
        /**
         * Creates a PollVote message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {PollVote} PollVote
         */
        PollVote.fromObject = function fromObject(object) {    
            if (object instanceof $root.PollVote)
                return object;
            var message = new $root.PollVote();
            if (object.option !== undefined && object.option !== null)
                message.option = object.option >>> 0;
            return message;
        };
    
        /**
         * Creates a PollVote message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link PollVote.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {PollVote} PollVote
         */
        PollVote.from = PollVote.fromObject;
    
        /**
         * Creates a plain object from a PollVote message. Also converts values to other types if specified.
         * @param {PollVote} message PollVote
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollVote.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.option = 0;
            if (message.option !== undefined && message.option !== null && message.hasOwnProperty("option"))
                object.option = message.option;
            return object;
        };
    
        /**
         * Creates a plain object from this PollVote message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollVote.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this PollVote to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        PollVote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollVote;
    })();
    
    $root.PollVoteResponse = (function() {
    
        /**
         * Constructs a new PollVoteResponse.
         * @exports PollVoteResponse
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function PollVoteResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PollVoteResponse success.
         * @type {boolean|undefined}
         */
        PollVoteResponse.prototype.success = false;
    
        /**
         * Creates a new PollVoteResponse instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {PollVoteResponse} PollVoteResponse instance
         */
        PollVoteResponse.create = function create(properties) {
            return new PollVoteResponse(properties);
        };
    
        /**
         * Encodes the specified PollVoteResponse message.
         * @param {PollVoteResponse|Object} message PollVoteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollVoteResponse.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.success !== undefined && message.hasOwnProperty("success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };
    
        /**
         * Encodes the specified PollVoteResponse message, length delimited.
         * @param {PollVoteResponse|Object} message PollVoteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollVoteResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollVoteResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollVoteResponse} PollVoteResponse
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollVoteResponse} PollVoteResponse
         */
        PollVoteResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollVoteResponse message.
         * @param {PollVoteResponse|Object} message PollVoteResponse message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        PollVoteResponse.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success !== undefined)
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };
    
        /**
         * Creates a PollVoteResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {PollVoteResponse} PollVoteResponse
         */
        PollVoteResponse.fromObject = function fromObject(object) {    
            if (object instanceof $root.PollVoteResponse)
                return object;
            var message = new $root.PollVoteResponse();
            if (object.success !== undefined && object.success !== null)
                message.success = Boolean(object.success);
            return message;
        };
    
        /**
         * Creates a PollVoteResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link PollVoteResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {PollVoteResponse} PollVoteResponse
         */
        PollVoteResponse.from = PollVoteResponse.fromObject;
    
        /**
         * Creates a plain object from a PollVoteResponse message. Also converts values to other types if specified.
         * @param {PollVoteResponse} message PollVoteResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollVoteResponse.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.success = false;
            if (message.success !== undefined && message.success !== null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };
    
        /**
         * Creates a plain object from this PollVoteResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollVoteResponse.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this PollVoteResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        PollVoteResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollVoteResponse;
    })();
    
    $root.SetName = (function() {
    
        /**
         * Constructs a new SetName.
         * @exports SetName
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function SetName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SetName name.
         * @type {string|undefined}
         */
        SetName.prototype.name = "";
    
        /**
         * Creates a new SetName instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {SetName} SetName instance
         */
        SetName.create = function create(properties) {
            return new SetName(properties);
        };
    
        /**
         * Encodes the specified SetName message.
         * @param {SetName|Object} message SetName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetName.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.name !== undefined && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };
    
        /**
         * Encodes the specified SetName message, length delimited.
         * @param {SetName|Object} message SetName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SetName message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SetName} SetName
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SetName} SetName
         */
        SetName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SetName message.
         * @param {SetName|Object} message SetName message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        SetName.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name !== undefined)
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };
    
        /**
         * Creates a SetName message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {SetName} SetName
         */
        SetName.fromObject = function fromObject(object) {    
            if (object instanceof $root.SetName)
                return object;
            var message = new $root.SetName();
            if (object.name !== undefined && object.name !== null)
                message.name = String(object.name);
            return message;
        };
    
        /**
         * Creates a SetName message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link SetName.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {SetName} SetName
         */
        SetName.from = SetName.fromObject;
    
        /**
         * Creates a plain object from a SetName message. Also converts values to other types if specified.
         * @param {SetName} message SetName
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetName.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };
    
        /**
         * Creates a plain object from this SetName message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetName.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this SetName to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        SetName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SetName;
    })();
    
    $root.NameConfirmation = (function() {
    
        /**
         * Constructs a new NameConfirmation.
         * @exports NameConfirmation
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function NameConfirmation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NameConfirmation response.
         * @type {string|undefined}
         */
        NameConfirmation.prototype.response = "";
    
        /**
         * Creates a new NameConfirmation instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {NameConfirmation} NameConfirmation instance
         */
        NameConfirmation.create = function create(properties) {
            return new NameConfirmation(properties);
        };
    
        /**
         * Encodes the specified NameConfirmation message.
         * @param {NameConfirmation|Object} message NameConfirmation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NameConfirmation.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.response !== undefined && message.hasOwnProperty("response"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.response);
            return writer;
        };
    
        /**
         * Encodes the specified NameConfirmation message, length delimited.
         * @param {NameConfirmation|Object} message NameConfirmation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NameConfirmation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NameConfirmation message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NameConfirmation} NameConfirmation
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NameConfirmation} NameConfirmation
         */
        NameConfirmation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NameConfirmation message.
         * @param {NameConfirmation|Object} message NameConfirmation message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        NameConfirmation.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.response !== undefined)
                if (!$util.isString(message.response))
                    return "response: string expected";
            return null;
        };
    
        /**
         * Creates a NameConfirmation message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {NameConfirmation} NameConfirmation
         */
        NameConfirmation.fromObject = function fromObject(object) {    
            if (object instanceof $root.NameConfirmation)
                return object;
            var message = new $root.NameConfirmation();
            if (object.response !== undefined && object.response !== null)
                message.response = String(object.response);
            return message;
        };
    
        /**
         * Creates a NameConfirmation message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link NameConfirmation.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {NameConfirmation} NameConfirmation
         */
        NameConfirmation.from = NameConfirmation.fromObject;
    
        /**
         * Creates a plain object from a NameConfirmation message. Also converts values to other types if specified.
         * @param {NameConfirmation} message NameConfirmation
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NameConfirmation.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.response = "";
            if (message.response !== undefined && message.response !== null && message.hasOwnProperty("response"))
                object.response = message.response;
            return object;
        };
    
        /**
         * Creates a plain object from this NameConfirmation message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NameConfirmation.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this NameConfirmation to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        NameConfirmation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return NameConfirmation;
    })();
    
    $root.ModTools = (function() {
    
        /**
         * Constructs a new ModTools.
         * @exports ModTools
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function ModTools(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ModTools modToolsType.
         * @type {number|undefined}
         */
        ModTools.prototype.modToolsType = 0;
    
        // Lazily resolved type references
        var $types = {
            0: "ModTools.ModToolsType"
        }; $lazyTypes.push($types);
    
        /**
         * Creates a new ModTools instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {ModTools} ModTools instance
         */
        ModTools.create = function create(properties) {
            return new ModTools(properties);
        };
    
        /**
         * Encodes the specified ModTools message.
         * @param {ModTools|Object} message ModTools message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModTools.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.modToolsType !== undefined && message.hasOwnProperty("modToolsType"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.modToolsType);
            return writer;
        };
    
        /**
         * Encodes the specified ModTools message, length delimited.
         * @param {ModTools|Object} message ModTools message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModTools.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ModTools message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ModTools} ModTools
         */
        ModTools.decode = function decode(reader, length) {    
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModTools();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.modToolsType = reader.uint32();
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ModTools} ModTools
         */
        ModTools.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ModTools message.
         * @param {ModTools|Object} message ModTools message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ModTools.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.modToolsType !== undefined)
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
         * Creates a ModTools message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link ModTools.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {ModTools} ModTools
         */
        ModTools.from = ModTools.fromObject;
    
        /**
         * Creates a plain object from a ModTools message. Also converts values to other types if specified.
         * @param {ModTools} message ModTools
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModTools.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.modToolsType = options.enums === String ? "NONE" : 0;
            if (message.modToolsType !== undefined && message.modToolsType !== null && message.hasOwnProperty("modToolsType"))
                object.modToolsType = options.enums === String ? $types[0][message.modToolsType] : message.modToolsType;
            return object;
        };
    
        /**
         * Creates a plain object from this ModTools message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModTools.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this ModTools to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ModTools.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
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
        ModTools.ModToolsType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values["NONE"] = 0;
            values["MODERATOR"] = 1;
            values["STREAMER"] = 2;
            values["PTV_ADMIN"] = 3;
            return values;
        })();
    
        return ModTools;
    })();
    
    $root.PollEnd = (function() {
    
        /**
         * Constructs a new PollEnd.
         * @exports PollEnd
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function PollEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new PollEnd instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {PollEnd} PollEnd instance
         */
        PollEnd.create = function create(properties) {
            return new PollEnd(properties);
        };
    
        /**
         * Encodes the specified PollEnd message.
         * @param {PollEnd|Object} message PollEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollEnd.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified PollEnd message, length delimited.
         * @param {PollEnd|Object} message PollEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PollEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PollEnd message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PollEnd} PollEnd
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PollEnd} PollEnd
         */
        PollEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PollEnd message.
         * @param {PollEnd|Object} message PollEnd message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        PollEnd.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a PollEnd message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {PollEnd} PollEnd
         */
        PollEnd.fromObject = function fromObject(object) {    
            if (object instanceof $root.PollEnd)
                return object;
            return new $root.PollEnd();
        };
    
        /**
         * Creates a PollEnd message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link PollEnd.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {PollEnd} PollEnd
         */
        PollEnd.from = PollEnd.fromObject;
    
        /**
         * Creates a plain object from a PollEnd message. Also converts values to other types if specified.
         * @param {PollEnd} message PollEnd
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollEnd.toObject = function toObject() {    
            return {};
        };
    
        /**
         * Creates a plain object from this PollEnd message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PollEnd.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this PollEnd to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        PollEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PollEnd;
    })();
    
    $root.Reminder = (function() {
    
        /**
         * Constructs a new Reminder.
         * @exports Reminder
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Reminder(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Reminder message.
         * @type {string|undefined}
         */
        Reminder.prototype.message = "";
    
        /**
         * Creates a new Reminder instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {Reminder} Reminder instance
         */
        Reminder.create = function create(properties) {
            return new Reminder(properties);
        };
    
        /**
         * Encodes the specified Reminder message.
         * @param {Reminder|Object} message Reminder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reminder.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.message !== undefined && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified Reminder message, length delimited.
         * @param {Reminder|Object} message Reminder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reminder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Reminder message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Reminder} Reminder
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Reminder} Reminder
         */
        Reminder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Reminder message.
         * @param {Reminder|Object} message Reminder message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Reminder.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message !== undefined)
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a Reminder message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {Reminder} Reminder
         */
        Reminder.fromObject = function fromObject(object) {    
            if (object instanceof $root.Reminder)
                return object;
            var message = new $root.Reminder();
            if (object.message !== undefined && object.message !== null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a Reminder message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link Reminder.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {Reminder} Reminder
         */
        Reminder.from = Reminder.fromObject;
    
        /**
         * Creates a plain object from a Reminder message. Also converts values to other types if specified.
         * @param {Reminder} message Reminder
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reminder.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message !== undefined && message.message !== null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Creates a plain object from this Reminder message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reminder.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this Reminder to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Reminder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Reminder;
    })();
    
    $root.Timer = (function() {
    
        /**
         * Constructs a new Timer.
         * @exports Timer
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Timer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Timer message.
         * @type {string|undefined}
         */
        Timer.prototype.message = "";
    
        /**
         * Creates a new Timer instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {Timer} Timer instance
         */
        Timer.create = function create(properties) {
            return new Timer(properties);
        };
    
        /**
         * Encodes the specified Timer message.
         * @param {Timer|Object} message Timer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timer.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.message !== undefined && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified Timer message, length delimited.
         * @param {Timer|Object} message Timer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Timer message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Timer} Timer
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Timer} Timer
         */
        Timer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Timer message.
         * @param {Timer|Object} message Timer message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Timer.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message !== undefined)
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a Timer message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {Timer} Timer
         */
        Timer.fromObject = function fromObject(object) {    
            if (object instanceof $root.Timer)
                return object;
            var message = new $root.Timer();
            if (object.message !== undefined && object.message !== null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a Timer message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link Timer.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {Timer} Timer
         */
        Timer.from = Timer.fromObject;
    
        /**
         * Creates a plain object from a Timer message. Also converts values to other types if specified.
         * @param {Timer} message Timer
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Timer.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message !== undefined && message.message !== null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Creates a plain object from this Timer message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Timer.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this Timer to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Timer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Timer;
    })();
    
    $root.MonitorData = (function() {
    
        /**
         * Constructs a new MonitorData.
         * @exports MonitorData
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function MonitorData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * MonitorData messageContent.
         * @type {Uint8Array|undefined}
         */
        MonitorData.prototype.messageContent = $util.newBuffer([]);
    
        /**
         * MonitorData channel.
         * @type {number|undefined}
         */
        MonitorData.prototype.channel = 0;
    
        /**
         * MonitorData channelName.
         * @type {string|undefined}
         */
        MonitorData.prototype.channelName = "";
    
        /**
         * Creates a new MonitorData instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {MonitorData} MonitorData instance
         */
        MonitorData.create = function create(properties) {
            return new MonitorData(properties);
        };
    
        /**
         * Encodes the specified MonitorData message.
         * @param {MonitorData|Object} message MonitorData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonitorData.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.messageContent && message.hasOwnProperty("messageContent"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.messageContent);
            if (message.channel !== undefined && message.hasOwnProperty("channel"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.channel);
            if (message.channelName !== undefined && message.hasOwnProperty("channelName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.channelName);
            return writer;
        };
    
        /**
         * Encodes the specified MonitorData message, length delimited.
         * @param {MonitorData|Object} message MonitorData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonitorData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a MonitorData message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MonitorData} MonitorData
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MonitorData} MonitorData
         */
        MonitorData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a MonitorData message.
         * @param {MonitorData|Object} message MonitorData message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        MonitorData.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageContent !== undefined)
                if (!(message.messageContent && typeof message.messageContent.length === "number" || $util.isString(message.messageContent)))
                    return "messageContent: buffer expected";
            if (message.channel !== undefined)
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.channelName !== undefined)
                if (!$util.isString(message.channelName))
                    return "channelName: string expected";
            return null;
        };
    
        /**
         * Creates a MonitorData message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {MonitorData} MonitorData
         */
        MonitorData.fromObject = function fromObject(object) {    
            if (object instanceof $root.MonitorData)
                return object;
            var message = new $root.MonitorData();
            if (object.messageContent !== undefined && object.messageContent !== null)
                if (typeof object.messageContent === "string")
                    $util.base64.decode(object.messageContent, message.messageContent = $util.newBuffer($util.base64.length(object.messageContent)), 0);
                else if (object.messageContent.length)
                    message.messageContent = object.messageContent;
            if (object.channel !== undefined && object.channel !== null)
                message.channel = object.channel >>> 0;
            if (object.channelName !== undefined && object.channelName !== null)
                message.channelName = String(object.channelName);
            return message;
        };
    
        /**
         * Creates a MonitorData message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link MonitorData.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {MonitorData} MonitorData
         */
        MonitorData.from = MonitorData.fromObject;
    
        /**
         * Creates a plain object from a MonitorData message. Also converts values to other types if specified.
         * @param {MonitorData} message MonitorData
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            if (message.messageContent !== undefined && message.messageContent !== null && message.hasOwnProperty("messageContent"))
                object.messageContent = options.bytes === String ? $util.base64.encode(message.messageContent, 0, message.messageContent.length) : options.bytes === Array ? Array.prototype.slice.call(message.messageContent) : message.messageContent;
            if (message.channel !== undefined && message.channel !== null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.channelName !== undefined && message.channelName !== null && message.hasOwnProperty("channelName"))
                object.channelName = message.channelName;
            return object;
        };
    
        /**
         * Creates a plain object from this MonitorData message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MonitorData.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this MonitorData to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        MonitorData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return MonitorData;
    })();
    
    $root.ChatLevel = (function() {
    
        /**
         * Constructs a new ChatLevel.
         * @exports ChatLevel
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function ChatLevel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ChatLevel chatLevel.
         * @type {number|undefined}
         */
        ChatLevel.prototype.chatLevel = 0;
    
        // Lazily resolved type references
        var $types = {
            0: "ChatLevel.ChatLevelType"
        }; $lazyTypes.push($types);
    
        /**
         * Creates a new ChatLevel instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {ChatLevel} ChatLevel instance
         */
        ChatLevel.create = function create(properties) {
            return new ChatLevel(properties);
        };
    
        /**
         * Encodes the specified ChatLevel message.
         * @param {ChatLevel|Object} message ChatLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatLevel.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.chatLevel !== undefined && message.hasOwnProperty("chatLevel"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.chatLevel);
            return writer;
        };
    
        /**
         * Encodes the specified ChatLevel message, length delimited.
         * @param {ChatLevel|Object} message ChatLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatLevel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ChatLevel message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatLevel} ChatLevel
         */
        ChatLevel.decode = function decode(reader, length) {    
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatLevel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chatLevel = reader.uint32();
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatLevel} ChatLevel
         */
        ChatLevel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ChatLevel message.
         * @param {ChatLevel|Object} message ChatLevel message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ChatLevel.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chatLevel !== undefined)
                switch (message.chatLevel) {
                default:
                    return "chatLevel: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a ChatLevel message from a plain object. Also converts values to their respective internal types.
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
            }
            return message;
        };
    
        /**
         * Creates a ChatLevel message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link ChatLevel.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatLevel} ChatLevel
         */
        ChatLevel.from = ChatLevel.fromObject;
    
        /**
         * Creates a plain object from a ChatLevel message. Also converts values to other types if specified.
         * @param {ChatLevel} message ChatLevel
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatLevel.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.chatLevel = options.enums === String ? "EVERYONE" : 0;
            if (message.chatLevel !== undefined && message.chatLevel !== null && message.hasOwnProperty("chatLevel"))
                object.chatLevel = options.enums === String ? $types[0][message.chatLevel] : message.chatLevel;
            return object;
        };
    
        /**
         * Creates a plain object from this ChatLevel message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatLevel.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this ChatLevel to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ChatLevel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
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
        ChatLevel.ChatLevelType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values["EVERYONE"] = 0;
            values["STREAMER"] = 1;
            values["STREAMER_MODERATOR"] = 2;
            values["STREAMER_MODERATOR_SUBSCRIBER"] = 3;
            values["STREAMER_MODERATOR_FOLLOWER"] = 4;
            values["STREAMER_MODERATOR_SUBSCRIBER_FOLLOWER"] = 5;
            return values;
        })();
    
        return ChatLevel;
    })();
    
    $root.RequestUserlist = (function() {
    
        /**
         * Constructs a new RequestUserlist.
         * @exports RequestUserlist
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function RequestUserlist(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new RequestUserlist instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {RequestUserlist} RequestUserlist instance
         */
        RequestUserlist.create = function create(properties) {
            return new RequestUserlist(properties);
        };
    
        /**
         * Encodes the specified RequestUserlist message.
         * @param {RequestUserlist|Object} message RequestUserlist message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestUserlist.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified RequestUserlist message, length delimited.
         * @param {RequestUserlist|Object} message RequestUserlist message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestUserlist.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RequestUserlist message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RequestUserlist} RequestUserlist
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RequestUserlist} RequestUserlist
         */
        RequestUserlist.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RequestUserlist message.
         * @param {RequestUserlist|Object} message RequestUserlist message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        RequestUserlist.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a RequestUserlist message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {RequestUserlist} RequestUserlist
         */
        RequestUserlist.fromObject = function fromObject(object) {    
            if (object instanceof $root.RequestUserlist)
                return object;
            return new $root.RequestUserlist();
        };
    
        /**
         * Creates a RequestUserlist message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link RequestUserlist.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {RequestUserlist} RequestUserlist
         */
        RequestUserlist.from = RequestUserlist.fromObject;
    
        /**
         * Creates a plain object from a RequestUserlist message. Also converts values to other types if specified.
         * @param {RequestUserlist} message RequestUserlist
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestUserlist.toObject = function toObject() {    
            return {};
        };
    
        /**
         * Creates a plain object from this RequestUserlist message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestUserlist.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this RequestUserlist to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        RequestUserlist.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RequestUserlist;
    })();
    
    $root.UserInfo = (function() {
    
        /**
         * Constructs a new UserInfo.
         * @exports UserInfo
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UserInfo userId.
         * @type {number|undefined}
         */
        UserInfo.prototype.userId = 0;
    
        /**
         * UserInfo displayName.
         * @type {string|undefined}
         */
        UserInfo.prototype.displayName = "";
    
        /**
         * UserInfo registered.
         * @type {boolean|undefined}
         */
        UserInfo.prototype.registered = false;
    
        /**
         * UserInfo moderator.
         * @type {boolean|undefined}
         */
        UserInfo.prototype.moderator = false;
    
        /**
         * UserInfo streamer.
         * @type {boolean|undefined}
         */
        UserInfo.prototype.streamer = false;
    
        /**
         * UserInfo ptvAdmin.
         * @type {boolean|undefined}
         */
        UserInfo.prototype.ptvAdmin = false;
    
        /**
         * UserInfo basic.
         * @type {boolean|undefined}
         */
        UserInfo.prototype.basic = false;
    
        /**
         * UserInfo premium.
         * @type {boolean|undefined}
         */
        UserInfo.prototype.premium = false;
    
        /**
         * UserInfo subscriber.
         * @type {boolean|undefined}
         */
        UserInfo.prototype.subscriber = false;
    
        /**
         * UserInfo color.
         * @type {string|undefined}
         */
        UserInfo.prototype.color = "";
    
        /**
         * UserInfo ignoring.
         * @type {boolean|undefined}
         */
        UserInfo.prototype.ignoring = false;
    
        /**
         * UserInfo banned.
         * @type {boolean|undefined}
         */
        UserInfo.prototype.banned = false;
    
        /**
         * UserInfo shadowBanned.
         * @type {boolean|undefined}
         */
        UserInfo.prototype.shadowBanned = false;
    
        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };
    
        /**
         * Encodes the specified UserInfo message.
         * @param {UserInfo|Object} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.userId !== undefined && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.displayName !== undefined && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
            if (message.registered !== undefined && message.hasOwnProperty("registered"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.registered);
            if (message.moderator !== undefined && message.hasOwnProperty("moderator"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.moderator);
            if (message.streamer !== undefined && message.hasOwnProperty("streamer"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.streamer);
            if (message.ptvAdmin !== undefined && message.hasOwnProperty("ptvAdmin"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.ptvAdmin);
            if (message.basic !== undefined && message.hasOwnProperty("basic"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.basic);
            if (message.premium !== undefined && message.hasOwnProperty("premium"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.premium);
            if (message.subscriber !== undefined && message.hasOwnProperty("subscriber"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.subscriber);
            if (message.color !== undefined && message.hasOwnProperty("color"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.color);
            if (message.ignoring !== undefined && message.hasOwnProperty("ignoring"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.ignoring);
            if (message.banned !== undefined && message.hasOwnProperty("banned"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.banned);
            if (message.shadowBanned !== undefined && message.hasOwnProperty("shadowBanned"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.shadowBanned);
            return writer;
        };
    
        /**
         * Encodes the specified UserInfo message, length delimited.
         * @param {UserInfo|Object} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UserInfo} UserInfo
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UserInfo} UserInfo
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a UserInfo message.
         * @param {UserInfo|Object} message UserInfo message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId !== undefined)
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.displayName !== undefined)
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.registered !== undefined)
                if (typeof message.registered !== "boolean")
                    return "registered: boolean expected";
            if (message.moderator !== undefined)
                if (typeof message.moderator !== "boolean")
                    return "moderator: boolean expected";
            if (message.streamer !== undefined)
                if (typeof message.streamer !== "boolean")
                    return "streamer: boolean expected";
            if (message.ptvAdmin !== undefined)
                if (typeof message.ptvAdmin !== "boolean")
                    return "ptvAdmin: boolean expected";
            if (message.basic !== undefined)
                if (typeof message.basic !== "boolean")
                    return "basic: boolean expected";
            if (message.premium !== undefined)
                if (typeof message.premium !== "boolean")
                    return "premium: boolean expected";
            if (message.subscriber !== undefined)
                if (typeof message.subscriber !== "boolean")
                    return "subscriber: boolean expected";
            if (message.color !== undefined)
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.ignoring !== undefined)
                if (typeof message.ignoring !== "boolean")
                    return "ignoring: boolean expected";
            if (message.banned !== undefined)
                if (typeof message.banned !== "boolean")
                    return "banned: boolean expected";
            if (message.shadowBanned !== undefined)
                if (typeof message.shadowBanned !== "boolean")
                    return "shadowBanned: boolean expected";
            return null;
        };
    
        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {    
            if (object instanceof $root.UserInfo)
                return object;
            var message = new $root.UserInfo();
            if (object.userId !== undefined && object.userId !== null)
                message.userId = object.userId >>> 0;
            if (object.displayName !== undefined && object.displayName !== null)
                message.displayName = String(object.displayName);
            if (object.registered !== undefined && object.registered !== null)
                message.registered = Boolean(object.registered);
            if (object.moderator !== undefined && object.moderator !== null)
                message.moderator = Boolean(object.moderator);
            if (object.streamer !== undefined && object.streamer !== null)
                message.streamer = Boolean(object.streamer);
            if (object.ptvAdmin !== undefined && object.ptvAdmin !== null)
                message.ptvAdmin = Boolean(object.ptvAdmin);
            if (object.basic !== undefined && object.basic !== null)
                message.basic = Boolean(object.basic);
            if (object.premium !== undefined && object.premium !== null)
                message.premium = Boolean(object.premium);
            if (object.subscriber !== undefined && object.subscriber !== null)
                message.subscriber = Boolean(object.subscriber);
            if (object.color !== undefined && object.color !== null)
                message.color = String(object.color);
            if (object.ignoring !== undefined && object.ignoring !== null)
                message.ignoring = Boolean(object.ignoring);
            if (object.banned !== undefined && object.banned !== null)
                message.banned = Boolean(object.banned);
            if (object.shadowBanned !== undefined && object.shadowBanned !== null)
                message.shadowBanned = Boolean(object.shadowBanned);
            return message;
        };
    
        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link UserInfo.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {UserInfo} UserInfo
         */
        UserInfo.from = UserInfo.fromObject;
    
        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param {UserInfo} message UserInfo
         * @param {$protobuf.ConversionOptions} [options] Conversion options
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
            }
            if (message.userId !== undefined && message.userId !== null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.displayName !== undefined && message.displayName !== null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.registered !== undefined && message.registered !== null && message.hasOwnProperty("registered"))
                object.registered = message.registered;
            if (message.moderator !== undefined && message.moderator !== null && message.hasOwnProperty("moderator"))
                object.moderator = message.moderator;
            if (message.streamer !== undefined && message.streamer !== null && message.hasOwnProperty("streamer"))
                object.streamer = message.streamer;
            if (message.ptvAdmin !== undefined && message.ptvAdmin !== null && message.hasOwnProperty("ptvAdmin"))
                object.ptvAdmin = message.ptvAdmin;
            if (message.basic !== undefined && message.basic !== null && message.hasOwnProperty("basic"))
                object.basic = message.basic;
            if (message.premium !== undefined && message.premium !== null && message.hasOwnProperty("premium"))
                object.premium = message.premium;
            if (message.subscriber !== undefined && message.subscriber !== null && message.hasOwnProperty("subscriber"))
                object.subscriber = message.subscriber;
            if (message.color !== undefined && message.color !== null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.ignoring !== undefined && message.ignoring !== null && message.hasOwnProperty("ignoring"))
                object.ignoring = message.ignoring;
            if (message.banned !== undefined && message.banned !== null && message.hasOwnProperty("banned"))
                object.banned = message.banned;
            if (message.shadowBanned !== undefined && message.shadowBanned !== null && message.hasOwnProperty("shadowBanned"))
                object.shadowBanned = message.shadowBanned;
            return object;
        };
    
        /**
         * Creates a plain object from this UserInfo message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this UserInfo to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return UserInfo;
    })();
    
    $root.UserCount = (function() {
    
        /**
         * Constructs a new UserCount.
         * @exports UserCount
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function UserCount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UserCount users.
         * @type {number|undefined}
         */
        UserCount.prototype.users = 0;
    
        /**
         * Creates a new UserCount instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {UserCount} UserCount instance
         */
        UserCount.create = function create(properties) {
            return new UserCount(properties);
        };
    
        /**
         * Encodes the specified UserCount message.
         * @param {UserCount|Object} message UserCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCount.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.users !== undefined && message.hasOwnProperty("users"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.users);
            return writer;
        };
    
        /**
         * Encodes the specified UserCount message, length delimited.
         * @param {UserCount|Object} message UserCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a UserCount message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UserCount} UserCount
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UserCount} UserCount
         */
        UserCount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a UserCount message.
         * @param {UserCount|Object} message UserCount message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        UserCount.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users !== undefined)
                if (!$util.isInteger(message.users))
                    return "users: integer expected";
            return null;
        };
    
        /**
         * Creates a UserCount message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {UserCount} UserCount
         */
        UserCount.fromObject = function fromObject(object) {    
            if (object instanceof $root.UserCount)
                return object;
            var message = new $root.UserCount();
            if (object.users !== undefined && object.users !== null)
                message.users = object.users >>> 0;
            return message;
        };
    
        /**
         * Creates a UserCount message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link UserCount.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {UserCount} UserCount
         */
        UserCount.from = UserCount.fromObject;
    
        /**
         * Creates a plain object from a UserCount message. Also converts values to other types if specified.
         * @param {UserCount} message UserCount
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserCount.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.users = 0;
            if (message.users !== undefined && message.users !== null && message.hasOwnProperty("users"))
                object.users = message.users;
            return object;
        };
    
        /**
         * Creates a plain object from this UserCount message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserCount.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this UserCount to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        UserCount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return UserCount;
    })();
    
    $root.ShowRaffle = (function() {
    
        /**
         * Constructs a new ShowRaffle.
         * @exports ShowRaffle
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function ShowRaffle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ShowRaffle userList.
         * @type {Array.<ShowRaffle.User>|undefined}
         */
        ShowRaffle.prototype.userList = $util.emptyArray;
    
        // Lazily resolved type references
        var $types = {
            0: "ShowRaffle.User"
        }; $lazyTypes.push($types);
    
        /**
         * Creates a new ShowRaffle instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {ShowRaffle} ShowRaffle instance
         */
        ShowRaffle.create = function create(properties) {
            return new ShowRaffle(properties);
        };
    
        /**
         * Encodes the specified ShowRaffle message.
         * @param {ShowRaffle|Object} message ShowRaffle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowRaffle.encode = function encode(message, writer) {    
            if (!writer)
                writer = $Writer.create();
            if (message.userList !== undefined && message.hasOwnProperty("userList"))
                for (var i = 0; i < message.userList.length; ++i)
                    $types[0].encode(message.userList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified ShowRaffle message, length delimited.
         * @param {ShowRaffle|Object} message ShowRaffle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowRaffle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ShowRaffle message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ShowRaffle} ShowRaffle
         */
        ShowRaffle.decode = function decode(reader, length) {    
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ShowRaffle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userList && message.userList.length))
                        message.userList = [];
                    message.userList.push($types[0].decode(reader, reader.uint32()));
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ShowRaffle} ShowRaffle
         */
        ShowRaffle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ShowRaffle message.
         * @param {ShowRaffle|Object} message ShowRaffle message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ShowRaffle.verify = function verify(message) {    
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userList !== undefined) {
                if (!Array.isArray(message.userList))
                    return "userList: array expected";
                for (var i = 0; i < message.userList.length; ++i) {
                    var error = $types[0].verify(message.userList[i]);
                    if (error)
                        return "userList." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a ShowRaffle message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {ShowRaffle} ShowRaffle
         */
        ShowRaffle.fromObject = function fromObject(object) {    
            if (object instanceof $root.ShowRaffle)
                return object;
            var message = new $root.ShowRaffle();
            if (object.userList) {
                if (!Array.isArray(object.userList))
                    throw TypeError(".ShowRaffle.userList: array expected");
                message.userList = [];
                for (var i = 0; i < object.userList.length; ++i) {
                    if (typeof object.userList[i] !== "object")
                        throw TypeError(".ShowRaffle.userList: object expected");
                    message.userList[i] = $types[0].fromObject(object.userList[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a ShowRaffle message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link ShowRaffle.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {ShowRaffle} ShowRaffle
         */
        ShowRaffle.from = ShowRaffle.fromObject;
    
        /**
         * Creates a plain object from a ShowRaffle message. Also converts values to other types if specified.
         * @param {ShowRaffle} message ShowRaffle
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShowRaffle.toObject = function toObject(message, options) {    
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userList = [];
            if (message.userList !== undefined && message.userList !== null && message.hasOwnProperty("userList")) {
                object.userList = [];
                for (var j = 0; j < message.userList.length; ++j)
                    object.userList[j] = $types[0].toObject(message.userList[j], options);
            }
            return object;
        };
    
        /**
         * Creates a plain object from this ShowRaffle message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShowRaffle.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this ShowRaffle to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ShowRaffle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        ShowRaffle.User = (function() {
    
            /**
             * Constructs a new User.
             * @exports ShowRaffle.User
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function User(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * User displayName.
             * @type {string|undefined}
             */
            User.prototype.displayName = "";
    
            /**
             * User subscriber.
             * @type {boolean|undefined}
             */
            User.prototype.subscriber = false;
    
            /**
             * Creates a new User instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {ShowRaffle.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };
    
            /**
             * Encodes the specified User message.
             * @param {ShowRaffle.User|Object} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {    
                if (!writer)
                    writer = $Writer.create();
                if (message.displayName !== undefined && message.hasOwnProperty("displayName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.displayName);
                if (message.subscriber !== undefined && message.hasOwnProperty("subscriber"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.subscriber);
                return writer;
            };
    
            /**
             * Encodes the specified User message, length delimited.
             * @param {ShowRaffle.User|Object} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a User message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ShowRaffle.User} User
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
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ShowRaffle.User} User
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a User message.
             * @param {ShowRaffle.User|Object} message User message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {    
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.displayName !== undefined)
                    if (!$util.isString(message.displayName))
                        return "displayName: string expected";
                if (message.subscriber !== undefined)
                    if (typeof message.subscriber !== "boolean")
                        return "subscriber: boolean expected";
                return null;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {ShowRaffle.User} User
             */
            User.fromObject = function fromObject(object) {    
                if (object instanceof $root.ShowRaffle.User)
                    return object;
                var message = new $root.ShowRaffle.User();
                if (object.displayName !== undefined && object.displayName !== null)
                    message.displayName = String(object.displayName);
                if (object.subscriber !== undefined && object.subscriber !== null)
                    message.subscriber = Boolean(object.subscriber);
                return message;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link ShowRaffle.User.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {ShowRaffle.User} User
             */
            User.from = User.fromObject;
    
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param {ShowRaffle.User} message User
             * @param {$protobuf.ConversionOptions} [options] Conversion options
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
                if (message.displayName !== undefined && message.displayName !== null && message.hasOwnProperty("displayName"))
                    object.displayName = message.displayName;
                if (message.subscriber !== undefined && message.subscriber !== null && message.hasOwnProperty("subscriber"))
                    object.subscriber = message.subscriber;
                return object;
            };
    
            /**
             * Creates a plain object from this User message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };
    
            /**
             * Converts this User to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return User;
        })();
    
        return ShowRaffle;
    })();
    
    // Resolve lazy type references to actual types
    $util.lazyResolve($root, $lazyTypes);

    return $root;
});
