import * as SDK from '@yumi/sdk';
import * as Models from '../models';
export declare class Section extends SDK.Clients.RESTClient {
    getAll(country: string, flag: string, store: string): Promise<Models.Core.Section.TModel[]>;
}
declare const _default: Section;
export default _default;
