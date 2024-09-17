'use client';

import { useState } from 'react';
import TabItem from './tab-item';
import { Icon } from '../icon';

import type { TabItemProp, TabProps } from './type';

const Tab = (props: TabProps) => {
  const { items, tag, currentIndex, onCloseTab, setCurTab } = props;

  const [tabs, setTabs] = useState<TabItemProp[]>(items);

  function onTabItemClick(index: number) {
    if (setCurTab) setCurTab(index)
  }

  function handleCloseTab(
    e: React.MouseEvent<HTMLElement>,
    key: TabItemProp['key']
  ) {
    if (onCloseTab) onCloseTab(e, key);
    const newTabs = tabs.filter((tab: TabItemProp) => tab.key !== key);
    setTabs(newTabs);
  }

  const AppendIcon = () => {
    return <Icon icon={'MdClose'}/>
  }

  return (
    <nav className='flex w-full bg-slate-200'>
      {tabs.length &&
        tabs.map((item: TabItemProp, index) => (
          <TabItem
            tag={tag}
            active={!!(index === currentIndex)}
            title={item.title}
            key={item.key}
            onClick={() => onTabItemClick(index)}
            append={<AppendIcon />}
          ></TabItem>
        ))}
    </nav>
  );
};

export { Tab };
export type { TabProps, TabItemProp };
