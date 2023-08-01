export interface IHateOASLink {
    href: string;
    rel: string;
    method: 'POST' | 'PUT' | 'REDIRECT' | 'GET' | 'DELETE';
}
