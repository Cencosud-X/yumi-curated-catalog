/// <reference types="react" />
import { Components } from '../../sdk';
import { IModuleClient } from '../../clients/module-client.interface';
import { IProductClient } from '../../clients/product-client.interface';
import { ITaskClient } from '../../clients/tasks-client.interface';
export interface IToolPageExtension extends Components.IPageExtensions {
    triggers: {
        miniImgUrlResolver: (sku: string, ean: string) => string;
        moduleClientFactory: () => IModuleClient;
        productClientFactory: () => IProductClient;
        tasksClientFactory: () => ITaskClient;
    };
}
export interface IProps extends Components.IPageProps<{}, IToolPageExtension> {
}
export interface IState {
}
export declare class ToolPage extends Components.Page<IProps, IState> {
    state: IState;
    render(): JSX.Element;
}
