import { Tab } from "./ui/tab";
import Sidebar from "./sidebar/SidebarComp";
import { useState } from "react";

const Layout = (props: { children: React.ReactNode }) => {
  const [currentModule, setCurrentModule] = useState<string>('dashboard');
  const getModule = (module: string) => {
    setCurrentModule(module);
  };
  const { children } : { children: React.ReactNode } = props;
  const tabs = [
    { title: 'Dashboard', key: 'dashboard' },
    { title: 'Sell Invoice', key: 'sellInvoice' },
  ]
  function onCloseTab(e: React.MouseEvent<HTMLElement>, key: string | number) {
    console.log(e, key)
  }
  const tabAppendIcon = () => {
    return (
      <span>x</span>
    )
  } 
  return (
    <section className="w-screen h-screen flex flex-row">
      <Sidebar mode="icon" getModule={getModule}/>
      <div className="flex flex-col grow relative">
        <Tab
          tag={'button'}
          items={tabs}
          closable={true}
          onCloseTab={(e, key) => onCloseTab(e, key)}
          append={tabAppendIcon}
        >
        </Tab>
        { children }
      </div>
    </section>
  )
}

export default Layout
