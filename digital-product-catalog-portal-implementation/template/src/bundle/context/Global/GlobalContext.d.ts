import { FC, ReactNode } from 'react';
import { IMenuData } from '../../data/menuData';
interface IProps {
    children: ReactNode;
}
declare const GlobalContextProvider: FC<IProps>;
interface IContext {
    isLoading: boolean;
    categories: IMenuData[];
    categoriesNav: IMenuData[];
    setLoader: (status: boolean) => void;
}
declare const useGlobal: () => IContext;
export { GlobalContextProvider, useGlobal };