import { InitialConfig } from '../../core/client/mass-control-bff-models';
import { ModalErrorProps } from '../../types';
import * as H from 'history';
import { PropsWithChildren } from 'react';
export declare type MermaContextType = {
    productAddedToStorage: boolean;
    productRemovedToStorage: boolean;
    setProductAddedToStorage: (value: boolean) => void;
    setProductRemovedToStorage: (value: boolean) => void;
    history: H.History | undefined;
    initialConfig?: InitialConfig;
    language: Language;
    setErrorModal: (value: ModalErrorProps) => void;
};
declare enum Language {
    es = "es",
    en = "en",
    pr = "pr"
}
export declare const MermaContext: import("react").Context<MermaContextType>;
export declare const MermaContextProvider: (props: PropsWithChildren<{}>) => JSX.Element;
export {};
