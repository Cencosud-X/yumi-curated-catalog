import * as SDK from '@team_yumi/sdk';
import * as Models from '../models';
export declare class User extends SDK.Clients.RESTClient {
    getAll(country: string, flag: string, store: string, params: SDK.Models.REST.IQueryParams, signal?: AbortSignal): Promise<SDK.Models.REST.ICollection<Models.Core.User.TModel>>;
    update(country: string, flag: string, store: string, provider: string, identifier: string, data: Models.Core.User.TUpdateModel): Promise<SDK.Models.REST.ICollection<Models.Core.User.TModel>>;
}
declare const _default: User;
export default _default;
