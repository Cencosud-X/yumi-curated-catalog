import React from 'react';
import './index.sass';
interface IProps {
    onClick: Function;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    title: string;
}
declare const ButtonCard: React.FC<IProps>;
export default ButtonCard;
