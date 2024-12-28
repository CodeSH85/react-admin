import { Checkbox } from '@/components/ui/checkbox';

export const CheckboxTemplate = {
  title: 'Checkbox',
  description: 'Checkbox component with different variants and sizes',
  component: Checkbox,
  data: [
    {
      props: {
        label: 'Checkbox',
      },
    },
    {
      props: {
        disabled: true,
        label: 'Disabled',
      },
    }
  ],
};
