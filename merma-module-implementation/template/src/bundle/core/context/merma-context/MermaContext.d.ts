import { PropsWithChildren } from 'react';
import * as H from 'history';
import { InitialConfig } from '../../client/mass-control-bff-models';
import { MassControlClient } from '../../client/MassControlClient';
import { AlertServiceClient } from '../../client/AlertServiceClient';
interface SnackBarMessage {
    visible: boolean;
    message: string;
    type: 'success' | 'error';
}
export declare type MermaContextType = {
    userToken: string;
    snackBarMessage?: SnackBarMessage;
    baseUrl: string;
    setSnackBarMessage: (value: SnackBarMessage) => void;
    setUserToken: (value: string) => void;
    setBaseUrl: (value: string) => void;
    history: H.History | undefined;
    initialConfig?: InitialConfig;
    language: Language;
    massControlClient: MassControlClient;
    alertServiceClient: AlertServiceClient;
};
declare enum Language {
    es = "es",
    en = "en",
    pr = "pr"
}
export declare const MermaContext: import("react").Context<MermaContextType>;
export declare const MermaContextProvider: (props: PropsWithChildren<{}>) => JSX.Element;
export {};
