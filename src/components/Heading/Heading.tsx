import React, { ReactNode } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const headingSizes = {
  h1: 'prose-2xl',
  h2: 'prose-xl',
  h3: 'prose-lg',
  h4: 'prose-base',
  h5: 'prose-sm',
  h6: 'prose-xs',
};

export interface ContainerProps {
  as?: HeadingType;
  children?: ReactNode;
  className?: ClassValue;
}

export const Heading = ({ as = 'h2', children, className, ...props }: ContainerProps) => {
  const styles = ['prose'];
  styles.push(headingSizes[as]);
  return React.createElement(as, { className: dcnb(styles, className), ...props }, children);
}