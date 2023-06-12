import { PropsWithChildren } from 'react';
import * as H from 'history';
import { InitialConfigResponse } from '../client/models/queries.models';
export declare type MermaContextType = {
    productAddedToStorage: boolean;
    productRemovedToStorage: boolean;
    setProductAddedToStorage: (value: boolean) => void;
    setProductRemovedToStorage: (value: boolean) => void;
    history: H.History | undefined;
    initialConfig?: InitialConfigResponse;
    language: Language;
};
declare enum Language {
    es = "es",
    en = "en",
    pr = "pr"
}
export declare const MermaContext: import("react").Context<MermaContextType>;
export declare const MermaContextProvider: (props: PropsWithChildren<{}>) => JSX.Element;
export {};
