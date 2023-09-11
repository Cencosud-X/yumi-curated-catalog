import { HTMLAttributes } from 'react';
export interface IProperties extends HTMLAttributes<unknown> {
    onClick?: any;
    border?: any;
    size?: any;
    image?: string;
    title?: any;
    description?: any;
}
export declare function Card(properties: IProperties): JSX.Element;
