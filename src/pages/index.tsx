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

      <main className="px-6 lg:px-10 xl:px-20 mt-52">
        <Container center>
          {status === 1 &&
            <Heading className="underline decoration-airbnb-100 my-8">Welcome, {fullName}</Heading>
          }
          <Grid sm={2} md={2} lg={4} xl={4} xxl={5} gap={6}>
            <ResultCard tid={1} />
            <ResultCard tid={2} />
            <ResultCard tid={3} />
            <ResultCard tid={4} />

            <ResultCard tid={100} />
            <ResultCard tid={101} />
            <ResultCard tid={102} />
            <ResultCard tid={103} />

            <ResultCard tid={1000} />
            <ResultCard tid={10000} />
            <ResultCard tid={100000} />
            <ResultCard tid={1000000} />

            <ResultCard tid={123456780} />
            <ResultCard tid={123456790} />
            <ResultCard tid={123456890} />
            <ResultCard tid={123457890} />
          </Grid>
        </Container>
      </main>

      <footer className="bg-slate-100 mt-12 px-6 pb-11 lg:px-10 xl:px-20">
        <LocalFooter />
      </footer>

      <GlobalFooter />
    </>
  )
}