import * as React from 'react';
import * as Models from '../../../models';
export interface IModuleContext {
    country: string;
    flag: string;
    store: string;
    draft: Models.Core.Approval.TModel | null;
    setDraft: (draft: Models.Core.Approval.TModel | null) => void;
}
export declare const ModuleContext: React.Context<IModuleContext>;
export declare const useContext: () => IModuleContext;
interface IProps {
    children: React.ReactNode;
    params: Models.IStaticParams;
}
export declare const Context: React.FC<IProps>;
export {};
