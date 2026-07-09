/* ============================================================================
   INSTANCE CONTENT · Belong Academy — course catalog (pure data)
   Six starter courses across Belong's pillars: School · Staying & Feeling ·
   Growing & Tasting · To Nature · Community. Real Belong videos slot into
   moduleMedia later; until then modules show a "coming soon" state.
============================================================================ */
const CATALOG = [
  {
    id: 'welcome-belong', title: 'Welcome to Belong', cat: 'School', grad: 1, icon: 'compass',
    level: 'All levels', rating: 5.0, learners: 0, isNew: true, featured: true, updated: '2026-07',
    hook: 'Giving shape to meaning.', hookSub: 'Who we are, and how we belong.',
    desc: 'The Belong story and the way we work — a bond between place and being, and the circular vision that connects hospitality, seasonal food, nature and community. Start here.',
    modules: ['A bond between place and being', 'The circular vision', 'The four pillars of Belong', 'How we host, grow & belong', 'Your first steps'],
    moduleDurations: [4, 5, 4, 5, 3]
  },
  {
    id: 'art-of-hospitality', title: 'The Art of Hospitality', cat: 'Staying & Feeling', grad: 4, icon: 'people',
    level: 'All levels', rating: 4.9, learners: 0, isNew: true, featured: true, updated: '2026-07',
    hook: 'Make anyone feel they belong.', hookSub: 'Presence, warmth, and the craft of welcome.',
    desc: 'Hospitality is more than service — it is the practice of making a guest feel seen, at ease, and part of something. Presence, reading a room, and the small details that quietly say: you belong here.',
    modules: ['The first ninety seconds', 'Presence & attention', 'Reading the room', 'The details that say welcome', 'Hosting under pressure', 'A stay to remember'],
    moduleDurations: [4, 6, 5, 5, 6, 4]
  },
  {
    id: 'seasonal-table', title: 'The Seasonal Table', cat: 'Growing & Tasting', grad: 6, icon: 'sprout',
    level: 'Beginner', rating: 4.9, learners: 0, updated: '2026-07',
    hook: 'Taste the season, plate the place.', hookSub: 'From garden to table, with nothing wasted.',
    desc: 'Cooking and tasting with the seasons — reading what the land gives, building flavour, and setting a table that tells a story. The circular kitchen, where nothing is wasted and everything belongs.',
    modules: ['Reading the season', 'Building flavour', 'The circular kitchen', 'The art of tasting', 'Plating a story', 'Hosting a tasting'],
    moduleDurations: [5, 7, 6, 6, 5, 5]
  },
  {
    id: 'growing-regenerating', title: 'Growing & Regenerating', cat: 'Growing & Tasting', grad: 7, icon: 'seed',
    level: 'Beginner', rating: 4.8, learners: 0, updated: '2026-07',
    hook: 'Grow food, give back more.', hookSub: 'The circular economy, rooted in the ground.',
    desc: 'How Belong grows — regenerative practices that feed the table and the soil at once. Composting, seasons, and closing the loop between kitchen, garden and community.',
    modules: ['What regeneration means', 'Growing with the seasons', 'Closing the loop', 'Compost & circularity', 'From garden to guest'],
    moduleDurations: [5, 6, 5, 5, 4]
  },
  {
    id: 'belong-to-nature', title: 'Belong to Nature', cat: 'To Nature', grad: 5, icon: 'tree',
    level: 'All levels', rating: 4.9, learners: 0, updated: '2026-07',
    hook: 'Slow down. Belong to the place.', hookSub: 'Nature connection as the ground of belonging.',
    desc: 'To belong you need ground. A practice of attention outdoors — walking, noticing, and the felt sense of being part of a place rather than passing through it.',
    modules: ['The ground beneath belonging', 'A walk of attention', 'Noticing what a place offers', 'Belonging to a place', 'Sharing nature with guests'],
    moduleDurations: [4, 5, 5, 4, 4]
  },
  {
    id: 'community-circular', title: 'Community & the Circular Way', cat: 'Community', grad: 3, icon: 'people',
    level: 'Beginner', rating: 4.8, learners: 0, updated: '2026-07',
    hook: 'No one belongs alone.', hookSub: 'Community, the commons, and the circular economy.',
    desc: 'Belong began as a notion of community and a circular economy. How shared spaces, shared work and shared care create the conditions for people — and places — to belong.',
    modules: ['Why community is the point', 'The circular economy, simply', 'Shared spaces & the commons', 'Hosting a community', 'A 90-day belonging plan'],
    moduleDurations: [4, 5, 5, 5, 4]
  }
];

const LIVE_SESSIONS = [
  { id: 'live-table', title: 'Open Table: Cooking the Season', host: 'The Belong Kitchen', when: 'Thu 19:00 WET', grad: 6, icon: 'sprout', desc: 'A live seasonal kitchen — cook along, taste along, and ask anything about the circular table.' },
  { id: 'live-welcome', title: 'Belong Circle: A Warm Welcome', host: 'The Belong Community', when: 'Fri 18:00 WET', grad: 4, icon: 'people', desc: 'A gathering for new members — the Belong story, the four pillars, and how to make the most of the Academy.' }
];

/* course maps kept empty — hooks/copy live inline on each course above.
   (Declared so the shared framework helpers resolve.) */
const COURSE_HOOKS = {};
const COURSE_HOOKS_PT = {};
const COURSE_QUIZ = {};
const TAKEAWAYS = {};
const COURSE_PT = {};
const COURSE_SKILLS = {};
