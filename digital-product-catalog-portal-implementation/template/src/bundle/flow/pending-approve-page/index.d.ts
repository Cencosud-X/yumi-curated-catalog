/// <reference types="react" />
import { Components } from '../../sdk';
export interface IPendingApproveExtension extends Components.IPageExtensions {
    triggers?: {};
}
export interface IProps extends Components.IPageProps<{}, IPendingApproveExtension> {
}
export declare const PendingApprovePage: (props: IProps) => JSX.Element;
