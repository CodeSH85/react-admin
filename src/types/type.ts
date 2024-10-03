import { ReactNode } from 'react';

export type TabItem = {
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
}