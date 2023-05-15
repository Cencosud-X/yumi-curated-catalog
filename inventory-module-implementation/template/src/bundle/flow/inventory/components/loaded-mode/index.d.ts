/// <reference types="react" />
import './index.sass';
interface IProps {
    onStartScan: () => void;
    onPreviousMode: () => void;
    onBack?: () => void;
}
declare const InventoryLoadedMode: React.FC<IProps>;
export default InventoryLoadedMode;
