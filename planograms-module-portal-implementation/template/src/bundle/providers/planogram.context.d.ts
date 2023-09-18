import * as React from 'react';
import { IStaticParams, PostUploadPlanogramRequest, PostValidatePlanogramRequest } from '../models';
export interface FiltersInterface {
    store_code?: string[];
    section_code?: string[];
    category_code?: string[];
    status?: string[];
}
export interface IModuleContext {
    country: string;
    isOpenFilterDrawer: boolean;
    setIsOpenFilterDrawer: (value: boolean) => void;
    isOpenDetailDrawer: boolean;
    setIsOpenDetailDrawer: (value: boolean) => void;
    isOpenUploadModal: boolean;
    setIsOpenUploadModal: (value: boolean) => void;
    filters: any;
    setFilters: (value: FiltersInterface) => void;
    clearFilters: () => void;
    searcher: string;
    setSearcher: (value: string) => void;
    structure: any;
    loadingStructure: boolean;
    getDataStructure: (page?: number, pageSize?: number) => void;
    getDataStore: () => Promise<any>;
    getDataSection: (stores: string[]) => Promise<any>;
    getDataCategory: (stores: string[], sections: string[]) => Promise<any>;
    postValidatePlanogram: (request: PostValidatePlanogramRequest[]) => Promise<any>;
    postUploadPlanogram: (request: PostUploadPlanogramRequest) => Promise<any>;
    totalRows: number;
    setTotalRows: (value: number) => void;
}
export declare const PlanogramContext: React.Context<IModuleContext>;
interface IProps {
    children: React.ReactNode;
    params: IStaticParams;
}
export declare const PlanogramProvider: React.FC<IProps>;
export {};
