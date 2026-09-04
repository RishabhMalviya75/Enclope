// --- ENCLOP: real studio data ---------------------------------------------
// Everything here must be true. No placeholders.

export const studio = {
  name: 'Enclop',
  tagline: 'We make games people actually play.',
  blurb:
    'A small independent studio. We build the strange, ambitious things we want to play ourselves — then we ship them, put them in real players hands, and keep patching until they feel right.',
  play: 'https://play.google.com/store/apps/details?id=com.enclop.crewcamo',
  discord: 'https://discord.com/invite/6DfUdzdFw',
  instagram: 'https://www.instagram.com/_enclop',
  email: 'enclop.app@gmail.com',
};

export const games = [
  {
    id: 'camo-crew',
    title: 'Camo Crew',
    status: 'Out now',
    platform: 'Android · Google Play',
    tagline: 'Paint yourself into the wall. Hope nobody looks twice.',
    description:
      'A mobile multiplayer hide-and-seek game with one twist that changes everything: you paint your own body. Pick a brush, lift the exact colour off the bricks behind you with the eyedropper, and become part of the scenery — while the seekers sweep the map in first person looking for the one patch that is slightly the wrong shade.',
    facts: [
      { value: '5', label: 'Maps' },
      { value: '4', label: 'Game modes' },
      { value: '3K+', label: 'Players' },
    ],
    features: [
      'Real paint tools — brush sizes, undo, eyedropper',
      'Classic, Hunt, Infection and Reverse Chicken Race',
      'Private rooms with a join code, plus matchmaking',
      'In-game voice chat with your crew',
    ],
    image: '/camocrew/assets/img/box1.webp',
    imageFallback: '/camocrew/box1.jpg',
    href: '/camocrew/',
    store: 'https://play.google.com/store/apps/details?id=com.enclop.crewcamo',
  },
];

export const pillars = [
  {
    title: 'We build what we want to play',
    body:
      'Every project starts as an idea somebody on the team could not stop thinking about. If it does not make us want to open the editor at midnight, we do not make it.',
  },
  {
    title: 'We ship, we do not pitch',
    body:
      'Ideas are cheap. Camo Crew went from a prototype to a live Google Play release with real players in it. Shipped and imperfect beats polished and theoretical.',
  },
  {
    title: 'Players tell us what is broken',
    body:
      'Bug reports and Discord messages go straight into the build. Frame rate on cheap phones, controls that feel wrong, a hiding spot nobody can reach — that is the roadmap.',
  },
  {
    title: 'Small team, strange ideas',
    body:
      'No committee, no focus group. That is how you end up with a game where the core mechanic is painting yourself the colour of a haystack.',
  },
];
