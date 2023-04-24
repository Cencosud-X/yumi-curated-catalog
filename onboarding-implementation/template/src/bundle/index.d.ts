import * as Pages from './flow';
import { Components } from './sdk';
export { Pages };
export declare type IModuleProps = Components.IModuleProps;
export interface ISettings {
    screens: {
        geolocalization: boolean;
        notification: boolean;
        custom_screens: number;
    };
}
export interface IOnBoardingDescription extends Components.IModuleOverride {
    extensions?: {};
    routes?: Components.IModuleRoute[];
}
export default abstract class OnBoardingModule extends Components.Module {
    protected override: IOnBoardingDescription;
    static route: string;
    private pageIndex;
    constructor(props: Components.IModuleProps, override: IOnBoardingDescription);
    onChangeToNextPageHandler: () => void;
    onFinalize(): void;
}
