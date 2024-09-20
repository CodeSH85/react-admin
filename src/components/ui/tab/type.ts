import { ReactNode } from 'react';

export type TabItemProp = {
  title: string | number;
  key: string | number;
  active?: boolean;
  tag?: string;
  path?: string;
  currentIndex?: number;
  className?: string;
  prepend?: ReactNode;
  append?: ReactNode;
  [otherOptions: string]: unknown;
};

export type TabProps = {
  items: TabItemProp[];
  currentIndex?: number;
  children?: React.ReactNode;
  closable?: boolean;
  tag?: string;
  setCurTab?: Function;
  onCloseTab?: (e: React.MouseEvent<HTMLElement>, key: string | number) => void;
  [othersOptions: string]: unknown;
};
