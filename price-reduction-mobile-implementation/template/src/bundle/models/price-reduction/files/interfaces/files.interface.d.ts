import { z } from 'zod';
export interface FileResponse {
    id: string;
    name: string;
    contentType: string;
    url: string;
    href: string;
}
export declare const fileZod: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    contentType: z.ZodString;
    url: z.ZodString;
    href: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    contentType: string;
    url: string;
    href: string;
}, {
    id: string;
    name: string;
    contentType: string;
    url: string;
    href: string;
}>;
