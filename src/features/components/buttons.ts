import { Button } from '@/components/ui/button';

export const ButtonTemplate = {
  title: 'Button',
  description: 'Button component with different variants and sizes',
  component: Button,
  data: [
    {
      props: {
        variant: 'elevated',
        size: 'xs',
        children: 'Elevated',
      },
    },
    {
      props: {
        variant: 'plain',
        size: 'sm',
        children: 'Plain',
      },
    },
    {
      props: {
        variant: 'text',
        children: 'Text',
      },
    },
    {
      props: {
        variant: 'flat',
        size: 'lg',
        color: 'error',
        children: 'Flat',
      },
    },
    {
      props: {
        variant: 'outlined',
        size: 'xl',
        children: 'Outlined',
      },
    },
  ],
};
