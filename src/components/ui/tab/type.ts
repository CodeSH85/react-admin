import { ReactNode } from 'react';

export type TabItemProp = {
  title: string | number;
  key: string | number;
  active?: boolean;
  tag?: string;
  path?: string;
  currentIndex?: number;
  closable?: boolean;
  className?: string;
  prepend?: ReactNode;
  append?: ReactNode;
  onClose?: Function;
  [otherOptions: string]: unknown;
};

export type TabProps = {
  items: TabItemProp[];
  currentIndex?: number;
  children?: React.ReactNode;
  closable?: boolean;
  tag?: string;
  onSetCurTab?: Function;
  onCloseTab?: (index: number) => void;
  [othersOptions: string]: unknown;
};
