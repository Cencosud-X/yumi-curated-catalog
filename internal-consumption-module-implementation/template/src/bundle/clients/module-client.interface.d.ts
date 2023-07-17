import { CostCenter } from "../models/cost-center.dto";
export interface IModuleClient {
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
