import { TextInput } from '@/components/ui/textInput';

export const TextInputTemplate = {
  title: 'Text Input',
  description: 'Text Input component with different variants and sizes',
  component: TextInput,
  data: [
    {
      props: {
        variant: 'filled',
        placeholder: 'Filled',
      },
    },
    {
      props: {
        placeholder: 'Disabled',
        disabled: true,
      },
    }
  ],
};