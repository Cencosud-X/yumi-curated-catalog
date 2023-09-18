import { BaseResponse } from "./base.response";
export interface ApiResponse<T> extends BaseResponse {
    data: T;
}
