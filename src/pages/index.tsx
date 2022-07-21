import { Container } from 'src/components/Container/Container'
import { Grid } from 'src/components/Grid';
import { Masthead } from 'src/components/Masthead';
import { MainNav } from 'src/components/MainNav';

import navItems from '../data/main-nav.json';
import { GlobalFooter } from 'src/components/GlobalFooter';
import { LocalFooter } from 'src/components/LocalFooter';
import { ResultCard } from 'src/components/ResultCard';
import { Heading } from 'src/components/Heading';
import { useAuth } from 'src/hooks/useAuth';

export default function Home() {
  const { fullName, status } = useAuth();

  return (
    <>
      <header className="fixed top-0 left-0 z-20 bg-white w-full">
        <Masthead />
        <MainNav navData={navItems} />
      </header>

      <main className="px-6 mt-56">
        <Container center>
          {status === 1 &&
            <Heading className="underline decoration-airbnb-100 my-8">Welcome, {fullName}</Heading>
          }
          <Grid sm={2} md={2} lg={4} xl={4} xxl={5} gap={6}>
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