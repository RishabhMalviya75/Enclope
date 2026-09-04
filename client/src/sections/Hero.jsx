import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

import { studio } from '../data/content';
import useReducedMotion from '../hooks/useReducedMotion';

// three.js is ~900kB - keep it out of the critical path so the copy paints first
const HeroScene = lazy(() => import('./HeroScene'));

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.11, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

/** WebGL can be missing (old device, blocked context) - fall back silently. */
function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl'))
    );
  } catch {
    return false;
  }
}

export default function Hero() {
  const reduced = useReducedMotion();
  const [scene, setScene] = useState(null); // null = undecided, false = no 3D

  useEffect(() => {
    if (!hasWebGL()) {
      setScene(false);
      return;
    }
    setScene({ sparkCount: window.innerWidth < 768 ? 350 : 1100 });
  }, []);

  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden">
      {/* --- 3D layer --- */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {scene && (
          <Suspense fallback={null}>
            <HeroScene still={reduced} sparkCount={scene.sparkCount} />
          </Suspense>
        )}

        {/* glow doubles as the no-WebGL fallback, and as the readability wash */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_45%,rgba(255,95,31,0.18),transparent_58%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base to-transparent" />
      </div>

      {/* --- copy --- */}
      <div className="relative z-10 w-full max-w-3xl">
        <motion.span
          variants={rise}
          initial={reduced ? false : 'hidden'}
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-accent"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Independent game studio
        </motion.span>

        <motion.h1
          variants={rise}
          initial={reduced ? false : 'hidden'}
          animate="show"
          custom={1}
          className="hero-title mt-7 text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
        >
          We make games
          <br />
          people <span className="text-accent">actually play.</span>
        </motion.h1>

        <motion.p
          variants={rise}
          initial={reduced ? false : 'hidden'}
          animate="show"
          custom={2}
          className="mt-7 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          {studio.blurb}
        </motion.p>

        <motion.div
          variants={rise}
          initial={reduced ? false : 'hidden'}
          animate="show"
          custom={3}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="/camocrew/"
            className="btn-primary inline-flex min-h-[48px] items-center justify-center gap-3 rounded-md"
          >
            <Play size={16} className="shrink-0" />
            Play Camo Crew
          </a>

          <Link
            to="/games"
            className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md px-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            See what we make
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      {/* --- scroll cue --- */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.4, duration: reduced ? 0 : 0.8 }}
        className="pointer-events-none absolute bottom-8 left-0 z-10 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 md:flex"
      >
        <span className="h-px w-10 bg-white/20" />
        Scroll
      </motion.div>
    </section>
  );
}
