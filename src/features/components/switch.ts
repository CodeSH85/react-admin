import { Switch } from '@/components/ui/switch';

export const SwitchTemplate = {
  title: 'Switch',
  description: 'Switch component with different variants and sizes',
  component: Switch,
  data: [
    {
      props: {
        label: 'Switch',
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
