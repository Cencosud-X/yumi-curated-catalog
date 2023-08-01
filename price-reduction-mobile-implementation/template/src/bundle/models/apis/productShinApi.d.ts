import { PriceReduction } from '..';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
    bearerToken?: string;
}
export default class ProductShinApi extends BaseRest {
    constructor(config: IConfig);
    /**
     * Get product by EAN
     * @param params
     * @returns {Promise<Product.IProduct> | error }
     * @memberof ProductClient
     */
    getByEan(ean: string, store: string): Promise<PriceReduction.Product.IProduct>;
}
export {};
