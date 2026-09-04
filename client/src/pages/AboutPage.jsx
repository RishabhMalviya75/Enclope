import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { studio, pillars } from '../data/content';

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Reveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          About
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          We are Enclop. We make games people actually play.
        </h1>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {studio.blurb}
        </p>
      </Reveal>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={0.05 * i}>
            <article className="minimal-card h-full p-8">
              <h2 className="text-xl leading-snug sm:text-2xl">{p.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 border-t border-white/5 pt-10">
          <h2 className="text-2xl">Talk to us</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">
            Feedback, press, partnerships, or a bug that is ruining your match — all of it reaches us
            fastest in Discord.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href={studio.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md"
            >
              Discord <ArrowUpRight size={15} />
            </a>
            <a
              href={`mailto:${studio.email}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md px-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {studio.email}
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
