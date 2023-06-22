import { z } from 'zod';
export declare const productUnitInformationSchema: z.ZodObject<{
    price: z.ZodNumber;
    ntrStock: z.ZodNumber;
    averageSale: z.ZodNumber;
    image: z.ZodString;
    name: z.ZodString;
    provider: z.ZodString;
    brand: z.ZodString;
    ean: z.ZodString;
    sku: z.ZodString;
    netWeight: z.ZodNumber;
    expirationDate: z.ZodDate;
    usefulLifeLimit: z.ZodDate;
    noticeLevel: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
    tally: z.ZodString;
    usefulLifeDays: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    price: number;
    ntrStock: number;
    averageSale: number;
    image: string;
    name: string;
    provider: string;
    brand: string;
    ean: string;
    sku: string;
    netWeight: number;
    expirationDate: Date;
    tally: string;
    usefulLifeLimit: Date;
    noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
    usefulLifeDays: number;
}, {
    price: number;
    ntrStock: number;
    averageSale: number;
    image: string;
    name: string;
    provider: string;
    brand: string;
    ean: string;
    sku: string;
    netWeight: number;
    expirationDate: Date;
    tally: string;
    usefulLifeLimit: Date;
    noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
    usefulLifeDays: number;
}>;
export declare type ProductUnitInformation = z.infer<typeof productUnitInformationSchema>;
export declare const productExitBodySchema: z.ZodUnion<[z.ZodObject<{
    tally: z.ZodString;
    exitReason: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tally: string;
    exitReason: string;
}, {
    tally: string;
    exitReason: string;
}>, z.ZodObject<{
    barcode: z.ZodString;
    exitReason: z.ZodString;
}, "strip", z.ZodTypeAny, {
    barcode: string;
    exitReason: string;
}, {
    barcode: string;
    exitReason: string;
}>]>;
export declare type ProductExitBody = z.infer<typeof productExitBodySchema>;
