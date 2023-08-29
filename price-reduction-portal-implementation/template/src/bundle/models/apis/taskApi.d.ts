import { PriceReduction, Rest } from '..';
import * as SDK from '@team_yumi/sdk';
import { AxiosResponse } from 'axios';
import { FilterQuery } from 'mongoose';
interface IConfig {
    baseURL: string;
    bearerToken?: string;
}
interface ITaskResponse {
    data: PriceReduction.Task.ITask;
}
export default class TaskApi extends SDK.Lib.RESTClient {
    constructor(config: IConfig);
    /**
     * Save task
     * @param ITask
     * @returns {Promise<Task.ITask> | error }
     * @memberof TaskApi
     */
    save(task: PriceReduction.Task.ITask): Promise<AxiosResponse<ITaskResponse>>;
    list(filter: FilterQuery<PriceReduction.Request.IRequest>, keyTab: string, limit: number, offset: number, sort: Rest.ListParamsSort): Promise<PriceReduction.Task.ITask[]>;
}
export {};
