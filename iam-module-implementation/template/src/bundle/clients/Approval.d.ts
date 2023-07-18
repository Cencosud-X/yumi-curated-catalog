import * as SDK from '@team_yumi/sdk';
import * as Models from '../models';
export declare class Approval extends SDK.Clients.RESTClient {
    get(id: string): Promise<Models.Core.Approval.TModel>;
    getAll(params: {
        flag: string;
        store: string;
    }): Promise<Models.Core.Approval.TModel[]>;
    create(data: Models.Core.Approval.TCreateModel): Promise<Models.Core.Approval.TModel>;
    update(id: string, data: Models.Core.Approval.TUpdateModel): Promise<Models.Core.Approval.TModel>;
}
declare const _default: Approval;
export default _default;
