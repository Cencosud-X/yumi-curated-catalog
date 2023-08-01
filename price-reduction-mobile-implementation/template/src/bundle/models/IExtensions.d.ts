import { PriceReduction } from "../models";
export default interface IExtensions {
    backendURL: string;
    country: PriceReduction.Request.Country;
    businessUnit: PriceReduction.Request.BusinessUnit;
    homePage?: {
        pagination?: {
            rowsPerPage: number;
        };
    };
}
