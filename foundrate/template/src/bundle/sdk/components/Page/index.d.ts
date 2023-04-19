import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
export interface IPageExtensions {
    triggers?: Record<string, (...args: any) => void>;
    white_boxes?: Record<string, React.ReactNode>;
}
export interface IPageProps<Params extends {
    [K in keyof Params]?: string | undefined;
} = {}, Extensions extends IPageExtensions = {}> extends RouteComponentProps<Params> {
    extensions?: Extensions;
}
export declare class Page<IPageProps = {}, S = {}> extends React.Component<IPageProps, S> {
}
