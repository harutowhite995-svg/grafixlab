import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BadgeCheck, Brush, Clapperboard, Gamepad2, Layers3, Mail, MessageCircle, MonitorPlay, Palette, PenTool, Play, Sparkles, Star, Wand2, Zap } from 'lucide-react';

const h = React.createElement;

const services = [
  ['Key Art & Illustration', 'Hero images, promo art, posters, and social crops with cinematic lighting and readable silhouettes.', Brush],
  ['Character Concepts', 'Original characters, VTuber personas, expression sheets, outfit explorations, and production-ready callouts.', PenTool],
  ['Stream Identity Systems', 'Overlays, panels, banners, badges, PFPs, emotes, stingers, and cohesive launch-day channel kits.', Layers3],
  ['Motion-Ready Assets', 'Intro/outro screens, animated overlays, logo reveals, and layered files prepared for editors and riggers.', Clapperboard],
];

const portfolioCards = [
  ['Neon Rogue', 'VTuber identity kit', 'cyan', 'Character sheet, PFP, panels'],
  ['Arcade Bloom', 'Animated stream overlay', 'pink', 'Starting, BRB, intermission'],
  ['Pixel Familiar', 'Emote & badge pack', 'gold', '18 expressive community assets'],
  ['Cyber Shrine', 'Environment concept', 'violet', 'Mood key, color script, props'],
  ['Moonlit Mage', 'Original character art', 'blue', 'Final render plus sketches'],
  ['Boss Room', 'Gaming room concept', 'green', 'Streaming backdrop design'],
];

const process = [
  ['01', 'Brief & references', 'Clarify the audience, platform, personality, mood boards, must-have deliverables, and production constraints.'],
  ['02', 'Exploration', 'Sketch thumbnails, color keys, shape language, typography, and layout directions before polishing.'],
  ['03', 'Final production', 'Render polished assets, export responsive crops, and organize layered source files for future updates.'],
];

const proof = ['ArtStation-ready presentation', 'Mobile-first gallery', 'Process notes for recruiters', 'Fast visual scanning'];

