import { Product } from "../models/product.dto";
export interface IProductClient {
    search(code: string): Promise<Product | undefined>;
}
