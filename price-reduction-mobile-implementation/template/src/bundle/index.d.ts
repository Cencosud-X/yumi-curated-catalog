import React from 'react';
import { IExtensions } from './models';
import CardTool from './components/card-tool';
import * as SDK from '@team_yumi/sdk';
export { CardTool };
export type { IExtensions };
interface IProps {
    extensions: IExtensions;
}
export declare const Flow: React.FC<IProps>;
export default class Module extends SDK.Lib.BaseModule<IExtensions> {
    flow: React.FC<IProps>;
    constructor(extensions: IExtensions);
}
