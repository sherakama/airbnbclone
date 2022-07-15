import React from 'react';
import { CarouselStyles as styles } from './Carousel.styles';
import { dcnb } from 'cnbuilder';
import { Images } from './Images';
import { Controls } from './Controls';
import { Pager } from '../Pager';
import { CarouselProvider } from './Carousel.provider';

interface CarouselProps {
  className?: string;
  images: string[];
}

export const Carousel = ({ className, images }: CarouselProps) => {

  return (
    <CarouselProvider>
      <div className={dcnb(styles.root, className)} data-cy="component-carousel">
        <Controls />
        <Images images={images} />
        <Pager items={images} />
      </div>
    </CarouselProvider>
  )
}

