/// <reference types="react" />
import { Components } from '../../sdk';
export interface IProductsListPageExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, IProductsListPageExtension> {
}
export declare const ProductListPage: (props: IProps) => JSX.Element;
