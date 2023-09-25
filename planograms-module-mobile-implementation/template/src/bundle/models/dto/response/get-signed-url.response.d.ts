import { BaseResponse } from './base.response';
export interface GetSignedUrlResponse extends BaseResponse {
    data?: {
        signedUrl: string;
    };
}
