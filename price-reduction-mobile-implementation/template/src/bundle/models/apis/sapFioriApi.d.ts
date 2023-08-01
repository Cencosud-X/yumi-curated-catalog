import { PriceReduction } from '..';
interface IConfig {
    baseURL: string;
    userName: string;
    password: string;
}
export default class SapFioriApi {
    private userName;
    private password;
    private baseUrl;
    constructor(config: IConfig);
    /**
     * Get Reasons Sap
     * params not required
     * @returns {Promise<Reasons.IReason[]> | error }
     */
    getReasons(): Promise<PriceReduction.Reason.IReason[]>;
    /**
     * Get Products Sap by EAN and Store
     * @param ean
     * @param store
     * @returns {Promise<Products.IProduct[]> | error }
     */
    getProducts(ean: string, store: string): Promise<PriceReduction.Product.IProductSap>;
    /**
     * save price reduction
     * @param priceReduction
     * @returns {Promise<PriceReduction.Request.IRequest> | error }
     */
    savePriceReduction(priceReduction: PriceReduction.Request.IRequest): Promise<PriceReduction.Request.IResponseSap[]>;
}
export {};
