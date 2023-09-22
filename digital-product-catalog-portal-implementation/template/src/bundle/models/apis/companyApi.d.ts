import { Interfaces } from '..';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
}
export default class CompanyApi extends BaseRest {
    constructor(config: IConfig);
    /**
   * Get product by filter
   * @param params
   * @returns {Promise<Product.IProduct> | error }
   * @memberof ProductClient
   */
    getAssignedSellersOffices(filter?: {
        [key: string]: unknown;
    }): Promise<Interfaces.CompanyInterfaces.IResponseSellers>;
    /**
     * Get product by filter
     * @param params
     * @returns {Promise<Product.IProduct> | error }
     * @memberof ProductClient
     */
    getAddress(filter?: {
        [key: string]: unknown;
    }): Promise<any>;
    /**
     * Post product by filter
     * @param params
     * @returns {Promise<Product.IProduct> | error }
     * @memberof ProductClient
     */
    updateAddress(body: any): Promise<any>;
}
export {};
