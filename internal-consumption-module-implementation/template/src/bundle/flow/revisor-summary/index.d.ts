/// <reference types="react" />
import { Components } from '../../sdk';
import { ITaskClient } from '../../clients/tasks-client.interface';
import { IModuleClient } from '../../clients/module-client.interface';
export interface IRevisorSummaryPageExtension extends Components.IPageExtensions {
    triggers: {
        miniImgUrlResolver: (sku: string, ean: string) => string;
        tasksClientFactory: () => ITaskClient;
        moduleClientFactory: () => IModuleClient;
    };
}
export interface IProps extends Components.IPageProps<{}, IRevisorSummaryPageExtension> {
}
export interface IState {
}
export declare class RevisorSummaryPage extends Components.Page<IProps, IState> {
    state: IState;
    render(): JSX.Element;
}
