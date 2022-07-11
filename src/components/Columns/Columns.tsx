import React, { ReactNode, HTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import { GapClasses, GapClassesType, ColumnClasses, ColumnClassesType, ColumnElements } from './Columns.styles';

export interface ColumnsProps {
  as?: typeof ColumnElements[number];
  children?: ReactNode;
  className?: ClassValue;
  columns?: ColumnClassesType;
  gap?: GapClassesType;
}

export const Columns = ({ as = 'div', children, className, columns = 3, gap, ...props }: ColumnsProps & HTMLAttributes<Element>) => {
  const styles = [];
  if (columns) styles.push(ColumnClasses[columns]);
  if (gap) styles.push(GapClasses[gap]);
  return React.createElement(as, { className: dcnb(styles, className), ...props }, children);
}
