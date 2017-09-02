import { WebSocketSignalManager } from "../WebSocketSignalManager";
import { TSignal } from "../../../ChatConnection";
/**
 * Signal handler base.
 * @export
 * @class AbstractHandler
 */
export declare class AbstractHandler {
    protected packetManager: WebSocketSignalManager;
    constructor(packetManager: WebSocketSignalManager);
    handle(signal: TSignal): boolean;
}
