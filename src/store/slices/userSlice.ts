import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  status: number;
  email: string;
  fullName: string;
}

const initialState: UserState = {
  status: 0,
  email: 'shea@mckmedia.ca',
  fullName: 'Shea McKinney',
};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.fullName>
    ) => {
      state.fullName = action.payload;
    },
    setEmail: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.email>
    ) => {
      state.email = action.payload;
    },
    setStatus: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.status>
    ) => {
      state.status = action.payload;
    },
    setUser: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state = action.payload;
    },
  }, 
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setName, setEmail, setStatus, setUser } = userSlice.actions;

export default userSlice.reducer;