/* eslint-disable no-undef */
import { useSelector } from 'src/store/store';
import { UserState, getUserState } from 'src/store/slices/userSlice';

export const useAuth = (): UserState => {
  const user = useSelector(getUserState);
  return user;
};