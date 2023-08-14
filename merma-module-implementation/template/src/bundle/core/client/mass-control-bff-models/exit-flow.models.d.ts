import { z } from 'zod';
export declare const productUnitInformationSchema: z.ZodObject<{
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
    tally: z.ZodString;
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
    tally: string;
    usefulLifeDays: number;
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
    tally: string;
    usefulLifeDays: number;
}>;
export declare type ProductUnitInformation = z.infer<typeof productUnitInformationSchema>;
export declare const productExitBodySchema: z.ZodUnion<[z.ZodObject<{
    tally: z.ZodString;
    exitReason: z.ZodString;
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
    exitReason: string;
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
export declare const productsInformationSchema: z.ZodObject<{
    ean: z.ZodString;
    image: z.ZodString;
    name: z.ZodString;
    sku: z.ZodString;
    netWeight: z.ZodNumber;
    expirationDate: z.ZodDate;
    usefulLifeLimit: z.ZodDate;
    noticeLevel: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
    tally: z.ZodString;
    usefulLifeDays: z.ZodNumber;
    barcode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    ean: string;
    image: string;
    name: string;
    sku: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
    tally: string;
    usefulLifeDays: number;
    barcode?: string | undefined;
}, {
    ean: string;
    image: string;
    name: string;
    sku: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
    tally: string;
    usefulLifeDays: number;
    barcode?: string | undefined;
}>;
export declare type ProductsInformation = z.infer<typeof productsInformationSchema>;
export declare const productsInformationResponseSchema: z.ZodObject<{
    result: z.ZodArray<z.ZodObject<{
        ean: z.ZodString;
        image: z.ZodString;
        name: z.ZodString;
        sku: z.ZodString;
        netWeight: z.ZodNumber;
        expirationDate: z.ZodDate;
        usefulLifeLimit: z.ZodDate;
        noticeLevel: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
        tally: z.ZodString;
        usefulLifeDays: z.ZodNumber;
        barcode: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        ean: string;
        image: string;
        name: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        tally: string;
        usefulLifeDays: number;
        barcode?: string | undefined;
    }, {
        ean: string;
        image: string;
        name: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        tally: string;
        usefulLifeDays: number;
        barcode?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        ean: string;
        image: string;
        name: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        tally: string;
        usefulLifeDays: number;
        barcode?: string | undefined;
    }[];
}, {
    result: {
        ean: string;
        image: string;
        name: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        tally: string;
        usefulLifeDays: number;
        barcode?: string | undefined;
    }[];
}>;
export declare type ProductsInformationResponse = z.infer<typeof productsInformationResponseSchema>;
