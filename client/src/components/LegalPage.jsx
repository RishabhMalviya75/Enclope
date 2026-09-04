import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Shared chrome for the legal pages, matching the existing PrivacyPolicy/Terms styling so the
// game's policy and EULA do not read as bolted on. Kept deliberately plain: these pages are read
// by Play reviewers and by people who are annoyed, and both want text they can scan.

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
};

export function Section({ title, children }) {
    return (
        <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-heading text-white mb-4">{title}</h2>
            {children}
        </motion.section>
    );
}

export function Bullets({ items }) {
    return (
        <ul className="list-disc space-y-2 ml-6">
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    );
}

// Horizontally scrollable on its own, so a wide table never makes the page scroll sideways
// on a phone — which is the device most people will read this on.
export function Table({ head, rows }) {
    return (
        <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-white/5">
                    <tr>
                        {head.map((h, i) => (
                            <th key={i} className="px-4 py-3 font-heading text-white font-semibold">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="border-t border-white/10 align-top">
                            {row.map((cell, j) => (
                                <td key={j} className={`px-4 py-3 ${j === 0 ? 'text-white' : ''}`}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function LegalPage({ eyebrow, title, updated, intro, children }) {
    return (
        <section className="relative py-24 min-h-screen overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div className="flex items-center justify-center gap-3 mb-6" variants={fadeInUp}>
                        <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#ff7f50]"></span>
                        <span className="text-accent font-body tracking-[0.25em] uppercase text-xs font-medium">{eyebrow}</span>
                        <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#ff7f50]"></span>
                    </motion.div>
                    <motion.h1 className="hero-title text-5xl md:text-6xl mb-4" variants={fadeInUp}>{title}</motion.h1>
                    <motion.p className="text-text-secondary" variants={fadeInUp}>Last updated: {updated}</motion.p>
                </motion.div>

                <motion.div
                    className="space-y-12 text-text-secondary leading-relaxed"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {intro && (
                        <motion.p variants={fadeInUp} className="text-base">{intro}</motion.p>
                    )}

                    {children}

                    <motion.div className="pt-8 border-t border-white/10 flex flex-wrap gap-6" variants={fadeInUp}>
                        <Link to="/" className="text-accent hover:underline inline-flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                        <a href="/camocrew/" className="text-accent hover:underline">Camo Crew</a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
