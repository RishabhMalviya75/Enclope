import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Sets <title> per route.
 *
 * This is a single-page app served from one index.html, so without this every
 * route rendered as "Enclop — We Make Games People Actually Play" — including
 * /camocrew/privacy, the URL filed with Google Play. A reviewer opening a
 * privacy-policy URL and getting a page titled like a marketing home page has
 * a reason to doubt it is the policy, and browser tabs and shared links carry
 * the same wrong name.
 *
 * A route missing from the map keeps the default, so adding a route never
 * breaks the title — it just does not gain a specific one.
 */
const TITLES = {
  '/':                  'Enclop — We Make Games People Actually Play',
  '/games':             'Our Games — Enclop',
  '/about':             'About — Enclop',
  '/privacy':           'Privacy Policy — Enclop',
  '/terms':             'Terms and Conditions — Enclop',
  '/camocrew/privacy':  'Camo Crew Privacy Policy — Enclop',
  '/camocrew/terms':    'Camo Crew Terms of Service — Enclop',
};

const DEFAULT_TITLE = TITLES['/'];

export default function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Trailing slashes are normalised so /camocrew/privacy/ matches too.
    const key = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    document.title = TITLES[key] || DEFAULT_TITLE;
  }, [pathname]);

  return null;
}
