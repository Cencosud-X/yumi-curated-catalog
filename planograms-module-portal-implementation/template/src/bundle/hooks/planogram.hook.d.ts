export declare const usePlanogram: () => {
    structure: any;
    getDataStructure: (page?: number | undefined, pageSize?: number | undefined) => void;
    getDataStore: () => Promise<any>;
    getDataSection: (stores: string[]) => Promise<any>;
    getDataCategory: (stores: string[], sections: string[]) => Promise<any>;
    postValidatePlanogram: (request: import("../models").PostValidatePlanogramRequest[]) => Promise<any>;
    postUploadPlanogram: (request: import("../models").PostUploadPlanogramRequest) => Promise<any>;
    isOpenUploadModal: boolean;
    isOpenFilterDrawer: boolean;
    isOpenDetailDrawer: boolean;
    setIsOpenUploadModal: (value: boolean) => void;
    setIsOpenFilterDrawer: (value: boolean) => void;
    setIsOpenDetailDrawer: (value: boolean) => void;
    refreshDataStructure: () => void;
    searcher: string;
    setSearcher: (value: string) => void;
    loadingStructure: boolean;
    totalRows: number;
    setTotalRows: (value: number) => void;
    filters: any;
    setFilters: (value: import("../providers/planogram.context").FiltersInterface) => void;
    clearFilters: () => void;
};