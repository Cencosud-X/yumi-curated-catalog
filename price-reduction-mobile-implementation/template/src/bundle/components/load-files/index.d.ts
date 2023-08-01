import React from 'react';
import { XImageUploaderFileData } from '@team_yumi/ramen';
import { PriceReduction } from '@yumi/models';
export interface IProps {
    getFiles: (files: XImageUploaderFileData[]) => void;
    uploadImage?: (file: Blob, fileName: string) => Promise<PriceReduction.Files.FileResponse>;
}
declare const Index: React.FC<IProps>;
export default Index;
