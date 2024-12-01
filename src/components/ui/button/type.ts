import type { ButtonProps as HeadlessUIProp } from '@headlessui/react';
import type { Variant, Size, Color } from '../type';

export type ButtonVariant = 'text' | Variant;

export type InternalButtonProps = {
  variant?: ButtonVariant;
  color?: Color;
  size?: Size;
  prependIcon?: string;
  appendIcon?: string;
  className?: string;
  children?: React.ReactNode;
  [othersOptions: string]: unknown;
};

export type ButtonProps = InternalButtonProps & HeadlessUIProp;
