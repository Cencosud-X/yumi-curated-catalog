import { z } from 'zod';
export interface IReason {
    value: string;
    label: string;
}
export declare const ReasonZodSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: string;
    value: string;
}, {
    label: string;
    value: string;
}>;
