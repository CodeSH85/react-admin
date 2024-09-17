'use client';

import MainLayout from '@/components/layouts/main-layout';
import { Tab, TabItemProp } from '@/components/ui/tab';
import DashboardPage from './dashboard/page';
import { useState } from 'react';

const HomePage = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const mockTabs: TabItemProp[] = [
    {
      title: 'Dashboard',
      key: 'dashboard',
    },
    {
      title: 'Invoice',
      key: 'invoice',
    },
  ];

  async function onSetCurrentTabIndex(idx) {
    setCurrentTabIndex(idx);
  }

  const MainTab = () => {
    return (
      <Tab
        items={mockTabs}
        currentIndex={currentTabIndex}
        setCurTab={onSetCurrentTabIndex}
      ></Tab>
    );
  };
  return (
    <MainLayout top={<MainTab />}>
      {
        mockTabs[currentTabIndex].key === 'dashboard' &&
          <DashboardPage></DashboardPage>
      }
      {
        mockTabs[currentTabIndex].key === 'invoice' && 
        <div>Test</div>
      }
    </MainLayout>
  );
};

export default HomePage;
