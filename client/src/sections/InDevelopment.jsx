import Reveal from '../components/Reveal';
import { studio } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function InDevelopment() {
  return (
    <section className="pb-28 sm:pb-36">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-10 sm:p-14">
          {/* schematic grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              In development
            </span>
            <h2 className="mt-5 text-3xl leading-tight tracking-tight sm:text-4xl">
              There is more coming. We are just not ready to show it.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-secondary">
              We would rather announce a game once it is playable than post concept art for something
              that may never ship. When the next one is ready for real hands, the people in our
              Discord get it first.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={studio.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md"
              >
                Join the Discord
                <ArrowUpRight size={15} />
              </a>
              <a
                href={studio.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md px-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Follow @_enclop
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
