/// <reference types="react" />
import { Components } from '../../sdk';
export interface IActiveAccountExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, IActiveAccountExtension> {
}
export declare const ActiveAccountPage: (props: IProps) => JSX.Element;
