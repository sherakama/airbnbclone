import React, { useContext } from 'react';
import { ControlsStyles as styles } from './Controls.styles';
import { dcnb } from 'cnbuilder';
import { Button } from '../Button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { increment, decrement, CarouselContext } from './Carousel.context';

interface ControlsProps {
  className?: string;
}

export const Controls = ({ className }: ControlsProps) => {
  const { dispatch } = useContext(CarouselContext);

  const handleLeftClick = () => {
    dispatch(decrement());
  }

  const handleRightClick = () => {
    dispatch(increment());
  }

  return (
    <div className={dcnb(styles.root, className)}>
      <Button onClick={handleLeftClick}>
        <ChevronLeftIcon className="h-6 w-6" />
      </Button>
      <Button onClick={handleRightClick}>
        <ChevronRightIcon className="h-6 w-6" />
      </Button>
    </div>
  )
}

Controls.displayName = 'Carousel.Controls';

