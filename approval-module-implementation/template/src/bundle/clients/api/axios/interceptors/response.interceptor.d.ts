import { AxiosError, AxiosResponse } from 'axios';
/**
 * Interceptor for error response.
 *
 * @param error
 */
export declare const onResponseError: (error: AxiosError) => Promise<AxiosError>;
/**
 *
 * @param response
 * @returns
 */
export declare const onResponse: (response: AxiosResponse) => Promise<AxiosResponse>;
