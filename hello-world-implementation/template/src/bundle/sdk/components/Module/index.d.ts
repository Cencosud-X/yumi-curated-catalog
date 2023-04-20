import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IPageExtensions, Page } from '../Page';
export interface IModuleRoute {
    path: string;
    page: typeof Page;
}
export interface IModuleOverride {
    extensions?: Record<string, IPageExtensions>;
    routes?: IModuleRoute[];
}
export interface IModuleDescriptor {
    routes: IModuleRoute[];
    override: IModuleOverride;
}
export declare type IModuleProps = RouteComponentProps;
export declare class Module extends React.Component<IModuleProps> {
    descriptor: IModuleDescriptor;
    constructor(props: IModuleProps, descriptor: IModuleDescriptor);
    render(): JSX.Element;
}
