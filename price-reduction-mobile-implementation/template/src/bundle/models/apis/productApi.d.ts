import { PriceReduction } from '..';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
}
export default class ProductApi extends BaseRest {
    constructor(config: IConfig);
    /**
     * Get product by EAN
     * @param params
     * @returns {Promise<Product.IProduct> | error }
     * @memberof ProductClient
     */
    getByEan(ean: string, store?: string): Promise<PriceReduction.Product.IProduct>;
}
export {};
