import { CostCenter } from "../models/cost-center.dto";
import { ICUser } from "../models/user.dto";
export interface IModuleClient {
    /**
     * Check if authenticated user can access this module
     * @returns a true or false indicator flag
     */
    checkAccess(): Promise<boolean>;
    getICUser(): Promise<ICUser>;
    /**
     * Load Cost Centers
     * @returns Cost centers array
     */
    getCostCenters(): Promise<CostCenter[]>;
}
export * from '../models/user.dto';
