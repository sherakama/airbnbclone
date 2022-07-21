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
  const isLeft = () => {
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
  const isRight = () => {
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
  const isNeutral = (index: number): boolean => {
    if (isLeft() || isRight()) {
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
          index === isLeft() ? styles.left : '',
          index === isRight() ? styles.right : '',
          isNeutral(index) ? styles.neutral : ''
        );

        console.log('THE IMAGE: ', img);
        console.log('THE INDEX: ', index);


        return (
          <li key={img + index} className={twstyles}>
            <Image src={img} blurDataURL="https:/picsum.photos/10/10" layout="fill" objectFit="cover" alt="" className={dcnb(styles.limg)} />
          </li>
        )
      })}
    </ul>
  )
}

















