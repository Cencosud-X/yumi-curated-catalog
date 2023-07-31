export declare type FilterQuery = {
    [key: string]: unknown;
};
export declare type ListParamsSort = {
    [key: string]: string | number;
};
export declare class IListParams<T> {
    filter?: FilterQuery;
    offset?: number;
    limit?: number;
    sort?: ListParamsSort;
}
