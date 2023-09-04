import * as React from 'react';
import { IStaticParams } from '../models';
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
export declare const Context: React.FC<IProps>;
export {};
