/// <reference types="react" />
import { Origin } from '../main';
interface IEntryProductProps {
    onBack: () => void;
    code: string;
    origin: Origin;
}
export declare const EntryProduct: React.FC<IEntryProductProps>;
export {};
