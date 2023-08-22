/// <reference types="react" />
import { Components } from '../../../../sdk';
export interface IProductDetailPageExtension extends Components.IPageExtensions {
}
export interface IProps extends Components.IPageProps<{}, IProductDetailPageExtension> {
}
export interface IState {
}
export declare class ProductDetailPage extends Components.Page<IProps, IState> {
    constructor(props: IProps);
    render(): JSX.Element;
}
