import { PropsWithChildren } from 'react';
import { ApprovalContextData, ApprovalProviderProps } from '../interfaces/IApprovalContext';
export declare const ApprovalContext: import("react").Context<ApprovalContextData>;
export declare const ApprovalProvider: ({ children, historyData, env, approval_types, callback_action, }: PropsWithChildren<ApprovalProviderProps>) => JSX.Element;
