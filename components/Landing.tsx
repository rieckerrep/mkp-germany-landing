"use client";

import Image from "next/image";
import {stegaClean} from "next-sanity";
import {
  ArrowRight, CalendarDays, Check, ChevronDown, CircleHelp, Compass, HeartHandshake,
  Mail, MapPin, Menu, Mountain, ShieldCheck, Sparkles, Users, X
} from "lucide-react";
import {useState} from "react";
import type {LandingContent} from "@/content/defaultContent";

const iconMap = {
  mountain: Mountain,
  shield: ShieldCheck,
  community: HeartHandshake,
  sparkles: Sparkles,
};

const clean = (value: string) => stegaClean(value);

export function Landing({content}: {content: LandingContent}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label={content.brandTitle}>
            <span className="brand-mark" aria-hidden><span /><span /><span /><span /><span /><span /></span>
            <span><strong>{content.brandTitle}</strong><small>{content.brandSubtitle}</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            {content.navigation.map((item) => (
              <a key={clean(item.label)} href={clean(item.href)} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.label}</a>
            ))}
          </nav>
          <a className="nav-cta desktop-only" href={clean(content.navCta.href)}>{content.navCta.label} <ArrowRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Menü öffnen" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {content.navigation.map((item) => (
              <a key={clean(item.label)} href={clean(item.href)} onClick={() => setMenuOpen(false)} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.label}</a>
            ))}
            <a className="button button-gold" href={clean(content.navCta.href)} onClick={() => setMenuOpen(false)}>{content.navCta.label} <ArrowRight size={18} /></a>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="hero dark-section">
          <Image src={clean(content.heroImage.url)} alt={content.heroImage.alt} fill priority sizes="100vw" className="hero-image" />
          <div className="hero-overlay" /><div className="orb orb-one" /><div className="orb orb-two" />
          <div className="container hero-content">
            <div className="eyebrow gold">{content.heroEyebrow}</div>
            <h1>{content.heroTitle}<span> {content.heroHighlight}</span></h1>
            <p className="hero-lead">{content.heroLead}</p>
            <div className="hero-actions">
              <a className="button button-gold" href={clean(content.heroPrimaryCta.href)}>{content.heroPrimaryCta.label} <ArrowRight size={18} /></a>
              <a className="button button-ghost" href={clean(content.heroSecondaryCta.href)}>{content.heroSecondaryCta.label}</a>
            </div>
            <div className="trust-row">
              {content.heroTrustItems.map((item, index) => {
                const Icon = [ShieldCheck, Users, Compass][index % 3];
                return <span key={clean(item)}><Icon size={18} /> {item}</span>;
              })}
            </div>
          </div>
          <a href="#warum" className="scroll-cue" aria-label="Weiter scrollen"><ChevronDown /></a>
        </section>

        <section id="warum" className="dark-section problem-section">
          <div className="container">
            <div className="section-kicker">{content.problemKicker}</div>
            <div className="split-heading">
              <h2>{content.problemHeading}<br /><span>{content.problemHeadingMuted}</span></h2>
              <p>{content.problemLead}</p>
            </div>
            <div className="problem-grid">
              {content.problemCards.map((card) => <article className="glass-card" key={clean(card.title)}><h3>{card.title}</h3><p>{card.text}</p></article>)}
            </div>
            <p className="punchline">{content.problemPunchline} <span>{content.problemPunchlineHighlight}</span></p>
          </div>
        </section>

        <section id="nwta" className="light-section">
          <div className="container two-col">
            <div>
              <div className="section-kicker blue">{content.nwtaKicker}</div>
              <h2>{content.nwtaHeading}</h2>
              <p className="lead-dark">{content.nwtaLead}</p>
              <p>{content.nwtaBody}</p>
              <div className="value-list">
                {content.nwtaValues.map((value) => <div key={clean(value)}><Check size={18} /> {value}</div>)}
              </div>
              <a className="text-link" href={clean(content.nwtaLink.href)} target="_blank" rel="noreferrer">{content.nwtaLink.label} <ArrowRight size={16} /></a>
            </div>
            <div className="image-card tall-card">
              <Image src={clean(content.nwtaImage.url)} alt={content.nwtaImage.alt} fill sizes="(max-width: 900px) 100vw, 44vw" />
              <div className="image-caption"><span>{content.nwtaImageLabel}</span><strong>{content.nwtaImageCaption}</strong></div>
            </div>
          </div>
        </section>

        <section id="was-erwartet-dich" className="paper-section">
          <div className="container">
            <div className="section-kicker">{content.expectationsKicker}</div>
            <h2 className="center-heading">{content.expectationsHeading}</h2>
            <p className="center-lead">{content.expectationsLead}</p>
            <div className="feature-grid">
              {content.expectationsCards.map((card) => {
                const Icon = iconMap[clean(card.icon) as keyof typeof iconMap] || Sparkles;
                return <article className="feature-card" key={clean(card.title)}><Icon /><h3>{card.title}</h3><p>{card.text}</p></article>;
              })}
            </div>
            <div className="note-box"><CircleHelp size={22} /><div><strong>{content.expectationsNoteTitle}</strong><p>{content.expectationsNoteText}</p></div></div>
          </div>
        </section>

        <section id="ueber-uns" className="dark-section identity-section">
          <div className="container two-col reverse-mobile">
            <div className="image-card identity-image"><Image src={clean(content.aboutImage.url)} alt={content.aboutImage.alt} fill sizes="(max-width: 900px) 100vw, 44vw" /></div>
            <div>
              <div className="section-kicker gold">{content.aboutKicker}</div>
              <h2>{content.aboutHeading}</h2>
              <p className="lead-light">{content.aboutLead}</p>
              <p>{content.aboutBody}</p>
              <div className="values-row">{content.aboutValues.map((value) => <span key={clean(value)}>{value}</span>)}</div>
              <a className="text-link light" href={clean(content.aboutLink.href)} target="_blank" rel="noreferrer">{content.aboutLink.label} <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="termine" className="light-section events-section">
          <div className="container">
            <div className="section-kicker blue">{content.eventsKicker}</div>
            <div className="split-heading dark-heading"><h2>{content.eventsHeading}</h2><p>{content.eventsLead}</p></div>
            <div className="events-grid">
              {content.events.map((event, index) => (
                <article className="event-card" key={event._id || clean(event.title)}>
                  <div className="event-number">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="event-date"><CalendarDays size={18} />{event.dateLabel}</div>
                    <h3>{event.title}</h3>
                    <p><MapPin size={16} /> {event.countryLabel || "Deutschland"} · {event.timeLabel}</p>
                  </div>
                  <div className="event-right"><strong>{event.price}</strong><a className="button button-dark" href={clean(event.registrationUrl)} target="_blank" rel="noreferrer">Details & Anmeldung <ArrowRight size={17} /></a></div>
                </article>
              ))}
            </div>
            <p className="source-note">{content.eventsSourceNote}</p>
          </div>
        </section>

        <section id="weiter" className="paper-section">
          <div className="container two-col">
            <div>
              <div className="section-kicker">{content.integrationKicker}</div>
              <h2>{content.integrationHeading}</h2>
              <p className="lead-dark">{content.integrationLead}</p>
              <div className="step-list">
                {content.integrationSteps.map((step) => <div key={clean(step.number)}><span>{step.number}</span><div><strong>{step.title}</strong><p>{step.text}</p></div></div>)}
              </div>
              <a className="text-link" href={clean(content.integrationLink.href)} target="_blank" rel="noreferrer">{content.integrationLink.label} <ArrowRight size={16} /></a>
            </div>
            <div className="image-card tall-card"><Image src={clean(content.integrationImage.url)} alt={content.integrationImage.alt} fill sizes="(max-width: 900px) 100vw, 44vw" /></div>
          </div>
        </section>

        <section id="gruppen" className="dark-section groups-section">
          <Image src={clean(content.groupsImage.url)} alt={content.groupsImage.alt} fill sizes="100vw" className="groups-bg" />
          <div className="groups-overlay" />
          <div className="container groups-content">
            <div className="section-kicker gold">{content.groupsKicker}</div>
            <h2>{content.groupsHeading}</h2>
            <p>{content.groupsLead}</p>
            <div className="city-cloud">{content.groupsCities.map((city) => <span key={clean(city)}>{city}</span>)}</div>
            <a className="button button-gold" href={clean(content.groupsCta.href)} target="_blank" rel="noreferrer">{content.groupsCta.label} <ArrowRight size={18} /></a>
          </div>
        </section>

        <section className="light-section voices-section">
          <div className="container">
            <div className="section-kicker blue">{content.voicesKicker}</div>
            <h2 className="center-heading">{content.voicesHeading}</h2>
            <div className="voices-grid">
              {content.voices.map((voice, index) => <blockquote key={index}><p>{voice.text}</p><footer>{voice.attribution}</footer></blockquote>)}
            </div>
            <div className="center-link"><a className="text-link" href={clean(content.voicesLink.href)} target="_blank" rel="noreferrer">{content.voicesLink.label} <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section id="faq" className="paper-section faq-section">
          <div className="container faq-wrap">
            <div><div className="section-kicker">{content.faqKicker}</div><h2>{content.faqHeading}</h2><p>{content.faqLead}</p></div>
            <div className="faq-list">
              {content.faqItems.map((item, index) => (
                <div className="faq-item" key={clean(item.question)}>
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{item.question}</span><ChevronDown className={openFaq === index ? "rotate" : ""} /></button>
                  {openFaq === index && <p>{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="final-section dark-section">
          <div className="container final-wrap">
            <div className="eyebrow gold">{content.contactEyebrow}</div>
            <h2>{content.contactHeading}<br /><span>{content.contactHighlight}</span></h2>
            <p>{content.contactLead}</p>
            <div className="hero-actions centered">
              <a className="button button-gold" href={clean(content.contactPrimaryCta.href)}>{content.contactPrimaryCta.label} <ArrowRight size={18} /></a>
              <a className="button button-ghost" href={`mailto:${clean(content.contactEmail)}`}><Mail size={18} /> {content.contactEmail}</a>
            </div>
            <p className="contact-meta">{content.contactOrganization} · {content.contactPhone}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><strong>{content.footerTitle}</strong><p>{content.footerText}</p></div>
          <div className="footer-links">
            {content.footerLinks.map((link) => <a key={clean(link.label)} href={clean(link.href)} target="_blank" rel="noreferrer">{link.label}</a>)}
          </div>
        </div>
      </footer>
    </>
  );
}
