import React from 'react';
import * as SDK from '@team_yumi/sdk';
import { IStaticParams } from './models';
import CardTool from './components/card-tool';
import { IMenuItem } from '@team_yumi/ramen-web/components/web/xsidebar/root';
import { Socket } from 'socket.io-client';
interface IProps {
    params: IStaticParams;
    socket: Socket;
}
export default class Module extends SDK.Lib.BaseModule<IStaticParams> {
    defaultPath: string;
    onNewCount?: (count: number) => void;
    Flow: React.FC<IProps>;
    CardTool: typeof CardTool;
    private count;
    private readonly socket;
    constructor(params: IStaticParams);
    getSidebarMenu(count?: number): IMenuItem;
}
export {};
