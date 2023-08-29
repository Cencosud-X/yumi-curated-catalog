import { IOption } from '../models';
import BaseClient from './BaseClient';
export interface SectionDto {
    active: boolean;
    code: string;
    name: string;
    sap_code: string;
}
export default class SectionClient extends BaseClient {
    listOptions(): Promise<IOption[]>;
}
