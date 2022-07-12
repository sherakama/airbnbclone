/* eslint-disable no-undef */
import { useEffect, useState } from 'react';

export type ScrollFunc = number | undefined;

export const useScrollPosition = (): ScrollFunc => {
  const [scrollPos, setScrollPos] = useState<number|undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top * -1);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return scrollPos;
};