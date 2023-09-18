import React from 'react';
import type { UploadFile } from 'antd/es/upload/interface';
interface IProps {
}
export interface FileInterface extends UploadFile {
    structureId?: string;
    error?: string;
}
export declare const PlanogramUploadModal: React.FC<IProps>;
export {};
