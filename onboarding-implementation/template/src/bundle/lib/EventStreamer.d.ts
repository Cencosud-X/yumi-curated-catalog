declare enum EVENTS_ENUM {
    'PAGE:NEXT' = 0,
    'PAGE:NEXT:RESPONSE' = 1
}
export declare type EventStreamerTypes = keyof typeof EVENTS_ENUM;
declare type args = object | number | string | boolean | any;
declare class EventStreamer {
    private static emitter;
    on(event: EventStreamerTypes | symbol, listener: (...args: args[]) => void): void;
    off(event: EventStreamerTypes | symbol, listener: (...args: args[]) => void): void;
    emit(event: EventStreamerTypes | symbol, ...args: args[]): boolean;
}
declare const _default: EventStreamer;
export default _default;
