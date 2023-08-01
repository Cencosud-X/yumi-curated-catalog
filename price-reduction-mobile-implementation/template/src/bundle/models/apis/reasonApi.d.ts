import { PriceReduction } from '..';
import { Rest } from '..';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
}
export default class ReasonApi extends BaseRest {
    constructor(config: IConfig);
    /**
     * list reason using params
     * @param params
     * @returns {Promise<IArrayRestResponse<Reason.IReason>> | error }
     * @memberof ReasonClient
     */
    list(params: Rest.IListParams<PriceReduction.Reason.IReason>): Promise<PriceReduction.Reason.IReason[]>;
}
export {};
