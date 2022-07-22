import React, { useContext } from 'react';
import { ImagesStyles as styles } from './Images.styles';
import { dcnb } from 'cnbuilder';
import { Image } from '../Image';
import { CarouselContext } from './Carousel.context';

interface ImagesProps {
  className?: string;
  images: string[];
}

export const Images = ({ className, images }: ImagesProps) => {
  const { state: { active } } = useContext(CarouselContext);
  const count = images.length;

  /**
   * 
   * @returns number | undefined
   */
  const getLeft = () => {
    // Not enough.
    if (count < 2) {
      return undefined;
    }
    // We're above the first.
    if ((active - 1) >= 0) {
      return (active - 1);
    }
    return count - 1;
  };

  /**
   * 
   * @returns 
   */
  const getRight = () => {
    // Not enough.
    if (count < 2) {
      return undefined;
    }
    // We're above the first.
    if ((active + 1) < count) {
      return (active + 1);
    }
    return 0;
  };

  /**
   * 
   * @param index number
   * @returns boolean
   */
  const isNeutral = (index: number): boolean => {
    if (getLeft() || getRight()) {
      return false;
    }
    if (active === index) {
      return false;
    }
    return true;
  };

  return (
    <ul className={dcnb(styles.root, className)} data-cy="component-images">
      {images.map((img, index) => {

        const twstyles = dcnb(
          styles.litem,
          index === active ? [styles.active] : '',
          index === getLeft() ? styles.left : '',
          index === getRight() ? styles.right : '',
          isNeutral(index) ? styles.neutral : ''
        );

        return (
          <li key={img + index} className={twstyles}>
            <Image src={img} blurDataURL="https:/picsum.photos/10/10" layout="fill" objectFit="cover" alt="" className={dcnb(styles.limg)} />
          </li>
        )
      })}
    </ul>
  )
}

















