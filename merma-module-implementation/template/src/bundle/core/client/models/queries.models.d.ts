import { z } from 'zod';
export declare const meatStockResponseSchema: z.ZodObject<{
    result: z.ZodArray<z.ZodObject<{
        units: z.ZodNumber;
        image: z.ZodString;
        name: z.ZodString;
        ean: z.ZodString;
        sku: z.ZodString;
        netWeight: z.ZodNumber;
        expirationDate: z.ZodDate;
        usefulLifeLimit: z.ZodDate;
        alertType: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
    }, "strip", z.ZodTypeAny, {
        image: string;
        name: string;
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        units: number;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }, {
        image: string;
        name: string;
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        units: number;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        image: string;
        name: string;
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        units: number;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }[];
}, {
    result: {
        image: string;
        name: string;
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        units: number;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }[];
}>;
export declare type MeatStockResponse = z.infer<typeof meatStockResponseSchema>;
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
export declare type MassControlResponseSchema = z.infer<typeof massFlowResponseSchema>;
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
        alertType: "warning" | "none" | "danger";
        tally?: string | undefined;
        barcode?: string | undefined;
    }, {
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        alertType: "warning" | "none" | "danger";
        tally?: string | undefined;
        barcode?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        alertType: "warning" | "none" | "danger";
        tally?: string | undefined;
        barcode?: string | undefined;
    }[];
    productDetails: {
        image: string;
        name: string;
        ean: string;
        sku: string;
    };
}, {
    result: {
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        alertType: "warning" | "none" | "danger";
        tally?: string | undefined;
        barcode?: string | undefined;
    }[];
    productDetails: {
        image: string;
        name: string;
        ean: string;
        sku: string;
    };
}>;
export declare const meatStockProducts: z.ZodObject<{
    units: z.ZodNumber;
    image: z.ZodString;
    name: z.ZodString;
    ean: z.ZodString;
    sku: z.ZodString;
    netWeight: z.ZodNumber;
    expirationDate: z.ZodDate;
    usefulLifeLimit: z.ZodDate;
    alertType: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
}, "strip", z.ZodTypeAny, {
    image: string;
    name: string;
    ean: string;
    sku: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    units: number;
    alertType: "error" | "warning" | "info" | "success" | "neutral";
}, {
    image: string;
    name: string;
    ean: string;
    sku: string;
    netWeight: number;
    expirationDate: Date;
    usefulLifeLimit: Date;
    units: number;
    alertType: "error" | "warning" | "info" | "success" | "neutral";
}>;
export declare type MeatStocResultkResponse = z.infer<typeof meatStockProducts>;
export declare const massControlResultSchema: z.ZodObject<{
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
export declare type MassControlResultkResponse = z.infer<typeof massControlResultSchema>;
export declare const productDetailsSchema: z.ZodObject<{
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
export declare const unitSchema: z.ZodObject<{
    usefulLifeLimit: z.ZodString;
    alertType: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
    tally: z.ZodString;
    ean: z.ZodString;
    sku: z.ZodString;
    netWeight: z.ZodNumber;
    expirationDate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tally: string;
    ean: string;
    sku: string;
    netWeight: number;
    expirationDate: string;
    usefulLifeLimit: string;
    alertType: "error" | "warning" | "info" | "success" | "neutral";
}, {
    tally: string;
    ean: string;
    sku: string;
    netWeight: number;
    expirationDate: string;
    usefulLifeLimit: string;
    alertType: "error" | "warning" | "info" | "success" | "neutral";
}>;
export declare type ProductStockUnitsResponse = z.infer<typeof unitSchema>;
export declare const resultSchema: z.ZodObject<{
    index: z.ZodNumber;
    usefulLifeDays: z.ZodNumber;
    alertType: z.ZodString;
    noticeLevel: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
    units: z.ZodArray<z.ZodObject<{
        usefulLifeLimit: z.ZodString;
        alertType: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
        tally: z.ZodString;
        ean: z.ZodString;
        sku: z.ZodString;
        netWeight: z.ZodNumber;
        expirationDate: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tally: string;
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: string;
        usefulLifeLimit: string;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }, {
        tally: string;
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: string;
        usefulLifeLimit: string;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
    usefulLifeDays: number;
    units: {
        tally: string;
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: string;
        usefulLifeLimit: string;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }[];
    alertType: string;
    index: number;
}, {
    noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
    usefulLifeDays: number;
    units: {
        tally: string;
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: string;
        usefulLifeLimit: string;
        alertType: "error" | "warning" | "info" | "success" | "neutral";
    }[];
    alertType: string;
    index: number;
}>;
export declare type ProductStockResulResponse = z.infer<typeof resultSchema>;
export declare const productStockSchema: z.ZodObject<{
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
        alertType: z.ZodString;
        noticeLevel: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
        units: z.ZodArray<z.ZodObject<{
            usefulLifeLimit: z.ZodString;
            alertType: z.ZodEnum<["info", "success", "warning", "error", "neutral"]>;
            tally: z.ZodString;
            ean: z.ZodString;
            sku: z.ZodString;
            netWeight: z.ZodNumber;
            expirationDate: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tally: string;
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: string;
            usefulLifeLimit: string;
            alertType: "error" | "warning" | "info" | "success" | "neutral";
        }, {
            tally: string;
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: string;
            usefulLifeLimit: string;
            alertType: "error" | "warning" | "info" | "success" | "neutral";
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
        usefulLifeDays: number;
        units: {
            tally: string;
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: string;
            usefulLifeLimit: string;
            alertType: "error" | "warning" | "info" | "success" | "neutral";
        }[];
        alertType: string;
        index: number;
    }, {
        noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
        usefulLifeDays: number;
        units: {
            tally: string;
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: string;
            usefulLifeLimit: string;
            alertType: "error" | "warning" | "info" | "success" | "neutral";
        }[];
        alertType: string;
        index: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        noticeLevel: "error" | "warning" | "info" | "success" | "neutral";
        usefulLifeDays: number;
        units: {
            tally: string;
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: string;
            usefulLifeLimit: string;
            alertType: "error" | "warning" | "info" | "success" | "neutral";
        }[];
        alertType: string;
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
            tally: string;
            ean: string;
            sku: string;
            netWeight: number;
            expirationDate: string;
            usefulLifeLimit: string;
            alertType: "error" | "warning" | "info" | "success" | "neutral";
        }[];
        alertType: string;
        index: number;
    }[];
    productDetails: {
        image: string;
        name: string;
        ean: string;
        sku: string;
    };
}>;
export declare type ProductStockResponse = z.infer<typeof productStockSchema>;
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
export declare type InitialConfigResponse = z.infer<typeof initialConfigSchema>;
