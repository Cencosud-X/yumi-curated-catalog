import React from 'react';
import { StaticParams } from '../dtos';
import { Clients } from '../clients';
declare type ModuleContextData = {
    country: string;
    clients: Clients;
};
declare type IProps = {
    children: React.ReactNode;
    params: StaticParams;
};
export declare const useModuleContext: () => ModuleContextData;
export declare const ModuleContextProvider: React.FC<IProps>;
export {};
