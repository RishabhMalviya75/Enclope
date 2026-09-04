import Reveal from '../components/Reveal';

const MARQUEE = [
  'Multiplayer netcode',
  'Unity',
  'Mobile performance',
  'Game design',
  '3D art',
  'Live ops',
  'Player feedback loops',
];

export default function Statement() {
  return (
    <section className="relative border-y border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-2 text-center">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Who we are
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            A small studio with a stubborn habit of
            <span className="text-accent"> finishing things</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Most game ideas die in a document. Ours end up on phones. We prototype fast, test on the
            cheapest hardware we can find, and put builds in front of real players long before they
            are comfortable to show.
          </p>
        </Reveal>
      </div>

      {/* marquee */}
      <div
        className="marquee mt-16 border-y border-white/5 py-5"
        aria-hidden="true"
      >
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div className="marquee__group" key={copy}>
              {MARQUEE.map((item) => (
                <span key={item} className="marquee__item">
                  {item}
                  <span className="marquee__dot" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
