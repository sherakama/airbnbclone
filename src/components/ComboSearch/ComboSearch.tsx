import React from 'react';
import { ComboSearchStyles as styles } from './ComboSearch.styles';
import { dcnb } from 'cnbuilder';
import { SearchIcon } from '@heroicons/react/solid';

interface ComboProps {
  className?: string;
}

export const ComboSearch = ({ className }: ComboProps) => {
  return (
    <div className={dcnb(styles.root, className)}>
      <ul className={dcnb(styles.list)}>
        <li className={dcnb(styles.litem, 'border-l rounded-l-full border-r')}>
          <button className={dcnb(styles.button, 'px-5')}>Anywhere</button>
        </li>
        <li className={dcnb(styles.litem, 'border-r')}>
          <button className={dcnb(styles.button, 'px-5')}>Any week</button>
        </li>
        <li className={dcnb(styles.litem, 'border-r rounded-r-full pr-2 flex')}>
          <button className={dcnb(styles.button, 'pl-5 pr-3 text-slate-500')}>Add guests</button>
          <button className={dcnb('h-12')}>
            <SearchIcon className="text-white font-bold bg-airbnb-100 rounded-full p-2 w-8 h-8" />
            <span className="sr-only">
              Search All Places
            </span>
          </button>
        </li>
      </ul>
    </div>
  )
}