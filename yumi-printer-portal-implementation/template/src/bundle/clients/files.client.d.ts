import { BaseRestClient } from './base.client';
export declare class FilesClient extends BaseRestClient {
    private static instance;
    static getInstance(baseUrl: string, country: string): FilesClient;
    uploadDocument(fmData: FormData): Promise<any>;
}
