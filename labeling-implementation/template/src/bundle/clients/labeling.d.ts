import { IPrinter } from '../types';
declare class LabelingClient {
    loadLabeling(country: string, flag: string): Promise<IPrinter[]>;
}
declare const _default: LabelingClient;
export default _default;
