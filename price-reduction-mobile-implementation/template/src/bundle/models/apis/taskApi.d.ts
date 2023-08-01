import { PriceReduction } from '..';
import BaseRest from './baseRest';
import { AxiosResponse } from 'axios';
import { FilterQuery } from 'mongoose';
interface IConfig {
    baseURL: string;
    bearerToken?: string;
}
interface ITaskResponse {
    data: PriceReduction.Task.ITask;
}
interface IList {
    data: PriceReduction.Task.ITask[];
    total: number;
}
export default class TaskApi extends BaseRest {
    constructor(config: IConfig);
    /**
     * Save task
     * @param ITask
     * @returns {Promise<Task.ITask> | error }
     * @memberof TaskApi
     */
    save(task: PriceReduction.Task.ITask): Promise<AxiosResponse<ITaskResponse>>;
    list(filterOrigin: FilterQuery<PriceReduction.Request.IRequest>): Promise<IList>;
}
export {};
