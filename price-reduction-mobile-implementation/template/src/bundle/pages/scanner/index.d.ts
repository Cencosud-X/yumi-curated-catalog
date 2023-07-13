/// <reference types="react" />
import { PriceReduction } from '@yumi/models';
import { Components } from '../../sdk';
export interface IScannerPageExtension extends Components.IPageExtensions {
    infoStore: PriceReduction.Request.IInfoStore;
    triggers: {
        loadProduct: (ean: string) => Promise<PriceReduction.Product.IProduct>;
    };
}
export interface IProps extends Components.IPageProps<{}, IScannerPageExtension> {
}
export interface IState {
    showModal: boolean;
    showModalError: boolean;
    ean: string;
}
export declare class ScannerPage extends Components.Page<IProps, IState> {
    state: IState;
    componentDidMount(): Promise<void>;
    whenInNativePhone: (callback: () => void) => void;
    bootstrapScan: () => Promise<void>;
    askCameraPermission: () => Promise<void>;
    stopScan: () => Promise<void>;
    startScan: () => Promise<void>;
    handleScanResult: (ean: string) => Promise<void>;
    onCloseModalHandler: () => void;
    onSubmitModalHandler: () => void;
    onAddCodeClickHandler: () => void;
    oneanChangeHandler: (ean: string) => void;
    getProducts: (ean: string) => Promise<void>;
    onCloseModalErrorHandler: () => void;
    onGoBackHandler: () => void;
    render(): JSX.Element;
}
