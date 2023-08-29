import { FilterQuery } from 'mongoose';
import BaseClient from './BaseClient';
import { PriceReduction, Rest } from '../models';
export interface IList {
    data: PriceReduction.Task.ITask[];
    total: number;
}
export default class TaskClient extends BaseClient {
    list(filter: FilterQuery<PriceReduction.Request.IRequest>, limit: number, offset: number, sort: Rest.ListParamsSort): Promise<IList>;
}
