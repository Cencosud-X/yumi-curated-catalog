import { z } from 'zod';
declare const productInformationExitSchema: z.ZodObject<{
    tally: z.ZodString;
    price: z.ZodNumber;
    ntrStock: z.ZodNumber;
    averageSale: z.ZodNumber;
    image: z.ZodString;
    name: z.ZodString;
    ean: z.ZodString;
    sku: z.ZodString;
    provider: z.ZodString;
    brand: z.ZodString;
    netWeight: z.ZodNumber;
    expirationDate: z.ZodDate;
    usefulLifeLimit: z.ZodDate;
    noticeLevel: z.ZodEnum<["error", "warning", "info", "success", "neutral"]>;
    usefulLifeDays: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    tally: string;
    price: number;
    ntrStock: number;
    averageSale: number;
    image: string;
    name: string;
    ean: string;
    sku: string;
    provider: string;
    brand: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
    usefulLifeDays: number;
}, {
    tally: string;
    price: number;
    ntrStock: number;
    averageSale: number;
    image: string;
    name: string;
    ean: string;
    sku: string;
    provider: string;
    brand: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
    usefulLifeDays: number;
}>;
export declare type ProductInformationExitResponse = z.infer<typeof productInformationExitSchema>;
declare const productExitBodySchema: z.ZodUnion<[z.ZodObject<{
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
export declare type ProductExitBd = z.infer<typeof productExitBodySchema>;
export {};
