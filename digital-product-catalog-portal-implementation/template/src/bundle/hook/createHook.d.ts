export declare const ActionTypes: {
    PAGE_INIT: string;
    PAGE_LOAD: string;
    PAGE_LOAD_FINISH: string;
    REQUEST_FAILURE: string;
    LOAD_MORE: string;
    REQUEST_SUCCESS: string;
};
export declare const initialState: {
    data: never[];
    previous: never[];
    params: {
        offset: number;
        limit: number;
    };
    error: null;
    hasMore: boolean;
    isLoading: boolean;
    loadingPage: boolean;
};
export declare function reducer(state: any, action: any): any;
export declare function createHook(request: any, initialData?: any): (preloadParams: any) => {
    data: any;
    error: any;
    isLoading: any;
    performRequest: (args: any) => any;
};
