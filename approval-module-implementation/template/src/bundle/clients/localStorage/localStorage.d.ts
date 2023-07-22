import { WithBootedClient } from '@team_eureka/eureka-ionic-core';
interface IState {
    [key: string]: any;
}
declare enum SETTINGS_ENUM {
    'MODULE_PENDING' = 0,
    'EXTENSION_PENDING' = 1,
    'USER_AD' = 2,
    'LOCALE_DATE' = 3,
    'LOCALE_COUNTRY' = 4,
    'PURCHASE_REQUISITION_PENDING' = 5,
    'ACCOUNTABILITY_PENDING' = 6,
    'FB60_PENDING' = 7,
    'PAYMENT_PROPOSAL_PENDING' = 8,
    'PURCHASE_ORDER_PENDING' = 9,
    'CENTRAL_ACTION_FETCH' = 10
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
