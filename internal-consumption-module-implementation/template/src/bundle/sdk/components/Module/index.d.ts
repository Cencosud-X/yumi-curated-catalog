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
export interface IModuleDescriptor<O extends IModuleOverride> {
    routes: IModuleRoute[];
    override: O;
}
export declare type IModuleProps = RouteComponentProps;
export declare class Module<IOverride extends IModuleOverride = {}> extends React.Component<IModuleProps> {
    descriptor: IModuleDescriptor<IOverride>;
    constructor(props: IModuleProps, descriptor: IModuleDescriptor<IOverride>);
    render(): JSX.Element;
}
