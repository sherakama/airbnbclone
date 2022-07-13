import React from 'react';
import { CarouselStyles as styles } from './Carousel.styles';
import { dcnb } from 'cnbuilder';
import { Image } from '../Image';

interface CarouselProps {
  className?: string;
  images: string[];
}

export const Carousel = ({ className, images }: CarouselProps) => {
  return (
    <ul className={dcnb(styles.root, className)} data-cy="component-carousel">
      {images.map((img, index) => {
        return (
          <li key={img + index} className={dcnb(styles.litem)}>
            <Image src={img} blurDataURL="https:/picsum.photos/10/10" alt="Thing" className={dcnb(styles.limg)} />
          </li>
        )
      })}
    </ul>
  )
}

