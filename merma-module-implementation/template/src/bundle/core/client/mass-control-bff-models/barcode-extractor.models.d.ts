import { z } from 'zod';
export declare const barcodeExtractorResponseSchema: z.ZodObject<{
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
export declare type BarcodeExtractorResponse = z.infer<typeof barcodeExtractorResponseSchema>;
