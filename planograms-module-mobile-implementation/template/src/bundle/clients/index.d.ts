import { IStaticParams } from '../models';
import FlagClient from './flag.client';
import StructureClient from './structure.client';
export interface IClients {
    flagClient: FlagClient;
    structureClient: StructureClient;
}
export default function getClients(params: IStaticParams): IClients;
