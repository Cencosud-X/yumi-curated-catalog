/// <reference types="react" />
import { Components } from '../../sdk';
export interface ICartPageExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, ICartPageExtension> {
}
export declare const CartPage: (props: IProps) => JSX.Element;
