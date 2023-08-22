import { AxiosInstance, AxiosResponse } from 'axios';
import { Subject } from 'rxjs';
interface ICONFIG {
    baseURL: string;
    token?: string;
    languageKey?: string;
    accessTokenKey?: string;
    timeout?: number;
}
export default class BaseRest {
    protected axios: AxiosInstance;
    protected baseUrl: string;
    protected defaultHeaders: {
        [key: string]: unknown;
    };
    protected accessTokenKey: string;
    protected languageKey: string;
    protected timeout?: number;
    protected token?: string;
    protected listener: Subject<AxiosInstance>;
    constructor(config: ICONFIG);
    pushDefaultHeader(key: string, value: any): void;
    removeDefaultHeader(key: string): void;
    onRequestSuccess: (config: any) => any;
    onError(callback: any, statusCode: number): void;
    handleSuccess(response: AxiosResponse): AxiosResponse<any, any>;
    handleError: (error: any) => Promise<never>;
    getToken(): string | undefined;
    getLanguage(): string;
    removeToken(remember: boolean): void;
    setToken(token: string, remember?: boolean): void;
}
export {};
