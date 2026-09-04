import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { games } from '../data/content';

export default function GamesPage() {
  return (
    <div className="py-16 sm:py-24">
      <Reveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          Everything we have shipped
        </span>
        <h1 className="mt-5 text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Our games
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          One game is live today. We would rather have a short list of things that actually work than
          a long list of things that never shipped.
        </p>
      </Reveal>

      <div className="mt-16 space-y-8">
        {games.map((game, i) => (
          <Reveal key={game.id} delay={0.06 * i}>
            <article className="minimal-card grid gap-0 overflow-hidden md:grid-cols-2">
              <a href={game.href} className="group relative block aspect-[16/10] overflow-hidden bg-surface">
                <picture>
                  <source srcSet={game.image} type="image/webp" />
                  <img
                    src={game.imageFallback}
                    alt={`${game.title} gameplay`}
                    width="1536"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </picture>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </a>

              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-green-400">
                  {game.status} · {game.platform}
                </span>

                <h2 className="mt-5 text-2xl sm:text-3xl">{game.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {game.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={game.href}
                    className="btn-primary inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md"
                  >
                    Explore {game.title}
                  </a>
                  <a
                    href={game.store}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md px-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    Google Play <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
