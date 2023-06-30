import { AxiosInstance } from 'axios';
interface IConfig {
    baseURL: string;
}
export default class RESTClient {
    protected axios: AxiosInstance;
    protected baseUrl: string;
    getAuthFromCache(): Promise<any>;
    constructor(config: IConfig);
}
export {};
