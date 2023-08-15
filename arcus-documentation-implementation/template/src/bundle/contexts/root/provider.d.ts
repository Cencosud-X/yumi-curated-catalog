import { JSX } from 'react';
import { IModuleProperties, ModuleStore, ModuleAction } from '../../types';
export declare function useRootContext(): [Required<ModuleStore>, Required<ModuleAction>];
export declare function RootProvider(properties?: IModuleProperties): JSX.Element;
