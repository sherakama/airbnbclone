import React, { ComponentPropsWithoutRef } from 'react';
import { ButtonStyles as styles } from './Button.styles';
import { dcnb } from 'cnbuilder';

export type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button className={dcnb(className, styles.root)} onClick={onClick}>
      {children}
    </button>
  )
}

