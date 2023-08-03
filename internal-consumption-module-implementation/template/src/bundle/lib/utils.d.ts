import { UserLevel } from '../models/user.dto';
export declare const toCurrency: (value: number) => string;
export declare const formatDate: (dateTime: string, format?: string, tz?: string) => string;
export declare const checkUserLevel: (level: number | undefined, expectedLevel: UserLevel) => boolean;
