import PlanogramClient from './planogram.client';
export interface IClients {
    planogramClient: PlanogramClient;
}
export default function getClients(country: string, baseUrl: string): IClients;
