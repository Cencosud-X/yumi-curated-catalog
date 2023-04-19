/// <reference types="react" />
import { Components } from '../../sdk';
interface IState {
    view: 'LOADING' | 'LIST' | 'ERROR';
    subcategories: string[];
}
export interface ISubcategoriesPageProps extends Components.IPageProps {
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
