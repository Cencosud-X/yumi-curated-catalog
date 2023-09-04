/// <reference types="react" />
import { Components } from '../../sdk';
export interface ICreatePasswordExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, ICreatePasswordExtension> {
}
export declare const CreatePasswordPage: (props: IProps) => JSX.Element;
