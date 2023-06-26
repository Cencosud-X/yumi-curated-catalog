import { BaseResponse } from "./base.response";
export interface GetTotalFurnitureResponse extends BaseResponse {
    data: {
        furnitureTotal: number;
    };
}
