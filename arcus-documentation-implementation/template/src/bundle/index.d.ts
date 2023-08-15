import React from 'react';
import { IModuleProperties } from './types';
export interface IModuleProps extends IModuleProperties {
}
export default class Root extends React.Component<Partial<IModuleProperties>> {
    render(): React.ReactNode;
}
