import { IPrinter } from "../types";
declare class PrinterClient {
    loadPrinters(): Promise<IPrinter[]>;
}
declare const _default: PrinterClient;
export default _default;
