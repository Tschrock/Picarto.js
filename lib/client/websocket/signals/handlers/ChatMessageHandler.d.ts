import { ChatMessage } from "../../../../gen/picarto.proto.prebuilt";
import { AbstractHandler } from "./AbstractHandler";
/**
 * Handler for ChatMessage signals.
 * @export
 * @class ChatMessageHandler
 * @extends {AbstractHandler}
 */
export declare class ChatMessageHandler extends AbstractHandler {
    handle(signal: ChatMessage): boolean;
}
