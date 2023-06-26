import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
declare type Headers = {
    Authorization: string;
    [name: string]: string | null | undefined | number;
};
declare type Config = AxiosRequestConfig & {
    headers?: Headers;
    params?: Record<string, string | number>;
};
declare abstract class AxiosProvider {
    private config;
    private axios;
    constructor(config: Config);
    private addInterceptors;
    protected onRequest(config: AxiosRequestConfig): Promise<AxiosRequestConfig>;
    protected onRequestError(error: AxiosError): Promise<AxiosError>;
    protected onResponse(response: AxiosResponse): Promise<AxiosResponse>;
    protected onErrorResponse(error: AxiosError): Promise<AxiosError>;
    get<T>(uri: string, params?: {}): Promise<T>;
    post<T>(uri: string, data: unknown, params?: {}): Promise<T>;
    put<T>(uri: string, data: unknown, params?: {}): Promise<T>;
    delete<T = void>(uri: string, params?: {}, data?: {}): Promise<void>;
    patch<T>(uri: string, data: unknown, params?: {}): Promise<T>;
    setAutorization(token_type: string | undefined, token: string | undefined): void;
    setBaseUrl(url: string): void;
    private mergeConfigs;
}
export default AxiosProvider;
