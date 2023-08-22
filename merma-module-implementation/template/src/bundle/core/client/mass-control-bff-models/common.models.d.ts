import { z } from 'zod';
export declare const productDetailsSchema: z.ZodObject<{
    price: z.ZodNumber;
    ntrStock: z.ZodNumber;
    averageSale: z.ZodNumber;
    image: z.ZodString;
    name: z.ZodString;
    provider: z.ZodString;
    brand: z.ZodString;
    ean: z.ZodString;
    sku: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    image: string;
    ean: string;
    price: number;
    ntrStock: number;
    averageSale: number;
    provider: string;
    brand: string;
    sku: string;
}, {
    name: string;
    image: string;
    ean: string;
    price: number;
    ntrStock: number;
    averageSale: number;
    provider: string;
    brand: string;
    sku: string;
}>;
export declare const unitDataSchema: z.ZodObject<{
    netWeight: z.ZodNumber;
    expirationDate: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    netWeight: number;
    expirationDate: Date;
}, {
    netWeight: number;
    expirationDate: Date;
}>;
export declare const unitSchema: z.ZodUnion<[z.ZodObject<{
    netWeight: z.ZodNumber;
    expirationDate: z.ZodDate;
    tally: z.ZodString;
}, "strip", z.ZodTypeAny, {
    netWeight: number;
    expirationDate: Date;
    tally: string;
}, {
    netWeight: number;
    expirationDate: Date;
    tally: string;
}>, z.ZodObject<{
    netWeight: z.ZodNumber;
    expirationDate: z.ZodDate;
    barcode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    netWeight: number;
    expirationDate: Date;
    barcode: string;
}, {
    netWeight: number;
    expirationDate: Date;
    barcode: string;
}>]>;
export declare const alertLevelSchema: z.ZodEnum<["none", "warning", "danger"]>;
export declare const noticeLevelSchema: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
export declare const usefulLifeSchema: z.ZodObject<{
    usefulLifeLimit: z.ZodDate;
    noticeLevel: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
}, "strip", z.ZodTypeAny, {
    usefulLifeLimit: Date;
    noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
}, {
    usefulLifeLimit: Date;
    noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
}>;
