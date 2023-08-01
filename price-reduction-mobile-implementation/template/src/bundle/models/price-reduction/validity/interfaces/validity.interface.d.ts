import { z } from 'zod';
export declare enum Unit {
    HOURS = "hours",
    DAYS = "days",
    MONTHS = "months"
}
export declare const unitConversion: {
    hours: number;
    days: number;
    months: number;
};
export interface IValidity {
    label: string;
    value: string;
    unit?: Unit;
}
export declare const ValidityZodSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
    unit: z.ZodNativeEnum<typeof Unit>;
}, "strip", z.ZodTypeAny, {
    label: string;
    value: string;
    unit: Unit;
}, {
    label: string;
    value: string;
    unit: Unit;
}>;
