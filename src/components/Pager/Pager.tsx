/* eslint-disable @typescript-eslint/no-explicit-any */
import { PagerStyles as styles } from './Pager.styles';
import { dcnb } from 'cnbuilder';

interface PagerInterface {
  className?: string;
  items: any[]
}

export const Pager = ({ className, items }: PagerInterface) => {

  return (
    <div className={dcnb(styles.root, className)}>
      <ul className={dcnb(styles.ul)}>
        {items.map((itm, index) => {
          return (
            <li key={`pager-${index}`} className={dcnb(styles.pitem)}>
              <a href="#" className={dcnb(styles.plink)}>•<span className="sr-only">{index}</span></a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


