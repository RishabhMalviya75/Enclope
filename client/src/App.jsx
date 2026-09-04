import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';
import DocumentTitle from './components/DocumentTitle';

import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsAndConditionsPage from './pages/TermsAndConditions';
import CamoCrewPrivacyPage from './pages/CamoCrewPrivacy';
import CamoCrewTermsPage from './pages/CamoCrewTerms';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-base">
      <ScrollToTop />
      <DocumentTitle />
      <Header />

      <main className="container mx-auto flex-1 px-6 pt-28 sm:pt-32">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsAndConditionsPage />} />

          {/* Camo Crew's own policy and EULA. These are the URLs in Play Console and in the
              game's Settings ▸ Privacy panel (Assets/Scripts/Legal/LegalLinks.cs) — do not
              rename them without changing both, or the store listing links to a 404. The
              agency /privacy and /terms above govern client work and not the game. */}
          <Route path="/camocrew/privacy" element={<CamoCrewPrivacyPage />} />
          <Route path="/camocrew/terms" element={<CamoCrewTermsPage />} />

          {/* retired routes from the old site - keep inbound links alive */}
          <Route path="/showroom" element={<Navigate to="/games" replace />} />
          <Route path="/forge" element={<Navigate to="/games" replace />} />
          <Route path="/crucible" element={<Navigate to="/about" replace />} />
          <Route path="/join" element={<Navigate to="/about" replace />} />
          <Route path="/apply" element={<Navigate to="/about" replace />} />
          <Route path="/services" element={<Navigate to="/games" replace />} />
          <Route path="/work" element={<Navigate to="/games" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
