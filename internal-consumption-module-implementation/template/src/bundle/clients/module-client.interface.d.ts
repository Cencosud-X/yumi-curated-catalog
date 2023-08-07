import { CostCenter } from "../models/cost-center.dto";
import { ICUser } from "../models/user.dto";
/**
 * Module Client
 */
export interface IModuleClient {
    /**
     * Check if module can be accessed
     * @returns a true or false indicator flag
     */
    checkAccess(): Promise<boolean>;
    /**
     * Return User Info used by this module
     */
    getICUser(): Promise<ICUser>;
    /**
     * Load Cost Centers
     * @returns Cost centers array
     */
    getCostCenters(): Promise<CostCenter[]>;
}
export * from '../models/user.dto';
