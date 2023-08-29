declare enum EVENTS_ENUM {
    'ERROR_NOTIFICATION' = 0
}
export declare type ICEventStreamerTypes = keyof typeof EVENTS_ENUM;
declare class EventStreamer {
    private static emitter;
    on(event: ICEventStreamerTypes | symbol, listener: (...args: any[]) => void): void;
    off(event: ICEventStreamerTypes | symbol, listener: (...args: any[]) => void): void;
    emit(event: ICEventStreamerTypes | symbol, ...args: any[]): boolean;
}
declare const ICEventStreamer: EventStreamer;
export { ICEventStreamer };
