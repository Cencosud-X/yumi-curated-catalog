import { StaticParams } from '../dtos';
import { BffClient } from './bff.client';
import { FilesClient } from './files.client';
export declare type Clients = {
    bffClient: BffClient;
    filesClient: FilesClient;
};
export declare const getClients: (staticParams: StaticParams) => Clients;
