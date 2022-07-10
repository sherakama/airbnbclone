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
    <ul className={dcnb(styles.root, className)}>
      {images.map((img) => {
        return (
          <li key={img} className={dcnb(styles.litem)}>
            <Image src={img} blurDataURL="https:/picsum.photos/10/10" alt="Thing" className={dcnb(styles.limg)} />
          </li>
        )
      })}
    </ul>
  )
}

