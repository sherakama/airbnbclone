/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, Dispatch } from 'react';

type Action = { type: string, payload?: any }
type State = { active: number, count: number }

export const CarouselInitialState: State = { active: 0, count: 0 };
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
      if (state.active < (state.count - 1)) {
        return { ...state, active: state.active + 1 }
      }
      // Back to start.
      return { ...state, active: 0 }
    }
    case 'decrement': {
      if (state.active > 0) {
        return { ...state, active: state.active - 1 }
      }
      // To the end.
      return { ...state, active: state.count - 1}
    }
    case 'set': {
      return { ...state, active: payload }
    }
    case 'count': {
      return { ...state, count: payload }
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
  return { type: 'set', payload: value }
}

export const count = (value: number) => {
  return { type: 'count', payload: value }
}