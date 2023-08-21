import { ReactNode } from 'react';
import { Task } from '../../models/task';
export interface ImgDataCardField {
    key: string;
    label: string;
    value: string;
    visibleWhen?: (obj: any) => boolean;
}
export interface TagData {
    type?: string;
    label: string;
    state?: string;
}
interface IProps {
    task: Task;
    label: string;
    imageUrl: string;
    fields: ImgDataCardField[];
    tags?: ReactNode[];
    onClick: () => void;
    controlTag: boolean;
}
declare const ImgDataCard: React.FC<IProps>;
export default ImgDataCard;
