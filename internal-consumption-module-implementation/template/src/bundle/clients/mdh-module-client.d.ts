import { CostCenter } from "../models/cost-center.dto";
import { IModuleClient } from "./module-client.interface";
import RESTClient from "./rest.client";
export declare class MDHModuleClient extends RESTClient implements IModuleClient {
    /**
     * Check if authenticated user can access this module
     * @returns a true or false indicator flag
     */
    checkAccess(): Promise<boolean>;
    /**
     * Load Cost Centers
     * @returns Cost centers array
     */
    getCostCenters(): Promise<CostCenter[]>;
}
