import { twMerge } from 'tailwind-merge';
import { TabItemProp } from './type';

const TabItem = (props: TabItemProp) => {
  const {
    className: propClass,
    title,
    append,
    prepend,
    active,
    tag: Tag = 'a',
    onClick
  } = props;

  const tabItemDefaultClass = twMerge(
    'px-4 py-1 flex gap-1 text-slate-600 justify-between bg-slate-50 cursor-pointer items-center',
    active && 'bg-white text-black',
    propClass
  );

  function closeTab(tab: TabItemProp) {
    return tab.key;
  }

  return (
    <div 
      className={tabItemDefaultClass}
      onClick={onClick}
    >
      {prepend && prepend}
      <Tag>{title}</Tag>
      {append && append}
    </div>
  );
};

export default TabItem;
