import { BaseResponse } from "./base.response";
export interface GetProductResponse extends BaseResponse {
    data: {
        description: string;
        ean: string;
        keySearcher: string;
        sku: number;
        quantity: string;
        uom: string;
        hasCount: boolean;
        metaData: any;
        image_url?: string;
        total?: number;
        lastContinue?: number;
        lastQuantity?: number;
        totalContinue?: number;
        totalQuantity?: number;
    };
}
