import { ArrowDown, ArrowUpRight, Blocks, Check, Code2, MonitorSmartphone, Rocket, ScanLine } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import HeroExperience from "@/components/HeroExperience";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";

const services = [
  { number: "01", title: "Website development", description: "Modern, responsive, conversion-focused websites designed for businesses and brands.", icon: Code2, detail: "Business websites · Landing pages · E-commerce" },
  { number: "02", title: "Web applications", description: "Custom web applications built around your workflows, users, and business requirements.", icon: MonitorSmartphone, detail: "Dashboards · Client portals · Workflow tools" },
  { number: "03", title: "Custom software", description: "Scalable software solutions designed to solve real business problems.", icon: Blocks, detail: "Business systems · Integrations · Prototypes" },
  { number: "04", title: "UI/UX development", description: "Clean, intuitive, responsive interfaces focused on usability and user experience.", icon: ScanLine, detail: "Interface design · Responsive UI · Design systems" },
];

const principles: [string, string, string][] = [
  ["01", "Modern technology", "Current tools and thoughtful engineering practices."],
  ["02", "Responsive by design", "A considered experience on mobile, tablet, and desktop."],
  ["03", "Business focused", "Technology should solve the right problem, not just look good."],
  ["04", "Built to scale", "A clear foundation that can grow with your business."],
  ["05", "Clean development", "Structured, maintainable code without unnecessary complexity."],
  ["06", "Client collaboration", "We listen first, then shape the right solution together."],
];

const process: [string, string, string][] = [
  ["01", "Discover", "Understand your business, goals, and requirements."],
  ["02", "Plan", "Define features, structure, technology, and user experience."],
  ["03", "Design", "Shape a clear, considered interface around your users."],
  ["04", "Develop", "Build the website, application, or software solution."],
  ["05", "Test", "Check responsiveness, functionality, performance, and usability."],
  ["06", "Launch", "Deploy the finished product and discuss ongoing support."],
];

const technologies = ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Three.js", "SQL", "Git", "GitHub"];
const footerLinks: [string, string][] = [["Home", "#home"], ["Services", "#services"], ["About", "#about"], ["Projects", "#projects"], ["Process", "#process"], ["Contact", "#contact"]];

