/// <reference types="react" />
export interface TabBtn {
    key: string;
    icon: string;
    text: string;
}
interface IProps {
    activeDefault: string;
    buttons: TabBtn[];
    onSelectBtn: (key: string) => void;
}
declare const SummaryButtons: React.FC<IProps>;
export default SummaryButtons;
