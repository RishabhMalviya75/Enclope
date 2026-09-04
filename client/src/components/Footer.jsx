import { Link, useLocation } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { studio } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // the homepage already ends on its own CTA panel
  const hideCta = location.pathname === '/';

  const socials = [
    { name: 'Discord', icon: MessageCircle, href: studio.discord },
    { name: 'Instagram', icon: Instagram, href: studio.instagram },
    { name: 'Email', icon: Mail, href: `mailto:${studio.email}` },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black pb-10 pt-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        {/* CTA */}
        {!hideCta && (
          <div className="mb-20 border-b border-white/5 pb-20">
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  Go play something
                </span>
                <h2 className="text-5xl font-bold leading-[0.9] tracking-tighter text-white md:text-7xl">
                  READY TO <br />
                  <span className="text-white/40">DISAPPEAR?</span>
                </h2>
              </div>

              <a href="/camocrew/" className="jelly-button">
                <span className="text">Play Camo Crew</span>
                <span className="svg-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 38 15" fill="none">
                    <path d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        )}

        {/* links */}
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="mb-6 inline-block font-heading text-3xl tracking-wider">
              <span className="text-white">E</span>
              <span className="text-white/60">nclop</span>
            </Link>

            <p className="mb-6 max-w-sm font-light leading-relaxed text-text-secondary">
              An independent game studio. We build the strange, ambitious games we want to play — and
              then we actually ship them.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-green-500">
                Camo Crew is live
              </span>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-white/40">
              Directory
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="block text-sm text-white/70 transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/games" className="block text-sm text-white/70 transition-colors hover:text-accent">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/about" className="block text-sm text-white/70 transition-colors hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <a href="/camocrew/" className="block text-sm text-white/70 transition-colors hover:text-accent">
                  Camo Crew
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-white/40">
              Connect
            </h3>
            <ul className="space-y-4">
              {socials.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <item.icon size={16} className="transition-colors group-hover:text-accent" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-white/40">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy" className="text-sm text-white/70 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-white/70 transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
              {/* The game has its own policy and EULA. The two above cover client work and
                  do not govern a player — keeping both pairs reachable is the point. */}
              <li>
                <Link to="/camocrew/privacy" className="text-sm text-white/70 transition-colors hover:text-white">
                  Camo Crew Privacy
                </Link>
              </li>
              <li>
                <Link to="/camocrew/terms" className="text-sm text-white/70 transition-colors hover:text-white">
                  Camo Crew Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/30">
            &copy; {currentYear} Enclop. All Rights Reserved.
          </div>
          <a
            href={studio.play}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-white/30 transition-colors hover:text-accent"
          >
            Camo Crew on Google Play
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
