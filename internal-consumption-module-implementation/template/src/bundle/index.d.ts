import { IToolPageExtension } from './flow/tool-page';
import { Components } from './sdk';
export interface IInternalConsumptionModuleOverride extends Components.IModuleOverride {
    extensions?: {
        tool_page: IToolPageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class InternalConsumptionModule extends Components.Module<IInternalConsumptionModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IInternalConsumptionModuleOverride);
}
