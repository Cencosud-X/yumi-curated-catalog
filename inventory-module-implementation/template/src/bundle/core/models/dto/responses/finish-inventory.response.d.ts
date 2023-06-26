import { BaseResponse } from "./base.response";
export interface FinishInventoryResponse extends BaseResponse {
    data: {
        user_name: string;
        user_email: string;
        completed_at: string;
    };
}
