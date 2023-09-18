import { IStaticParams } from '../models';
import FlagClient from './flag.client';
import PlanogramClient from './planogram.client';
export interface IClients {
    flagClient: FlagClient;
    planogramClient: PlanogramClient;
}
export default function getClients(params: IStaticParams): IClients;
