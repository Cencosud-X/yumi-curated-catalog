import * as React from 'react';
import { IStaticParams } from '../models';
import { PlanogramsPagesEnum } from '../core/models';
export interface IModuleContext {
    country: string;
    page: PlanogramsPagesEnum;
    setPage: (data: PlanogramsPagesEnum) => void;
}
export declare const PlanogramContext: React.Context<IModuleContext>;
interface IProps {
    children: React.ReactNode;
    params: IStaticParams;
}
export declare const PlanogramProvider: React.FC<IProps>;
export {};
