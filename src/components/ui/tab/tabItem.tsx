import { twMerge } from "tailwind-merge";
import { TabItemProp } from "./type"

const TabItem = (props: TabItemProp) => {
  const { 
    className: propClass,
    title,
    Append,
    Prepend,
    active,
    onClick,
    tag: Tag='a'
  } = props;

  const tabItemDefaultClass = twMerge(
    'px-4 py-1 flex gap-1 text-slate-600 justify-between bg-slate-50 cursor-pointer',
    active && 'bg-white text-black',
    propClass
  );

  function closeTab(tab: TabItemProp) {
    return tab.key
  }

  return (
    <div className={tabItemDefaultClass}>
      { Prepend && <Prepend/>}
      <Tag>
        {title}
      </Tag> 
      { Append && <Append />}
    </div>
  );
};

export default TabItem
