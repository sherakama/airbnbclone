import slugify from 'src/utilities/slugify';
import { MainNavStyles as styles } from './MainNav.styles';
import { dcnb } from 'cnbuilder';
import { NavItem } from './NavItem';
import { Container } from '../Container/Container';
import { useScrollPosition, ScrollFunc } from 'src/hooks/useScrollPosition';
import { useEffect, useCallback, useState } from 'react';
interface MainNavProps {
  className?: string;
  navData: { items: { title: string, icon: string }[], meta: { direction: string, lang: string } }
}

export const MainNav = ({ navData, className }: MainNavProps) => {
  const scroll: ScrollFunc = useScrollPosition();
  const [scrollStyles, setScrollStyles] = useState<string[]>([]);
  const scrollCallback = useCallback(() => {
    // Nothing scrolled yet.
    if (scroll === undefined) {
      setScrollStyles(['pt-6']);
      return;
    }

    const closureStyles: string[] = [];
    if (scroll >= -200) {
      closureStyles.push('border-b shadow-md delay-150');
    }

    if (scroll <= -175) {
      closureStyles.push('pt-6');
    }
    else {
      closureStyles.push('pt-2');
    }

    setScrollStyles(closureStyles);
  }, [scroll, setScrollStyles]);

  useEffect(() => {
    scrollCallback();
  }, [scroll, scrollCallback])


  const navItems = navData.items.map((item: { title: string, icon: string }) => {
    return <NavItem key={slugify(item.title)} title={item.title} icon={item.icon} />
  });

  return (
    <div className={dcnb(styles.root, className, scrollStyles)}>
      <Container center as="nav" className={dcnb(styles.nav, className)}>
        <ul className={dcnb(styles.list)}>
          {navItems}
        </ul>
      </Container>
    </div >
  );
}