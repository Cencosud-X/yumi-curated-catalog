import { BaseResponse } from './base.response';
export interface FinishInventoryResponse extends BaseResponse {
    data: {
        userName: string;
        userEmail: string;
        completedAt: string;
    };
}
