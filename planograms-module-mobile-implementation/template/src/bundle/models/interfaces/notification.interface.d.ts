import { NotificationTypeEnum } from "../enums/notification-type.enum";
import { PlacementTypeEnum } from "../enums/placement-type.enum";
export interface NotificationInterface {
    type: NotificationTypeEnum;
    text: string;
    placement?: PlacementTypeEnum;
    duration?: number;
    closable?: boolean;
    onClose?: () => void;
    actionText?: string;
    onActionClick?: () => void;
}
