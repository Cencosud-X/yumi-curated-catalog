import { AxiosError } from 'axios';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
}
export default class sapApi extends BaseRest {
    prefix: string;
    constructor(config: IConfig);
    /**
     * @param rut
     * @returns {Promise<any> | AxiosError }
     */
    customerValidate(rut: string): Promise<any | AxiosError>;
    /**
    * @param rut
    * @returns {Promise<any> | AxiosError }
    */
    getInfoCompany(sapCode: string): Promise<any | AxiosError>;
}
export {};
