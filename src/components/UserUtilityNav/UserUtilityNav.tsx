import React from 'react';
import { UserUtilityNavStyles as styles } from './UserUtilityNav.styles';
import { dcnb } from 'cnbuilder';

interface UserUtilityNavProps {
  className?: string;
}

export const UserUtilityNav = ({ className }: UserUtilityNavProps) => {
  return (
    <a className={dcnb(styles.root, className)}>
      User Utility Nav Styles
    </a>
  )
}