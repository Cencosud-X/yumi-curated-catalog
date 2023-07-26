/// <reference types="react" />
import { Components } from '../../sdk';
export interface IProductsDetailsPageExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, IProductsDetailsPageExtension> {
}
export declare const ProductsDetailsPage: (props: IProps) => JSX.Element;
