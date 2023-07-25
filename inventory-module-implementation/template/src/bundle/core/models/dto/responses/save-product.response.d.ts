import { BaseResponse } from './base.response';
export interface SaveProductResponse extends BaseResponse {
    data: {
        uom: string;
        description: string;
        ean: string;
        imageUrl: string;
        scanTotalContinue: number;
        scanLastContinue: number;
        scanLastQuantity: number;
        scanTotalQuantity: number;
        scanTotal: number;
        sku: string;
        keySearcher: string;
        metaData: any;
    };
}
