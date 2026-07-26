import type { Variant, Size, Color } from '../type'

export type ButtonVariant = 'text' | Variant

export interface InternalButtonProps {
  variant?: ButtonVariant;
  color?: Color;
  size?: Size;
  disabled?: boolean;
  rounded?: 'normal' | 'full';
  prependIcon?: React.ReactNode;
  appendIcon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  icon?: boolean
  [othersOptions: string]: unknown;
};

export type ButtonProps = InternalButtonProps
