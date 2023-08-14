import { z } from 'zod';
export declare const productInfoResponseSchema: z.ZodObject<{
    ean: z.ZodString;
    price: z.ZodNumber;
    ntrStock: z.ZodNumber;
    averageSale: z.ZodNumber;
    image: z.ZodString;
    name: z.ZodString;
    provider: z.ZodString;
    brand: z.ZodString;
    sku: z.ZodString;
    netWeight: z.ZodNumber;
    expirationDate: z.ZodDate;
    usefulLifeLimit: z.ZodDate;
    noticeLevel: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
    barcode: z.ZodOptional<z.ZodString>;
    tally: z.ZodOptional<z.ZodString>;
    usefulLifeDays: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    ean: string;
    price: number;
    ntrStock: number;
    averageSale: number;
    image: string;
    name: string;
    provider: string;
    brand: string;
    sku: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
    usefulLifeDays: number;
    barcode?: string | undefined;
    tally?: string | undefined;
}, {
    ean: string;
    price: number;
    ntrStock: number;
    averageSale: number;
    image: string;
    name: string;
    provider: string;
    brand: string;
    sku: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
    usefulLifeDays: number;
    barcode?: string | undefined;
    tally?: string | undefined;
}>;
export declare type ProductInfoResponse = z.infer<typeof productInfoResponseSchema>;
export declare const productEntryBodySchema: z.ZodUnion<[z.ZodObject<{
    tally: z.ZodString;
    netWeight: z.ZodOptional<z.ZodNumber>;
    tallyComposition: z.ZodObject<{
        ean: z.ZodOptional<z.ZodString>;
        netWeight: z.ZodOptional<z.ZodNumber>;
        country: z.ZodOptional<z.ZodString>;
        hu: z.ZodOptional<z.ZodString>;
        boxNo: z.ZodOptional<z.ZodString>;
        expDate: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        ean?: string | undefined;
        netWeight?: number | undefined;
        country?: string | undefined;
        hu?: string | undefined;
        boxNo?: string | undefined;
        expDate?: string | undefined;
    }, {
        ean?: string | undefined;
        netWeight?: number | undefined;
        country?: string | undefined;
        hu?: string | undefined;
        boxNo?: string | undefined;
        expDate?: string | undefined;
    }>;
    customWeight: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    tally: string;
    tallyComposition: {
        ean?: string | undefined;
        netWeight?: number | undefined;
        country?: string | undefined;
        hu?: string | undefined;
        boxNo?: string | undefined;
        expDate?: string | undefined;
    };
    netWeight?: number | undefined;
    customWeight?: number | undefined;
}, {
    tally: string;
    tallyComposition: {
        ean?: string | undefined;
        netWeight?: number | undefined;
        country?: string | undefined;
        hu?: string | undefined;
        boxNo?: string | undefined;
        expDate?: string | undefined;
    };
    netWeight?: number | undefined;
    customWeight?: number | undefined;
}>, z.ZodObject<{
    barcode: z.ZodString;
    expirationDate: z.ZodDate;
    netWeight: z.ZodOptional<z.ZodNumber>;
    customWeight: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    expirationDate: Date;
    barcode: string;
    netWeight?: number | undefined;
    customWeight?: number | undefined;
}, {
    expirationDate: Date;
    barcode: string;
    netWeight?: number | undefined;
    customWeight?: number | undefined;
}>]>;
export declare type ProductEntryBody = z.infer<typeof productEntryBodySchema>;
export declare const ProductCartSchema: z.ZodObject<{
    netWeight: z.ZodNumber;
    quantity: z.ZodNumber;
    tally: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    productDetails: z.ZodObject<{
        ean: z.ZodString;
        price: z.ZodNumber;
        ntrStock: z.ZodNumber;
        averageSale: z.ZodNumber;
        image: z.ZodString;
        name: z.ZodString;
        provider: z.ZodString;
        brand: z.ZodString;
        sku: z.ZodString;
        netWeight: z.ZodNumber;
        expirationDate: z.ZodDate;
        usefulLifeLimit: z.ZodDate;
        noticeLevel: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
        barcode: z.ZodOptional<z.ZodString>;
        tally: z.ZodOptional<z.ZodString>;
        usefulLifeDays: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        ean: string;
        price: number;
        ntrStock: number;
        averageSale: number;
        image: string;
        name: string;
        provider: string;
        brand: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        usefulLifeDays: number;
        barcode?: string | undefined;
        tally?: string | undefined;
    }, {
        ean: string;
        price: number;
        ntrStock: number;
        averageSale: number;
        image: string;
        name: string;
        provider: string;
        brand: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        usefulLifeDays: number;
        barcode?: string | undefined;
        tally?: string | undefined;
    }>;
    customWeight: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    netWeight: number;
    quantity: number;
    productDetails: {
        ean: string;
        price: number;
        ntrStock: number;
        averageSale: number;
        image: string;
        name: string;
        provider: string;
        brand: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        usefulLifeDays: number;
        barcode?: string | undefined;
        tally?: string | undefined;
    };
    tally?: string | undefined;
    barcode?: string | undefined;
    customWeight?: number | undefined;
}, {
    netWeight: number;
    quantity: number;
    productDetails: {
        ean: string;
        price: number;
        ntrStock: number;
        averageSale: number;
        image: string;
        name: string;
        provider: string;
        brand: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        usefulLifeDays: number;
        barcode?: string | undefined;
        tally?: string | undefined;
    };
    tally?: string | undefined;
    barcode?: string | undefined;
    customWeight?: number | undefined;
}>;
export declare type ProductCart = z.infer<typeof ProductCartSchema>;
