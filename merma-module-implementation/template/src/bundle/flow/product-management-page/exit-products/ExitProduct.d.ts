/// <reference types="react" />
import { Origin } from '../main';
interface IExitProductProps {
    onBack: () => void;
    code: string;
    origin: Origin;
}
export declare const ExitProduct: React.FC<IExitProductProps>;
export {};
