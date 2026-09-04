import { motion } from 'framer-motion';
import useReducedMotion from '../hooks/useReducedMotion';

/** Scroll-triggered rise. Transform + opacity only, fires once.
 *  Reduced-motion visitors get the content immediately, never a fade. */
export default function Reveal({ children, delay = 0, y = 26, className = '' }) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
