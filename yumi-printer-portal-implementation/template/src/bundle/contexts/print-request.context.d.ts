import { ICollection, IQueryParams } from '@team_yumi/sdk/src/models/rest';
import { PrintRequestDTO } from '../dtos';
import React from 'react';
declare type PrintRequestContextData = {
    loading: boolean;
    pending: ICollection<PrintRequestDTO>;
    history: ICollection<PrintRequestDTO>;
    fetchPending: (query: IQueryParams) => Promise<void>;
    fetchHistory: (query: IQueryParams) => Promise<void>;
    fetchAll: () => Promise<void>;
    uploadDocument: (document: FormData) => Promise<any>;
    updatePrintRequest: (printId: string, file_url: string) => Promise<any>;
};
export declare const usePrintRequestContext: () => PrintRequestContextData;
export declare const PrintRequestContextProvider: React.FC;
export {};
