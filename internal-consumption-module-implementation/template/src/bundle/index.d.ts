import { IToolPageExtension } from './flow/tool-page';
import { Components } from './sdk';
import { MDHModuleClient } from './clients/mdh-module-client';
import { MDHProductClient } from './clients/mdh-product-client';
import { MDHTasksClient } from './clients/mdh-tasks-client';
export interface IInternalConsumptionModuleOverride extends Components.IModuleOverride {
    extensions?: {
        tool_page: IToolPageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export declare type IModuleProps = Components.IModuleProps;
export default abstract class InternalConsumptionModule extends Components.Module<IInternalConsumptionModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IInternalConsumptionModuleOverride);
}
export { MDHModuleClient, MDHProductClient, MDHTasksClient };
