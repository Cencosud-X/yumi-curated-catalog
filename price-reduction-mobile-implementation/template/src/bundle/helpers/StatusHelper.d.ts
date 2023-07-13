import { PriceReduction } from "@yumi/models";
export declare class StatusHelper {
    private readonly labels;
    constructor(labels: {
        [key in PriceReduction.Request.Status]: string;
    } | undefined);
    statusToText(status: PriceReduction.Request.Status): string;
    statusToType(status: PriceReduction.Request.Status): "info" | "success" | "error" | "neutral";
}
