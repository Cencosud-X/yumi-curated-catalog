/// <reference types="react" />
import { Components } from '../../sdk';
export interface IResetPasswordExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, IResetPasswordExtension> {
}
export declare const ResetPasswordPage: (props: IProps) => JSX.Element;
