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
    <CarouselProvider count={images.length}>
      <div className={dcnb(styles.root, className)} data-cy="component-carousel">
        <Controls className="relative top-[6.5rem] h-0 w-full z-10 flex justify-between" />
        <Images images={images} />
        <Pager items={images} className="text-center relative top-[-2.50rem] h-0" />
      </div>
    </CarouselProvider>
  )
}

