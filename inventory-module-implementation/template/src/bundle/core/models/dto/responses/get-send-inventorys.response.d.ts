import { BaseResponse } from './base.response';
export interface GetSendInventoryResponse extends BaseResponse {
    data: {
        productInventoryId: string;
        description: string;
        inventoryCountNumber: string;
        skusCount: number;
        datetime: string;
        totalCount: any;
    };
}
