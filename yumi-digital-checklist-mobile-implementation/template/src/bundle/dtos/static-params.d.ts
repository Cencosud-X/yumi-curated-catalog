export interface IStaticParams {
    country: string;
    baseUrl: string;
    tokenProvider?: () => Promise<string>;
}
