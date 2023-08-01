/// <reference types="react" />
import { WithTranslation } from "react-i18next";
import { RouteComponentProps } from 'react-router-dom';
export interface IState {
    showModal: boolean;
    showModalError: boolean;
    ean: string;
}
interface IProps extends RouteComponentProps, WithTranslation {
}
export declare const ScannerPage: import("react").ComponentType<Omit<import("react-i18next/helpers").$Subtract<IProps, import("react-i18next").WithTranslationProps>, keyof WithTranslation<Ns, undefined>> & import("react-i18next").WithTranslationProps>;
export {};
