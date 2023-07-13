/// <reference types="react" />
import { PriceReduction } from "@yumi/models";
import { Components } from "../../sdk";
export interface IDetailPageExtension extends Components.IPageExtensions {
    labels: {
        [key in PriceReduction.Request.Status]: string;
    };
    triggers: {
        downloadFile: (file: PriceReduction.Request.IFile) => Promise<string | undefined>;
    };
}
export interface IProps extends Components.IPageProps<{}, IDetailPageExtension> {
}
export declare function DetailPage(props: IProps): JSX.Element;
