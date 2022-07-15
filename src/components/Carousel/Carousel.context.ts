/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, Dispatch } from 'react';

type Action = { type: string, payload?: any }
type State = { active: number }

export const CarouselInitialState: State = { active: 0 };
export const CarouselContext = createContext<{
  state: State,
  dispatch: Dispatch<any>,
}>({
  state: CarouselInitialState,
  dispatch: () => null,
});

export const CarouselReducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case 'increment': {
      return { active: state.active + 1 }
    }
    case 'decrement': {
      return { active: state.active - 1 }
    }
    case 'set': {
      return { active: payload }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

export const increment = () => {
  return { type: 'increment' }
}

export const decrement = () => {
  return { type: 'decrement' }
}

export const set = (value: number) => {
  return { type: 'set', value }
}