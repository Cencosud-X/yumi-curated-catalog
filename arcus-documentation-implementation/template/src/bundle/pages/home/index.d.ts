import { HTMLAttributes } from 'react';
export interface IProperties extends HTMLAttributes<unknown> {
    onBack?: (path?: string) => void;
    onNavigate?: (parameters: any) => void;
}
export declare function Home(properties?: IProperties): JSX.Element;
