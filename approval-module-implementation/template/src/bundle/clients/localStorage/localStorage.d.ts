import { WithBootedClient } from '@team_eureka/eureka-ionic-core';
interface IState {
    [key: string]: any;
}
declare enum SETTINGS_ENUM {
    'MODULE_PENDING' = 0,
    'TEMP_MODULE_APPROVALS' = 1,
    'EXTENSION_PENDING' = 2,
    'TEMP_EXTENSION_APPROVALS' = 3,
    'USER_AD' = 4,
    'CENTRAL_ACTION_FETCH' = 5,
    'DISCARTED' = 6
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
