export declare enum Providers {
    txd = "txd",
    microsoft = "microsoft_saml",
    google = "google_gmail"
}
export interface IChildrenProps {
    onLoginHandler: (provider: string) => void;
    providers: Providers;
}
