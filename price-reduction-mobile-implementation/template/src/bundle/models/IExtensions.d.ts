import { PriceReduction } from '../models';
export default interface IExtensions {
    country: keyof typeof PriceReduction.Request.Country;
    businessUnit: keyof typeof PriceReduction.Request.BusinessUnit;
    homePage?: {
        pagination?: {
            rowsPerPage: number;
        };
    };
}
