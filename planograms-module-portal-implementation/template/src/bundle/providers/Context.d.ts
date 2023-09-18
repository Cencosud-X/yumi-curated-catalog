import * as React from 'react';
import { IFilters, IQueryData, IStaticParams, StructureInterface } from '../models';
import { IClients } from '../clients';
export interface IModuleContext {
    country: string;
    clients: IClients;
    filters: IFilters | undefined;
    showUpload: boolean;
    showFilters: boolean;
    showToFixed: boolean;
    structureData: IQueryData<StructureInterface> | undefined;
    structureTermSearch: string | undefined;
    setShowFilters: (value: boolean) => void;
    setShowUpload: (value: boolean) => void;
    setShowToFixed: (value: boolean) => void;
    setFilters: (value: IFilters | undefined) => void;
    setStructureTermSearch: (term?: string) => void;
}
export declare const ModuleContext: React.Context<IModuleContext>;
export declare const useContext: () => IModuleContext;
interface IProps {
    children: React.ReactNode;
    params: IStaticParams;
}
export declare const Context: React.FC<IProps>;
export {};
