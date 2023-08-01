import * as React from 'react';
import { AxiosInstance } from 'axios';
import * as Models from '../models';
import { PriceReduction } from '../models';
import '../plugins/i18n';
export interface IModuleContext {
    country: string;
    businessUnit: string;
    flag: string;
    store: string;
    storeName: string;
    responsible: PriceReduction.Request.IUser;
    axiosBackend: AxiosInstance;
    homePage?: {
        pagination?: {
            rowsPerPage: number;
        };
    };
}
export declare const ModuleContext: React.Context<IModuleContext>;
export declare const useContext: () => IModuleContext;
interface IProps {
    children: React.ReactNode;
    extensions: Models.IExtensions;
}
export declare const Context: React.FC<IProps>;
export {};
