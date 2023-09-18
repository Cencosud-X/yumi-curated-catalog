import { XTableSorter } from "@team_yumi/ramen-web";
import { XTablePagination } from "@team_yumi/ramen-web/components/web/xtable/root";
export default interface IQueryData<T> {
    pagination: XTablePagination;
    sorter: XTableSorter;
    data: T[];
}
