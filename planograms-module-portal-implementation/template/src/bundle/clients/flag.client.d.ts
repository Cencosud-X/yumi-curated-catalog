import { OptionInterface } from '../models';
import BaseClient from './base.client';
export default class FlagClient extends BaseClient {
    listOptions(): Promise<OptionInterface[]>;
}
