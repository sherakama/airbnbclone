import { Container } from '../Container';
import Link from 'next/link';
import { LocalFooterStyles as styles } from './LocalFooter.styles';
import { dcnb } from 'cnbuilder';
import { Heading } from '../Heading';
import { Grid } from '../Grid';

interface LocalFooterInterface {
  className?: string;
}

export const LocalFooter = ({ className }: LocalFooterInterface) => {

  return (
    <Container as="nav" center className={dcnb(styles.root, className)} data-cy="component-localfooter">
      <Grid md={4} gap={8}>
        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className="font-bold">Support</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Help Centre</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>AirCover</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Safety information</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Supporting people with disabilities</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Cancellation options</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Our COVID-19 Response</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Report a neighbourhood concern</a></Link></li>
        </ul>

        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className="font-bold">Community</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Airbnb.org: disaster relief housing</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Support Afghan refugees</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Combating discrimination</a></Link></li>
        </ul>

        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className="font-bold">Hosting</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Try hosting</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>AirCover for Hosts</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Explore hosting resources</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Visit our community forum</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>How to host responsibly</a></Link></li>
        </ul>

        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className="font-bold">About</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Newsroom</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Learn about new features</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Letter from our founders</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Careers</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a>Investors</a></Link></li>
        </ul>
      </Grid>
    </Container>
  )
}

