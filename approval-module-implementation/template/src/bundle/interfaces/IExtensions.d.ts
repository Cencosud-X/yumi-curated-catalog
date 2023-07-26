/// <reference types="react" />
import { Components } from '../sdk';
import { IApprovalEnvs, IApprovalTypes, IGenericApproval } from './IApprovalTypes';
export interface IApprovalCenterExtension extends Components.IPageExtensions {
    env: IApprovalEnvs;
    approval_types: IApprovalTypes;
    approval_extension?: (props?: any) => JSX.Element;
    handleAnalytics?: (approval: IGenericApproval, action: 'approve' | 'reject' | 'giveback' | 'discard') => void;
}
export interface IApprovalModuleOverride extends Components.IModuleOverride {
    extensions?: {
        approval_center?: IApprovalCenterExtension;
    };
    routes?: Components.IModuleRoute[];
}
