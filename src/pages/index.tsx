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
      <header className="mb-8">
        <Masthead className="" />
        <MainNav navData={navItems} className="" />
      </header>

      <main className="px-6">
        <Container center>
          <Grid sm={2} md={3} lg={4} xl={5} gap={6}>
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