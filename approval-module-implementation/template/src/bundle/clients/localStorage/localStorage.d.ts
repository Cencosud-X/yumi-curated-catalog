import { WithBootedClient } from '@team_eureka/eureka-ionic-core';
interface IState {
    [key: string]: any;
}
declare enum SETTINGS_ENUM {
    'MODULE_PENDING' = 0,
    'TEMP_APPROVALS' = 1,
    'EXTENSION_PENDING' = 2,
    'USER_AD' = 3,
    'CENTRAL_ACTION_FETCH' = 4,
    'DISCARTED' = 5
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
