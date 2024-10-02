import { Icon } from '../icon';
import { twMerge } from 'tailwind-merge';

import type { TabItemProp, TabProps } from './type';

const TabItem = (props: TabItemProp) => {
  const {
    className: propClass,
    title,
    append,
    prepend,
    active,
    tag: Tag = 'a',
    closable,
    onClose,
    ...rest
  } = props;

  const tabItemDefaultClass = twMerge(
    'px-4 py-1 flex gap-1 text-slate-600 justify-between bg-slate-50 cursor-pointer items-center',
    active && 'bg-white text-black',
    propClass
  );

  return (
    <div className={tabItemDefaultClass} {...rest}>
      {prepend && prepend}
      <Tag>{title}</Tag>
      {closable && <Icon icon={'MdClose'} onClick={onClose} />}
      {append && append}
    </div>
  );
};

const Tab = (props: TabProps) => {
  const {
    items,
    tag,
    currentIndex,
    onCloseTab,
    onSetCurTab,
    closable = true,
  } = props;

  function onTabItemClick(index: number) {
    if (onSetCurTab) onSetCurTab(index);
  }

  function handleCloseTab(e: Event, index: number) {
    e.stopPropagation();
    if (onCloseTab) onCloseTab(index);
  }

  return (
    <nav className='flex w-full bg-slate-200'>
      {items.length &&
        items.map((item: TabItemProp, index) => (
          <TabItem
            tag={tag}
            closable={closable}
            active={!!(index === currentIndex)}
            title={item.title}
            key={item.key}
            onClick={() => onTabItemClick(index)}
            onClose={(e: Event) => handleCloseTab(e, index)}
          />
        ))}
    </nav>
  );
};

export { Tab };
export type { TabProps, TabItemProp };
