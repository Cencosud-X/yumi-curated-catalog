interface IConfig {
    label: string;
}
declare class ChariotConsole {
    private config;
    constructor(config: IConfig);
    private getDate;
    debug(message: string | Error, ...optionalParams: unknown[]): void;
    log(message: string, ...optionalParams: unknown[]): void;
    error(message: string | Error, ...optionalParams: unknown[]): void;
    warn(message: string, ...optionalParams: unknown[]): void;
    info(message: string, ...optionalParams: unknown[]): void;
}
declare const callerFnc: (config: IConfig) => ChariotConsole;
export default callerFnc;
