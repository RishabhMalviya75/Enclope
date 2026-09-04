import { Link } from 'react-router-dom';
import LegalPage, { Section, Bullets, Table } from '../components/LegalPage';

// Camo Crew's privacy policy — the URL entered in Play Console ▸ App content ▸ Privacy
// policy, and the URL LegalLinks.PrivacyPolicy opens from inside the game. All three must
// stay identical; a listing whose policy URL disagrees with the in-app link is a standard
// rejection.
//
// This is deliberately NOT the enclop.com policy at /privacy. That one governs agency
// clients — project documents, milestone work — and says the company shares nothing with
// third parties, which is untrue of an ad-funded game and would itself be a violation.
//
// The ad-partner table is the part that goes stale. It must match the mediation adapters
// actually shipped in the build (Yodo1MasAndroidDependencies.xml). AppLovin's publisher
// policy requires this page to disclose that third parties including AppLovin collect and
// share personal data for advertising, by name.
export default function CamoCrewPrivacyPage() {
    return (
        <LegalPage
            eyebrow="Camo Crew"
            title="Privacy Policy"
            updated="September 4, 2026"
            intro={
                <>
                    This policy covers <span className="text-white">Camo Crew</span> (Google Play package{' '}
                    <code className="text-accent">com.enclop.crewcamo</code>), published by Enclop. It explains what
                    the game collects, who it is shared with, and how to get it deleted. Enclop's{' '}
                    <Link to="/privacy" className="text-accent hover:underline">company privacy policy</Link>{' '}
                    covers our website and client services and does not apply to the game.
                </>
            }
        >
            <Section title="Who we are">
                <p>
                    Enclop, India. Questions, requests and complaints:{' '}
                    <a href="mailto:support@enclop.com" className="text-accent hover:underline">support@enclop.com</a>.
                    We reply to privacy requests within 30 days.
                </p>
            </Section>

            <Section title="The short version">
                <Bullets items={[
                    'Camo Crew is free and funded by ads. Ad networks use your device advertising ID.',
                    'There is no email or password. Your account is your Google Play Games sign-in.',
                    'We never see your card. Every payment is handled by Google Play.',
                    'You can delete everything we hold, from inside the game or from the web.',
                    'Camo Crew is not directed at children under 13 and we do not knowingly collect their data.',
                ]} />
            </Section>

            <Section title="What we collect">
                <Table
                    head={['Data', 'Why', 'Where it goes']}
                    rows={[
                        ['Player ID, and your Epic Online Services / Google Play Games identifiers',
                            'To recognise you across devices and reinstalls, so your name and items survive',
                            'Our servers'],
                        ['Display name and username, and your username history',
                            'To show you to other players; history keeps usernames unique and reversible after abuse',
                            'Our servers; your name is visible to other players'],
                        ['Friends, friend requests and room invites',
                            'The friends and invite features',
                            'Our servers; visible to the players involved'],
                        ['Match history and stats',
                            'Matchmaking, leaderboards and anti-cheat',
                            'Our servers'],
                        ['Items owned and Google Play purchase receipts',
                            'To grant what you bought and restore it after reinstalling',
                            'Our servers; validated against Google Play'],
                        ['Gameplay events — session ID, app version, platform, in-game actions',
                            'Crash and bug diagnosis, balancing, and detecting abuse',
                            'Our servers'],
                        ['IP address',
                            'Rate limiting and abuse prevention. Not used for advertising and not stored in your profile',
                            'Our servers, transiently'],
                        ['Advertising ID and coarse device information',
                            'To select and measure ads, and to cap how often you see one',
                            'Our ad partners — see below'],
                    ]}
                />
                <p className="mt-4">
                    We do <span className="text-white font-semibold">not</span> collect your real name, email address,
                    phone number, precise location, contacts, photos, or payment details.
                </p>
            </Section>

            <Section title="Advertising, and who gets your data">
                <p className="mb-4">
                    Ads in Camo Crew are served through <span className="text-white">Yodo1 MAS</span>, a mediation
                    platform that fills each ad slot from a pool of ad networks. Those networks — not Enclop — receive
                    your device's advertising ID and coarse device and ad-interaction data, and they process it as
                    independent controllers under their own privacy policies. They may use it to personalise ads,
                    measure them, and prevent fraud.
                </p>
                <p className="mb-4">The networks that can appear in Camo Crew are:</p>
                <Bullets items={[
                    'AppLovin — applovin.com/privacy',
                    'Google AdMob / Ad Manager — policies.google.com/privacy',
                    'Unity Ads and ironSource — unity.com/legal/game-player-and-app-user-privacy-policy',
                    'Meta Audience Network — facebook.com/about/privacy',
                    'Liftoff / Vungle, Mintegral, Moloco, Pangle, InMobi, Fyber (DT), BidMachine, Bigo Ads, TopOn, Yandex Ads and YSO Network',
                ]} />
                <p className="mt-4">
                    Yodo1's own policy is at{' '}
                    <a href="https://www.yodo1.com/en/privacy-policy" className="text-accent hover:underline"
                       target="_blank" rel="noopener noreferrer">yodo1.com/en/privacy-policy</a>. The list above
                    reflects the ad partners built into the current version of the game and changes when the game is
                    updated.
                </p>
            </Section>

            <Section title="Your choices about ads">
                <Bullets items={[
                    'In the EU, EEA, UK and Switzerland, the game asks for your consent before any personalised ad is served, using Google’s certified consent form. Refusing means you still see ads, but non-personalised ones.',
                    'You can change that answer at any time: Settings ▸ Privacy ▸ Ad Consent.',
                    'Anywhere in the world you can reset or delete your advertising ID in Android Settings ▸ Privacy ▸ Ads, which stops it being used to build a profile of you.',
                    'If you are in a US state with an opt-out right, email support@enclop.com with the subject "Do not sell or share" and we will pass the signal to our ad partners.',
                ]} />
            </Section>

            <Section title="Children">
                <p>
                    Camo Crew is not directed at children under 13 (or the equivalent minimum age where you live), and
                    it is not distributed under Google Play's Designed for Families programme. We do not knowingly
                    collect personal data from children, and the game is configured to tell our ad partners that its
                    audience is not child-directed. If you believe a child has given us data, email{' '}
                    <a href="mailto:support@enclop.com" className="text-accent hover:underline">support@enclop.com</a>{' '}
                    and we will delete it.
                </p>
            </Section>

            <Section title="Legal bases (EEA/UK)">
                <Bullets items={[
                    'Performance of a contract — running your account, matches, friends and purchases.',
                    'Consent — personalised advertising, withdrawable at any time from Settings ▸ Privacy ▸ Ad Consent.',
                    'Legitimate interests — security, anti-cheat, abuse prevention, and diagnosing crashes.',
                    'Legal obligation — keeping purchase and tax records.',
                ]} />
            </Section>

            <Section title="How long we keep it">
                <Bullets items={[
                    'Your profile, friends and items: until you delete your data, or after 24 months with no sign-in.',
                    'Gameplay events: 14 months.',
                    'Purchase receipts: 8 years, as tax law requires, stripped of anything identifying you.',
                    'Moderation and ban records: 3 years, so a ban cannot be escaped by deleting and starting over.',
                ]} />
            </Section>

            <Section title="Deleting your data">
                <p className="mb-4">Two routes, both free:</p>
                <Bullets items={[
                    'In the game: Settings ▸ Privacy ▸ Delete My Data. Immediate.',
                    'On the web, including after uninstalling: enclop.com/camocrew/delete-my-data, or email support@enclop.com with the subject "Delete my data".',
                ]} />
                <p className="mt-4">
                    Deletion erases your profile, display name, username, friends, device links and item ownership, and
                    releases your username back into the pool. Your Google Play purchase history belongs to your Google
                    account and is not ours to delete — if you play again on the same account, your items are restored.
                </p>
            </Section>

            <Section title="Your rights">
                <p className="mb-4">
                    Depending on where you live you may have the right to access, correct, delete, port, or restrict
                    the processing of your data, to object to it, and to withdraw consent. Email{' '}
                    <a href="mailto:support@enclop.com" className="text-accent hover:underline">support@enclop.com</a>{' '}
                    — we do not charge for this and we do not degrade the game for people who exercise these rights.
                    EEA/UK players may also complain to their local data protection authority.
                </p>
            </Section>

            <Section title="Security and transfers">
                <p>
                    All traffic between the game and our servers is encrypted with HTTPS/TLS, and access to the
                    database is restricted and logged. Our servers and our staff are in India, and our ad partners
                    operate globally, so your data is transferred internationally; those transfers rely on the
                    standard contractual clauses or the equivalent safeguard for your region.
                </p>
            </Section>

            <Section title="Changes">
                <p>
                    We will update this page when the game changes, and the date at the top will change with it. If a
                    change materially affects your rights we will say so in the game before it takes effect.
                </p>
            </Section>

            <Section title="Contact">
                <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                    <p className="text-white font-semibold mb-2">Enclop — Camo Crew</p>
                    <p>
                        Email:{' '}
                        <a href="mailto:support@enclop.com" className="text-accent hover:underline">support@enclop.com</a>
                    </p>
                    <p>
                        Terms:{' '}
                        <Link to="/camocrew/terms" className="text-accent hover:underline">enclop.com/camocrew/terms</Link>
                    </p>
                </div>
            </Section>
        </LegalPage>
    );
}
