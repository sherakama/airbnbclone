import { useReducer, ReactNode } from 'react';
import { CarouselReducer, CarouselInitialState, CarouselContext } from './Carousel.context';

type Props = {
  children: ReactNode;
  count: number;
};

export function CarouselProvider({ children, count }: Props) {
  CarouselInitialState.count = count;
  const [state, dispatch] = useReducer(CarouselReducer, CarouselInitialState);

  return (
    <CarouselContext.Provider value={{ state, dispatch }}>
      {children}
    </CarouselContext.Provider>
  )
}