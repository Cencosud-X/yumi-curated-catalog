import { AxiosError } from 'axios';
import { Rest } from '..';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
}
export default class CategoriesApi extends BaseRest {
    constructor(config: IConfig);
    /**
     * list Categories using params
     * @param params
     * @returns {Promise<IArrayRestResponse<Reason.IReason>> | AxiosError }
     * @memberof ReasonClient
     */
    list(params?: Rest.IListParams<any> | any): Promise<Rest.IArrayRestResponse<any> | AxiosError>;
}
export {};
