import { StaticParams } from '../dtos';
import { BffClient } from './bff.client';
export declare type Clients = {
    bffClient: BffClient;
};
export declare const getClients: (staticParams: StaticParams) => Clients;
