'use client';

import { useRef, useState } from "react";
import type { PanelProp } from "./type";

const SplitPanel = (props: PanelProp) => {
  const { direction='horizontal', panelLeft, panelRight } = props;
  const [panelWidth, setPanelWidth] = useState([70, 30]); // value in percentages
  const rootRef = useRef(null);

  function onMouseDown(e: React.MouseEvent<HTMLSpanElement>) {
    e.preventDefault();
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    const { width: rootWidth, height: rootHeight } = rootRef?.current?.getBoundingClientRect();
    function onMouseMove(moveE: MouseEvent) {
      const left = moveE.clientX;
      // const initPercentages = Math.floor((left / rootWidth) * 100);
      const initPercentages = (left / rootWidth) * 100;
      setPanelWidth([initPercentages, 100 - initPercentages]);
    }
    function onMouseUp() {
      console.log('leave');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  }

  return (
    <div
      ref={rootRef}
      className={"h-full w-full flex " + (direction === 'vertical' && 'flex-col') }
    >
      <div
        className="h-full"
        style={{ width: `${panelWidth[0]}%` }}
      >
        {panelLeft}
      </div>
      <span
        className={'w-1 h-full cursor-col-resize bg-slate-200 hover:bg-blue-600'}
        onMouseDown={onMouseDown}
      ></span>
      <div
        className="h-full"
        style={{ width: `${panelWidth[1]}%` }}
      >
        {panelRight}
      </div>
    </div>
  );
};

export { SplitPanel };