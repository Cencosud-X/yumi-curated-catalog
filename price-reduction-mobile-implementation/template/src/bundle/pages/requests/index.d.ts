/// <reference types="react" />
import { PriceReduction } from '../../models';
import { RouteComponentProps } from 'react-router-dom';
import { WithTranslation } from "react-i18next";
declare type Error = {
    field: string;
    message: string;
};
export interface IState {
    view_mode: 'PENDING' | 'READY';
    reasons: PriceReduction.Reason.IReason[];
    validities: PriceReduction.Validity.IValidity[];
    resquest: PriceReduction.Request.IRequest;
    errors: Error[];
    showModalSuccess: boolean;
    showExpirationDate: boolean;
    showModalError: boolean;
    messageModalError: string;
}
interface IProps extends RouteComponentProps, WithTranslation {
}
export declare const RequestPage: import("react").ComponentType<Omit<import("react-i18next/helpers").$Subtract<IProps, import("react-i18next").WithTranslationProps>, keyof WithTranslation<Ns, undefined>> & import("react-i18next").WithTranslationProps>;
export {};
