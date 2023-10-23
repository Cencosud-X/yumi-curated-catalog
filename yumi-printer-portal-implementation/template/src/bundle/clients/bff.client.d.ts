import { ICollection, IQueryParams } from '@team_yumi/sdk/src/models/rest';
import { BaseRestClient } from './base.client';
import { PrintRequestDTO } from '../dtos';
export declare class BffClient extends BaseRestClient {
    private static instance;
    static getInstance(baseUrl: string, country: string): BffClient;
    getPrintRequests(queryParams: IQueryParams<Partial<PrintRequestDTO>>): Promise<ICollection<PrintRequestDTO>>;
}
