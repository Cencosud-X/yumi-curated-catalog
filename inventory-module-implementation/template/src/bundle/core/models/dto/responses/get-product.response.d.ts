import { BaseResponse } from './base.response';
export interface GetProductResponse extends BaseResponse {
    data: {
        description: string;
        ean: string;
        keySearcher: string;
        sku: number;
        uom: string;
        hasCount: boolean;
        metaData: any;
        imageUrl?: string;
        quantity: string;
        scanTotal?: number;
        scanLastContinue?: number;
        scanLastQuantity?: number;
        scanTotalContinue?: number;
        scanTotalQuantity?: number;
    };
}
