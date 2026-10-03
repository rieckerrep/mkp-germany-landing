"use client";

import Image from "next/image";
import {
  ArrowRight, CalendarDays, Check, ChevronDown, CircleHelp, Compass, HeartHandshake,
  Mail, MapPin, Menu, Mountain, ShieldCheck, Sparkles, Users, X
} from "lucide-react";
import { useState } from "react";

const official = "https://www.mkp-deutschland.de";

const nav = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Das Trainingswochenende", href: "#nwta" },
  { label: "Die Reise geht weiter", href: "#weiter" },
  { label: "Für initiierte Männer", href: `${official}/index.php?cPath=17`, external: true },
  { label: "Veranstaltungen", href: "#termine" },
  { label: "Männergruppen", href: "#gruppen" },
  { label: "Kontakt", href: "#kontakt" },
];

const faq = [
  {
    q: "Was genau ist das NWTA?",
    a: "Das New Warrior Training Adventure ist das intensive Wochenendtraining des ManKind Project. MKP Deutschland beschreibt es als moderne männliche Initiation und Selbsterfahrung: kein Vortrag, sondern eine angeleitete Erfahrung mit persönlicher Reflexion, Herausforderung und Gemeinschaft.",
  },
  {
    q: "Muss ich erzählen, was dort passiert?",
    a: "Nein. Ein Teil der Wirkung entsteht gerade daraus, dass du ohne fertiges Drehbuch in das Wochenende gehst. Gleichzeitig sollst du vorab wissen, worauf du dich einlässt: Das Training ist körperlich und emotional fordernd, Gewalt ist untersagt und ein erfahrenes Team begleitet den gesamten Ablauf.",
  },
  {
    q: "Ist das Therapie oder religiös?",
    a: "Nein. MKP versteht seine Angebote als persönliche Entwicklungsarbeit und Gemeinschaft, nicht als Therapie. Der deutsche Verein ist weder konfessionell noch parteipolitisch gebunden und betont Respekt vor unterschiedlichen Lebensentwürfen und Weltanschauungen.",
  },
  {
    q: "Kann ich allein kommen?",
    a: "Ja. Du musst vorher niemanden kennen. Die Wochenenden bringen Männer mit unterschiedlichen Lebenswegen zusammen; das Mindestalter beträgt 18 Jahre.",
  },
  {
    q: "Was passiert nach dem Wochenende?",
    a: "Das NWTA ist nicht als isoliertes Event gedacht. Danach gibt es Integrationsgruppen, weitere Trainings und die Möglichkeit, sich in der Gemeinschaft einzubringen. Viele iGroups stehen auch Männern offen, die noch kein NWTA besucht haben.",
  },
];

const events = [
  {
    place: "Ferienheim Oberbildstein",
    date: "16.–18. Oktober 2026",
    time: "Freitag 16:45 bis Sonntag 16:30",
    price: "600 €",
    href: `${official}/product_info.php?products_id=258`,
  },
  {
    place: "Schloss Bettenburg",
    date: "6.–8. November 2026",
    time: "Freitag 16:45 bis Sonntag 16:30",
    price: "600 €",
    href: `${official}/product_info.php?products_id=248`,
  },
];

