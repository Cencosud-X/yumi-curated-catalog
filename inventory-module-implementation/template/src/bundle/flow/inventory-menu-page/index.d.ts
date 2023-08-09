import React from 'react';
import { Components } from '../../sdk';
import { StoreInterface } from '../../core/models';
export interface IMenuPageExtension extends Components.IPageExtensions {
    onBack: () => void;
    env: {
        country: string;
        inventoryApi: string;
        clientId: string;
        uomShowType: 'INDIVIDUAL' | 'GENERAL';
        messages: {
            sendInventory: string;
        };
    };
    triggers: {
        getStoreData: () => Promise<StoreInterface>;
    };
    white_boxes: {
        red_box?: React.ComponentClass;
    };
}
export interface IProps extends Components.IPageProps<{}, IMenuPageExtension> {
}
export interface IState {
}
export declare class MenuPage extends Components.Page<IProps, IState> {
    state: IState;
    render(): JSX.Element;
}
