import * as Lib from './lib';
import { Components } from './sdk';
export declare type IModuleProps = Components.IModuleProps;
export interface IOnBoardingOverride extends Components.IModuleOverride {
    extensions?: {};
    routes?: Components.IModuleRoute[];
}
export default abstract class OnBoardingModule extends Components.Module {
    protected override: IOnBoardingOverride;
    static route: string;
    private pageIndex;
    constructor(props: Components.IModuleProps, override: IOnBoardingOverride);
    onChangeToNextPageHandler: () => void;
    abstract onFinalize(): void;
    _onFinalize(): void;
}
export { Lib };
