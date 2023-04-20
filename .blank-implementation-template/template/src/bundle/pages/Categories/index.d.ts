import * as React from 'react';
import { Components } from '../../sdk';
export interface ICategoriesPageExtensions extends Components.IPageExtensions {
    triggers?: {
        on_click_category: (category: string) => void;
    };
    white_boxes?: {
        after_list_box: React.ReactNode;
    };
}
interface IState {
    view: 'LOADING' | 'LIST' | 'ERROR';
    categories: string[];
}
export interface ICategoriesPageProps extends Components.IPageProps<{}, ICategoriesPageExtensions> {
}
export declare class CategoriesPage extends Components.Page<ICategoriesPageProps, IState> {
    state: IState;
    componentDidMount: () => void;
    onClickCategory: (category: string) => void;
    render: () => JSX.Element;
    render_LOADING: () => JSX.Element;
    render_ERROR: () => JSX.Element;
    render_LIST: () => JSX.Element;
}
export {};