export function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="ManKind Project Deutschland">
            <span className="brand-mark" aria-hidden>
              <span /><span /><span /><span /><span /><span />
            </span>
            <span><strong>ManKind Project</strong><small>Deutschland</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            {nav.map((item) => (
              <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.label}</a>
            ))}
          </nav>
          <a className="nav-cta desktop-only" href="#termine">NWTA finden <ArrowRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Menü öffnen" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {nav.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.label}</a>
            ))}
            <a className="button button-gold" href="#termine" onClick={() => setMenuOpen(false)}>NWTA finden <ArrowRight size={18} /></a>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="hero dark-section">
          <Image src="https://raw.githubusercontent.com/rieckerrep/mkp-poland/main/public/images/gruppe-von-maennern.jpg" alt="Männer in Gemeinschaft" fill priority sizes="100vw" className="hero-image" />
          <div className="hero-overlay" /><div className="orb orb-one" /><div className="orb orb-two" />
          <div className="container hero-content">
            <div className="eyebrow gold">NEW WARRIOR TRAINING ADVENTURE · MKP DEUTSCHLAND</div>
            <h1>Hör auf, dein Leben nur zu verwalten.<span> Begegne ihm.</span></h1>
            <p className="hero-lead">Ein intensives Wochenende unter Männern. Für Männer, die genauer hinschauen wollen: auf das, was sie antreibt, was sie zurückhält und wie sie Verantwortung für ihr eigenes Leben übernehmen.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#termine">Nächstes NWTA ansehen <ArrowRight size={18} /></a>
              <a className="button button-ghost" href="#was-erwartet-dich">Was erwartet mich?</a>
            </div>
            <div className="trust-row">
              <span><ShieldCheck size={18} /> Erfahrenes MKP-Team</span>
              <span><Users size={18} /> Gemeinschaft statt Publikum</span>
              <span><Compass size={18} /> Gemeinnütziger Verein in Deutschland</span>
            </div>
          </div>
          <a href="#warum" className="scroll-cue" aria-label="Weiter scrollen"><ChevronDown /></a>
        </section>

        <section id="warum" className="dark-section problem-section">
          <div className="container">
            <div className="section-kicker">Warum Männer kommen</div>
            <div className="split-heading">
              <h2>Nach außen funktioniert vieles.<br /><span>Innen bleibt trotzdem etwas offen.</span></h2>
              <p>Arbeit, Familie, Verantwortung, Termine. Viele Männer tragen viel — und haben gleichzeitig kaum Orte, an denen sie nicht funktionieren, erklären oder überzeugen müssen.</p>
            </div>
            <div className="problem-grid">
              {[
                ["Du bist zuverlässig.", "Aber du merkst, dass Leistung nicht automatisch Klarheit schafft."],
                ["Du kennst deine Rollen.", "Vater, Partner, Kollege, Freund. Die Frage ist: Wer bist du darunter?"],
                ["Du kannst vieles allein lösen.", "Nur manche Dinge verändern sich erst, wenn du ihnen ehrlich in Beziehung begegnest."],
                ["Du willst nicht noch mehr Theorie.", "Du willst eine Erfahrung, die dich fordert und dir zeigt, wo du wirklich stehst."],
              ].map(([title, text]) => <article className="glass-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <p className="punchline">Das NWTA verspricht dir nicht, ein anderer Mann zu werden. <span>Es lädt dich ein, ehrlicher der Mann zu sein, der du bereits bist.</span></p>
          </div>
        </section>

        <section id="nwta" className="light-section">
          <div className="container two-col">
            <div>
              <div className="section-kicker blue">Das Trainingswochenende</div>
              <h2>New Warrior Training Adventure</h2>
              <p className="lead-dark">MKP Deutschland beschreibt das NWTA als moderne männliche Initiation und Selbsterfahrung – orientiert an der klassischen Idee der Heldenreise.</p>
              <p>Es ist kein Seminar, bei dem du zwei Tage lang zuhörst. Du wirst aktiv arbeiten, dich mit deinem eigenen Leben auseinandersetzen und anderen Männern begegnen, die dasselbe tun.</p>
              <div className="value-list">
                {["Verantwortung statt Ausreden", "Authentizität statt Rolle", "Verbindung statt Konkurrenz", "Integrität statt Selbstbetrug"].map((v) => <div key={v}><Check size={18} /> {v}</div>)}
              </div>
              <a className="text-link" href={`${official}/index.php?cPath=3`} target="_blank" rel="noreferrer">Mehr auf der offiziellen MKP-Seite <ArrowRight size={16} /></a>
            </div>
            <div className="image-card tall-card">
              <Image src="https://raw.githubusercontent.com/rieckerrep/mkp-poland/main/public/images/maenner-in-aktion.jpg" alt="Männer in gemeinsamer Arbeit" fill sizes="(max-width: 900px) 100vw, 44vw" />
              <div className="image-caption"><span>Kein Zuschauerplatz.</span><strong>Du bist Teil der Erfahrung.</strong></div>
            </div>
          </div>
        </section>

        <section id="was-erwartet-dich" className="paper-section">
          <div className="container">
            <div className="section-kicker">Was erwartet dich?</div>
            <h2 className="center-heading">Intensiv. Sicher gerahmt. Nicht komplett vorhersehbar.</h2>
            <p className="center-lead">Du sollst wissen, worauf du dich einlässt, ohne dass wir dir die Erfahrung vorwegnehmen.</p>
            <div className="feature-grid">
              {[
                [Mountain, "Herausforderung", "Das Wochenende kann körperlich und emotional fordernd sein. Du entscheidest dich bewusst dafür, deine Komfortzone nicht zum Maßstab zu machen."],
                [ShieldCheck, "Klarer Rahmen", "Das Training wird von erfahrenen, zertifizierten MKP-Leitern und einem großen Team begleitet. Körperliche und verbale Gewalt sind untersagt."],
                [HeartHandshake, "Gemeinschaft", "Du gehst nicht allein durch Prozesse. Ein Team von Männern hält Struktur, Sicherheit und die praktische Organisation des Wochenendes."],
                [Sparkles, "Eigene Erfahrung", "Es gibt kein vorgeschriebenes Ergebnis. Was du erkennst, entscheidest und mitnimmst, bleibt deine eigene Verantwortung."],
              ].map(([Icon, title, text]) => {
                const I = Icon as typeof Mountain;
                return <article className="feature-card" key={title as string}><I /><h3>{title as string}</h3><p>{text as string}</p></article>;
              })}
            </div>
            <div className="note-box"><CircleHelp size={22} /><div><strong>Warum wir nicht jeden Ablaufpunkt erklären</strong><p>Die deutsche MKP-Seite beschreibt das Training bewusst als Erfahrung. Vor der Anmeldung findest du dort Teilnahmebedingungen und organisatorische Hinweise; die konkreten Prozesse werden nicht als Programmliste vorweggenommen.</p></div></div>
          </div>
        </section>

        <section id="ueber-uns" className="dark-section identity-section">
          <div className="container two-col reverse-mobile">
            <div className="image-card identity-image"><Image src="https://raw.githubusercontent.com/rieckerrep/mkp-poland/main/public/images/stolz.jpg" alt="Mann im Freien" fill sizes="(max-width: 900px) 100vw, 44vw" /></div>
            <div>
              <div className="section-kicker gold">Über uns</div>
              <h2>Kein Männerbild von der Stange.</h2>
              <p className="lead-light">MKP Deutschland will Männer darin unterstützen, ihr Mann-Sein bewusst, selbstbestimmt und verantwortungsvoll zu gestalten.</p>
              <p>Der deutsche Verein ist Teil des internationalen ManKind Project. Er versteht sich als unabhängig, gemeinnützig, konfessionell und parteipolitisch ungebunden. Unterschiedliche Herkunft, Lebensentwürfe, sexuelle Orientierungen und Weltanschauungen gehören ausdrücklich zur Gemeinschaft.</p>
              <div className="values-row"><span>Authentizität</span><span>Verantwortung</span><span>Integrität</span><span>Mitgefühl</span><span>Respekt</span><span>Leadership</span></div>
              <a className="text-link light" href={`${official}/index.php?cPath=13`} target="_blank" rel="noreferrer">Über MKP Deutschland <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="termine" className="light-section events-section">
          <div className="container">
            <div className="section-kicker blue">Veranstaltungen</div>
            <div className="split-heading dark-heading"><h2>Die nächsten NWTA-Wochenenden in Deutschland.</h2><p>Aktuell veröffentlicht MKP Deutschland diese kommenden Termine. Anmeldung und Vertragsabwicklung erfolgen über die offizielle MKP-Seite.</p></div>
            <div className="events-grid">
              {events.map((event, index) => (
                <article className="event-card" key={event.place}>
                  <div className="event-number">0{index + 1}</div>
                  <div><div className="event-date"><CalendarDays size={18} />{event.date}</div><h3>{event.place}</h3><p><MapPin size={16} /> Deutschland · {event.time}</p></div>
                  <div className="event-right"><strong>{event.price}</strong><a className="button button-dark" href={event.href} target="_blank" rel="noreferrer">Details & Anmeldung <ArrowRight size={17} /></a></div>
                </article>
              ))}
            </div>
            <p className="source-note">Termine laut MKP Deutschland, Stand 3. Oktober 2026.</p>
          </div>
        </section>

        <section id="weiter" className="paper-section">
          <div className="container two-col">
            <div>
              <div className="section-kicker">Die Reise geht weiter</div>
              <h2>Ein Wochenende kann etwas öffnen. Alltag entscheidet, was daraus wird.</h2>
              <p className="lead-dark">Darum endet MKP nicht am Sonntag. Integrationsgruppen und weitere Trainings schaffen Räume, in denen Erkenntnisse zu gelebter Praxis werden können.</p>
              <div className="step-list">
                <div><span>01</span><div><strong>NWTA</strong><p>Die intensive Erfahrung und ein klarer Blick auf das eigene Leben.</p></div></div>
                <div><span>02</span><div><strong>Integration</strong><p>Regelmäßige Männergruppen, Austausch und konkrete Verantwortung im Alltag.</p></div></div>
                <div><span>03</span><div><strong>Weitergeben</strong><p>Wer initiiert ist, kann später staffen, Trainings besuchen und Verantwortung in der Gemeinschaft übernehmen.</p></div></div>
              </div>
              <a className="text-link" href={`${official}/index.php?cPath=4`} target="_blank" rel="noreferrer">Alle Wege nach dem NWTA <ArrowRight size={16} /></a>
            </div>
            <div className="image-card tall-card"><Image src="https://raw.githubusercontent.com/rieckerrep/mkp-poland/main/public/images/herz-mit-sonne.jpg" alt="Symbol für Verbundenheit" fill sizes="(max-width: 900px) 100vw, 44vw" /></div>
          </div>
        </section>

        <section id="gruppen" className="dark-section groups-section">
          <Image src="https://raw.githubusercontent.com/rieckerrep/mkp-poland/main/public/images/empathie.jpg" alt="" fill sizes="100vw" className="groups-bg" />
          <div className="groups-overlay" />
          <div className="container groups-content">
            <div className="section-kicker gold">Männergruppen · iGroups</div>
            <h2>Du musst nicht bis zum nächsten Training warten, um echten Kontakt zu erleben.</h2>
            <p>In ganz Deutschland treffen sich Integrationsgruppen regelmäßig. Viele Gruppen sind auch für Männer offen, die das NWTA noch nicht besucht haben, oder bieten Schnupperabende an. Zusätzlich gibt es eine Online-iGroup.</p>
            <div className="city-cloud">{["Berlin","Hamburg","Köln","Frankfurt","München","Stuttgart","Freiburg","Münster","Nürnberg","Wiesbaden","Online-iGroup","…"].map((c)=><span key={c}>{c}</span>)}</div>
            <a className="button button-gold" href={`${official}/index.php?cPath=7`} target="_blank" rel="noreferrer">iGroup in deiner Nähe finden <ArrowRight size={18} /></a>
          </div>
        </section>

        <section className="light-section voices-section">
          <div className="container">
            <div className="section-kicker blue">Erfahrungen</div>
            <h2 className="center-heading">Warum Männer wiederkommen und andere Männer mitbringen.</h2>
            <div className="voices-grid">
              <blockquote><p>Ein Teilnehmer beschreibt nach seinem NWTA vor allem die für ihn ungewohnte Tiefe der Verbindung mit anderen Männern und eine starke emotionale Wirkung.</p><footer>Erfahrungsbericht · MKP Deutschland</footer></blockquote>
              <blockquote><p>Andere Berichte drehen sich um mehr Klarheit, Verantwortung und das Gefühl, sich unter Männern weniger verstecken zu müssen.</p><footer>Erfahrungsberichte · MKP Deutschland</footer></blockquote>
              <blockquote><p>Die Berichte sind persönlich und verschieden. Genau das ist der Punkt: Es gibt kein vorgeschriebenes „richtiges“ Ergebnis des Wochenendes.</p><footer>Aus den veröffentlichten Erfahrungsberichten</footer></blockquote>
            </div>
            <div className="center-link"><a className="text-link" href={`${official}/shop_content.php?coID=2000`} target="_blank" rel="noreferrer">Erfahrungen auf mkp-deutschland.de lesen <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section id="faq" className="paper-section faq-section">
          <div className="container faq-wrap">
            <div><div className="section-kicker">FAQ zum Trainingswochenende</div><h2>Fragen, die du vor einer Anmeldung stellen solltest.</h2><p>Keine Mystifizierung. Wenn dir etwas unklar ist, frag nach. Die offizielle MKP-Seite hat zusätzlich ein ausführlicheres FAQ und Teilnahmebedingungen.</p></div>
            <div className="faq-list">
              {faq.map((item, index) => (
                <div className="faq-item" key={item.q}>
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{item.q}</span><ChevronDown className={openFaq === index ? "rotate" : ""} /></button>
                  {openFaq === index && <p>{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="final-section dark-section">
          <div className="container final-wrap">
            <div className="eyebrow gold">DEIN NÄCHSTER SCHRITT</div>
            <h2>Du musst heute nicht dein Leben verändern.<br /><span>Du kannst eine Entscheidung treffen.</span></h2>
            <p>Sieh dir den nächsten Termin an oder sprich direkt mit MKP Deutschland. Ohne Umweg über diese Seite.</p>
            <div className="hero-actions centered">
              <a className="button button-gold" href="#termine">NWTA-Termin wählen <ArrowRight size={18} /></a>
              <a className="button button-ghost" href="mailto:office@mkp-deutschland.de"><Mail size={18} /> office@mkp-deutschland.de</a>
            </div>
            <p className="contact-meta">Kreis der Männer – ManKind Project Deutschland e.V. · 069 9001 7747</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><strong>ManKind Project Deutschland</strong><p>Eine fokussierte Informationsseite zum New Warrior Training Adventure.</p></div>
          <div className="footer-links">
            <a href={`${official}/index.php?cPath=13`} target="_blank" rel="noreferrer">Über uns</a>
            <a href={`${official}/shop_content.php?coID=100`} target="_blank" rel="noreferrer">NWTA-FAQ</a>
            <a href={`${official}/shop_content.php?coID=7`} target="_blank" rel="noreferrer">Kontakt</a>
            <a href={`${official}/shop_content.php?coID=2`} target="_blank" rel="noreferrer">Datenschutz</a>
            <a href={`${official}/shop_content.php?coID=4`} target="_blank" rel="noreferrer">Impressum</a>
          </div>
        </div>
      </footer>
    </>
  );
}
