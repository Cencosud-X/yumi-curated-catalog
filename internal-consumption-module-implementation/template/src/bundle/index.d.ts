import { IToolPageExtension } from './flow/tool-page';
import { Components } from './sdk';
import { ISubTasksPageExtension } from './flow/sub-tasks';
import { IControlTasksPageExtension } from './flow/control-tasks';
export interface IInternalConsumptionModuleOverride extends Components.IModuleOverride {
    extensions?: {
        tool_page: IToolPageExtension;
        sub_tasks_page: ISubTasksPageExtension;
        control_tasks_page: IControlTasksPageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export declare type IModuleProps = Components.IModuleProps;
export default abstract class InternalConsumptionModule extends Components.Module<IInternalConsumptionModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IInternalConsumptionModuleOverride);
}
export * from './clients/module-client.interface';
export * from './clients/tasks-client.interface';
export * from './clients/product-client.interface';
