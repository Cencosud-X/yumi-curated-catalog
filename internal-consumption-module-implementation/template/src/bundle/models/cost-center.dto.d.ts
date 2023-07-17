import { z } from "zod";
declare const CostCenterSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
}, {
    id: string;
    name: string;
}>;
export declare type CostCenter = z.infer<typeof CostCenterSchema>;
export {};
