import * as SDK from '@team_yumi/sdk';
import * as Models from '../models';
export declare class Section extends SDK.Lib.RESTClient {
    getAll(country: string, flag: string, store: string): Promise<Models.Core.Section.TModel[]>;
}
declare const _default: () => Section;
export default _default;
