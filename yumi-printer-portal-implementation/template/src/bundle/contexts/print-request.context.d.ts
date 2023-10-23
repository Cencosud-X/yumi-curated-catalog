import { ICollection, IQueryParams } from "@team_yumi/sdk/src/models/rest";
import { PrintRequestDTO } from "@yumi-printer/shared";
import React from "react";
declare type PrintRequestContextData = {
    loading: boolean;
    pending: ICollection<PrintRequestDTO>;
    history: ICollection<PrintRequestDTO>;
    fetchPending: (query: IQueryParams) => Promise<void>;
    fetchHistory: (query: IQueryParams) => Promise<void>;
    fetchAll: () => Promise<void>;
};
export declare const usePrintRequestContext: () => PrintRequestContextData;
export declare const PrintRequestContextProvider: React.FC;
export {};
