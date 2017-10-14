/**
 * Picarto.js
 * An unofficial library for interacting with Picarto.tv.
 *
 * This library is not endorsed, supported, or otherwise associated with Picarto
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
Object.defineProperty(exports, "__esModule", { value: true });
const AdminControlHandler_1 = require("./handlers/AdminControlHandler");
const BanHandler_1 = require("./handlers/BanHandler");
const ChatLevelHandler_1 = require("./handlers/ChatLevelHandler");
const ChatMessageHandler_1 = require("./handlers/ChatMessageHandler");
const ClearHistoryHandler_1 = require("./handlers/ClearHistoryHandler");
const ClearUserMessagesHandler_1 = require("./handlers/ClearUserMessagesHandler");
const ColorHandler_1 = require("./handlers/ColorHandler");
const CommandHelpHandler_1 = require("./handlers/CommandHelpHandler");
const ControlHandler_1 = require("./handlers/ControlHandler");
const EventHandler_1 = require("./handlers/EventHandler");
const GlobalMessageHandler_1 = require("./handlers/GlobalMessageHandler");
const IgnoresUpdatedHandler_1 = require("./handlers/IgnoresUpdatedHandler");
const KickHandler_1 = require("./handlers/KickHandler");
const ModHandler_1 = require("./handlers/ModHandler");
const ModListHandler_1 = require("./handlers/ModListHandler");
const ModToolsHandler_1 = require("./handlers/ModToolsHandler");
const MonitorDataHandler_1 = require("./handlers/MonitorDataHandler");
const MultistreamHandler_1 = require("./handlers/MultistreamHandler");
const NameConfirmationHandler_1 = require("./handlers/NameConfirmationHandler");
const OnlineStateHandler_1 = require("./handlers/OnlineStateHandler");
const PingPongHandler_1 = require("./handlers/PingPongHandler");
const PollInitHandler_1 = require("./handlers/PollInitHandler");
const PollResultHandler_1 = require("./handlers/PollResultHandler");
const PollUpdateHandler_1 = require("./handlers/PollUpdateHandler");
const PollVoteResponseHandler_1 = require("./handlers/PollVoteResponseHandler");
const RaffleRunHandler_1 = require("./handlers/RaffleRunHandler");
const ReminderHandler_1 = require("./handlers/ReminderHandler");
const RemoveMessageHandler_1 = require("./handlers/RemoveMessageHandler");
const ServerMessageHandler_1 = require("./handlers/ServerMessageHandler");
const SetJWTHandler_1 = require("./handlers/SetJWTHandler");
const ShowRaffleHandler_1 = require("./handlers/ShowRaffleHandler");
const TimerHandler_1 = require("./handlers/TimerHandler");
const UnBanHandler_1 = require("./handlers/UnBanHandler");
const UserCountHandler_1 = require("./handlers/UserCountHandler");
const UserInfoHandler_1 = require("./handlers/UserInfoHandler");
const UserListHandler_1 = require("./handlers/UserListHandler");
const WhisperHandler_1 = require("./handlers/WhisperHandler");
/**
 * Signal manager for WebSocket connections.
 * @export
 * @class WebSocketSignalManager
 */
class WebSocketSignalManager {
    constructor(connection) {
        this.handlers = new Map();
        this.queue = [];
        this.ws = connection;
        this.register("AdminControl", AdminControlHandler_1.AdminControlHandler);
        this.register("Ban", BanHandler_1.BanHandler);
        this.register("ChatLevel", ChatLevelHandler_1.ChatLevelHandler);
        this.register("ChatMessage", ChatMessageHandler_1.ChatMessageHandler);
        this.register("ClearHistory", ClearHistoryHandler_1.ClearHistoryHandler);
        this.register("ClearUserMessages", ClearUserMessagesHandler_1.ClearUserMessagesHandler);
        this.register("Color", ColorHandler_1.ColorHandler);
        this.register("CommandHelp", CommandHelpHandler_1.CommandHelpHandler);
        this.register("Control", ControlHandler_1.ControlHandler);
        this.register("Event", EventHandler_1.EventHandler);
        this.register("GlobalMessage", GlobalMessageHandler_1.GlobalMessageHandler);
        this.register("IgnoresUpdated", IgnoresUpdatedHandler_1.IgnoresUpdatedHandler);
        this.register("Kick", KickHandler_1.KickHandler);
        this.register("Mod", ModHandler_1.ModHandler);
        this.register("ModList", ModListHandler_1.ModListHandler);
        this.register("ModTools", ModToolsHandler_1.ModToolsHandler);
        this.register("MonitorData", MonitorDataHandler_1.MonitorDataHandler);
        this.register("Multistream", MultistreamHandler_1.MultistreamHandler);
        this.register("NameConfirmation", NameConfirmationHandler_1.NameConfirmationHandler);
        this.register("OnlineState", OnlineStateHandler_1.OnlineStateHandler);
        this.register("PingPong", PingPongHandler_1.PingPongHandler);
        this.register("PollInit", PollInitHandler_1.PollInitHandler);
        this.register("PollResult", PollResultHandler_1.PollResultHandler);
        this.register("PollUpdate", PollUpdateHandler_1.PollUpdateHandler);
        this.register("PollVoteResponse", PollVoteResponseHandler_1.PollVoteResponseHandler);
        this.register("RaffleRun", RaffleRunHandler_1.RaffleRunHandler);
        this.register("Reminder", ReminderHandler_1.ReminderHandler);
        this.register("RemoveMessage", RemoveMessageHandler_1.RemoveMessageHandler);
        this.register("ServerMessage", ServerMessageHandler_1.ServerMessageHandler);
        this.register("SetJWT", SetJWTHandler_1.SetJWTHandler);
        this.register("ShowRaffle", ShowRaffleHandler_1.ShowRaffleHandler);
        this.register("Timer", TimerHandler_1.TimerHandler);
        this.register("UnBan", UnBanHandler_1.UnBanHandler);
        this.register("UserCount", UserCountHandler_1.UserCountHandler);
        this.register("UserInfo", UserInfoHandler_1.UserInfoHandler);
        this.register("UserList", UserListHandler_1.UserListHandler);
        this.register("Whisper", WhisperHandler_1.WhisperHandler);
    }
    get connection() {
        return this.ws;
    }
    register(event, handlerType) {
        this.handlers[event] = new handlerType(this);
    }
    handle(signal) {
        if (this.handlers[signal.constructor.name])
            return this.handlers[signal.constructor.name].handle(signal);
        return false;
    }
}
exports.WebSocketSignalManager = WebSocketSignalManager;
