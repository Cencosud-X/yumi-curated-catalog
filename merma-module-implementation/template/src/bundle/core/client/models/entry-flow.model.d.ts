import { z } from 'zod';
declare const productInformationEntrySchema: z.ZodObject<{
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
}>;
export declare type ProductInformationEntryResponse = z.infer<typeof productInformationEntrySchema>;
export declare const productEntryBdSchema: z.ZodUnion<[z.ZodObject<{
    tally: z.ZodString;
    netWeight: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    tally: string;
    netWeight: number;
}, {
    tally: string;
    netWeight: number;
}>, z.ZodObject<{
    barcode: z.ZodString;
    expirationDate: z.ZodDate;
    netWeight: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    netWeight: number;
    expirationDate: Date;
    barcode: string;
}, {
    netWeight: number;
    expirationDate: Date;
    barcode: string;
}>]>;
export declare type ProductEntryBd = z.infer<typeof productEntryBdSchema>;
export {};
