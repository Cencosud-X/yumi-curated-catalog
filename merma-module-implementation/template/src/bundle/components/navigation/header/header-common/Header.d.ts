/// <reference types="react" />
interface IHeaderProps {
    title: string | undefined;
    titleInBar?: boolean;
    onBack?: () => void;
    onSearch?: (text: string) => void;
    searchText?: string;
}
export declare const Header: React.FC<IHeaderProps>;
export {};
