import { Switch as HSwitch } from '@headlessui/react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const switchVariants = cva(
  `
    group relative flex h-7 w-14 cursor-pointer rounded-full 
    bg-slate-400 p-1 transition-colors duration-200 ease-in-out
    focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-primary
  `,
  {
    variants: {
      checked: {
        true: 'bg-primary',
        false: 'bg-slate-300',
      },
    },
    defaultVariants: {
      checked: false
    },
  }
);

const Switch = (props: { [key: string]: any }) => {
  const {
    checked,
    className: propClassName,
    ...otherProps
  } = props;
  const switchClass = twMerge(
    switchVariants({ checked: checked }),
    propClassName
  );
  return (
    <HSwitch
      checked={checked}
      className={switchClass}
      {...otherProps}
    >
      <span
        aria-hidden='true'
        className='
          bg-white 
          pointer-events-none inline-block size-5 translate-x-0 rounded-full shadow-lg ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-7'
      />
    </HSwitch>
  );
};

export { Switch };
