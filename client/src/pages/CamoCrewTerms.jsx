import { Link } from 'react-router-dom';
import LegalPage, { Section, Bullets } from '../components/LegalPage';

// The Camo Crew end-user licence — the terms a PLAYER agrees to. Distinct from /terms, which is
// the agency services agreement for Enclop's clients (milestones, deliverables, IP in client
// work) and governs nothing a player ever does.
//
// Play requires the terms it links to actually govern the app, and requires virtual-currency
// and IAP terms to be presented before purchase. The coins, entitlements, bans and username
// rules below mirror what the backend really enforces — if that behaviour changes, this changes.
export default function CamoCrewTermsPage() {
    return (
        <LegalPage
            eyebrow="Camo Crew"
            title="Terms of Service"
            updated="September 4, 2026"
            intro={
                <>
                    These terms govern your use of <span className="text-white">Camo Crew</span> (Google Play package{' '}
                    <code className="text-accent">com.enclop.crewcamo</code>), published by Enclop. Installing or
                    playing the game means you accept them. If you do not, uninstall the game. How we handle your data
                    is described in the{' '}
                    <Link to="/camocrew/privacy" className="text-accent hover:underline">Camo Crew Privacy Policy</Link>.
                </>
            }
        >
            <Section title="1. Who may play">
                <Bullets items={[
                    'You must be at least 13 years old, or the minimum age of digital consent where you live if that is higher (16 in much of the EU).',
                    'If you are under 18, you may only play and only make purchases with a parent or guardian’s permission.',
                    'You may not play if a previous account of yours was permanently banned, or if sanctions law prohibits us from serving you.',
                ]} />
            </Section>

            <Section title="2. Your licence">
                <p>
                    We grant you a personal, non-exclusive, non-transferable, revocable licence to install and play
                    Camo Crew for your own entertainment. You do not own the game or any part of it. You may not sell,
                    rent, sublicense, reverse-engineer, decompile, modify, or create derivative works from it, and you
                    may not distribute modified builds or extract its assets for use elsewhere, except where the law
                    says such restrictions are unenforceable.
                </p>
            </Section>

            <Section title="3. Your account">
                <Bullets items={[
                    'Your account is tied to your Google Play Games and device identity. There is no password to lose, and equally no way for us to hand an account to somebody who cannot sign in as you.',
                    'You are responsible for what happens on your account, including purchases.',
                    'Accounts, usernames and items are personal to you. Selling, buying, gifting or sharing an account is prohibited and voids the items on it.',
                    'You may delete your account at any time from Settings ▸ Privacy ▸ Delete My Data, or from the web. Deletion is permanent and releases your username to other players.',
                ]} />
            </Section>

            <Section title="4. Usernames, names and conduct">
                <p className="mb-4">
                    Usernames and display names are visible to other players. Choose one you would be happy to see on
                    a screenshot. You may not use a name, or behave in a way, that is:
                </p>
                <Bullets items={[
                    'Hateful, harassing, sexual, threatening, or targeted at someone’s race, religion, gender, sexuality, disability or nationality.',
                    'Impersonating another player, Enclop staff, or a real person or organisation.',
                    'Cheating: modified clients, automation, exploiting bugs, deliberately disconnecting to avoid a loss, or teaming to grief other players.',
                    'Advertising, scamming, phishing, or selling anything to other players.',
                    'Disrupting the service — attacking our servers, scraping, or evading rate limits or bans.',
                ]} />
                <p className="mt-4">
                    We may reclaim a name, reset it, suspend an account, or ban it permanently — with or without
                    warning, in proportion to what happened. Bans forfeit any unspent coins and any items on the
                    account, and we do not refund them. If you think a ban was wrong, email{' '}
                    <a href="mailto:enclop.app@gmail.com" className="text-accent hover:underline">enclop.app@gmail.com</a>{' '}
                    and a person will look at it.
                </p>
            </Section>

            <Section title="5. Purchases, coins and items">
                <Bullets items={[
                    'Every purchase is processed by Google Play, under Google’s terms and with your Google payment method. We never see your card.',
                    'Coins are a virtual currency with no monetary value. They are a limited licence to use features in the game, not property, not a balance you own, and not redeemable for cash or anything outside Camo Crew.',
                    'Items and coins are delivered to your account, not your device. Reinstall on the same Google account and they come back; they cannot be transferred to a different account.',
                    'Prices, contents and availability of items can change, and items can be retired from sale. What you have already bought stays on your account for as long as the game runs.',
                    'The price shown at checkout includes any tax we are required to charge in your country.',
                ]} />
            </Section>

            <Section title="6. Refunds">
                <Bullets items={[
                    'Refunds for in-app purchases are handled by Google Play. Request one through Google Play — that is the fastest route and often the only one available to us.',
                    'EU, UK and other statutory rights of withdrawal apply and are not affected by anything here. Note that by asking for immediate delivery of a digital item you may lose the 14-day withdrawal right once it is delivered.',
                    'We do not refund coins that have already been spent, or items lost to a ban for breaking these terms.',
                ]} />
            </Section>

            <Section title="7. Ads">
                <p>
                    Camo Crew is free and funded by advertising. Playing means you will see ads, including full-screen
                    ads between matches and optional rewarded ads you choose to watch. Rewarded ads are always
                    opt-in and the reward is stated before you start. We do not control the content of individual ads —
                    if you see one that is offensive, deceptive or broken, report it via{' '}
                    <a href="mailto:enclop.app@gmail.com" className="text-accent hover:underline">enclop.app@gmail.com</a>{' '}
                    with a screenshot and we will pass it to the network. Your choices about ad personalisation are in
                    the{' '}
                    <Link to="/camocrew/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
                </p>
            </Section>

            <Section title="8. The service can change">
                <p>
                    Camo Crew is an online service that needs our servers to work. We may update, change, or remove
                    features, run maintenance, or reset seasonal progress. We may also stop operating the game. If we
                    shut it down permanently we will give at least 30 days’ notice in the game and stop selling coins
                    and items immediately, and we will honour applicable consumer law on unspent purchases.
                </p>
            </Section>

            <Section title="9. Content you create">
                <p>
                    Names, messages and anything else you submit remain yours, but you grant us a worldwide,
                    royalty-free licence to host, display and transmit them as needed to run the game and to moderate
                    it. You are responsible for what you submit, and we may remove anything that breaks section 4.
                </p>
            </Section>

            <Section title="10. Disclaimers and liability">
                <p className="mb-4">
                    The game is provided “as is”. We do not promise it will be uninterrupted, bug-free, or that
                    matchmaking will always find you a game. To the fullest extent the law allows, Enclop is not liable
                    for indirect or consequential loss, lost progress, or lost virtual items, and our total liability
                    to you is limited to what you have paid us in the twelve months before the claim, or ₹5,000,
                    whichever is greater.
                </p>
                <p>
                    Nothing here excludes liability for fraud, death or personal injury caused by negligence, or any
                    other liability that cannot lawfully be excluded — and if you are a consumer, your statutory rights
                    stand regardless of this section.
                </p>
            </Section>

            <Section title="11. Termination">
                <p>
                    You can stop playing and delete your data at any time. We can suspend or terminate your access if
                    you break these terms, if we are required to by law, or if we stop operating the game. Sections 5,
                    9, 10 and 12 survive termination.
                </p>
            </Section>

            <Section title="12. Governing law">
                <p>
                    These terms are governed by the laws of India, and disputes are subject to the exclusive
                    jurisdiction of the courts of India — except that if you are a consumer in the EU, UK, or another
                    country whose law gives you the right to bring proceedings locally, that right is unaffected.
                </p>
            </Section>

            <Section title="13. Changes and contact">
                <p>
                    We will post changes here with a new date, and announce material changes in the game before they
                    take effect. Continuing to play after that means you accept them. Questions:{' '}
                    <a href="mailto:enclop.app@gmail.com" className="text-accent hover:underline">enclop.app@gmail.com</a>.
                </p>
            </Section>
        </LegalPage>
    );
}
