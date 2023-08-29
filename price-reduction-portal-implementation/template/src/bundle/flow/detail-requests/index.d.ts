/// <reference types="react" />
import { PriceReduction } from '../../models';
export interface IProps {
    openDetail: boolean;
    setOpenDetail: (open: boolean) => void;
    taskData: PriceReduction.Task.ITask;
}
export declare const DetailRequestsPage: (props: IProps) => JSX.Element;
