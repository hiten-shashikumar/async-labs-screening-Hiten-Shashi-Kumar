import { useInitialHashScroll } from './hooks/useInitialHashScroll';
import { Navbar } from './components/layout/Navbar';
import { Benefits } from './components/sections/Benefits';
import { Capabilities } from './components/sections/Capabilities';
import { FinalCta } from './components/sections/FinalCta';
import { Footer } from './components/sections/Footer';
import { Hero } from './components/sections/Hero';
import { UseCases } from './components/sections/UseCases';
import { Workflow } from './components/sections/Workflow';
import { SkipLink } from './components/ui/SkipLink';

export function App() {
  useInitialHashScroll();

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main">
        <Hero />
        <Benefits />
        <Capabilities />
        <Workflow />
        <UseCases />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
