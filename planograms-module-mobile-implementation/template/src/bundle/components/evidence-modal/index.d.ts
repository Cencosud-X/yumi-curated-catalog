/// <reference types="react" />
import { UseFormReturn } from "react-hook-form";
interface ISuccessEvidenceModal {
    isPlanogramImplemented: boolean;
    form: UseFormReturn;
}
export declare const SuccessEvidenceModal: ({ isPlanogramImplemented, form }: ISuccessEvidenceModal) => JSX.Element;
export {};
