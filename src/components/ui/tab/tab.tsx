import { useState } from "react";
import TabItem from "./tabItem";

import type { TabItemProp, TabProps } from "./type";

const Tab = (props: TabProps) => {
  const { items, closable, tag, onCloseTab } = props;
  const [tabs, setTabs] = useState<TabItemProp[]>(items);
  const [curTab, setCurTab] = useState<TabItemProp>();

  function onTabItemClick(tabItem: TabItemProp) {
    setCurTab(tabItem);
  }

  function handleCloseTab(
    e: React.MouseEvent<HTMLElement>,
    key: TabItemProp["key"]
  ) {
    if (onCloseTab) onCloseTab(e, key);
    const newTabs = tabs.filter((tab: TabItemProp) => tab.key !== key);
    setTabs(newTabs);
  }

  return (
    <nav className="flex w-full bg-slate-200">
      {
        tabs.length && tabs.map((item: TabItemProp) => (
          <TabItem
            tag={tag}
            active={!!(item.key === curTab?.key)}
            title={item.title}
            key={item.key}
            onClick={() => onTabItemClick(item)}
            Prepend={props.prepend}
            Append={props.append}
          >
          </TabItem>
        ))
      }
    </nav>
  );
};

export { Tab }
