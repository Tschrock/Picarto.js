import { AbstractHandler } from "./handlers/AbstractHandler";
/**
 * Signal manager for WebSocket connections.
 * @export
 * @class WebSocketSignalManager
 */
export declare class WebSocketSignalManager {
    private handlers;
    private queue;
    private ws;
    constructor(connection: any);
    readonly client: any;
    register(event: string, handler: {
        new (packetManager: WebSocketSignalManager): AbstractHandler;
    }): void;
    handle(signal: any): boolean;
}
