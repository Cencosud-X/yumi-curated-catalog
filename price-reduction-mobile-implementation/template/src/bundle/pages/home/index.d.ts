/// <reference types="react" />
import { FilterQuery } from "mongoose";
import { PriceReduction, Rest } from "@yumi/models";
import { Components } from '../../sdk';
export interface IHomePageExtension extends Components.IPageExtensions {
    pagination?: {
        rowsPerPage?: number;
    };
    labels: {
        [key in PriceReduction.Request.Status]: string;
    };
    infoStore: {
        store: string;
        country: string;
    };
    triggers: {
        getData: (filter: FilterQuery<PriceReduction.Request.IRequest>, keyTab: string, offset: number, limit: number, sort: Rest.ListParamsSort) => Promise<{
            data: PriceReduction.Request.IRequest[];
            total: number;
        }>;
    };
}
export interface IProps extends Components.IPageProps<{}, IHomePageExtension> {
}
export declare function HomePage(props: IProps): JSX.Element;
