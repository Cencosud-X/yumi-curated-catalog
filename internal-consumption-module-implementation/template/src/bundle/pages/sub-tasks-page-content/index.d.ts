/// <reference types="react" />
import { ITaskClient } from "../../clients/tasks-client.interface";
interface IProps {
    taskClient: ITaskClient;
    miniImageUrl: (sku: string, ean: string) => string;
}
declare const SubTasksPageWrapper: React.FC<IProps>;
export default SubTasksPageWrapper;
