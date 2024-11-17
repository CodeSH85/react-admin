import { ReactNode } from "react";

export type PanelProp = {
  direction: 'vertical' | 'horizontal';
  panelLeft: ReactNode;
  panelRight: ReactNode;
};
