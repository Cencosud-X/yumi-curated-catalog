import { z } from 'zod';
export declare const exitFlowReasonsSchema: z.ZodObject<{
    value: z.ZodString;
    label: z.ZodObject<{
        es: z.ZodString;
        en: z.ZodString;
        pr: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        es: string;
        en: string;
        pr: string;
    }, {
        es: string;
        en: string;
        pr: string;
    }>;
}, "strip", z.ZodTypeAny, {
    value: string;
    label: {
        es: string;
        en: string;
        pr: string;
    };
}, {
    value: string;
    label: {
        es: string;
        en: string;
        pr: string;
    };
}>;
export declare const initialConfigSchema: z.ZodObject<{
    exitFlowReasons: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodObject<{
            es: z.ZodString;
            en: z.ZodString;
            pr: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            es: string;
            en: string;
            pr: string;
        }, {
            es: string;
            en: string;
            pr: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: {
            es: string;
            en: string;
            pr: string;
        };
    }, {
        value: string;
        label: {
            es: string;
            en: string;
            pr: string;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    exitFlowReasons: {
        value: string;
        label: {
            es: string;
            en: string;
            pr: string;
        };
    }[];
}, {
    exitFlowReasons: {
        value: string;
        label: {
            es: string;
            en: string;
            pr: string;
        };
    }[];
}>;
export declare type InitialConfig = z.infer<typeof initialConfigSchema>;
export declare const itemMeatStockSchema: z.ZodObject<{
    units: z.ZodNumber;
    image: z.ZodString;
    name: z.ZodString;
    ean: z.ZodString;
    sku: z.ZodString;
    totalWeight: z.ZodNumber;
    quantityOnWarning: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    image: string;
    ean: string;
    sku: string;
    units: number;
    totalWeight: number;
    quantityOnWarning: number;
}, {
    name: string;
    image: string;
    ean: string;
    sku: string;
    units: number;
    totalWeight: number;
    quantityOnWarning: number;
}>;
export declare const meatStockResponseSchema: z.ZodObject<{
    result: z.ZodArray<z.ZodObject<{
        units: z.ZodNumber;
        image: z.ZodString;
        name: z.ZodString;
        ean: z.ZodString;
        sku: z.ZodString;
        totalWeight: z.ZodNumber;
        quantityOnWarning: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        image: string;
        ean: string;
        sku: string;
        units: number;
        totalWeight: number;
        quantityOnWarning: number;
    }, {
        name: string;
        image: string;
        ean: string;
        sku: string;
        units: number;
        totalWeight: number;
        quantityOnWarning: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        name: string;
        image: string;
        ean: string;
        sku: string;
        units: number;
        totalWeight: number;
        quantityOnWarning: number;
    }[];
}, {
    result: {
        name: string;
        image: string;
        ean: string;
        sku: string;
        units: number;
        totalWeight: number;
        quantityOnWarning: number;
    }[];
}>;
export declare type ItemMeatStock = z.infer<typeof itemMeatStockSchema>;
export declare type MeatStockResponse = z.infer<typeof meatStockResponseSchema>;
export declare const massFlowMovementSchema: z.ZodObject<{
    movementType: z.ZodEnum<["entry", "exit"]>;
    movementDate: z.ZodDate;
    tally: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    image: z.ZodString;
    name: z.ZodString;
    responsible: z.ZodString;
    netWeight: z.ZodNumber;
    expirationDate: z.ZodDate;
    usefulLifeLimit: z.ZodDate;
    exitReason: z.ZodOptional<z.ZodString>;
    usefulLifeDays: z.ZodNumber;
    alertType: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
    movementEntryDate: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    name: string;
    image: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    usefulLifeDays: number;
    movementType: "entry" | "exit";
    movementDate: Date;
    responsible: string;
    alertType: "info" | "success" | "warning" | "error" | "neutral";
    tally?: string | undefined;
    barcode?: string | undefined;
    exitReason?: string | undefined;
    movementEntryDate?: Date | undefined;
}, {
    name: string;
    image: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    usefulLifeDays: number;
    movementType: "entry" | "exit";
    movementDate: Date;
    responsible: string;
    alertType: "info" | "success" | "warning" | "error" | "neutral";
    tally?: string | undefined;
    barcode?: string | undefined;
    exitReason?: string | undefined;
    movementEntryDate?: Date | undefined;
}>;
export declare type MassFlowResponseMovement = z.infer<typeof massFlowMovementSchema>;
export declare const massFlowResponseSchema: z.ZodObject<{
    result: z.ZodArray<z.ZodObject<{
        movementType: z.ZodEnum<["entry", "exit"]>;
        movementDate: z.ZodDate;
        tally: z.ZodOptional<z.ZodString>;
        barcode: z.ZodOptional<z.ZodString>;
        image: z.ZodString;
        name: z.ZodString;
        responsible: z.ZodString;
        netWeight: z.ZodNumber;
        expirationDate: z.ZodDate;
        usefulLifeLimit: z.ZodDate;
        exitReason: z.ZodOptional<z.ZodString>;
        usefulLifeDays: z.ZodNumber;
        alertType: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
        movementEntryDate: z.ZodOptional<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        image: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        usefulLifeDays: number;
        movementType: "entry" | "exit";
        movementDate: Date;
        responsible: string;
        alertType: "info" | "success" | "warning" | "error" | "neutral";
        tally?: string | undefined;
        barcode?: string | undefined;
        exitReason?: string | undefined;
        movementEntryDate?: Date | undefined;
    }, {
        name: string;
        image: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        usefulLifeDays: number;
        movementType: "entry" | "exit";
        movementDate: Date;
        responsible: string;
        alertType: "info" | "success" | "warning" | "error" | "neutral";
        tally?: string | undefined;
        barcode?: string | undefined;
        exitReason?: string | undefined;
        movementEntryDate?: Date | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        name: string;
        image: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        usefulLifeDays: number;
        movementType: "entry" | "exit";
        movementDate: Date;
        responsible: string;
        alertType: "info" | "success" | "warning" | "error" | "neutral";
        tally?: string | undefined;
        barcode?: string | undefined;
        exitReason?: string | undefined;
        movementEntryDate?: Date | undefined;
    }[];
}, {
    result: {
        name: string;
        image: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        usefulLifeDays: number;
        movementType: "entry" | "exit";
        movementDate: Date;
        responsible: string;
        alertType: "info" | "success" | "warning" | "error" | "neutral";
        tally?: string | undefined;
        barcode?: string | undefined;
        exitReason?: string | undefined;
        movementEntryDate?: Date | undefined;
    }[];
}>;
export declare type MassFlowResponse = z.infer<typeof massFlowResponseSchema>;
export declare const range: z.ZodObject<{
    label: z.ZodString;
    from: z.ZodNumber;
    to: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    label: string;
    from: number;
    to: number;
}, {
    label: string;
    from: number;
    to: number;
}>;
declare const productStockUnit: z.ZodObject<{
    usefulLifeLimit: z.ZodDate;
    usefulLifeDays: z.ZodNumber;
    alertType: z.ZodEnum<["none", "warning", "danger"]>;
    tally: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    ean: z.ZodString;
    sku: z.ZodString;
    netWeight: z.ZodNumber;
    expirationDate: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    ean: string;
    sku: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    usefulLifeDays: number;
    alertType: "none" | "warning" | "danger";
    tally?: string | undefined;
    barcode?: string | undefined;
}, {
    ean: string;
    sku: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    usefulLifeDays: number;
    alertType: "none" | "warning" | "danger";
    tally?: string | undefined;
    barcode?: string | undefined;
}>;
export declare type ProductStockUnitsResponse = z.infer<typeof productStockUnit>;
declare const productDetailResponseSchema: z.ZodObject<{
    image: z.ZodString;
    name: z.ZodString;
    ean: z.ZodString;
    sku: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    image: string;
    ean: string;
    sku: string;
}, {
    name: string;
    image: string;
    ean: string;
    sku: string;
}>;
declare const productResultResponseSchema: z.ZodObject<{
    index: z.ZodNumber;
    noticeLevel: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
    units: z.ZodArray<z.ZodObject<{
        usefulLifeLimit: z.ZodDate;
        usefulLifeDays: z.ZodNumber;
        alertType: z.ZodEnum<["none", "warning", "danger"]>;
        tally: z.ZodOptional<z.ZodString>;
        barcode: z.ZodOptional<z.ZodString>;
        ean: z.ZodString;
        sku: z.ZodString;
        netWeight: z.ZodNumber;
        expirationDate: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        usefulLifeDays: number;
        alertType: "none" | "warning" | "danger";
        tally?: string | undefined;
        barcode?: string | undefined;
    }, {
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        usefulLifeDays: number;
        alertType: "none" | "warning" | "danger";
        tally?: string | undefined;
        barcode?: string | undefined;
    }>, "many">;
    quantityDaysLimit: z.ZodString;
}, "strip", z.ZodTypeAny, {
    noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
    units: {
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        usefulLifeDays: number;
        alertType: "none" | "warning" | "danger";
        tally?: string | undefined;
        barcode?: string | undefined;
    }[];
    index: number;
    quantityDaysLimit: string;
}, {
    noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
    units: {
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        usefulLifeDays: number;
        alertType: "none" | "warning" | "danger";
        tally?: string | undefined;
        barcode?: string | undefined;
    }[];
    index: number;
    quantityDaysLimit: string;
}>;
export declare const productStockResponseSchema: z.ZodObject<{
    productDetails: z.ZodObject<{
        image: z.ZodString;
        name: z.ZodString;
        ean: z.ZodString;
        sku: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        image: string;
        ean: string;
        sku: string;
    }, {
        name: string;
        image: string;
        ean: string;
        sku: string;
    }>;
    result: z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        noticeLevel: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
        units: z.ZodArray<z.ZodObject<{
            usefulLifeLimit: z.ZodDate;
            usefulLifeDays: z.ZodNumber;
            alertType: z.ZodEnum<["none", "warning", "danger"]>;
            tally: z.ZodOptional<z.ZodString>;
            barcode: z.ZodOptional<z.ZodString>;
            ean: z.ZodString;
            sku: z.ZodString;
            netWeight: z.ZodNumber;
            expirationDate: z.ZodDate;
        }, "strip", z.ZodTypeAny, {
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            usefulLifeDays: number;
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }, {
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            usefulLifeDays: number;
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }>, "many">;
        quantityDaysLimit: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        units: {
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            usefulLifeDays: number;
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }[];
        index: number;
        quantityDaysLimit: string;
    }, {
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        units: {
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            usefulLifeDays: number;
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }[];
        index: number;
        quantityDaysLimit: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    productDetails: {
        name: string;
        image: string;
        ean: string;
        sku: string;
    };
    result: {
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        units: {
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            usefulLifeDays: number;
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }[];
        index: number;
        quantityDaysLimit: string;
    }[];
}, {
    productDetails: {
        name: string;
        image: string;
        ean: string;
        sku: string;
    };
    result: {
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        units: {
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            usefulLifeDays: number;
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }[];
        index: number;
        quantityDaysLimit: string;
    }[];
}>;
export declare type ProductDetailResponse = z.infer<typeof productDetailResponseSchema>;
export declare type ProductResultResponse = z.infer<typeof productResultResponseSchema>;
export declare type ProductStockResponse = z.infer<typeof productStockResponseSchema>;
export {};
