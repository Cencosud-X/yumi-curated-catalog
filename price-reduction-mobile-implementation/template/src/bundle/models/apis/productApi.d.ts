import { PriceReduction } from '..';
import * as SDK from '@team_yumi/sdk';
interface IConfig {
    baseURL: string;
}
export default class ProductApi extends SDK.Lib.RESTClient {
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
