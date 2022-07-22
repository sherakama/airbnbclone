import React, { ComponentPropsWithoutRef, MouseEvent } from 'react';
import { IHeartStyles as styles } from './IHeart.styles';
import { HeartIcon } from '@heroicons/react/outline';
import { dcnb } from 'cnbuilder';
import { useSelector } from 'src/store/store';
import { addFav, removeFav, getFavsState } from 'src/store/slices/favSlice';
import { useDispatch } from '../../store/store';

export type IHeartProps = ComponentPropsWithoutRef<'button'> & { tid: number };

export const IHeart = ({ className, tid }: IHeartProps) => {

  const favs = useSelector(getFavsState);
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent<HTMLElement>): void => {
    console.log('STATE CLICK');
    e.preventDefault();
    if (favs[tid]?.status === true) {
      dispatch(removeFav(tid));
      return;
    }
    dispatch(addFav(tid));
  }

  const active = (favs[tid]?.status === true);

  return (
    <button className={dcnb(className, styles.root)} onClick={handleClick}>
      <HeartIcon className={dcnb(styles.icon, active ? styles.active : styles.neutral)} />
    </button>
  )
}

