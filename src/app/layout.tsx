'use client';

import '@/styles/globals.css';
import MainLayout from '@/components/layouts/main-layout';
import { Tab, TabItemProp } from '@/components/ui/tab';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
  }
];

const MainTab = () => {
  const [tabs, setTabs] = useState(mockTabs);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const router = useRouter();
  function handleSetCurrentTab(targetIndex: number) {
    console.log(`set active tab: ${targetIndex}`);
    const selectedTab = tabs[targetIndex];
    setCurrentTabIndex(targetIndex);
    router.push(selectedTab.path as string);
  }
  function handleCloseTab(targetIndex: number) {
    const newTabs = tabs.filter((_, index) => index !== targetIndex);
    setTabs(newTabs);
  }
  return (
    <Tab
      items={tabs}
      currentIndex={currentTabIndex}
      onSetCurTab={handleSetCurrentTab}
      onCloseTab={handleCloseTab}
    ></Tab>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main id="root">
          <MainLayout top={<MainTab />}>
            {children}
          </MainLayout>
        </main>
      </body>
    </html>
  )  
}
