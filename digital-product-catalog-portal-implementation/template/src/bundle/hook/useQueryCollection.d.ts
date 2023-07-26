export interface IReturnHookQueryCollection {
    queryParams: any;
    total: number;
    limit: number;
    offset: number;
    data: any[];
    hasNext: boolean;
    setQueryParams: any;
    setTotal: any;
    setLimit: any;
    setOffset: any;
    setData: any;
}
declare const _default: <T>(params: any) => IReturnHookQueryCollection;
export default _default;
