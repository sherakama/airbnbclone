import React from 'react';
import { UserUtilityNavStyles as styles } from './UserUtilityNav.styles';
import { dcnb } from 'cnbuilder';
import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/outline';
import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid';
import { useDispatch } from '../../store/store';
import { setStatus } from '../../store/slices/userSlice';
import { useAuth } from '../../hooks/useAuth';

interface UserUtilityNavProps {
  className?: string;
}

export const UserUtilityNav = ({ className }: UserUtilityNavProps) => {
  const dispatch = useDispatch();
  const { fullName, status } = useAuth();

  const userLoginToggle = () => {
    if (!status) {
      dispatch(
        setStatus(1)
      );
      return;
    }

    dispatch(setStatus(0));
  }

  return (
    <div className={dcnb(styles.root, className)} data-cy="component-userutility">
      <div className={dcnb(styles.container)}>
        <Link href="#"><a className="text-sm whitespace-nowrap tracking-tight rounded-full py-2 px-4 hocus:bg-neutral-100 mr-[-.5em]">Become a Host</a></Link>
        <Link href="#"><a className="p-3 hocus:bg-neutral-100 rounded-full"><GlobeAltIcon className="h-5 w-5" /></a></Link>
        <button onClick={userLoginToggle} className="flex items-center border rounded-full pl-2 pr-0.5 py-1">
          <span>
            <MenuIcon className="h-5 w-5 text-neutral-500" />
          </span>
          {status === 0 ?
            <span className="pl-2">
              <UserCircleIcon className="h-8 w-8 text-neutral-500" />
            </span>
            :
            <p className="bg-neutral-100 px-3 rounded-r-full">{fullName.slice(0, 1)}</p>
          }
        </button>
      </div>
    </div >
  )
}