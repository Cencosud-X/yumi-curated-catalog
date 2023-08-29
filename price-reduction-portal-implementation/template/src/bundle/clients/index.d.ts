import { IStaticParams } from '../models';
import TaskClient from './TaskClient';
import FlagClient from './FlagClient';
import StoreClient from './StoreClient';
import SectionClient from './SectionClient';
import ReasonClient from './ReasonClient';
export interface IClients {
    taskClient: TaskClient;
    flagClient: FlagClient;
    storeClient: StoreClient;
    sectionClient: SectionClient;
    reasonClient: ReasonClient;
}
export default function getClients(params: IStaticParams): IClients;
