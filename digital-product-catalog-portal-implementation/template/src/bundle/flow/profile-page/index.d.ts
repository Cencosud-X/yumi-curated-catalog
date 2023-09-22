/// <reference types="react" />
import { Components } from '../../sdk';
export interface IProfilePageExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, IProfilePageExtension> {
}
export declare const ProfilePage: (props: IProps) => JSX.Element;
