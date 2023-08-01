import { PriceReduction } from '..';
import { Rest } from '..';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
}
export default class ValidityApi extends BaseRest {
    constructor(config: IConfig);
    /**
     * list reason using params
     * @param params
     * @returns {Promise<IArrayRestResponse<Validity.IValidity>> | error }
     * @memberof ValidityClient
     */
    list(params: Rest.IListParams<PriceReduction.Validity.IValidity>): Promise<PriceReduction.Validity.IValidity[]>;
}
export {};
