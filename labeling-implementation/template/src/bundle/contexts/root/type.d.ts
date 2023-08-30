import { Dispatch } from 'react';
import { ModuleStore, ModuleAction, IModuleProperties } from '../../types';
export declare enum ActionType {
    Load = "@documentation/load",
    SetModule = "@documentation/set-module",
    SetBootSettings = "@documentation/set-boot-settings"
}
export interface IActionReducer {
    type: ActionType;
    payload?: Partial<ModuleStore>;
}
export interface IActionFactoryProperties {
    dispatch: Dispatch<IActionReducer>;
    properties?: Partial<IModuleProperties>;
}
export interface IActionParameters {
    dispatch?: Dispatch<IActionReducer>;
    actions?: Required<ModuleAction>;
    payload?: Partial<ModuleStore>;
}