function App() {
  return h('main', null,
    h('nav', { className: 'nav' },
      h('a', { className: 'brand', href: '#top', 'aria-label': 'Grafix Lab home' }, h('span', null, 'GL'), 'Grafix Lab'),
      h('div', { className: 'navLinks' },
        h('a', { href: '#work' }, 'Work'),
        h('a', { href: '#services' }, 'Services'),
        h('a', { href: '#process' }, 'Process'),
        h('a', { href: '#contact' }, 'Contact'),
      ),
      h('a', { className: 'navCta', href: 'https://grafix_lab.artstation.com/', target: '_blank', rel: 'noreferrer' }, 'Portfolio')
    ),

    h('section', { id: 'top', className: 'hero section' },
      h('div', { className: 'heroCopy' },
        h('p', { className: 'eyebrow' }, h(Zap, { size: 16 }), ' Digital concept art for creator worlds'),
        h('h1', null, 'Build a stream identity people can feel in one glance.'),
        h('p', { className: 'lead' }, 'Grafix Lab crafts character-driven visuals, VTuber assets, overlays, and cinematic brand systems for creators who need a polished portfolio presence and unforgettable live experience.'),
        h('div', { className: 'heroActions' },
          h('a', { className: 'button primary', href: 'https://grafix_lab.artstation.com/', target: '_blank', rel: 'noreferrer' }, 'View curated work ', h(ArrowRight, { size: 18 })),
          h('a', { className: 'button ghost', href: '#contact' }, 'Start a brief'),
        ),
        h('div', { className: 'stats', 'aria-label': 'Portfolio highlights' },
          h('span', null, h('strong', null, '10–20'), ' polished portfolio-ready pieces'),
          h('span', null, h('strong', null, '5–7'), ' homepage highlights'),
          h('span', null, h('strong', null, '24h'), ' response goal'),
        ),
      ),
      h('div', { className: 'heroArt', 'aria-label': 'Layered concept art interface preview' },
        h('div', { className: 'orb orbOne' }), h('div', { className: 'orb orbTwo' }),
        h('div', { className: 'artWindow mainWindow' }, h('span', null, 'KEY ART'), h('strong', null, 'Cyber shrine reveal'), h(Play)),
        h('div', { className: 'artWindow sideWindow' }, h(Palette), h('strong', null, 'Color script'), h('small', null, 'Neon / dusk / gold')),
        h('div', { className: 'avatar' }, h('span', null, 'GL')),
        h('div', { className: 'glassCard chat' }, h(MessageCircle), h('span', null, 'Brief accepted')),
        h('div', { className: 'ribbon' }, 'Characters • Worlds • Overlays • Emotes'),
      ),
    ),

    h('section', { className: 'section proof' }, proof.map((item) => h('span', { key: item }, h(BadgeCheck, { size: 16 }), item))),

    h('section', { id: 'work', className: 'section split' },
      h('div', null, h('p', { className: 'eyebrow' }, h(Star, { size: 16 }), ' Curated work'), h('h2', null, 'Lead with the strongest art, then reveal the thinking behind it.')),
      h('p', null, 'Concept art portfolio reviewers scan quickly, so the page prioritizes a short set of strong thumbnails, discipline labels, and process cues. The result feels closer to a professional pitch deck than a generic gallery.'),
    ),

    h('section', { className: 'portfolioGrid section' }, portfolioCards.map(([title, type, tone, details]) =>
      h('article', { className: `portfolioCard ${tone}`, key: title },
        h('div', { className: 'mockArt' }, h(Gamepad2), h('span')),
        h('p', null, type),
        h('h3', null, title),
        h('small', null, details),
      )
    )),

    h('section', { id: 'services', className: 'section services' },
      h('div', { className: 'sectionHead' }, h('p', { className: 'eyebrow' }, h(Sparkles, { size: 16 }), ' What Grafix Lab creates'), h('h2', null, 'Production-minded artwork for channels, campaigns, and fan communities.')),
      h('div', { className: 'serviceGrid' }, services.map(([title, text, Icon]) => h('article', { className: 'service', key: title }, h(Icon), h('h3', null, title), h('p', null, text)))),
    ),

    h('section', { id: 'process', className: 'section process' }, process.map(([num, title, text]) => h('article', { className: 'processStep', key: title }, h('span', null, num), h('h3', null, title), h('p', null, text)))),

    h('section', { className: 'section caseStudy' },
      h('div', null, h('p', { className: 'eyebrow' }, h(MonitorPlay, { size: 16 }), ' Featured case study'), h('h2', null, 'From rough silhouette to broadcast-ready identity.')),
      h('div', { className: 'caseGrid' },
        h('article', null, h('strong', null, 'Challenge'), h('p', null, 'Create a creator persona that reads clearly at avatar size but still has enough lore, props, and lighting detail for posters.')),
        h('article', null, h('strong', null, 'Approach'), h('p', null, 'Start with thumbnails and color keys, lock the strongest shape language, then extend the world into overlays and social assets.')),
        h('article', null, h('strong', null, 'Delivery'), h('p', null, 'Final PNGs, transparent cutouts, layered source files, banner crops, and notes for animation or rigging handoff.')),
      )
    ),

    h('section', { id: 'contact', className: 'section cta' },
      h('p', { className: 'eyebrow' }, h(Wand2, { size: 16 }), ' Commissions & collaborations'),
      h('h2', null, 'Ready to turn your idea into a memorable visual universe?'),
      h('p', null, 'Send references, platform needs, deadline, and budget range. Grafix Lab will help shape the package that best fits your launch.'),
      h('div', { className: 'heroActions centered' },
        h('a', { className: 'button primary', href: 'https://grafix_lab.artstation.com/', target: '_blank', rel: 'noreferrer' }, 'Open ArtStation ', h(ArrowRight, { size: 18 })),
        h('a', { className: 'button ghost', href: 'mailto:hello@grafixlab.example' }, h(Mail, { size: 18 }), 'Email a brief')
      )
    ),
  );
}

createRoot(document.getElementById('root')).render(h(App));
