import { BaseResponse } from './base.response';
export interface PostValidatePlanogramResponse extends BaseResponse {
    mimetype: string;
    originalName: string;
    size: number;
    errors: [];
    structureId: string;
}
