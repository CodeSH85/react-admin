import type { Variant, Size, Color } from '../type';

export type ButtonVariant = 'text' | Variant;

export type InternalButtonProps = {
  variant?: ButtonVariant;
  color?: Color;
  size?: Size;
  rounded?: 'normal';
  prependIcon?: string;
  appendIcon?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: boolean
  [othersOptions: string]: unknown;
};

export type ButtonProps = InternalButtonProps
