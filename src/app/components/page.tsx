import React from 'react';

import { ComponentTemplate } from '@/features/components/useTemplate';
import { ButtonTemplate } from '@/features/components/buttons';
import { TextInputTemplate } from '@/features/components/text-input';
import { CheckboxTemplate } from '@/features/components/checkbox';
import { SwitchTemplate } from '@/features/components/switch';
import { IconTemplate } from '@/features/components/icon';

const ComponentPage = () => {
  return (
    <div className='flex flex-col gap-2 p-2'>
      {ComponentTemplate(ButtonTemplate)}
      {ComponentTemplate(TextInputTemplate)}
      {ComponentTemplate(CheckboxTemplate)}
      {ComponentTemplate(SwitchTemplate)}
      {ComponentTemplate(IconTemplate)}
    </div>
  );
};

export default ComponentPage;
