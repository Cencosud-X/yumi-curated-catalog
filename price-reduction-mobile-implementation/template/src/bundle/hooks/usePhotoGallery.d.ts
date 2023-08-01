import { PriceReduction } from '../models';
interface CustomProps {
    uploadImage?: (file: Blob, fileName: string) => Promise<PriceReduction.Files.FileResponse>;
}
export declare const usePhotoGallery: (props: CustomProps) => {
    photos: PriceReduction.Files.FileResponse[];
    takePhoto: () => Promise<void>;
    searchAndSendFile: () => Promise<void>;
    deletePhoto: (fileId: string) => Promise<void>;
};
export {};
