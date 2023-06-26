import { BaseResponse } from "./base.response";
export interface SaveProductResponse extends BaseResponse {
    data: {
        base_unit: string;
        description: string;
        ean: string;
        image_url: string;
        scan_continue: number;
        scan_last_continue: number;
        scan_last_quantity: number;
        scan_quantity: number;
        scan_total: number;
        sku: string;
    };
}
