interface IConfig {
    label: string;
}
declare class EurekaConsole {
    private config;
    constructor(config: IConfig);
    private getDate;
    debug(message: string, ...optionalParams: any[]): void;
    log(message: string, ...optionalParams: any[]): void;
    error(message: string, ...optionalParams: any[]): void;
    warn(message: string, ...optionalParams: any[]): void;
    info(message: string, ...optionalParams: any[]): void;
}
export default function (config: IConfig): EurekaConsole;
export {};
