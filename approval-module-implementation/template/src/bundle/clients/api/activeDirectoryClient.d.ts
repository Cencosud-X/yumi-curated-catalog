import AxiosProvider from './axios/axios.provider';
declare class AdAPI extends AxiosProvider {
    constructor();
    getAdByEmail(): Promise<any>;
}
declare const adAPI: AdAPI;
export default adAPI;
