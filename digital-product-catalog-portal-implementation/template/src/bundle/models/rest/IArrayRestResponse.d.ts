import { IHateOASLink } from './IHateOASLink';
export interface IArrayRestResponse<TType> {
    [key: string]: unknown;
    data: Array<TType>;
    offset: number;
    limit: number;
    total: number;
    links?: Array<IHateOASLink>;
}
