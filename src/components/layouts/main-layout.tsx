'use client';

import { useState, useEffect, ReactNode } from 'react';
import { Tab } from '@/components/ui/tab';
import { useTabs } from '@/hooks/useTabs';
import { useRouter } from 'next/navigation';
import SidePanel from '../panel/side-panel';

import { PanelContainer } from '../ui/split-panel';
import { Button } from '../ui/button';
import { Icon } from '../ui/icon';
import { Switch } from '../ui/switch';
import { twMerge } from 'tailwind-merge';

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
  }
  function handleCloseTab(targetIndex: number) {
    removeTab(targetIndex);
  }
  return (
    <Tab
      className='bg-slate-200 dark:bg-slate-800'
      items={tabs}
      currentIndex={currentTabIndex}
      onSetCurTab={handleSetCurrentTab}
      onCloseTab={handleCloseTab}
    />
  );
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const [theme, setTheme] = useState('light');
  function showMenu() {
    console.log('show menu');
  }
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  function onToggleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div 
      className={twMerge(
        'flex h-full w-full flex-col bg-slate-200 dark:bg-slate-800'
      )}
    >
      <div className="flex justify-center items-center px-1">
        <Button 
          variant='plain'
          className={`bg-slate-200`}
          onClick={showMenu}
        >
          <Icon icon='MdMenu'/>
        </Button>
        <MainTab />
        <Switch
          onChange={onToggleTheme}
        />
      </div>
      <div className='relative h-full w-full'>
        <PanelContainer
          leftWidth={70}
          rightWidth={30}
          panelLeft={
            <section className='h-full w-full'>{children}</section>
          }
          panelRight={
            <SidePanel />
          }
        />
      </div>
    </div>
  );
};

export default MainLayout;
