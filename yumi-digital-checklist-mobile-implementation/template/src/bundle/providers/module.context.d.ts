import React from 'react';
import { IStaticParams } from '../dtos';
import { IClients } from '../clients';
export interface IModuleContext {
    country: string;
    clients: IClients;
}
export declare const ModuleContext: React.Context<IModuleContext>;
export declare const useContext: () => IModuleContext;
interface IProps {
    children: React.ReactNode;
    params: IStaticParams;
}
export declare const ModuleContextProvider: React.FC<IProps>;
export {};
