'use client';

import { ReactNode } from 'react';
import { Tab } from '@/components/ui/tab';

import { useTabs } from '@/hooks/useTabs';
import { useRouter } from 'next/navigation';
import SidePanel from '../panel/side-panel';

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
    <div className='flex flex-col h-full w-full'>
      <MainTab />
      <div className='relative h-full w-full'>
        <section className='h-full w-full'>
          {children}
        </section>
        <SidePanel />
      </div>
    </div>
  );
};

export default MainLayout;
