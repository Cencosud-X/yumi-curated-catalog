import * as SDK from '@team_yumi/sdk';
import { StaticParams } from './dtos';
import React from 'react';
interface IProps {
    text: string;
}
export default class Module extends SDK.Lib.BaseModule<StaticParams> {
    PrintButton: React.FC<IProps>;
    constructor(params: StaticParams);
}
export {};
