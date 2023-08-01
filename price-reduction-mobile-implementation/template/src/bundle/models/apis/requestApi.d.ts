import { PriceReduction } from '..';
import { Rest } from '..';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
}
export default class RequestApi extends BaseRest {
    constructor(config: IConfig);
    /**
     * list request using params
     * @param params
     * @returns {Promise<IArrayRestResponse<Request.IRequest>> | error }
     * @memberof RequestClient
     */
    list(params: Rest.IListParams<PriceReduction.Request.IRequest>): Promise<{
        data: PriceReduction.Request.IRequest[];
        total: number;
    }>;
    /**
     * create request
     * @param data
     * @returns {Promise<Request.IRequest> | error }
     * @memberof RequestClient
     */
    create(data: PriceReduction.Request.IRequest): Promise<PriceReduction.Request.IResponseSap>;
}
export {};
