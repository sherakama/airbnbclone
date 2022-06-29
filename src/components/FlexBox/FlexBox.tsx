import React, { ReactNode, HTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import {
  flexDirection,
  flexWrap,
  flexJustifyContent,
  flexAlignContent,
  flexAlignItems,
  FlexElementType,
  FlexDirectionType,
  FlexWrapType,
  FlexJustifyContentType,
  FlexAlignContentType,
  FlexAlignItemsType,
  FlexGapClasses,
  FlexGapClassesType,
} from './FlexBox.styles';

export interface FlexBoxProps {
  children?: ReactNode;
  className?: ClassValue;
  as?: FlexElementType;
  direction?: FlexDirectionType;
  wrap?: FlexWrapType;
  gap?: FlexGapClassesType;
  justifyContent?: FlexJustifyContentType;
  alignContent?: FlexAlignContentType;
  alignItems?: FlexAlignItemsType;
}

export const FlexBox = ({
  as = 'div',
  direction,
  wrap,
  gap,
  justifyContent,
  alignContent,
  alignItems,
  className,
  children,
  ...props
}: FlexBoxProps & HTMLAttributes<HTMLElement>) => {
  return React.createElement(
    as,
    {
      className: dcnb(
        'flex',
        direction ? flexDirection[direction] : false,
        wrap ? flexWrap[wrap] : false,
        gap ? FlexGapClasses[gap] : false,
        justifyContent ? flexJustifyContent[justifyContent] : false,
        alignContent ? flexAlignContent[alignContent] : false,
        alignItems ? flexAlignItems[alignItems] : false,
        className
      ),
      ...props,
    },
    children
  );
};
