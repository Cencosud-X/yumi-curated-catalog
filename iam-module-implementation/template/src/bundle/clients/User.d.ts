import * as SDK from '@team_yumi/sdk';
import * as Models from '../models';
export declare class User extends SDK.Clients.RESTClient {
    getAll(params: SDK.Models.REST.IQueryParams, signal?: AbortSignal): Promise<SDK.Models.REST.ICollection<Models.Core.User.TModel>>;
    update(provider: string, identifier: string, data: Models.Core.User.TUpdateModel): Promise<SDK.Models.REST.ICollection<Models.Core.User.TModel>>;
}
declare const _default: User;
export default _default;
