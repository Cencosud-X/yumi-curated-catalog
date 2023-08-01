import { AxiosError } from 'axios';
import BaseRest from './baseRest';
interface IConfig {
    baseURL: string;
}
export interface FileResponse {
    id: string;
    name: string;
    contentType: string;
    url: string;
    href: string;
}
export default class FilesApi extends BaseRest {
    constructor(config: IConfig);
    save(data: Blob, fileName: string): Promise<FileResponse | AxiosError>;
    delete(id: string): Promise<void | AxiosError>;
    arrayBufferToBase64(buffer: ArrayBuffer): string;
    get(id: string): Promise<string | undefined>;
}
export {};
