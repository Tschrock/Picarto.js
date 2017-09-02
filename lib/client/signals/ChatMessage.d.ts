import * as ChatProtocol from "../../gen/picarto.proto.prebuilt";
import { SignalHandler } from "../../structures/SignalHandler";
export declare class ChatMessage extends SignalHandler {
    handleSignal(signal: ChatProtocol.ChatMessage): void;
}
