/// <reference types="react" />
import { Components } from '../../sdk';
export interface IForgotPasswordExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, IForgotPasswordExtension> {
}
export declare const ForgotPasswordPage: (props: IProps) => JSX.Element;
