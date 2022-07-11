import React from 'react';
import { UserUtilityNavStyles as styles } from './UserUtilityNav.styles';
import { dcnb } from 'cnbuilder';
import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/solid';
import { Grid } from '../Grid';

interface UserUtilityNavProps {
  className?: string;
}

export const UserUtilityNav = ({ className }: UserUtilityNavProps) => {
  return (
    <div className={dcnb(styles.root, className)}>
      <Grid xs={3} className="place-items-end items-end place-self-end">
        <Link href="#"><a className="text-sm">Become a host</a></Link>
        <Link href="#"><a><GlobeAltIcon className="h-6 w-6" /></a></Link>
        <Link href="#" className=""><a>UTILITY</a></Link>
      </Grid>

    </div>
  )
}