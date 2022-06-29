import { Container } from '../Container';
import Image, { ImageLoaderProps } from 'next/image';
import Link from 'next/link';
import { ResultCardStyles as styles } from './ResultCard.styles';
import { dcnb } from 'cnbuilder';
import { Heading } from '../Heading';

interface ResultCardInterface {
  className?: string;
}

const placeLoader = ({ src }: ImageLoaderProps) => {
  return `${src}?cachebust=${Math.floor(Math.random() * 10000000)}`
}

export const ResultCard = ({ className }: ResultCardInterface) => {

  return (
    <Container as="div" center className={dcnb(styles.root, className)}>
      <Image src="https://placeimg.com/720/480/arch" blurDataURL="https://placeimg.com/10/10/arch" placeholder="blur" height={480} width={480} alt="Place Image" loader={placeLoader} className={dcnb(styles.img)} />
      <button>♡</button>
      <Link href={''}>
        <a>
          <Heading as="h2">City, State, Country <span>4.79 ⭐</span></Heading>
          <p>200 kilometers away</p>
          <p>Sep. 5 - 10</p>
          <p><span>$567 CAD</span> night</p>
        </a>
      </Link>
    </Container>
  )
}

