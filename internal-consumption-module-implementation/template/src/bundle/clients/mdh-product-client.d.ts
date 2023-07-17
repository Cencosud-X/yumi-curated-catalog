import { Product } from "../models/product.dto";
import { IProductClient } from "./product-client.interface";
import RESTClient from "./rest.client";
export declare class MDHProductClient extends RESTClient implements IProductClient {
    search(code: string): Promise<Product | undefined>;
}
