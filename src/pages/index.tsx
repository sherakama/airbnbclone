import { Container } from 'src/components/Container/Container'
import { Grid } from 'src/components/Grid';
import { Masthead } from 'src/components/Masthead';
import { MainNav } from 'src/components/MainNav';

import navItems from '../data/main-nav.json';
import { GlobalFooter } from 'src/components/GlobalFooter';
import { LocalFooter } from 'src/components/LocalFooter';
import { ResultCard } from 'src/components/ResultCard';

export default function Home() {

  return (
    <>
      <header className="fixed top-0 left-0 z-10 bg-white w-full">
        <Masthead />
        <MainNav navData={navItems} />
      </header>

      <main className="px-6 mt-56">
        <Container center>
          <Grid sm={2} md={2} lg={4} xl={5} gap={6}>
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />

            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />

            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />

            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </Grid>

        </Container>
      </main>

      <footer className="bg-slate-100 mt-12 px-6">
        <LocalFooter />
        <hr className="h-[2px] mx-[-26px]" />
        <GlobalFooter />
      </footer>
    </>
  )
}