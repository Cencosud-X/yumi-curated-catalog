import React from 'react';
import * as SDK from '@team_yumi/sdk';
import { IStaticParams } from './models';
import { IMenuItem } from '@team_yumi/ramen-web/components/web/xsidebar/root';
import { CardTool } from './components';
interface IProps {
    params: IStaticParams;
}
export default class Module extends SDK.Lib.BaseModule<IStaticParams> {
    defaultPath: string;
    onNewCount?: (count: number) => void;
    Flow: React.FC<IProps>;
    CardTool: typeof CardTool;
    constructor(params: IStaticParams);
    getSidebarMenu(count?: number): IMenuItem;
}
export {};
