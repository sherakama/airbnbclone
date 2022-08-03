import { Container } from '../Container';
import Link from 'next/link';
import { ResultCardStyles as styles } from './ResultCard.styles';
import { dcnb } from 'cnbuilder';
import { Heading } from '../Heading';
import { Carousel } from '../Carousel';
import { IHeart } from '../IHeart';
import { useCallback, useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { StarIcon } from '@heroicons/react/solid';

interface ResultCardInterface {
  className?: string;
  tid: number;
}

export const ResultCard = ({ className, tid }: ResultCardInterface) => {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const tripId = Math.floor(Math.random() * 1000) + 1;

  const fetchData = useCallback(async (tripId: number) => {
    const res = await fetch(`/api/trips/media/images/${tripId}`);
    const data = await res.json();
    setData(data.items);
    setTimeout(() => { setLoading(false) }, tripId);
  }, []);

  useEffect(() => {
    fetchData(tripId);
  }, []);

  if (isLoading) {
    return (
      <div>
        <PulseLoader />
        <Skeleton count={5} />
      </div>
    )
  }

  if (!data) {
    return (
      <p>Error</p>
    )
  }

  return (
    <Container as="div" center className={dcnb(styles.root, className)} data-cy="component-result-card">
      <Carousel images={data} className="mb-2" />
      <IHeart className="absolute w-7 h-7 top-3 right-3 z-10 text-3xl text-white opacity-75" tid={tid} />
      <Link href={''}>
        <a className={dcnb(styles.linktext)}>
          <Heading as="h2" className={dcnb(styles.loca)}>City, State, Country </Heading>
          <p className={dcnb(styles.dist)}>200 kilometers away</p>
          <p className={dcnb(styles.date)}>Sep. 5 - 10</p>
          <p className={dcnb(styles.cost)}><span className="font-jakarta-medium">$567 CAD</span> night</p>
          <span className={dcnb(styles.stars)}><StarIcon className="h-4 w-4 inline-block mr-1" /> 4.79</span>
        </a>
      </Link>
    </Container>
  )
}
