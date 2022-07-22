import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface FavState {
  [key: string]: { 
    status: boolean 
  }
}

let localFavs;
if (typeof window !== 'undefined') {
  try {
    localFavs = window.localStorage.getItem('favs') || '{}';
    localFavs = JSON.parse(localFavs);
  }
  catch(e) {
    localFavs = {};
  }
}

const initialState: FavState = localFavs || {};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addFav: (
      state: Draft<typeof initialState>,
      action: PayloadAction<number>
    ) => {
      state[action.payload] = { status: true };
      window.localStorage.setItem('favs', JSON.stringify(state));
    },
    removeFav: (
      state: Draft<typeof initialState>,
      action: PayloadAction<number>
    ) => {
      delete state[action.payload];
      window.localStorage.setItem('favs', JSON.stringify(state));
    },
    clearFavs: (
      state: Draft<typeof initialState>
    ) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = {};
      window.localStorage.removeItem('favs');
    },
  }, 
});

// A small helper of user state for `useSelector` function.
export const getFavsState = (state: { favs: FavState }) => state.favs;

// Exports all actions
export const { addFav, removeFav, clearFavs } = favSlice.actions;

export default favSlice.reducer;