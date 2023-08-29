import { AxiosInstance } from 'axios';
interface ICONFIG {
    baseURL: string;
    token?: string;
}
export default class BaseRest {
    protected axios: AxiosInstance;
    protected baseUrl: string;
    constructor(config: ICONFIG);
}
export {};
