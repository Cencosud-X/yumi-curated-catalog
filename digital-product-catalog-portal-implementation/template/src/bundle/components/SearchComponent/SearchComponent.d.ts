import { FC } from "react";
import "./SearchComponent.css";
interface IProps {
    classNameExtra?: string;
    onSearch?: (v: string) => void;
    placeholder?: string;
    value?: string;
    searchPrevious?: string | null;
}
declare const SearchComponentFilter: FC<IProps>;
export default SearchComponentFilter;
