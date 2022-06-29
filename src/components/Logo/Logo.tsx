import React from 'react';
import { LogoStyles as styles } from './Logo.styles';
import { dcnb } from 'cnbuilder';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <a className={dcnb(styles.root, className)}>
      <span className={dcnb(styles.logo)}>
        AirBnB
      </span>
    </a>
  )
}