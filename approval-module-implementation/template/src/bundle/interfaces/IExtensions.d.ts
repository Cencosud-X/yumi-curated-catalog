/// <reference types="react" />
import { Components } from '../sdk';
import { IApprovalCallback } from './IApprovalContext';
import { IApprovalEnvs, IApprovalTypes } from './IApprovalTypes';
export interface IApprovalCenterExtension extends Components.IPageExtensions {
    env: IApprovalEnvs;
    approval_types: IApprovalTypes;
    approval_extension?: (props?: any) => JSX.Element;
    callback_action?: IApprovalCallback;
}
export interface IApprovalModuleOverride extends Components.IModuleOverride {
    extensions?: {
        approval_center?: IApprovalCenterExtension;
    };
    routes?: Components.IModuleRoute[];
}
