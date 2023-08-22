import { AxiosError } from 'axios';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
}
interface ILoginConfig {
    email: string;
    country_code: string;
    password: string;
}
export default class AuthApi extends BaseRest {
    prefix: string;
    constructor(config: IConfig);
    /**
     * @param params
     * @returns {Promise<any> | AxiosError }
     */
    me(): Promise<any | AxiosError>;
    login(params: ILoginConfig): Promise<any | AxiosError>;
    logout(): Promise<any | AxiosError>;
}
export {};
