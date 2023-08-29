import { z } from 'zod';
import { IReason } from '../../reason';
import { IValidity, Unit } from '../../validity';
import { FileResponse } from '../../files';
export interface IFile extends FileResponse {
    urlThumbnail?: string;
}
export interface IUser {
    name: string;
    email: string;
    userID?: string;
    role: string;
    deviceToken: string;
}
export interface IResponse {
    finalPrice?: number;
    finalPriceValidity?: IValidity;
    respondBy: IUser;
    status: Status.APPROVED | Status.REJECTED;
    comment?: string;
    respondDate: Date;
    validityDate?: Date;
}
export declare enum BusinessUnit {
    MDH = "MDH",
    SM = "SM",
    TxD = "TxD"
}
export declare enum Country {
    CL = "CL",
    CO = "CO",
    AR = "AR",
    PE = "PE",
    BR = "BR"
}
export declare enum Status {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}
export interface IInfoStore {
    country: Country;
    businessUnit: BusinessUnit;
    flag: string;
    store: string;
    storeName: string;
}
export interface IRequest {
    taskID?: string;
    caseNumber?: string;
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
    status: Status;
    country: Country;
    businessUnit: BusinessUnit;
    flag: string;
    store: string;
    storeName: string;
    reason: IReason;
    suggestedPrice: number;
    suggestedPriceValidity: IValidity;
    comment?: string;
    expirationDate?: Date;
    files: IFile[];
    response?: IResponse;
    createdBy: IUser;
    createdAt: Date;
    updatedAt?: Date;
}
export declare const RequestZodSchema: z.ZodObject<{
    taskID: z.ZodString;
    caseNumber: z.ZodOptional<z.ZodString>;
    productName: z.ZodString;
    section: z.ZodString;
    urlImage: z.ZodString;
    ean: z.ZodString;
    sku: z.ZodString;
    stockDays: z.ZodOptional<z.ZodNumber>;
    priceType: z.ZodOptional<z.ZodString>;
    previousPrice: z.ZodNumber;
    stockNRT: z.ZodOptional<z.ZodNumber>;
    costoCppIva: z.ZodNumber;
    status: z.ZodDefault<z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>>;
    country: z.ZodNativeEnum<typeof Country>;
    businessUnit: z.ZodNativeEnum<typeof BusinessUnit>;
    flag: z.ZodString;
    store: z.ZodString;
    reason: z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>;
    suggestedPrice: z.ZodNumber;
    suggestedPriceValidity: z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
        unit: z.ZodNativeEnum<typeof Unit>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
        unit: Unit;
    }, {
        value: string;
        label: string;
        unit: Unit;
    }>;
    comment: z.ZodOptional<z.ZodString>;
    expirationDate: z.ZodOptional<z.ZodDate>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
        urlThumbnail: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
        urlThumbnail?: string | undefined;
    }, {
        name: string;
        url: string;
        urlThumbnail?: string | undefined;
    }>, "many">>;
    createdBy: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        userID: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    }, {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    }>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    taskID: string;
    productName: string;
    section: string;
    urlImage: string;
    ean: string;
    sku: string;
    previousPrice: number;
    costoCppIva: number;
    status: "PENDING" | "APPROVED" | "REJECTED";
    country: Country;
    businessUnit: BusinessUnit;
    flag: string;
    store: string;
    reason: {
        value: string;
        label: string;
    };
    suggestedPrice: number;
    suggestedPriceValidity: {
        value: string;
        label: string;
        unit: Unit;
    };
    createdBy: {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    };
    caseNumber?: string | undefined;
    stockDays?: number | undefined;
    priceType?: string | undefined;
    stockNRT?: number | undefined;
    comment?: string | undefined;
    expirationDate?: Date | undefined;
    files?: {
        name: string;
        url: string;
        urlThumbnail?: string | undefined;
    }[] | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}, {
    taskID: string;
    productName: string;
    section: string;
    urlImage: string;
    ean: string;
    sku: string;
    previousPrice: number;
    costoCppIva: number;
    country: Country;
    businessUnit: BusinessUnit;
    flag: string;
    store: string;
    reason: {
        value: string;
        label: string;
    };
    suggestedPrice: number;
    suggestedPriceValidity: {
        value: string;
        label: string;
        unit: Unit;
    };
    createdBy: {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    };
    caseNumber?: string | undefined;
    stockDays?: number | undefined;
    priceType?: string | undefined;
    stockNRT?: number | undefined;
    status?: "PENDING" | "APPROVED" | "REJECTED" | undefined;
    comment?: string | undefined;
    expirationDate?: Date | undefined;
    files?: {
        name: string;
        url: string;
        urlThumbnail?: string | undefined;
    }[] | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
export declare const ResponseApproveZodSchema: z.ZodObject<{
    finalPrice: z.ZodNumber;
    finalPriceValidity: z.ZodObject<{
        label: z.ZodString;
        value: z.ZodNumber;
        unit: z.ZodNativeEnum<typeof Unit>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        label: string;
        unit: Unit;
    }, {
        value: number;
        label: string;
        unit: Unit;
    }>;
    respondBy: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        userID: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    }, {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    }>;
    respondDate: z.ZodOptional<z.ZodDate>;
    validityDate: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    finalPrice: number;
    finalPriceValidity: {
        value: number;
        label: string;
        unit: Unit;
    };
    respondBy: {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    };
    respondDate?: Date | undefined;
    validityDate?: Date | undefined;
}, {
    finalPrice: number;
    finalPriceValidity: {
        value: number;
        label: string;
        unit: Unit;
    };
    respondBy: {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    };
    respondDate?: Date | undefined;
    validityDate?: Date | undefined;
}>;
export declare const ResponseRejectZodSchema: z.ZodObject<{
    comment: z.ZodString;
    respondBy: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        userID: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    }, {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    }>;
    respondDate: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    comment: string;
    respondBy: {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    };
    respondDate?: Date | undefined;
}, {
    comment: string;
    respondBy: {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    };
    respondDate?: Date | undefined;
}>;
export declare const ResponseWebHookZodSchema: z.ZodObject<{
    finalPrice: z.ZodOptional<z.ZodNumber>;
    finalPriceValidity: z.ZodOptional<z.ZodObject<{
        label: z.ZodOptional<z.ZodString>;
        value: z.ZodNumber;
        unit: z.ZodNativeEnum<typeof Unit>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        unit: Unit;
        label?: string | undefined;
    }, {
        value: number;
        unit: Unit;
        label?: string | undefined;
    }>>;
    comment: z.ZodOptional<z.ZodString>;
    respondBy: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        userID: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    }, {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    }>;
    status: z.ZodEnum<[Status.APPROVED, Status.REJECTED]>;
    respondDate: z.ZodString;
    validDate: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: Status.APPROVED | Status.REJECTED;
    respondBy: {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    };
    respondDate: string;
    finalPrice?: number | undefined;
    finalPriceValidity?: {
        value: number;
        unit: Unit;
        label?: string | undefined;
    } | undefined;
    comment?: string | undefined;
    validDate?: string | undefined;
}, {
    status: Status.APPROVED | Status.REJECTED;
    respondBy: {
        name?: string | undefined;
        email?: string | undefined;
        userID?: string | undefined;
        role?: string | undefined;
    };
    respondDate: string;
    finalPrice?: number | undefined;
    finalPriceValidity?: {
        value: number;
        unit: Unit;
        label?: string | undefined;
    } | undefined;
    comment?: string | undefined;
    validDate?: string | undefined;
}>;
