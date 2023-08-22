import { AxiosError } from 'axios';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
    prefix?: string;
}
export default class CartRequestApi extends BaseRest {
    constructor(config: IConfig);
    /**
     * @param params
     * @returns {Promise<any> | AxiosError }
     */
    getCart(): Promise<any | AxiosError>;
    createIntention(params: any): Promise<any>;
}
export {};
