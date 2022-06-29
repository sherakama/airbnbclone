import slugify from 'src/utilities/slugify';
import { NavItemStyles as styles } from './NavItem.styles';
import { dcnb } from 'cnbuilder';
import Image from 'next/image';
import Link from 'next/link';

interface NavItemProps {
  className?: string;
  title: string;
  icon: string;
}

export const NavItem = ({ title, icon }: NavItemProps) => {
  return (
    <li className={dcnb(styles.root)}>
      <Link href={`/${slugify(title)}`}>
        <a className="text-center">
          <span className="block text-center"><Image src={icon} alt={title} height={24} width={24} /></span>
          <span className="block text-xs whitespace-nowrap">{title}</span>
        </a>
      </Link>
    </li>
  );
}