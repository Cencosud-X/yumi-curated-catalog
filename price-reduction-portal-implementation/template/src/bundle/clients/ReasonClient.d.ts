import { IOption } from '../models';
import BaseClient from './BaseClient';
export interface ReasonDto {
    value: string;
    label: string;
}
export default class ReasonClient extends BaseClient {
    listOptions(): Promise<IOption[]>;
}
