/// <reference types="react" />
import { Components } from '../../sdk';
export interface IHomePageExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, IHomePageExtension> {
}
export declare const HomePage: (props: IProps) => JSX.Element;
