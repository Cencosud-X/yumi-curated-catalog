import { z } from 'zod';
export interface IProduct {
    productName: string;
    section: string;
    urlImage: string;
    ean: string;
    sku: string;
    stockDays: number;
    priceType: string;
    previousPrice: number;
    stockNRT: number;
    costoCppIva: number;
    metadata?: Record<string, unknown>;
}
export declare const ProductZodSchema: z.ZodObject<{
    productName: z.ZodString;
    section: z.ZodString;
    urlImage: z.ZodString;
    ean: z.ZodString;
    sku: z.ZodString;
    stockDays: z.ZodNumber;
    priceType: z.ZodString;
    previousPrice: z.ZodNumber;
    stockNRT: z.ZodNumber;
    costoCppIva: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    productName: string;
    section: string;
    urlImage: string;
    ean: string;
    sku: string;
    stockDays: number;
    priceType: string;
    previousPrice: number;
    stockNRT: number;
    costoCppIva: number;
}, {
    productName: string;
    section: string;
    urlImage: string;
    ean: string;
    sku: string;
    stockDays: number;
    priceType: string;
    previousPrice: number;
    stockNRT: number;
    costoCppIva: number;
}>;
