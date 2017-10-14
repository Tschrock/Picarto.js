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

import { WebSocketConnection } from "../WebSocketConnection";

import { AbstractHandler } from "./handlers/AbstractHandler";
import { AdminControlHandler } from "./handlers/AdminControlHandler";
import { BanHandler } from "./handlers/BanHandler";
import { ChatLevelHandler } from "./handlers/ChatLevelHandler";
import { ChatMessageHandler } from "./handlers/ChatMessageHandler";
import { ClearHistoryHandler } from "./handlers/ClearHistoryHandler";
import { ClearUserMessagesHandler } from "./handlers/ClearUserMessagesHandler";
import { ColorHandler } from "./handlers/ColorHandler";
import { CommandHelpHandler } from "./handlers/CommandHelpHandler";
import { ControlHandler } from "./handlers/ControlHandler";
import { EventHandler } from "./handlers/EventHandler";
import { GlobalMessageHandler } from "./handlers/GlobalMessageHandler";
import { IgnoresUpdatedHandler } from "./handlers/IgnoresUpdatedHandler";
import { KickHandler } from "./handlers/KickHandler";
import { ModHandler } from "./handlers/ModHandler";
import { ModListHandler } from "./handlers/ModListHandler";
import { ModToolsHandler } from "./handlers/ModToolsHandler";
import { MonitorDataHandler } from "./handlers/MonitorDataHandler";
import { MultistreamHandler } from "./handlers/MultistreamHandler";
import { NameConfirmationHandler } from "./handlers/NameConfirmationHandler";
import { OnlineStateHandler } from "./handlers/OnlineStateHandler";
import { PingPongHandler } from "./handlers/PingPongHandler";
import { PollInitHandler } from "./handlers/PollInitHandler";
import { PollResultHandler } from "./handlers/PollResultHandler";
import { PollUpdateHandler } from "./handlers/PollUpdateHandler";
import { PollVoteResponseHandler } from "./handlers/PollVoteResponseHandler";
import { RaffleRunHandler } from "./handlers/RaffleRunHandler";
import { ReminderHandler } from "./handlers/ReminderHandler";
import { RemoveMessageHandler } from "./handlers/RemoveMessageHandler";
import { ServerMessageHandler } from "./handlers/ServerMessageHandler";
import { SetJWTHandler } from "./handlers/SetJWTHandler";
import { ShowRaffleHandler } from "./handlers/ShowRaffleHandler";
import { TimerHandler } from "./handlers/TimerHandler";
import { UnBanHandler } from "./handlers/UnBanHandler";
import { UserCountHandler } from "./handlers/UserCountHandler";
import { UserInfoHandler } from "./handlers/UserInfoHandler";
import { UserListHandler } from "./handlers/UserListHandler";
import { WhisperHandler } from "./handlers/WhisperHandler";



/**
 * Signal manager for WebSocket connections.
 * @export
 * @class WebSocketSignalManager
 */
export class WebSocketSignalManager {

    private handlers = new Map<string, AbstractHandler>();
    private queue = [];
    private ws: WebSocketConnection

    constructor(connection: WebSocketConnection) {
        this.ws = connection;

        this.register("AdminControl", AdminControlHandler);
        this.register("Ban", BanHandler);
        this.register("ChatLevel", ChatLevelHandler);
        this.register("ChatMessage", ChatMessageHandler);
        this.register("ClearHistory", ClearHistoryHandler);
        this.register("ClearUserMessages", ClearUserMessagesHandler);
        this.register("Color", ColorHandler);
        this.register("CommandHelp", CommandHelpHandler);
        this.register("Control", ControlHandler);
        this.register("Event", EventHandler);
        this.register("GlobalMessage", GlobalMessageHandler);
        this.register("IgnoresUpdated", IgnoresUpdatedHandler);
        this.register("Kick", KickHandler);
        this.register("Mod", ModHandler);
        this.register("ModList", ModListHandler);
        this.register("ModTools", ModToolsHandler);
        this.register("MonitorData", MonitorDataHandler);
        this.register("Multistream", MultistreamHandler);
        this.register("NameConfirmation", NameConfirmationHandler);
        this.register("OnlineState", OnlineStateHandler);
        this.register("PingPong", PingPongHandler);
        this.register("PollInit", PollInitHandler);
        this.register("PollResult", PollResultHandler);
        this.register("PollUpdate", PollUpdateHandler);
        this.register("PollVoteResponse", PollVoteResponseHandler);
        this.register("RaffleRun", RaffleRunHandler);
        this.register("Reminder", ReminderHandler);
        this.register("RemoveMessage", RemoveMessageHandler);
        this.register("ServerMessage", ServerMessageHandler);
        this.register("SetJWT", SetJWTHandler);
        this.register("ShowRaffle", ShowRaffleHandler);
        this.register("Timer", TimerHandler);
        this.register("UnBan", UnBanHandler);
        this.register("UserCount", UserCountHandler);
        this.register("UserInfo", UserInfoHandler);
        this.register("UserList", UserListHandler);
        this.register("Whisper", WhisperHandler);


    }

    public get connection() {
        return this.ws;
    }

    public register(event: string, handlerType: { new(packetManager: WebSocketSignalManager): AbstractHandler }) {
        this.handlers[event] = new handlerType(this);
    }

    public handle(signal): boolean {
        if (this.handlers[signal.constructor.name]) return this.handlers[signal.constructor.name].handle(signal);
        return false;
    }


}
