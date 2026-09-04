import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Hero from '../sections/Hero';
import Statement from '../sections/Statement';
import FlagshipGame from '../sections/FlagshipGame';
import Pillars from '../sections/Pillars';
import InDevelopment from '../sections/InDevelopment';

export default function HomePage() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ duration: 1.1 });
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Hero />
      <Statement />
      <FlagshipGame />
      <Pillars />
      <InDevelopment />
    </>
  );
}
