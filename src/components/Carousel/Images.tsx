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

  return (
    <ul className={dcnb(styles.root, className)} data-cy="component-images">
      {images.map((img, index) => {
        return (
          <li key={img + index} className={dcnb(styles.litem, index == active ? [styles.highlight] : [styles.neutral])}>
            <Image src={img} blurDataURL="https:/picsum.photos/10/10" layout="fill" objectFit="cover" alt="" className={dcnb(styles.limg)} />
          </li>
        )
      })}
    </ul>
  )
}

















