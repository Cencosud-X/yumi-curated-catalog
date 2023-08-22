import { Interfaces, Rest } from '..';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
}
export default class ProductsApi extends BaseRest {
    constructor(config: IConfig);
    /**
   * Get product by filter
   * @param params
   * @returns {Promise<Product.IProduct> | error }
   * @memberof ProductClient
   */
    getProducts(filter?: {
        [key: string]: unknown;
    }): Promise<Rest.IArrayRestResponse<Interfaces.ProductsInterfaces.IProduct>>;
    createProduct(params: any): Promise<any>;
}
export {};
