/// <reference types="react" />
import { Components } from '../../sdk';
export declare type ISubcategoriesPageExtensions = Components.IPageExtensions;
interface IState {
    view: 'LOADING' | 'LIST' | 'ERROR';
    subcategories: string[];
}
export interface ISubcategoriesPageProps extends Components.IPageProps {
    extensions: ISubcategoriesPageExtensions;
}
export declare class SubcategoriesPage extends Components.Page<ISubcategoriesPageProps> {
    state: IState;
    componentDidMount: () => void;
    render: () => JSX.Element;
    render_LOADING: () => JSX.Element;
    render_ERROR: () => JSX.Element;
    render_LIST: () => JSX.Element;
}
export {};
