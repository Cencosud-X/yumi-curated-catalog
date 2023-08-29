import { FilterQuery } from 'mongoose';
export declare type ListParamsSort = {
    [key: string]: string | number;
};
export declare class IListParams<T> {
    filter?: FilterQuery<T>;
    offset?: number;
    limit?: number;
    sort?: ListParamsSort;
}
