import { NotificationInterface, NotificationTypeEnum } from "../models";
export declare const notification: (params: NotificationInterface) => void;
export declare const getNotificationTypeByCode: (code: string | undefined) => NotificationTypeEnum;
