import React from 'react';
import { IExtensions } from './models';
import CardTool from './components/card-tool';
export { CardTool };
export type { IExtensions };
export interface IProps {
    extensions: IExtensions;
}
export declare const Flow: React.FC<IProps>;
