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
    <div className={dcnb(styles.root, className)} cy-text="component-controls">
      <Button onClick={handleLeftClick} className={dcnb(styles.btn)}>
        <ChevronLeftIcon className={dcnb(styles.icon)} />
      </Button>
      <Button onClick={handleRightClick} className={dcnb(styles.btn)}>
        <ChevronRightIcon className={dcnb(styles.icon)} />
      </Button>
    </div>
  )
}

Controls.displayName = 'Carousel.Controls';

