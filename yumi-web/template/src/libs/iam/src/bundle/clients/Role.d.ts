import * as SDK from '@team_yumi/sdk';
import * as Models from '../models';
export declare class Role extends SDK.Lib.RESTClient {
    getAll(country: string, flag: string, store: string): Promise<Models.Core.Role.TModel[]>;
}
declare const _default: () => Role;
export default _default;
