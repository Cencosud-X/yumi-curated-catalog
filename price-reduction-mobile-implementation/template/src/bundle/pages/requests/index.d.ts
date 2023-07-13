/// <reference types="react" />
import { PriceReduction } from '@yumi/models';
import { Components } from '../../sdk';
export interface IRequestPageExtension extends Components.IPageExtensions {
    infoStore: PriceReduction.Request.IInfoStore;
    responsible: PriceReduction.Request.IUser;
    triggers: {
        saveRequest: (request: PriceReduction.Task.ITask) => Promise<PriceReduction.Task.ITask>;
        getReductionPriceReasons: () => Promise<PriceReduction.Reason.IReason[]>;
        getReductionPriceTimeValidity: () => Promise<PriceReduction.Validity.IValidity[]>;
        uploadImage: (file: Blob, fileName: string) => Promise<PriceReduction.Files.FileResponse>;
    };
}
export interface IProps extends Components.IPageProps<{}, IRequestPageExtension> {
}
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
export declare class RequestPage extends Components.Page<IProps, IState> {
    state: IState;
    componentDidMount(): void;
    getInfo: () => Promise<void>;
    getProducts: () => Promise<{
        productName: string;
        section: string;
        urlImage: string;
        ean: string;
        sku: string;
        stockDays: number;
        priceType: string;
        previousPrice: number;
        stockNRT: number;
        metadata?: Record<string, unknown> | undefined;
    }>;
    getReason: () => Promise<PriceReduction.Reason.IReason[]>;
    getValidity: () => Promise<PriceReduction.Validity.IValidity[]>;
    onReasonChangeHandler: (reason: PriceReduction.Reason.IReason) => void;
    onValidityChangeHandler: (validity: PriceReduction.Validity.IValidity) => void;
    onSuggestedPriceChangeHandler: (price: string) => void;
    onCommenthangeHandler: (comment: string) => void;
    sendRequest: () => Promise<void>;
    onGoBackHandler: () => void;
    onCloseModalSuccessHandler: () => void;
    ongetFilesChangeHandler: (photos: PriceReduction.Files.FileResponse[]) => void;
    onCloseModalErrorHandler: () => void;
    uploadImageHandler: (file: Blob, fileName: string) => Promise<PriceReduction.Files.FileResponse>;
    render_PENDING: () => JSX.Element;
    render_READY: () => JSX.Element;
    render(): JSX.Element;
}
export {};
