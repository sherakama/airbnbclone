import React from 'react';
import { ComboSearchStyles as styles } from './ComboSearch.styles';
import { dcnb } from 'cnbuilder';

interface ComboProps {
  className?: string;
}

export const ComboSearch = ({ className }: ComboProps) => {
  return (
    <div className={dcnb(styles.root, className)}>
      <ul className={dcnb(styles.list)}>
        <li className={dcnb(styles.where)}>Anywhere</li>
        <li className={dcnb(styles.week)}>Any week</li>
        <li className={dcnb(styles.guest)}>Add guests <span>search icon</span></li>
      </ul>
    </div>
  )
}