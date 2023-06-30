import { Product } from "../models/product.dto";
declare class ProductClient {
    search(code: string): Promise<Product | undefined>;
}
declare const ProductClientInstance: ProductClient;
export default ProductClientInstance;
