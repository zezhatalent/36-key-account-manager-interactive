import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "@fontsource-variable/outfit";
import { roles, type RoleProfile } from "./roles";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const sections = [
  ["Home", "home"], ["About", "about"], ["Capabilities", "capabilities"],
  ["Expertise", "expertise"], ["Experience", "experience"], ["Work", "work"],
  ["Impact", "impact"], ["Process", "process"], ["Principles", "principles"], ["Contact", "contact"],
] as const;

function Icon({ name }: { name: "sun" | "moon" | "menu" | "close" | "arrow" }) {
  if (name === "menu") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M4 16h16" /></svg>;
  if (name === "close") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>;
  if (name === "arrow") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M9 5h10v10" /></svg>;
  if (name === "sun") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z" /></svg>;
}

function RoleMotion({ profile }: { profile: RoleProfile }) {
  const common = `role-motion motion-${profile.motion} motion-role-${profile.id}`;
  if (profile.motion === "neural") return <div className={common} aria-hidden="true"><svg viewBox="0 0 500 500"><path d="M75 164 206 91l125 62 93 130-148 124-159-55Z" /><path d="m75 164 201 243m-70-316 70 316m55-254-214 199m307-69-348-119" /></svg>{Array.from({ length: 7 }, (_, i) => <i key={i} />)}<b>LEARN</b><b>INFER</b><b>ADAPT</b></div>;
  if (profile.motion === "data") return <div className={common} aria-hidden="true"><div className="data-bars">{[42,76,54,90,68,96,72].map((height, i) => <i key={i} style={{ "--value": `${height}%`, "--delay": `${i * -.28}s` } as React.CSSProperties} />)}</div><svg viewBox="0 0 500 260"><path d="m16 220 78-59 72 20 84-108 76 43 84-86 74 25" /></svg><div className="data-scan" /><b>LIVE SIGNAL</b></div>;
  if (profile.motion === "cloud") return <div className={common} aria-hidden="true"><div className="cloud-shape cloud-one"><i /><i /><i /></div><div className="cloud-shape cloud-two"><i /><i /><i /></div><div className="cloud-rail" />{Array.from({ length: 5 }, (_, i) => <span key={i} />)}<b>BUILD · SHIP · OBSERVE</b></div>;
  if (profile.motion === "security") return <div className={common} aria-hidden="true"><div className="security-ring ring-a" /><div className="security-ring ring-b" /><div className="security-sweep" /><svg viewBox="0 0 120 140"><path d="M60 6 108 24v39c0 35-21 58-48 71C33 121 12 98 12 63V24Z" /><path d="m38 70 15 15 31-37" /></svg><b>PROTECT / RESPOND</b></div>;
  if (profile.motion === "code") return <div className={common} aria-hidden="true"><div className="code-window"><span /><span /><span />{[86,58,74,45,91,66].map((width, i) => <i key={i} style={{ "--line": `${width}%`, "--delay": `${i * -.35}s` } as React.CSSProperties} />)}</div><div className="code-pulse" /><b>COMMIT → BUILD → RELEASE</b></div>;
  if (profile.motion === "strategy") return <div className={common} aria-hidden="true"><div className="strategy-path" />{["FRAME", "ALIGN", "MOVE", "LEARN"].map((word, i) => <span key={word} style={{ "--step": i } as React.CSSProperties}>{word}</span>)}<div className="strategy-cursor" /></div>;
  if (profile.motion === "creative") return <div className={common} aria-hidden="true"><div className="creative-frame frame-a">IDEA</div><div className="creative-frame frame-b">FORM</div><div className="creative-frame frame-c">FEEL</div><div className="creative-crop" /><b>MAKE IT MEMORABLE</b></div>;
  if (profile.motion === "medical") return <div className={common} aria-hidden="true"><div className="medical-orbit orbit-a" /><div className="medical-orbit orbit-b" /><svg viewBox="0 0 520 180"><path d="M0 94h104l22-50 39 100 35-76 24 26h72l28-62 42 116 34-54h120" /></svg><span className="medical-core" /><b>PRECISION WITH CARE</b></div>;
  if (profile.motion === "civic") return <div className={common} aria-hidden="true"><div className="civic-grid" />{["POLICY", "PEOPLE", "DELIVERY"].map((word, i) => <span key={word} style={{ "--step": i } as React.CSSProperties}>{word}</span>)}<div className="civic-seal"><i /><i /><i /></div></div>;
  if (profile.motion === "diplomacy") return <div className={common} aria-hidden="true"><div className="globe"><i /><i /><i /></div>{Array.from({ length: 4 }, (_, i) => <span key={i} />)}<svg viewBox="0 0 500 300"><path d="M44 230Q170 20 278 156T468 78" /></svg><b>CONNECTING INTERESTS</b></div>;
  if (profile.motion === "service") return <div className={common} aria-hidden="true">{["LISTEN", "SOLVE", "FOLLOW THROUGH"].map((word, i) => <span key={word} style={{ "--step": i } as React.CSSProperties}>{word}</span>)}<div className="service-line" /><i /><i /><i /><b>HUMAN SIGNAL</b></div>;
  if (profile.motion === "finance") return <div className={common} aria-hidden="true"><div className="finance-tape">VALUE · CONTROL · GROWTH · VALUE · CONTROL · GROWTH</div><div className="candles">{[64,38,82,55,94,72,88].map((height, i) => <i key={i} style={{ "--value": `${height}%`, "--delay": `${i * -.3}s` } as React.CSSProperties} />)}</div><svg viewBox="0 0 500 210"><path d="m10 180 72-34 70 12 73-72 71 31 76-79 118-22" /></svg><b>MEASURE THE DECISION</b></div>;
  if (profile.motion === "legal") return <div className={common} aria-hidden="true"><div className="legal-spine" /><div className="legal-scale"><i /><i /></div>{[72,88,56,81,64].map((width, i) => <span key={i} style={{ "--line": `${width}%` } as React.CSSProperties} />)}<b>CLARITY · DUTY · TRUST</b></div>;
  return <div className={common} aria-hidden="true"><div className="sales-funnel"><i /><i /><i /></div>{["DISCOVER", "ALIGN", "COMMIT", "GROW"].map((word, i) => <span key={word} style={{ "--step": i } as React.CSSProperties}>{word}</span>)}<div className="sales-signal" /><b>PIPELINE IN MOTION</b></div>;
}

