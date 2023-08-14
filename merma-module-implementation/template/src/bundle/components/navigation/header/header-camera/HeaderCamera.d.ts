/// <reference types="react" />
interface IHeaderProps {
    title: string | undefined;
    titleInBar?: boolean;
    onBack?: () => void;
    onHelp?: () => void;
    searchText?: string;
}
export declare const HeaderCamera: React.FC<IHeaderProps>;
export {};
