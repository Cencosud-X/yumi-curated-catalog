import { ScanResultType } from '../../types.d';
import { z } from 'zod';
export declare const tallySchema: z.ZodString;
export declare const barcodeSchema: z.ZodString;
/**
 * Across the scan, get the type of scan and the data, these might be type tally, barcode or invalid
 * @param {string} code
 * @returns {ScanResultType}
 */
export declare const classifyScanInput: (code: string) => ScanResultType;
