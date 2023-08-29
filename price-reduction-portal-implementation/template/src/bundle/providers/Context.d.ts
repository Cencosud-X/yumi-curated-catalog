import * as React from 'react';
import { Socket } from 'socket.io-client';
import { IStaticParams } from '../models';
import { IClients } from '../clients';
export interface IModuleContext {
    country: string;
    clients: IClients;
    socket?: Socket;
}
export declare const ModuleContext: React.Context<IModuleContext>;
export declare const useContext: () => IModuleContext;
interface IProps {
    children: React.ReactNode;
    params: IStaticParams;
    socket?: Socket;
}
export declare const Context: React.FC<IProps>;
export {};
