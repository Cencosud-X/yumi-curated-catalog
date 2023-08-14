import { Product } from "../models/product.dto";
export interface IProductClient {
    /**
     * Search for a product
     * @param code sku or ean of product
     */
    search(code: string): Promise<Product | undefined>;
    /**
     * Validate a product code SKU/Ean
     * @param code sku or ean of product
     * @returns boolean
     */
    isCodeValid(code: string): boolean;
}
