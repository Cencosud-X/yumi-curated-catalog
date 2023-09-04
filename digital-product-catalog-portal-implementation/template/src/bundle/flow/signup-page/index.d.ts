/// <reference types="react" />
import { Components } from '../../sdk';
export interface ISignUpPageExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, ISignUpPageExtension> {
}
export declare const SignUpPage: (props: IProps) => JSX.Element;
