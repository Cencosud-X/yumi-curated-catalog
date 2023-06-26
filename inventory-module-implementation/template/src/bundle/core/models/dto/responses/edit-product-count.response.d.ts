import { BaseResponse } from "./base.response";
import { ProductInterface } from "../../interfaces/product.interface";
export interface EditProductCountResponse extends BaseResponse {
    data: ProductInterface;
}
