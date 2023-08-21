import { IToolPageExtension } from './flow/tool-page';
import { Components } from './sdk';
import { IRevisorTasksPageExtension } from './flow/revisor-tasks';
import { IControlTasksPageExtension } from './flow/control-tasks';
import { ICreatorSummaryPageExtension } from './flow/creator-summary';
import { IControlSummaryPageExtension } from './flow/control-summary';
import { IRevisorSummaryPageExtension } from './flow/revisor-summary';
export interface IInternalConsumptionModuleOverride extends Components.IModuleOverride {
    extensions?: {
        tool_page: IToolPageExtension;
        revisor_tasks_page: IRevisorTasksPageExtension;
        control_tasks_page: IControlTasksPageExtension;
        creator_summary_page: ICreatorSummaryPageExtension;
        control_summary_page: IControlSummaryPageExtension;
        revisor_summary_page: IRevisorSummaryPageExtension;
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
