import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BadgeCheck, Brush, Clapperboard, Gamepad2, Layers3, Sparkles, Star, MessageCircle, Wand2, Zap } from 'lucide-react';
import './styles.css';

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
  return <main>
    <nav className="nav">
      <a className="brand" href="#top"><span>GL</span>Grafix Lab</a>
      <div className="navLinks"><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
    </nav>

    <section id="top" className="hero section">
      <div className="heroCopy">
        <p className="eyebrow"><Zap size={16}/> Streamer & VTuber creative studio</p>
        <h1>Graphics that make your channel feel like a universe.</h1>
        <p className="lead">A bold, polished home for Grafix Lab—showcasing graphics, overlays, emotes, VTuber models, and custom brand systems for creators who want to look unforgettable on stream.</p>
        <div className="heroActions"><a className="button primary" href="https://grafix_lab.artstation.com/" target="_blank" rel="noreferrer">View ArtStation <ArrowRight size={18}/></a><a className="button ghost" href="#services">Explore services</a></div>
        <div className="stats"><span><strong>12+</strong> creator asset types</span><span><strong>Live-ready</strong> stream visuals</span><span><strong>Custom</strong> identity systems</span></div>
      </div>
      <div className="heroArt" aria-label="Abstract neon creator graphics collage">
        <div className="orb orbOne"/><div className="orb orbTwo"/>
        <div className="glassCard feature"><Wand2/><span>Brand magic</span></div>
        <div className="avatar"><span>GL</span></div>
        <div className="glassCard chat"><MessageCircle/><span>New overlay unlocked</span></div>
        <div className="ribbon">VTuber • Emotes • Panels • Logos</div>
      </div>
    </section>

    <section className="section marquee" aria-label="Project categories">{categories.map(item => <span key={item}>{item}</span>)}</section>

    <section id="work" className="section split">
      <div><p className="eyebrow"><Star size={16}/> Featured style</p><h2>High-impact art direction for creator brands.</h2></div>
      <p>Inspired by Grafix Lab's ArtStation portfolio of streamer and VTuber graphics, this landing page uses luminous gradients, layered glass panels, and portfolio-style cards to feel premium, playful, and conversion-focused.</p>
    </section>

    <section className="portfolioGrid section">{portfolioCards.map(([title, type, tone]) => <article className={`portfolioCard ${tone}`} key={title}><div className="mockArt"><Gamepad2/><span/></div><p>{type}</p><h3>{title}</h3></article>)}</section>

    <section id="services" className="section services">
      <div className="sectionHead"><p className="eyebrow"><BadgeCheck size={16}/> What Grafix Lab creates</p><h2>Everything a creator needs to launch, refresh, or level up.</h2></div>
      <div className="serviceGrid">{services.map(([title, text, Icon]) => <article className="service" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section id="process" className="section process">
      {['Discover your vibe', 'Design the system', 'Deliver stream-ready files'].map((step, index) => <div className="processStep" key={step}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step}</h3><p>{index === 0 ? 'Define the character, audience, color world, and platform needs.' : index === 1 ? 'Shape a cohesive package across static, animated, and social assets.' : 'Package final art for Twitch, YouTube, Discord, and portfolio use.'}</p></div>)}
    </section>

    <section id="contact" className="section cta">
      <p className="eyebrow"><Sparkles size={16}/> Ready for a glow-up?</p>
      <h2>Turn your stream into a brand viewers remember.</h2>
      <p>Browse Grafix Lab's full ArtStation portfolio and start planning your next streamer or VTuber visual package.</p>
      <a className="button primary" href="https://grafix_lab.artstation.com/" target="_blank" rel="noreferrer">Open Grafix Lab ArtStation <ArrowRight size={18}/></a>
    </section>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
