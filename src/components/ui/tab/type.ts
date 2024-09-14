import { ReactElement, ReactNode } from "react";

export type TabItemProp = {
  title: string | number;
  key: string | number
  active?: boolean
  tag?: string,
  className?: string
  Prepend?: ReactNode
  Append?: ReactNode
  [otherOptions: string]: unknown
};

export type TabProps = {
  items: TabItemProp[]
  children?: React.ReactNode
  closable?: boolean
  tag?: string,
  onCloseTab?: (e: React.MouseEvent<HTMLElement>, key: string | number) => void
  [othersOptions: string]: unknown
}