export default function Home() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
    <main id="main-content">
      <HeroExperience />
      <section className="value-strip" aria-label="Our approach"><div className="container value-strip-inner"><p>Good digital work starts with good questions.</p><div className="value-items"><span><Check aria-hidden="true" /> Modern technology</span><span><Check aria-hidden="true" /> Responsive solutions</span><span><Check aria-hidden="true" /> Client focused</span><span><Check aria-hidden="true" /> Made to scale</span></div></div></section>

      <section className="section services-section" id="services" aria-labelledby="services-title"><div className="container"><Reveal className="section-heading"><p className="eyebrow"><span className="eyebrow-mark" /> What we build</p><h2 id="services-title">Useful by design.<br /><span>Built for what&apos;s next.</span></h2><p className="section-intro">Digital solutions designed around your business, your people, and where you want to go.</p></Reveal><div className="services-grid">{services.map(({ number, title, description, icon: Icon, detail }, index) => <Reveal className="service-card" delay={index * 75} key={number}><div className="service-card-top"><span className="service-number">{number}</span><span className="service-icon"><Icon aria-hidden="true" strokeWidth={1.6} /></span></div><div><h3>{title}</h3><p>{description}</p></div><div className="service-card-bottom"><span>{detail}</span><ArrowUpRight aria-hidden="true" /></div></Reveal>)}</div></div></section>

      <section className="about-section" id="about" aria-labelledby="about-title"><div className="container about-layout"><Reveal className="about-copy"><p className="eyebrow eyebrow-light"><span className="eyebrow-mark" /> A little about us</p><h2 id="about-title">Technology that moves your business <span>forward.</span></h2><p>NXT LABS DIGITAL SERVICES helps businesses transform ideas into modern digital experiences. From professional business websites to custom web applications and software solutions, we focus on building practical, scalable, and user-friendly technology.</p><a className="text-link text-link-light" href="#contact">Let&apos;s talk about your idea <ArrowUpRight aria-hidden="true" /></a></Reveal><Reveal className="about-visual" delay={100}><div className="about-diagram" aria-hidden="true"><div className="diagram-topline"><span>NXT / SYSTEMS</span><span>01 — 04</span></div><div className="diagram-core"><span className="diagram-cross">N</span><div className="diagram-ring" /><div className="diagram-ring diagram-ring-two" /></div><div className="diagram-nodes"><span><i /> Strategy</span><span><i /> Design</span><span><i /> Development</span></div><div className="diagram-bottomline"><span>IDEA → INTERFACE → IMPACT</span><span>READY / 001</span></div></div></Reveal></div></section>

      <section className="section principles-section" aria-labelledby="principles-title"><div className="container principles-layout"><Reveal className="principles-heading"><p className="eyebrow"><span className="eyebrow-mark" /> Why NXT LABS</p><h2 id="principles-title">Better technology starts with <span>better choices.</span></h2><p>Thoughtful work at every stage, from the first conversation to the final detail.</p></Reveal><div className="principles-list">{principles.map(([number, title, description], index) => <Reveal className="principle-row" delay={index * 45} key={number}><span className="principle-number">{number}</span><h3>{title}</h3><p>{description}</p></Reveal>)}</div></div></section>

      <section className="process-section" id="process" aria-labelledby="process-title"><div className="container"><Reveal className="section-heading section-heading-light"><p className="eyebrow eyebrow-light"><span className="eyebrow-mark" /> How we work</p><h2 id="process-title">A clear path from<br /><span>first thought to launch.</span></h2><p className="section-intro">A collaborative process keeps the important questions in view and the work moving forward.</p></Reveal><div className="process-grid">{process.map(([number, title, description], index) => <Reveal className="process-step" delay={index * 60} key={number}><span className="process-index">{number}</span><span className="process-marker" aria-hidden="true"><i /></span><h3>{title}</h3><p>{description}</p></Reveal>)}</div></div></section>

      <section className="section projects-section" id="projects" aria-labelledby="projects-title"><div className="container"><Reveal className="projects-heading"><div><p className="eyebrow"><span className="eyebrow-mark" /> Selected concepts</p><h2 id="projects-title">A glimpse of<br /><span>what we can build.</span></h2></div><p>These clearly labeled demo concepts show possible directions, not completed client projects.</p></Reveal><Projects /></div></section>

      <section className="technology-section" aria-labelledby="technology-title"><div className="container technology-layout"><Reveal className="technology-heading"><p className="eyebrow eyebrow-light"><span className="eyebrow-mark" /> The toolkit</p><h2 id="technology-title">The right tools<br />for the <span>right job.</span></h2></Reveal><Reveal className="technology-content" delay={100}><p>Tools are selected around each project&apos;s needs. These are examples of technologies that can shape a modern digital solution.</p><ul className="technology-list" aria-label="Example technologies">{technologies.map((technology, index) => <li key={technology}><span>{String(index + 1).padStart(2, "0")}</span>{technology}</li>)}</ul></Reveal></div></section>

      <section className="cta-section" aria-labelledby="cta-title"><div className="container cta-layout"><Reveal className="cta-copy"><p className="eyebrow eyebrow-light"><span className="eyebrow-mark" /> Your next move</p><h2 id="cta-title">Have an idea?<br /><span>Let&apos;s build it.</span></h2><p>Tell us what you&apos;re building and let&apos;s turn your idea into a modern digital solution.</p><div className="cta-actions"><a className="button button-bright" href="#contact">Start a project <ArrowUpRight aria-hidden="true" /></a><a className="button button-ghost" href="#contact">Contact us</a></div></Reveal><div className="cta-art" aria-hidden="true"><div className="cta-square cta-square-back" /><div className="cta-square cta-square-middle" /><div className="cta-square cta-square-front"><span>NXT</span></div><span className="cta-coordinate">IDEAS / DIGITAL / IMPACT</span></div></div></section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-layout"><Reveal className="contact-copy"><p className="eyebrow"><span className="eyebrow-mark" /> Start a conversation</p><h2 id="contact-title">Let&apos;s build something <span>meaningful.</span></h2><p>Share a little about what you need. We&apos;ll start with a conversation, not a sales pitch.</p><div className="contact-details"><a href="tel:7278463131"><span className="contact-label">Call us</span><span>7278463131</span><ArrowUpRight aria-hidden="true" /></a><a href="mailto:nxtlabs.trio@gmail.com"><span className="contact-label">Email us</span><span>nxtlabs.trio@gmail.com</span><ArrowUpRight aria-hidden="true" /></a><a href="https://www.instagram.com/nxtlabs.trio/" target="_blank" rel="noreferrer"><span className="contact-label">Instagram</span><span>@nxtlabs.trio</span><ArrowUpRight aria-hidden="true" /></a></div></Reveal><Reveal className="contact-form-wrap" delay={120}><div className="form-heading"><span>PROJECT INQUIRY</span><span>01 / 01</span></div><ContactForm /></Reveal></div></section>
    </main>

    <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><a className="brand footer-brand-link" href="#home" aria-label="NXT LABS home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span className="brand-name">NXT<span>LABS</span></span></a><p>NXT LABS DIGITAL SERVICES</p><span>BUILD. INNOVATE. GROW.</span></div><div className="footer-column"><h2>Explore</h2>{footerLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div><div className="footer-column"><h2>Services</h2><a href="#services">Website development</a><a href="#services">Web applications</a><a href="#services">Software solutions</a><a href="#services">UI/UX development</a></div><div className="footer-column footer-contact"><h2>Say hello</h2><a href="tel:7278463131">7278463131</a><a href="mailto:nxtlabs.trio@gmail.com">nxtlabs.trio@gmail.com</a><a href="https://www.instagram.com/nxtlabs.trio/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight aria-hidden="true" /></a></div></div><div className="footer-bottom"><span>© 2026 NXT LABS DIGITAL SERVICES. All rights reserved.</span><a href="#home">Back to top <ArrowDown aria-hidden="true" /></a><span>BUILT FOR WHAT&apos;S NEXT <Rocket aria-hidden="true" /></span></div></div></footer>
  </>;
}
