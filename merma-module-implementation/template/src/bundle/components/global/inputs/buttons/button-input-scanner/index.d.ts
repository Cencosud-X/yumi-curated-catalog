/// <reference types="react" />
interface IProps {
    text: string;
    onClick: () => void;
    size: 'xs' | 's' | 'm' | 'l' | 'xl';
}
export declare const ButtonInputScanner: React.FC<IProps>;
export {};
