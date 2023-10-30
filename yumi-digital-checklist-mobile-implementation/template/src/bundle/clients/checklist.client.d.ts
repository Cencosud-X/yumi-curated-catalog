import BaseClient from './base.client';
import { IChecklistItemCounter, IChecklistTask, IChecklistTaskExtended, IChecklistTaskItem, SaveItemFeedback } from '../dtos';
import { ICollection, IQueryParams } from '@team_yumi/sdk/src/models/rest';
export default class CheckListClient extends BaseClient {
    getChecklist(): Promise<{
        items: IChecklistTask[];
    }>;
    getChecklists(query: IQueryParams): Promise<ICollection<IChecklistTask>>;
    getChecklistData(key: string): Promise<IChecklistTaskExtended>;
    getChecklistItem(id: string): Promise<IChecklistTaskItem>;
    getChecklistItemSummary(): Promise<IChecklistItemCounter[]>;
    getChecklistItemData(templateId: string): Promise<IChecklistTaskItem[]>;
    getChecklistItemTasksData(): Promise<IChecklistItemCounter[]>;
    saveFeedback(feedback: SaveItemFeedback): Promise<void>;
    completeChecklistTask(feedback: SaveItemFeedback): Promise<void>;
    markAsCompleted(taskId: string): Promise<void>;
}
