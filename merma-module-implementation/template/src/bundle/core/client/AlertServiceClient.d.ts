import { AlertResponse } from './alert-service-models';
export declare class AlertServiceClient {
    private baseUrl;
    private token;
    private headers;
    constructor(token: string, baseUrl: string);
    getAlerts(state?: string): Promise<AlertResponse[]>;
    updateAlert(id: string, state?: string): Promise<AlertResponse>;
    getCount(state?: string): Promise<number>;
}
