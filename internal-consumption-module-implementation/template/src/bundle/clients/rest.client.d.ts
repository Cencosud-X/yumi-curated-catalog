import { AxiosInstance } from 'axios';
interface IConfig {
    baseURL: string;
    access_token: string;
}
export default class RESTClient {
    protected axios: AxiosInstance;
    protected baseUrl: string;
    protected access_token: string;
    getAuthFromCache(): Promise<any>;
    constructor(config: IConfig);
}
export {};
