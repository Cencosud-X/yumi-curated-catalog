import { NotificationTypeEnum } from "../enums/notification-type.enum";
export interface NotificationInterface {
    type: NotificationTypeEnum;
    appearance?: 'solid';
    description?: string;
    message?: string;
    duration?: number;
    onClose?: () => void;
}