function useReveal(scope: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!scope.current) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    scope.current.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [scope]);
}

function ScrubText({ children }: { children: string }) {
  return <p className="scrub-copy" data-scrub-text aria-label={children}>{children.split(/\s+/).map((word, index) => <span aria-hidden="true" data-scrub-word key={`${word}-${index}`}>{word}&nbsp;</span>)}</p>;
}

function App({ profile, heroSrc }: { profile: RoleProfile; heroSrc: string }) {
  const [theme, setTheme] = useState<"dark" | "light">(() => (localStorage.getItem(`theme-${profile.id}`) as "dark" | "light") || "dark");
  const [drawer, setDrawer] = useState(false);
  const [active, setActive] = useState("home");
  const shell = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const particleDelays = useMemo(() => Array.from({ length: 22 }, (_, index) => ({ left: `${(index * 31) % 103}%`, top: `${(index * 47) % 95}%`, delay: `${-(index % 8) * 0.7}s`, size: 2 + (index % 4) })), []);
  const stories = ["Diagnose the real constraint", `Apply ${profile.capabilities[0]}`, "Transfer a repeatable system"];
  const impact = [profile.proof[0], profile.proof[1], profile.proof[2], profile.proof[3] ?? profile.capabilities[3]];
  useReveal(shell);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(`theme-${profile.id}`, theme);
  }, [profile.id, theme]);

  useEffect(() => {
    if (!hero.current) return;
    const observer = new IntersectionObserver(([entry]) => hero.current?.classList.toggle("motion-live", entry.isIntersecting), { threshold: 0.08 });
    observer.observe(hero.current);
    return () => observer.disconnect();
  }, [profile.id]);

  useEffect(() => {
    if (!drawer) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawer(false);
      if (event.key !== "Tab") return;
      const focusables = shell.current?.querySelectorAll<HTMLElement>(".drawer button");
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; removeEventListener("keydown", onKeyDown); menuButton.current?.focus(); };
  }, [drawer]);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ desktop: "(min-width: 960px)", reduce: "(prefers-reduced-motion: reduce)" }, (context) => {
      const { desktop, reduce } = context.conditions as { desktop: boolean; reduce: boolean };
      const capabilityCards = gsap.utils.toArray<HTMLElement>("[data-capability-card]");
      const caseCards = gsap.utils.toArray<HTMLElement>("[data-case-card]");
      const words = gsap.utils.toArray<HTMLElement>("[data-scrub-word]");
      const progress = shell.current?.querySelector<HTMLElement>("[data-page-progress]");

      sections.forEach(([label, id]) => {
        ScrollTrigger.create({ trigger: `#${id}`, start: "top 42%", end: "bottom 42%", onToggle: ({ isActive }) => { if (isActive) setActive(id); } });
      });
      if (progress) gsap.fromTo(progress, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: shell.current, start: "top top", end: "bottom bottom", scrub: 0.2 } });
      if (reduce) {
        gsap.set([...capabilityCards, ...caseCards, ...words], { clearProps: "transform,opacity,visibility" });
        return;
      }

      gsap.fromTo(".hero-copy > *", { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.08, ease: "power4.out" });
      gsap.fromTo(".hero-visual", { scale: 0.96, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1.05, ease: "power4.out" });
      gsap.fromTo(words, { autoAlpha: 0.14, yPercent: 18 }, { autoAlpha: 1, yPercent: 0, stagger: 0.035, ease: "none", scrollTrigger: { trigger: "[data-scrub-text]", start: "top 80%", end: "bottom 40%", scrub: 0.5 } });

      if (desktop) {
        gsap.fromTo(".hero-visual", { yPercent: 0 }, { yPercent: 12, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 0.6 } });
        gsap.set(capabilityCards, { autoAlpha: 0.22, y: 48, scale: 0.97 });
        gsap.set(capabilityCards[0], { autoAlpha: 1, y: 0, scale: 1 });
        const capabilityTl = gsap.timeline({ scrollTrigger: { trigger: "#capabilities", pin: ".capability-pin", start: "top top+=82", end: `+=${Math.max(innerHeight * 2.1, capabilityCards.length * innerHeight * 0.58)}`, scrub: 0.55, anticipatePin: 1, invalidateOnRefresh: true } });
        capabilityCards.slice(1).forEach((card, index) => capabilityTl.to(card, { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: "none" }, index * 0.9));
      } else {
        capabilityCards.forEach((card) => gsap.from(card, { y: 18, autoAlpha: 0, duration: 0.45, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 88%" } }));
      }

      caseCards.forEach((card, index) => {
        gsap.fromTo(card, { y: desktop ? 64 : 18, scale: desktop ? 0.97 : 1, autoAlpha: 0.7 }, { y: 0, scale: 1, autoAlpha: 1, ease: "none", scrollTrigger: { trigger: card, start: "top 90%", end: desktop ? "top 48%" : "top 72%", scrub: desktop ? 0.4 : 0.18 } });
        if (desktop && index < caseCards.length - 1) gsap.to(card, { scale: 0.94, autoAlpha: 0.45, ease: "none", scrollTrigger: { trigger: caseCards[index + 1], start: "top 58%", end: "top 28%", scrub: 0.4 } });
      });
    });

    let disposed = false;
    Promise.all([document.fonts.ready, ...Array.from(shell.current?.querySelectorAll("img") ?? []).map((image) => image.decode().catch(() => undefined))]).then(() => { if (!disposed) ScrollTrigger.refresh(); });
    return () => { disposed = true; mm.revert(); };
  }, { scope: shell, dependencies: [profile.id], revertOnUpdate: true });

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    setDrawer(false);
  };
  const visualStyle = { "--accent": profile.accent, "--accent-2": profile.accent2 } as React.CSSProperties;

  return <div className="portfolio" ref={shell} style={visualStyle}>
    <div className="page-progress"><i data-page-progress /></div>
    <div className="ambient" aria-hidden="true">{particleDelays.map((particle, i) => <i key={i} style={{ left: particle.left, top: particle.top, animationDelay: particle.delay, width: particle.size, height: particle.size }} />)}</div>
    <header className="topbar">
      <button className="identity" onClick={() => go("home")} aria-label="Return to home"><span>{profile.name.split(" ").map((part) => part[0]).join("")}</span><b>{profile.name}<small>{profile.role}</small></b></button>
      <nav className="desktop-nav" aria-label="Portfolio sections">{sections.map(([label, id]) => <button key={id} onClick={() => go(id)} className={active === id ? "active" : ""} aria-current={active === id ? "page" : undefined}>{label}</button>)}</nav>
      <div className="controls"><button className="icon-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} aria-pressed={theme === "light"}><Icon name={theme === "dark" ? "sun" : "moon"} /></button><button ref={menuButton} className="icon-button mobile-menu" onClick={() => setDrawer(true)} aria-label="Open navigation" aria-haspopup="dialog" aria-expanded={drawer}><Icon name="menu" /></button></div>
    </header>
    {drawer && <aside className="drawer open" role="dialog" aria-modal="true" aria-label="Portfolio navigation"><div><strong>Explore</strong><button ref={closeButton} className="icon-button" onClick={() => setDrawer(false)} aria-label="Close navigation"><Icon name="close" /></button></div>{sections.map(([label, id], index) => <button key={id} onClick={() => go(id)}><small>{String(index + 1).padStart(2, "0")}</small>{label}</button>)}</aside>}
    <main>
      <section id="home" className="hero" ref={hero} data-motion={profile.motion}>
        <div className="hero-copy"><span className="domain-line">{profile.domain}</span><h1>{profile.role}<em> with purpose.</em></h1><p className="lede">{profile.lens}</p><div className="hero-actions"><button className="primary" onClick={() => go("work")}>Enter the work <Icon name="arrow" /></button><button className="text-button" onClick={() => go("about")}>Discover the point of view</button></div></div>
        <div className="hero-visual"><img className="portrait" src={heroSrc} alt={`${profile.name}, ${profile.role}`} loading="eager" /><RoleMotion profile={profile} /><div className="visual-label"><span>01</span><b>{profile.domain}</b><small>{profile.motion} system / live</small></div></div>
        <div className="hero-scroll"><span>Scroll to explore</span><i /></div>
      </section>
      <div className="role-marquee" aria-hidden="true"><div>{[...profile.capabilities, ...profile.capabilities].map((item, index) => <span key={`${item}-${index}`}>{item}<i /></span>)}</div></div>

      <section id="about" className="statement section"><div data-reveal><h2>Good work makes the next decision easier.</h2></div><p className="body-copy" data-reveal>{profile.name} brings a calm, accountable way of working to {profile.domain.toLowerCase()}. The focus is on the real trade-offs: context, action, evidence, and the useful system left behind.</p><div className="proof-strip" data-reveal>{profile.proof.map((item, index) => <div key={item}><b>0{index + 1}</b><span>{item}</span></div>)}</div></section>

      <section id="capabilities" className="section capabilities"><div className="capability-pin"><div className="section-head"><h2>Depth where the work gets difficult.</h2><p>Four connected practices. One accountable outcome.</p></div><div className="capability-grid">{profile.capabilities.map((capability, index) => <article data-capability-card key={capability} className={`capability capability-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{capability}</h3><p>{index === 0 ? `Turns ${profile.domain.toLowerCase()} ambiguity into a clear direction.` : index === 1 ? "Balances speed, quality, evidence, and stakeholder reality." : index === 2 ? "Makes the reasoning visible so teams can move with confidence." : "Builds a repeatable practice that improves after delivery."}</p><i /></article>)}</div></div></section>

      <section id="expertise" className="expertise section"><ScrubText>{`${profile.role} work succeeds when evidence, judgment, communication, and action move as one system.`}</ScrubText><div className="expertise-notes" data-reveal>{profile.capabilities.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><p>{profile.proof[index] ?? profile.lens}</p></article>)}</div></section>

      <section id="experience" className="section experience"><div className="section-head" data-reveal><h2>Progress that compounds.</h2><p>A three-year arc from diagnosis to durable operating advantage.</p></div><div className="timeline">{stories.map((story, index) => <article data-reveal key={story}><div className="timeline-year">20{22 + index}</div><div><span>0{index + 1}</span><h3>{story}</h3><p>{index === 0 ? `Read the ${profile.domain.toLowerCase()} environment, surface risk, and define the decision.` : index === 1 ? `Bring ${profile.capabilities[index]} into a focused, measurable delivery rhythm.` : "Document the method, mentor the team, and create a clear next horizon."}</p></div></article>)}</div></section>

      <section id="work" className="section cases"><div className="section-head" data-reveal><h2>Stories with decisions inside.</h2><p>Selected fictional portfolio narratives for a focused hiring conversation.</p></div><div className="case-stack">{["Signal", "System", "Momentum"].map((word, index) => <article data-case-card key={word} style={{ "--case-index": index } as React.CSSProperties}><div className={`case-image case-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span><b>{word}</b><i /></div><div><small>{profile.domain} / {profile.capabilities[index]}</small><h3>{word}: a sharper route forward</h3><p>{index === 0 ? `Found the hidden constraint inside a complex ${profile.domain.toLowerCase()} brief and reframed the decision.` : index === 1 ? `Connected people, evidence, and ${profile.capabilities[index].toLowerCase()} in one repeatable operating system.` : `Created visible momentum, stronger ownership, and a path the next team could continue.`}</p><button onClick={() => go("contact")}>Discuss this approach <Icon name="arrow" /></button></div></article>)}</div></section>

      <section id="impact" className="impact section"><div className="section-head" data-reveal><h2>Impact, made legible.</h2><p>Signals that a recruiter or hiring leader can evaluate quickly.</p></div><div className="impact-grid">{impact.map((item, index) => <article key={item} data-reveal><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><p>{index % 2 ? "A working behavior embedded in the team." : "A decision signal connected to business value."}</p></article>)}</div></section>

      <section id="process" className="process section"><div data-reveal><h2>Understand. Deliver. Improve.</h2><p>Enough structure to reduce risk; enough movement to respond to evidence.</p></div><div className="process-list">{["Read the situation", "Align the decision", "Build the useful path", "Measure what changed"].map((step, index) => <article data-reveal key={step}><span>0{index + 1}</span><h3>{step}</h3><p>{["Separate symptoms from the constraint that matters.", "Make trade-offs and ownership explicit.", `Apply ${profile.capabilities[index % profile.capabilities.length].toLowerCase()} with disciplined pace.`, "Share evidence, learn, and improve the system."][index]}</p></article>)}</div></section>

      <section id="principles" className="principles section"><div className="principle-title" data-reveal><h2>A professional point of view.</h2><p>{profile.lens}</p></div><div className="principle-list">{["Clarity before velocity", "Evidence before theatre", "Ownership after launch"].map((item, index) => <article key={item} data-reveal><span>0{index + 1}</span><h3>{item}</h3><p>{["Name the decision, the constraint, and the cost of delay.", "Use the right signal, explain its limits, and keep judgment visible.", "Leave the team with a stronger method, not a dependency."][index]}</p></article>)}</div></section>

      <section id="contact" className="contact section"><div data-reveal><h2>Bring the real challenge.</h2><p>Hiring for {profile.role.toLowerCase()} expertise or looking for a clearer way through a difficult situation? Start with the context.</p></div><button className="contact-cta" data-reveal onClick={() => window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent(`${profile.role} portfolio conversation`)}`}>Let’s talk <Icon name="arrow" /></button></section>
    </main>
    <footer><span>{profile.name} · {profile.role}</span><span>Fictional sample portfolio · built for role demonstration</span></footer>
  </div>;
}

export function bootPortfolio(id: string, heroSrc = "/assets/hero.png") {
  const profile = roles[id] || roles["ai-ml"];
  createRoot(document.getElementById("root")!).render(<React.StrictMode><App profile={profile} heroSrc={heroSrc} /></React.StrictMode>);
}
