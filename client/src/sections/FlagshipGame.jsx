import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Gamepad2 } from 'lucide-react';

import Reveal from '../components/Reveal';
import { games } from '../data/content';
import useReducedMotion from '../hooks/useReducedMotion';

export default function FlagshipGame() {
  const game = games[0];
  const wrap = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ['start end', 'end start'],
  });
  // subtle parallax on the art
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-6%', '6%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [1, 1, 1] : [1.08, 1.02, 1.08]);

  return (
    <section ref={wrap} className="py-24 sm:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              Our games
            </span>
            <h2 className="mt-5 text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Camo Crew
            </h2>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-green-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            {game.status} · {game.platform}
          </span>
        </div>
      </Reveal>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* --- art --- */}
        <Reveal className="lg:col-span-7" delay={0.05}>
          <a
            href={game.href}
            className="group relative block overflow-hidden rounded-2xl border border-white/10"
            aria-label="Explore Camo Crew"
          >
            <div className="aspect-[16/10] overflow-hidden bg-surface">
              <motion.div style={{ y, scale }} className="h-full w-full">
                <picture>
                  <source srcSet={game.image} type="image/webp" />
                  <img
                    src={game.imageFallback}
                    alt="Camo Crew gameplay"
                    width="1536"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </motion.div>
            </div>

            {/* glow + label */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [box-shadow:inset_0_0_80px_rgba(255,95,31,0.25)]" />
            <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
                {game.tagline}
              </p>
              <ArrowUpRight
                size={22}
                className="shrink-0 text-white/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
              />
            </div>
          </a>
        </Reveal>

        {/* --- copy --- */}
        <div className="lg:col-span-5">
          <Reveal delay={0.12}>
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              {game.description}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="mt-9 grid grid-cols-3 gap-4 border-y border-white/5 py-6">
              {game.facts.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="text-3xl text-text-primary sm:text-4xl">{f.value}</dd>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/35">
                    {f.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-8 space-y-3">
              {game.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={game.href}
                className="btn-primary inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md"
              >
                <Gamepad2 size={16} />
                Explore Camo Crew
              </a>
              <a
                href={game.store}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md px-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Get it on Google Play
                <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
