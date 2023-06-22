/// <reference types="react" />
import * as Contexts from '../../contexts';
import * as Models from '../../models';
import { Components } from '../../sdk';
export interface IProps extends Components.IPageProps<{
    sectionId: string;
    categoryId: string;
    productId: string;
}> {
}
export interface IState {
    task?: Models.ITask;
    product?: Models.IProduct;
    count: number;
}
export declare class Print extends Components.Page<IProps, IState> {
    static contextType: import("react").Context<Contexts.IModuleContext>;
    context: React.ContextType<typeof Contexts.Module>;
    state: IState;
    onGoBackHandler: () => void;
    onChangeCounHandler: (count: number) => void;
    onPrintHandler: () => void;
    componentDidMount: () => void;
    render: () => JSX.Element;
}
