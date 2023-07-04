import { Components } from './sdk';
export interface IOnboardingModuleOverride extends Components.IModuleOverride {
    extensions: {};
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class OnboardingModule extends Components.Module<IOnboardingModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IOnboardingModuleOverride);
}
