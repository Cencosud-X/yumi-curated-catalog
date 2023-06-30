import { CostCenter } from "../models/cost-center.dto";
import RESTClient from "./rest.client";
declare class ModuleClient extends RESTClient {
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
declare const ModuleClientInstnace: ModuleClient;
export default ModuleClientInstnace;
