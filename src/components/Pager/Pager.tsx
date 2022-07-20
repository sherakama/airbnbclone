/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { PagerStyles as styles } from './Pager.styles';
import { dcnb } from 'cnbuilder';
import { CarouselContext, set } from '../Carousel/Carousel.context';

interface PagerInterface {
  className?: string;
  items: any[]
}

export const Pager = ({ className, items }: PagerInterface) => {
  const { dispatch, state: { active } } = useContext(CarouselContext);

  const handleClick = (index: number) => {
    dispatch(set(index));
  }

  return (
    <div className={dcnb(styles.root, className)}>
      <ul className={dcnb(styles.pul)} cy-test="component-pager">
        {items.map((itm, index) => {
          return (
            <li key={`pager-${index}`} className={dcnb(styles.pitem)}>
              <a href="#" onClick={() => {
                handleClick(index);
              }} className={dcnb(styles.plink, index == active ? styles.highlight : styles.neutral)}>•<span className="sr-only">{index}</span></a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


