import { ChecklistFlowPagesEnum } from '../dtos';
export declare const getChecklistInitialFlowPage: (path: string) => ChecklistFlowPagesEnum.PAGE_CHECKLIST_TOOLS | ChecklistFlowPagesEnum.PAGE_ITEMS_LIST_TASK | ChecklistFlowPagesEnum.PAGE_CHECKLIST_SUMMARY;
export declare const formatDate: (dateTime: string | undefined, format?: string, tz?: string) => string | undefined;
