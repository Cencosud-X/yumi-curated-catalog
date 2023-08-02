import { PriceReduction } from '..';
import { Rest } from '..';
import * as SDK from '@team_yumi/sdk';
interface IConfig {
    baseURL: string;
}
export default class ValidityApi extends SDK.Lib.RESTClient {
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
