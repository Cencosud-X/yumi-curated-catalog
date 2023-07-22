import { AxiosError, AxiosRequestConfig } from 'axios';
/**
 * Interceptor for success request.
 *
 * @param request
 * @returns
 */
export declare const onRequest: (request: AxiosRequestConfig) => Promise<AxiosRequestConfig>;
/**
 *
 * @param error * Interceptor for success request.
 *
 * @returns
 */
export declare const onRequestError: (error: AxiosError) => Promise<AxiosError>;
