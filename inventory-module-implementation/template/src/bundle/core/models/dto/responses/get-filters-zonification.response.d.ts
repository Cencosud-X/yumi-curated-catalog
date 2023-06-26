import { BaseResponse } from './base.response';
export interface GetFiltersZonificationResponse extends BaseResponse {
    data: {
        zones: string[];
        furnitures: string[];
        users: string[];
    };
}
