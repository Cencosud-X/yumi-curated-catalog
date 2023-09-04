import { AxiosError } from 'axios';
import BaseRest from './baseRest';
import { ILoginConfig, ISignUpValues } from '../interfaces/authinterfaces';
interface IConfig {
    baseURL: string;
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
    activateUser(params: {
        token: string;
    }): Promise<any | AxiosError>;
    signUp(params: ISignUpValues): Promise<any | AxiosError>;
    setPassword(password: string): Promise<any | AxiosError>;
    resetPassword(email: string): Promise<any | AxiosError>;
    resetPasswordWithToken(params: {
        password: string;
        token: string;
    }): Promise<any | AxiosError>;
    logout(): Promise<any | AxiosError>;
}
export {};
