import React, { useContext } from 'react';
import { CarouselStyles as styles } from './Carousel.styles';
import { dcnb } from 'cnbuilder';
import { Image } from '../Image';
import { CarouselContext } from './Carousel.context';

interface ImagesProps {
  className?: string;
  images: string[];
}

export const Images = ({ className, images }: ImagesProps) => {
  const { state } = useContext(CarouselContext);

  return (
    <ul className={dcnb(styles.ul, className)}>
      {images.map((img, index) => {
        return (
          <li key={img + index} className={dcnb(styles.litem, { 'invisible': index !== state.active })}>
            <Image src={img} blurDataURL="https:/picsum.photos/10/10" alt="" className={dcnb(styles.limg)} />
          </li>
        )
      })}
    </ul>
  )
}

















