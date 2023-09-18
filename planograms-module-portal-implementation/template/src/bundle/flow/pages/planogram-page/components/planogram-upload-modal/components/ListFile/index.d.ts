import React from 'react';
import { FileInterface } from "../../index";
interface IProps {
    files: FileInterface[];
    remove: (uid: string) => void;
    disabled: boolean;
    rowKey: string | undefined;
}
declare const ListFile: React.FC<IProps>;
export default ListFile;
