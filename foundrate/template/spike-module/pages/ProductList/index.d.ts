/// <reference types="react" />
import { Components } from "../../sdk";
export interface IProductListPageExtensions extends Components.IPageExtensions {
    triggers: {
        on_finalize: () => void;
    };
}
interface IState {
    view: 'LOADING' | 'LIST' | 'ERROR';
    products: string[];
}
export interface IProductListPageProps extends Components.IPageProps<{
    category: string;
}> {
    extensions: IProductListPageExtensions;
}
export declare class ProductListPage extends Components.Page<IProductListPageProps, IState> {
    state: IState;
    constructor(props: IProductListPageProps);
    componentDidMount: () => void;
    onFinalize: () => void;
    render: () => JSX.Element;
    render_LOADING: () => JSX.Element;
    render_ERROR: () => JSX.Element;
    render_LIST: () => JSX.Element;
}
export {};
