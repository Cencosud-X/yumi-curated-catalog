import { PriceReduction } from '../models';
export declare class StatusHelper {
    static statusToType(status: PriceReduction.Request.Status): "info" | "success" | "error" | "neutral";
}
