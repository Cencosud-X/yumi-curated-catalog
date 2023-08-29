import { IOption } from '../models';
import BaseClient from './BaseClient';
export default class FlagClient extends BaseClient {
    listOptions(): Promise<IOption[]>;
}
