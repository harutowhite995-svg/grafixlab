import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BadgeCheck, Brush, Clapperboard, Gamepad2, Layers3, Sparkles, Star, MessageCircle, Wand2, Zap } from 'lucide-react';

const h = React.createElement;

const services = [
  ['Original Characters', 'Mascots, personas, concept sheets, and polished character art for memorable streamer identities.', Brush],
  ['VTuber Models', '2D and 3D model art direction with expressive, camera-ready character presentation.', Sparkles],
  ['Stream Packages', 'Panels, banners, overlays, icons, PFPs, and cohesive channel kits built for launch day.', Layers3],
  ['Animated Assets', 'Intro/outro cards, animated overlays, screens, logos, and motion-ready brand moments.', Clapperboard],
];

const categories = ['OC Art', 'Panels', 'Logos', 'Banners', 'PFP', 'Emotes', 'Icons', 'Concept Art', '2D Model', '3D Model', 'Screens', 'Gaming Rooms'];

const portfolioCards = [
  ['Neon Rogue', 'VTuber identity kit', 'cyan'],
  ['Arcade Bloom', 'Animated stream overlay', 'pink'],
  ['Pixel Familiar', 'Emote & badge pack', 'gold'],
  ['Cyber Shrine', 'Starting soon screen', 'violet'],
  ['Moonlit Mage', 'Original character art', 'blue'],
  ['Boss Room', 'Gaming room concept', 'green'],
];

function App() {
  return h('main', null,
    h('nav', { className: 'nav' },
      h('a', { className: 'brand', href: '#top' }, h('span', null, 'GL'), 'Grafix Lab'),
      h('div', { className: 'navLinks' },
        h('a', { href: '#work' }, 'Work'),
        h('a', { href: '#services' }, 'Services'),
        h('a', { href: '#process' }, 'Process'),
        h('a', { href: '#contact' }, 'Contact'),
      ),
    ),

    h('section', { id: 'top', className: 'hero section' },
      h('div', { className: 'heroCopy' },
        h('p', { className: 'eyebrow' }, h(Zap, { size: 16 }), ' Streamer & VTuber creative studio'),
        h('h1', null, 'Graphics that make your channel feel like a universe.'),
        h('p', { className: 'lead' }, 'A bold, polished home for Grafix Lab—showcasing graphics, overlays, emotes, VTuber models, and custom brand systems for creators who want to look unforgettable on stream.'),
        h('div', { className: 'heroActions' },
          h('a', { className: 'button primary', href: 'https://grafix_lab.artstation.com/', target: '_blank', rel: 'noreferrer' }, 'View ArtStation ', h(ArrowRight, { size: 18 })),
          h('a', { className: 'button ghost', href: '#services' }, 'Explore services'),
        ),
        h('div', { className: 'stats' },
          h('span', null, h('strong', null, '12+'), ' creator asset types'),
          h('span', null, h('strong', null, 'Live-ready'), ' stream visuals'),
          h('span', null, h('strong', null, 'Custom'), ' identity systems'),
        ),
      ),
      h('div', { className: 'heroArt', 'aria-label': 'Abstract neon creator graphics collage' },
        h('div', { className: 'orb orbOne' }), h('div', { className: 'orb orbTwo' }),
        h('div', { className: 'glassCard feature' }, h(Wand2), h('span', null, 'Brand magic')),
        h('div', { className: 'avatar' }, h('span', null, 'GL')),
        h('div', { className: 'glassCard chat' }, h(MessageCircle), h('span', null, 'New overlay unlocked')),
        h('div', { className: 'ribbon' }, 'VTuber • Emotes • Panels • Logos'),
      ),
    ),

    h('section', { className: 'section marquee', 'aria-label': 'Project categories' }, categories.map((item) => h('span', { key: item }, item))),

    h('section', { id: 'work', className: 'section split' },
      h('div', null, h('p', { className: 'eyebrow' }, h(Star, { size: 16 }), ' Featured style'), h('h2', null, 'High-impact art direction for creator brands.')),
      h('p', null, "Inspired by Grafix Lab's ArtStation portfolio of streamer and VTuber graphics, this landing page uses luminous gradients, layered glass panels, and portfolio-style cards to feel premium, playful, and conversion-focused."),
    ),

    h('section', { className: 'portfolioGrid section' }, portfolioCards.map(([title, type, tone]) => h('article', { className: `portfolioCard ${tone}`, key: title }, h('div', { className: 'mockArt' }, h(Gamepad2), h('span')), h('p', null, type), h('h3', null, title)))),

    h('section', { id: 'services', className: 'section services' },
      h('div', { className: 'sectionHead' }, h('p', { className: 'eyebrow' }, h(BadgeCheck, { size: 16 }), ' What Grafix Lab creates'), h('h2', null, 'Everything a creator needs to launch, refresh, or level up.')),
      h('div', { className: 'serviceGrid' }, services.map(([title, text, Icon]) => h('article', { className: 'service', key: title }, h(Icon), h('h3', null, title), h('p', null, text)))),
    ),

    h('section', { id: 'process', className: 'section process' }, ['Discover your vibe', 'Design the system', 'Deliver stream-ready files'].map((step, index) => h('div', { className: 'processStep', key: step }, h('span', null, String(index + 1).padStart(2, '0')), h('h3', null, step), h('p', null, index === 0 ? 'Define the character, audience, color world, and platform needs.' : index === 1 ? 'Shape a cohesive package across static, animated, and social assets.' : 'Package final art for Twitch, YouTube, Discord, and portfolio use.')))),

    h('section', { id: 'contact', className: 'section cta' },
      h('p', { className: 'eyebrow' }, h(Sparkles, { size: 16 }), ' Ready for a glow-up?'),
      h('h2', null, 'Turn your stream into a brand viewers remember.'),
      h('p', null, "Browse Grafix Lab's full ArtStation portfolio and start planning your next streamer or VTuber visual package."),
      h('a', { className: 'button primary', href: 'https://grafix_lab.artstation.com/', target: '_blank', rel: 'noreferrer' }, 'Open Grafix Lab ArtStation ', h(ArrowRight, { size: 18 })),
    ),
  );
}

createRoot(document.getElementById('root')).render(h(App));
