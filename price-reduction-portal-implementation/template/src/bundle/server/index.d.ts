interface IPagination {
    offset: number;
    limit: number;
    total: number;
}
interface ISorter {
    field: string;
    order: 'ascend' | 'descend';
}
interface IQueryParams {
    pagination?: IPagination;
    sorter?: ISorter;
}
export interface IQueryResult {
    data: Record<string, any>[];
    pagination: IPagination;
    sorter?: ISorter;
}
declare class Server {
    private query;
    queryUsers(params: IQueryParams): Promise<IQueryResult>;
    queryChanges(params: IQueryParams): Promise<IQueryResult>;
}
declare const _default: Server;
export default _default;
