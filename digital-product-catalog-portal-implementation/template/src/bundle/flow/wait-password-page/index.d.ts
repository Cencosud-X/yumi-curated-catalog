/// <reference types="react" />
import { Components } from '../../sdk';
export interface IPendingResetPasswordExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, IPendingResetPasswordExtension> {
}
export declare const PendingResetPasswordPage: (props: IProps) => JSX.Element;
