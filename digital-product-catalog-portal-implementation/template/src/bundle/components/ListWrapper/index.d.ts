import { FC } from "react";
import './ListWrapper.css';
export interface IListView<T> {
    loading: boolean;
    loadMoreLoading: boolean;
    useInfinite?: boolean;
    filters: any;
    data: T[];
    itemRender?: (item: any, index: number) => any;
    loadingRender?: (loading: boolean, size: number) => any;
    loadingMoreRender?: () => any;
    emptyResultRender?: () => any;
    loadMoreProducts?: () => void;
}
declare const ListWrapper: FC<IListView<any>>;
export default ListWrapper;
