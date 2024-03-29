export interface IReturnHookQueryCollection<T> {
    filters: any;
    loading: boolean;
    errors: any;
    loadMoreLoading: boolean;
    total: number;
    limit: number;
    offset: number;
    data: T[];
    hasNext: boolean;
    setFilters: any;
    setData: any;
    setErrors: any;
    getData: any;
    loadMore: any;
    otherResults: any;
}
declare const _default: <T>(request: (filters?: any) => any, params: any, useInfinite?: boolean) => IReturnHookQueryCollection<T>;
export default _default;
