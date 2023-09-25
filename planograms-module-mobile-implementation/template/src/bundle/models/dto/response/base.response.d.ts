export interface BaseResponse {
    statusCode?: number;
    success?: boolean;
    message?: string;
    error?: string[];
}
