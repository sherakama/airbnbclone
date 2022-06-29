import React, { ReactNode, HTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import { gridCols, GridColsType, GridElementType, GridGapClassesType, GridGapClasses } from './Grid.styles';

export interface GridProps {
  as?: GridElementType;
  xs?: GridColsType;
  sm?: GridColsType;
  md?: GridColsType;
  lg?: GridColsType;
  xl?: GridColsType;
  xxl?: GridColsType;
  gap?: GridGapClassesType;
  children?: ReactNode;
  className?: ClassValue;
}

export type DCNBGridAttributes = Omit<HTMLAttributes<HTMLElement>, 'className'>;

export const Grid = ({
  as = 'div',
  xs = 1,
  sm,
  md,
  lg,
  xl,
  xxl,
  gap,
  className,
  children,
  ...rest
}: GridProps & DCNBGridAttributes) => {
  return React.createElement(
    as,
    {
      className: dcnb(
        'grid',
        xs ? gridCols[xs] : false,
        sm ? `sm:${gridCols[sm]}` : false,
        md ? `md:${gridCols[md]}` : false,
        lg ? `lg:${gridCols[lg]}` : false,
        xl ? `xl:${gridCols[xl]}` : false,
        xxl ? `2xl:${gridCols[xxl]}` : false,
        gap ? GridGapClasses[gap] : false,
        className
      ),
      ...rest,
    },
    children
  );
};
