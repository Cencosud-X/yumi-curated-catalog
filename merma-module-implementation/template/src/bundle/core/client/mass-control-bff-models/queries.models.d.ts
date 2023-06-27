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
export declare const meatStockResponseSchema: z.ZodObject<{
    result: z.ZodArray<z.ZodObject<{
        units: z.ZodNumber;
        image: z.ZodString;
        name: z.ZodString;
        ean: z.ZodString;
        sku: z.ZodString;
        totalWeight: z.ZodNumber;
        nearestUsefulLifeLimit: z.ZodDate;
        alertType: z.ZodEnum<["error", "warning", "info", "success", "neutral"]>;
    }, "strip", z.ZodTypeAny, {
        image: string;
        name: string;
        ean: string;
        sku: string;
        units: number;
        totalWeight: number;
        nearestUsefulLifeLimit: Date;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }, {
        image: string;
        name: string;
        ean: string;
        sku: string;
        units: number;
        totalWeight: number;
        nearestUsefulLifeLimit: Date;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        image: string;
        name: string;
        ean: string;
        sku: string;
        units: number;
        totalWeight: number;
        nearestUsefulLifeLimit: Date;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }[];
}, {
    result: {
        image: string;
        name: string;
        ean: string;
        sku: string;
        units: number;
        totalWeight: number;
        nearestUsefulLifeLimit: Date;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }[];
}>;
export declare type MeatStockResponse = z.infer<typeof meatStockResponseSchema>;
export declare const meatStockItemResponseSchema: z.ZodObject<{
    units: z.ZodNumber;
    image: z.ZodString;
    name: z.ZodString;
    ean: z.ZodString;
    sku: z.ZodString;
    totalWeight: z.ZodNumber;
    nearestUsefulLifeLimit: z.ZodDate;
    alertType: z.ZodEnum<["error", "warning", "info", "success", "neutral"]>;
}, "strip", z.ZodTypeAny, {
    image: string;
    name: string;
    ean: string;
    sku: string;
    units: number;
    totalWeight: number;
    nearestUsefulLifeLimit: Date;
    alertType: "error" | "warning" | "info" | "success" | "neutral";
}, {
    image: string;
    name: string;
    ean: string;
    sku: string;
    units: number;
    totalWeight: number;
    nearestUsefulLifeLimit: Date;
    alertType: "error" | "warning" | "info" | "success" | "neutral";
}>;
export declare type MeatStockItemResponse = z.infer<typeof meatStockItemResponseSchema>;
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
    }, "strip", z.ZodTypeAny, {
        image: string;
        name: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        movementType: "entry" | "exit";
        movementDate: Date;
        responsible: string;
        tally?: string | undefined;
        barcode?: string | undefined;
        exitReason?: string | undefined;
    }, {
        image: string;
        name: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        movementType: "entry" | "exit";
        movementDate: Date;
        responsible: string;
        tally?: string | undefined;
        barcode?: string | undefined;
        exitReason?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        image: string;
        name: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        movementType: "entry" | "exit";
        movementDate: Date;
        responsible: string;
        tally?: string | undefined;
        barcode?: string | undefined;
        exitReason?: string | undefined;
    }[];
}, {
    result: {
        image: string;
        name: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        movementType: "entry" | "exit";
        movementDate: Date;
        responsible: string;
        tally?: string | undefined;
        barcode?: string | undefined;
        exitReason?: string | undefined;
    }[];
}>;
export declare type MassFlowResponse = z.infer<typeof massFlowResponseSchema>;
export declare const massFlowResultResponseSchema: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    image: string;
    name: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    movementType: "entry" | "exit";
    movementDate: Date;
    responsible: string;
    tally?: string | undefined;
    barcode?: string | undefined;
    exitReason?: string | undefined;
}, {
    image: string;
    name: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    movementType: "entry" | "exit";
    movementDate: Date;
    responsible: string;
    tally?: string | undefined;
    barcode?: string | undefined;
    exitReason?: string | undefined;
}>;
export declare type MassControlResultResponse = z.infer<typeof massFlowResultResponseSchema>;
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
    alertType: "none" | "warning" | "danger";
    tally?: string | undefined;
    barcode?: string | undefined;
}, {
    ean: string;
    sku: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    alertType: "none" | "warning" | "danger";
    tally?: string | undefined;
    barcode?: string | undefined;
}>;
export declare type ProductStockUnitsResponse = z.infer<typeof productStockUnit>;
export declare const productStockResponseSchema: z.ZodObject<{
    productDetails: z.ZodObject<{
        image: z.ZodString;
        name: z.ZodString;
        ean: z.ZodString;
        sku: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        image: string;
        name: string;
        ean: string;
        sku: string;
    }, {
        image: string;
        name: string;
        ean: string;
        sku: string;
    }>;
    result: z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        usefulLifeDays: z.ZodNumber;
        noticeLevel: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
        units: z.ZodArray<z.ZodObject<{
            usefulLifeLimit: z.ZodDate;
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
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }, {
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
        usefulLifeDays: number;
        units: {
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }[];
        index: number;
    }, {
        noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
        usefulLifeDays: number;
        units: {
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }[];
        index: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
        usefulLifeDays: number;
        units: {
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }[];
        index: number;
    }[];
    productDetails: {
        image: string;
        name: string;
        ean: string;
        sku: string;
    };
}, {
    result: {
        noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
        usefulLifeDays: number;
        units: {
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            alertType: "none" | "warning" | "danger";
            tally?: string | undefined;
            barcode?: string | undefined;
        }[];
        index: number;
    }[];
    productDetails: {
        image: string;
        name: string;
        ean: string;
        sku: string;
    };
}>;
export declare type ProductStockResponse = z.infer<typeof productStockResponseSchema>;
export {};
