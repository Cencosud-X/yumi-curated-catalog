export interface ILink {
    href: string;
    rel: string;
    method: 'POST' | 'PUT' | 'REDIRECT' | 'GET' | 'DELETE';
}
