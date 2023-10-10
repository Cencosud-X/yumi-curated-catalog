import * as SDK from '@team_yumi/sdk';
import * as Models from '../models';
export declare class Approval extends SDK.Lib.RESTClient {
    get(country: string, flag: string, store: string, id: string): Promise<Models.Core.Approval.TModel>;
    getAll(country: string, flag: string, store: string, params?: SDK.Models.REST.IQueryParams): Promise<Models.Core.Approval.TModel[]>;
    update(country: string, flag: string, store: string, id: string, data: Models.Core.Approval.TUpdateModel): Promise<Models.Core.Approval.TModel>;
}
declare const _default: () => Approval;
export default _default;
