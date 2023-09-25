import * as React from 'react';
import { IStaticParams, OptionInterface, PlanogramsPagesEnum, StoreInterface } from '../models';
export interface IModuleContext {
    country: string;
    page: PlanogramsPagesEnum;
    setPage: (value: PlanogramsPagesEnum) => void;
    store: StoreInterface;
    setStore: (value: StoreInterface) => void;
    loading: boolean;
    setLoading: (value: boolean) => void;
    departament: OptionInterface;
    setDepartament: (value: OptionInterface) => void;
    section: OptionInterface;
    setSection: (value: OptionInterface) => void;
    category: OptionInterface;
    setCategory: (value: OptionInterface) => void;
    getDepartaments: () => Promise<any>;
    getSections: () => Promise<any>;
    getCategories: () => Promise<any>;
    getDetail: () => Promise<any>;
    showEvidenceModal: boolean;
    setShowEvidenceModal: (show: boolean) => void;
    getPDFUrl: (value: string) => Promise<string>;
    clearData: () => void;
    clearFormEvidence: () => void;
    formEvidence: any;
    setFormEvidence: any;
    isPlanogramImplemented: Answer;
    setIsPlanogramImplemented: (value: Answer) => void;
    showCamera: boolean;
    setShowCamera: (value: boolean) => void;
}
declare type Answer = 'yes' | 'no' | '';
export declare const PlanogramContext: React.Context<IModuleContext>;
interface IProps {
    children: React.ReactNode;
    params: IStaticParams;
}
export declare const INIT_FORM_EVIDENCE_DATA: {
    typeProblem: string;
    typeFurniture: string;
    height: string;
    width: string;
    depth: string;
    amountBox: string;
    title: string;
    pictures: never[];
    description: string;
};
export declare const PlanogramProvider: React.FC<IProps>;
export {};
