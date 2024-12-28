import React from 'react';
type ComponentSectionProps = {
  title: string;
  component: React.ComponentType;
  data: ComponentPageData[];
  description?: string;
};

type ComponentPageData = {
  props: Record<string, any>;
};

export const ComponentTemplate = (props: ComponentSectionProps) => {
  const { title, component: Component, description, data } = props;
  return (
    <div className='p-2 flex flex-col'>
      <h2 className='dark:text-white p-1 text-xl font-medium'>{title}</h2>
      <p className='p-1 my-2 dark:text-white'>{description}</p>
      <div className='
      bg-slate-50 dark:bg-slate-700 
        flex items-center gap-1 rounded-md px-3 py-4 outline-1 justify-center'
      >
        {data.map((item: any, index: number) => (
          <Component key={index} {...item.props} />
        ))}
      </div>
    </div>
  );
};
