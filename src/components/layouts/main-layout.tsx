'use client';

import { ReactNode } from 'react';
import { Tab } from '@/components/ui/tab';

import { useTabs } from '@/hooks/useTabs';
import { useRouter } from 'next/navigation';
import SidePanel from '../panel/side-panel';
import { SplitPanel } from '../ui/split-panel';

type MainLayoutProps = {
  children: ReactNode;
};

const MainTab = () => {
  const { tabs, currentTabIndex, removeTab, setCurrentTab } = useTabs();
  const router = useRouter();

  function handleSetCurrentTab(targetIndex: number) {
    setCurrentTab(targetIndex);
    const updatedTab = tabs[targetIndex];
    router.push(updatedTab.path as string);
    // router.push(currentTab.path as string);
  }
  function handleCloseTab(targetIndex: number) {
    removeTab(targetIndex);
  }
  return (
    <Tab
      items={tabs}
      currentIndex={currentTabIndex}
      onSetCurTab={handleSetCurrentTab}
      onCloseTab={handleCloseTab}
    />
  );
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='flex h-full w-full flex-col'>
      <MainTab />
      <div className='relative h-full w-full'>
        <SplitPanel
          panelLeft={
            <section className='h-full w-full'>{children}</section>
          }
          panelRight={
            <SidePanel />
          }
        >
        </SplitPanel>
      </div>
    </div>
  );
};

export default MainLayout;
