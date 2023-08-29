import { IOption } from '../models';
import BaseClient from './BaseClient';
export interface StoreDto {
    id: string;
    name: string;
}
export default class StoreClient extends BaseClient {
    listOptions(flag?: string): Promise<IOption[]>;
}
