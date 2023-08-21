import { UserLevel } from '../models/user.dto';
export declare const toCurrency: (value: number) => string;
export declare const formatDate: (dateTime: string, format?: string, tz?: string) => string;
export declare const hourOfDate: (date: string, format?: string) => string | undefined;
export declare const checkUserLevel: (level: number | undefined, expectedLevel: UserLevel) => boolean;
export declare function safeRestCall<T>(call: () => Promise<T>): Promise<T | undefined>;
