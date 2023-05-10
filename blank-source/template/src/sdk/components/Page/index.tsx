import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IPageExtensions {
  triggers?: Record<string, (...args: any) => void>;
  white_boxes?: Record<string, React.ComponentClass>;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface IPageProps<
  // eslint-disable-next-line @typescript-eslint/ban-types
  Params extends { [K in keyof Params]?: string | undefined } = {},
  // eslint-disable-next-line @typescript-eslint/ban-types
  Extensions extends IPageExtensions = {}
> extends RouteComponentProps<Params> {
  extensions?: Extensions;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export class Page<IPageProps = {}, S = {}> extends React.Component<IPageProps, S> {}
