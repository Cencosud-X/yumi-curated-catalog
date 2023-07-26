import { WithBootedClient } from '@team_eureka/eureka-ionic-core';
interface IState {
    [key: string]: any;
}
declare enum SETTINGS_ENUM {
    'MODULE_PENDING' = 0,
    'EXTENSION_PENDING' = 1,
    'USER_AD' = 2,
    'CENTRAL_ACTION_FETCH' = 3,
    'DISCARTED' = 4
}
export declare type SettingTypes = keyof typeof SETTINGS_ENUM;
declare class ApprovalSettingsClient extends WithBootedClient {
    state: IState;
    boot(): Promise<void>;
    get(name: SettingTypes, defaultValue?: any): any;
    set(name: SettingTypes, value: any): Promise<any>;
    remove(name: SettingTypes): Promise<boolean>;
    private setState;
}
declare const _default: ApprovalSettingsClient;
export default _default;
