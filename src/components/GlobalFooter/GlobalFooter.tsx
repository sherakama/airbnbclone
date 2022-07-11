import { Container } from '../Container';
import Link from 'next/link';
import { GlobalFooterStyles as styles } from './GlobalFooter.styles';
import { dcnb } from 'cnbuilder';

interface GlobalFooterInterface {
  sticky?: boolean;
  className?: string;
}

export const GlobalFooter = ({ sticky = false, className }: GlobalFooterInterface) => {

  return (
    <Container className={dcnb(styles.root, className, (sticky ? styles.sticky : ''))}>
      <div className="basis-1 flex-grow">@2022 Airbnbclone, inc • <Link href={'#'}><a>Privacy</a></Link> • <Link href={'#'}><a>Terms</a></Link> • <Link href={'#'}><a>Sitemap</a></Link> • <Link href={'#'}><a>Destinations</a></Link></div>
      <div><Link href={'#'}><a>English (CA)</a></Link> <Link href={'#'}><a>$ CAD</a></Link></div>
      <div><Link href={'#'}><a>Fackbook</a></Link> <Link href={'#'}><a>Twitter</a></Link> <Link href={'#'}><a>Instagram</a></Link></div>
    </Container>
  )
}

