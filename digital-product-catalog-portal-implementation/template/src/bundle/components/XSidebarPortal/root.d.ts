import React from 'react';
import { Collections } from '@team_yumi/ramen-web/models';
export interface IProps {
    logo?: string;
    header?: any;
    footer?: any;
    expandedLogo?: string;
    showLogo?: boolean;
    menu: Array<IMenuItem>;
    onActionClick?: (key: string) => void;
    expanded?: boolean;
    selectedKey?: string;
}
export declare type IMenuItem = {
    type: 'divider';
    text: string;
} | {
    type: 'action';
    icon: (typeof Collections.IIcon)[number] | {
        type: 'icon';
        value: (typeof Collections.IIcon)[number];
    } | {
        type: 'symbol';
        value: (typeof Collections.ISymbol)[number];
    };
    text: string;
    key: string;
};
declare const XSidebarPortal: React.FC<IProps>;
export default XSidebarPortal;
