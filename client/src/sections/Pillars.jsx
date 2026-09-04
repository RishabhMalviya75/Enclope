import Reveal from '../components/Reveal';
import { pillars } from '../data/content';

export default function Pillars() {
  return (
    <section className="py-24 sm:py-32">
      <Reveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          How we work
        </span>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="mt-5 max-w-2xl text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Four things we refuse to compromise on.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={0.06 * i}>
            <article className="minimal-card group h-full p-8">
              <span className="font-mono text-xs text-white/25">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-xl leading-snug sm:text-2xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
