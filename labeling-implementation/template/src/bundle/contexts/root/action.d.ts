import { ModuleAction, IModuleProperties } from '../../types';
import { IActionFactoryProperties } from './type';
export declare function toDefaults(properties?: Partial<IModuleProperties>): Required<ModuleAction>;
export declare function getUserInformation(settings: any): any;
export default function ActionFactory(parameters: IActionFactoryProperties): Required<ModuleAction>;
