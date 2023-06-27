import { z } from 'zod';
export declare const productInfoResponseSchema: z.ZodUnion<[z.ZodObject<{
    price: z.ZodNumber;
    ntrStock: z.ZodNumber;
    averageSale: z.ZodNumber;
    image: z.ZodString;
    name: z.ZodString;
    provider: z.ZodString;
    brand: z.ZodString;
    ean: z.ZodString;
    sku: z.ZodString;
    barcode: z.ZodString;
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
    barcode: string;
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
    barcode: string;
}>, z.ZodObject<{
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
}>]>;
export declare type ProductInfoResponse = z.infer<typeof productInfoResponseSchema>;
export declare const productEntryBodySchema: z.ZodUnion<[z.ZodObject<{
    tally: z.ZodString;
    netWeight: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    tally: string;
    netWeight?: number | undefined;
}, {
    tally: string;
    netWeight?: number | undefined;
}>, z.ZodObject<{
    barcode: z.ZodString;
    expirationDate: z.ZodDate;
    netWeight: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    expirationDate: Date;
    barcode: string;
    netWeight?: number | undefined;
}, {
    expirationDate: Date;
    barcode: string;
    netWeight?: number | undefined;
}>]>;
export declare type ProductEntryBody = z.infer<typeof productEntryBodySchema>;
