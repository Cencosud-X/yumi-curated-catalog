import ChecklistClient from './checklist.client';
export interface IClients {
    checklistClient: ChecklistClient;
}
export default function getClients(country: string, baseUrl: string, tokenProvider?: () => Promise<string>): IClients;
