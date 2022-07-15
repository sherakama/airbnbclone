import { useReducer, ReactNode } from 'react';
import { CarouselReducer, CarouselInitialState, CarouselContext } from './Carousel.context';

type Props = {
  children: ReactNode;
};

export function CarouselProvider({ children }: Props) {
  const [state, dispatch] = useReducer(CarouselReducer, CarouselInitialState);

  return (
    <CarouselContext.Provider value={{ state, dispatch }}>
      {children}
    </CarouselContext.Provider>
  )
}