import { BaseResponse } from './base.response';
export interface GetZonificationSavedResponse extends BaseResponse {
    data: {
        furnitureCount: number;
        storageList: any[];
    };
}
