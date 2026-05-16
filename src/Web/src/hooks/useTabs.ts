import { TabItem } from './../types/type';
import { useMemo, useState } from 'react';

const defaultTabs: TabItem[] = [
  {
    title: 'Components',
    key: 'components',
    path: '/components',
  }
];

const useTabs = () => {
  const [tabs, setTabs] = useState<TabItem[]>(defaultTabs);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function addTab(tab: TabItem) {
    const newTabs = [...tabs, tab];
    setTabs(newTabs);
    setCurrentTabIndex(tabs.length - 1);
  }
  function removeTab(index: number) {
    const newTabs = tabs.filter((_, i) => i !== index);
    const nextTab = currentTabIndex + 1;
    if (tabs.length - 1 >= nextTab) {
      setCurrentTabIndex(nextTab);
    } else {
      setCurrentTabIndex(currentTabIndex - 1);
    }
    setTabs(newTabs);
  }
  function setCurrentTab(index: number) {
    if (currentTabIndex === index) return;
    const newIndex = index;
    setCurrentTabIndex(() => newIndex);
  }
  const currentTab = useMemo(() => {
    return tabs[currentTabIndex];
  }, [tabs, currentTabIndex]);

  return {
    tabs,
    currentTabIndex,
    currentTab,
    addTab,
    removeTab,
    setCurrentTab,
  };
};

export { useTabs };
