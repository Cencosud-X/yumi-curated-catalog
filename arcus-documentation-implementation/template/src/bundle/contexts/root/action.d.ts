import { ModuleAction, IModuleProperties } from '../../types';
import { IActionFactoryProperties } from './type';
export declare function toDefaults(properties?: Partial<IModuleProperties>): Required<ModuleAction>;
export default function ActionFactory(parameters: IActionFactoryProperties): Required<ModuleAction>;
