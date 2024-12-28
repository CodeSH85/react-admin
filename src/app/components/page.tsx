import React from 'react';

import { ComponentTemplate } from '@/features/components/useTemplate';
import { ButtonTemplate } from '@/features/components/buttons';
import { TextInputTemplate } from '@/features/components/text-input';
import { CheckboxTemplate } from '@/features/components/checkbox';
import { SwitchTemplate } from '@/features/components/switch';
import { IconTemplate } from '@/features/components/icon';

const ComponentPage = () => {
  const items = [
    ButtonTemplate,
    TextInputTemplate,
    CheckboxTemplate,
    SwitchTemplate,
    IconTemplate
  ];
  return (
    <div className='flex w-full'>
      <div className="relative h-full">
        <div className="sticky top-0 left-0 h-full">
          {
            items.map((item, index) => (
              <div key={index} className='p-2'>
                <a
                  href={`#${item.title}`} 
                  className='dark:text-white'
                >
                  {item.title}
                </a>
              </div>
            ))
          }
        </div>
      </div>
      <div 
        className="flex flex-col flex-grow gap-2 p-2 px-6"
        href={`#${ButtonTemplate.title}` || ''}
      >
        {
          items.map((item) => (
            <div id={item.title} key={item.title}>
              { ComponentTemplate(item) }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ComponentPage;
