'use client';

import MainLayout from '@/components/layouts/main-layout';
import { Tab, TabItemProp } from '@/components/ui/tab';
import DashboardPage from './dashboard/page';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const HomePage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const mockTabs: TabItemProp[] = [
    {
      title: 'Dashboard',
      key: 'dashboard',
      path: '/dashboard',
    },
    {
      title: 'Report',
      key: 'report',
      path: '/report',
    },
  ];

  const getCurrentTabIndex = () => {
    return mockTabs.findIndex(tab => {
      return tab.path ? pathname.startsWith(tab.path) : 0;
    });
  };

  const MainTab = () => {
    return (
      <Tab
        items={mockTabs}
        currentIndex={currentTabIndex}
        setCurTab={(idx) => {
          // Use Link component for client-side navigation
          const selectedTab = mockTabs[idx];
          router.push(selectedTab.path);
        }}
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
