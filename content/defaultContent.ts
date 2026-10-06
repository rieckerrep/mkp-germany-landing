export type CmsImage = {url: string; alt: string};
export type Cta = {label: string; href: string};
export type NavItem = {label: string; href: string; external?: boolean};
export type TextCard = {title: string; text: string};
export type EventItem = {
  _id?: string;
  title: string;
  dateLabel: string;
  timeLabel?: string;
  countryLabel?: string;
  price?: string;
  registrationUrl: string;
};

export type LandingContent = {
  brandTitle: string;
  brandSubtitle: string;
  navigation: NavItem[];
  navCta: Cta;
  heroEyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroLead: string;
  heroPrimaryCta: Cta;
  heroSecondaryCta: Cta;
  heroTrustItems: string[];
  heroImage: CmsImage;
  problemKicker: string;
  problemHeading: string;
  problemHeadingMuted: string;
  problemLead: string;
  problemCards: TextCard[];
  problemPunchline: string;
  problemPunchlineHighlight: string;
  nwtaKicker: string;
  nwtaHeading: string;
  nwtaLead: string;
  nwtaBody: string;
  nwtaValues: string[];
  nwtaLink: Cta;
  nwtaImage: CmsImage;
  nwtaImageLabel: string;
  nwtaImageCaption: string;
  expectationsKicker: string;
  expectationsHeading: string;
  expectationsLead: string;
  expectationsCards: {icon: string; title: string; text: string}[];
  expectationsNoteTitle: string;
  expectationsNoteText: string;
  aboutKicker: string;
  aboutHeading: string;
  aboutLead: string;
  aboutBody: string;
  aboutValues: string[];
  aboutLink: Cta;
  aboutImage: CmsImage;
  eventsKicker: string;
  eventsHeading: string;
  eventsLead: string;
  eventsSourceNote: string;
  integrationKicker: string;
  integrationHeading: string;
  integrationLead: string;
  integrationSteps: {number: string; title: string; text: string}[];
  integrationLink: Cta;
  integrationImage: CmsImage;
  groupsKicker: string;
  groupsHeading: string;
  groupsLead: string;
  groupsCities: string[];
  groupsCta: Cta;
  groupsImage: CmsImage;
  voicesKicker: string;
  voicesHeading: string;
  voices: {text: string; attribution: string}[];
  voicesLink: Cta;
  faqKicker: string;
  faqHeading: string;
  faqLead: string;
  faqItems: {question: string; answer: string}[];
  contactEyebrow: string;
  contactHeading: string;
  contactHighlight: string;
  contactLead: string;
  contactPrimaryCta: Cta;
  contactEmail: string;
  contactPhone: string;
  contactOrganization: string;
  footerTitle: string;
  footerText: string;
  footerLinks: {label: string; href: string}[];
  seoTitle: string;
  seoDescription: string;
  seoImage: CmsImage;
  events: EventItem[];
};

const img = (name: string, alt: string): CmsImage => ({
  url: `https://raw.githubusercontent.com/rieckerrep/mkp-poland/main/public/images/${name}.jpg`,
  alt,
});

const official = "https://www.mkp-deutschland.de";

export const defaultLandingContent: LandingContent = {
  brandTitle: "ManKind Project",
  brandSubtitle: "Deutschland",
  navigation: [
    {label:"Über uns",href:"#ueber-uns"},
    {label:"Das Trainingswochenende",href:"#nwta"},
    {label:"Die Reise geht weiter",href:"#weiter"},
    {label:"Für initiierte Männer",href:`${official}/index.php?cPath=17`,external:true},
    {label:"Veranstaltungen",href:"#termine"},
    {label:"Männergruppen",href:"#gruppen"},
    {label:"Kontakt",href:"#kontakt"},
  ],
  navCta: {label:"NWTA finden",href:"#termine"},
  heroEyebrow: "NEW WARRIOR TRAINING ADVENTURE · MKP DEUTSCHLAND",
  heroTitle: "Hör auf, dein Leben nur zu verwalten.",
  heroHighlight: "Begegne ihm.",
  heroLead: "Ein intensives Wochenende unter Männern. Für Männer, die genauer hinschauen wollen: auf das, was sie antreibt, was sie zurückhält und wie sie Verantwortung für ihr eigenes Leben übernehmen.",
  heroPrimaryCta: {label:"Nächstes NWTA ansehen",href:"#termine"},
  heroSecondaryCta: {label:"Was erwartet mich?",href:"#was-erwartet-dich"},
  heroTrustItems: ["Erfahrenes MKP-Team","Gemeinschaft statt Publikum","Gemeinnütziger Verein in Deutschland"],
  heroImage: img("gruppe-von-maennern","Männer in Gemeinschaft"),
  problemKicker: "Warum Männer kommen",
  problemHeading: "Nach außen funktioniert vieles.",
  problemHeadingMuted: "Innen bleibt trotzdem etwas offen.",
  problemLead: "Arbeit, Familie, Verantwortung, Termine. Viele Männer tragen viel — und haben gleichzeitig kaum Orte, an denen sie nicht funktionieren, erklären oder überzeugen müssen.",
  problemCards: [
    {title:"Du bist zuverlässig.",text:"Aber du merkst, dass Leistung nicht automatisch Klarheit schafft."},
    {title:"Du kennst deine Rollen.",text:"Vater, Partner, Kollege, Freund. Die Frage ist: Wer bist du darunter?"},
    {title:"Du kannst vieles allein lösen.",text:"Nur manche Dinge verändern sich erst, wenn du ihnen ehrlich in Beziehung begegnest."},
    {title:"Du willst nicht noch mehr Theorie.",text:"Du willst eine Erfahrung, die dich fordert und dir zeigt, wo du wirklich stehst."},
  ],
  problemPunchline: "Das NWTA verspricht dir nicht, ein anderer Mann zu werden.",
  problemPunchlineHighlight: "Es lädt dich ein, ehrlicher der Mann zu sein, der du bereits bist.",
  nwtaKicker: "Das Trainingswochenende",
  nwtaHeading: "New Warrior Training Adventure",
  nwtaLead: "MKP Deutschland beschreibt das NWTA als moderne männliche Initiation und Selbsterfahrung – orientiert an der klassischen Idee der Heldenreise.",
  nwtaBody: "Es ist kein Seminar, bei dem du zwei Tage lang zuhörst. Du wirst aktiv arbeiten, dich mit deinem eigenen Leben auseinandersetzen und anderen Männern begegnen, die dasselbe tun.",
  nwtaValues: ["Verantwortung statt Ausreden","Authentizität statt Rolle","Verbindung statt Konkurrenz","Integrität statt Selbstbetrug"],
  nwtaLink: {label:"Mehr auf der offiziellen MKP-Seite",href:`${official}/index.php?cPath=3`},
  nwtaImage: img("maenner-in-aktion","Männer in gemeinsamer Arbeit"),
  nwtaImageLabel: "Kein Zuschauerplatz.",
  nwtaImageCaption: "Du bist Teil der Erfahrung.",
  expectationsKicker: "Was erwartet dich?",
  expectationsHeading: "Intensiv. Sicher gerahmt. Nicht komplett vorhersehbar.",
  expectationsLead: "Du sollst wissen, worauf du dich einlässt, ohne dass wir dir die Erfahrung vorwegnehmen.",
  expectationsCards: [
    {icon:"mountain",title:"Herausforderung",text:"Das Wochenende kann körperlich und emotional fordernd sein. Du entscheidest dich bewusst dafür, deine Komfortzone nicht zum Maßstab zu machen."},
    {icon:"shield",title:"Klarer Rahmen",text:"Das Training wird von erfahrenen, zertifizierten MKP-Leitern und einem großen Team begleitet. Körperliche und verbale Gewalt sind untersagt."},
    {icon:"community",title:"Gemeinschaft",text:"Du gehst nicht allein durch Prozesse. Ein Team von Männern hält Struktur, Sicherheit und die praktische Organisation des Wochenendes."},
    {icon:"sparkles",title:"Eigene Erfahrung",text:"Es gibt kein vorgeschriebenes Ergebnis. Was du erkennst, entscheidest und mitnimmst, bleibt deine eigene Verantwortung."},
  ],
  expectationsNoteTitle: "Warum wir nicht jeden Ablaufpunkt erklären",
  expectationsNoteText: "Die deutsche MKP-Seite beschreibt das Training bewusst als Erfahrung. Vor der Anmeldung findest du dort Teilnahmebedingungen und organisatorische Hinweise; die konkreten Prozesse werden nicht als Programmliste vorweggenommen.",
  aboutKicker: "Über uns",
  aboutHeading: "Kein Männerbild von der Stange.",
  aboutLead: "MKP Deutschland will Männer darin unterstützen, ihr Mann-Sein bewusst, selbstbestimmt und verantwortungsvoll zu gestalten.",
  aboutBody: "Der deutsche Verein ist Teil des internationalen ManKind Project. Er versteht sich als unabhängig, gemeinnützig, konfessionell und parteipolitisch ungebunden. Unterschiedliche Herkunft, Lebensentwürfe, sexuelle Orientierungen und Weltanschauungen gehören ausdrücklich zur Gemeinschaft.",
  aboutValues: ["Authentizität","Verantwortung","Integrität","Mitgefühl","Respekt","Leadership"],
  aboutLink: {label:"Über MKP Deutschland",href:`${official}/index.php?cPath=13`},
  aboutImage: img("stolz","Mann im Freien"),
  eventsKicker: "Veranstaltungen",
  eventsHeading: "Die nächsten NWTA-Wochenenden in Deutschland.",
  eventsLead: "Aktuell veröffentlicht MKP Deutschland diese kommenden Termine. Anmeldung und Vertragsabwicklung erfolgen über die offizielle MKP-Seite.",
  eventsSourceNote: "Termine laut MKP Deutschland, Stand 3. Oktober 2026.",
  events: [
    {title:"Ferienheim Oberbildstein",dateLabel:"16.–18. Oktober 2026",timeLabel:"Freitag 16:45 bis Sonntag 16:30",countryLabel:"Deutschland",price:"600 €",registrationUrl:`${official}/product_info.php?products_id=258`},
    {title:"Schloss Bettenburg",dateLabel:"6.–8. November 2026",timeLabel:"Freitag 16:45 bis Sonntag 16:30",countryLabel:"Deutschland",price:"600 €",registrationUrl:`${official}/product_info.php?products_id=248`},
  ],
  integrationKicker: "Die Reise geht weiter",
  integrationHeading: "Ein Wochenende kann etwas öffnen. Alltag entscheidet, was daraus wird.",
  integrationLead: "Darum endet MKP nicht am Sonntag. Integrationsgruppen und weitere Trainings schaffen Räume, in denen Erkenntnisse zu gelebter Praxis werden können.",
  integrationSteps: [
    {number:"01",title:"NWTA",text:"Die intensive Erfahrung und ein klarer Blick auf das eigene Leben."},
    {number:"02",title:"Integration",text:"Regelmäßige Männergruppen, Austausch und konkrete Verantwortung im Alltag."},
    {number:"03",title:"Weitergeben",text:"Wer initiiert ist, kann später staffen, Trainings besuchen und Verantwortung in der Gemeinschaft übernehmen."},
  ],
  integrationLink: {label:"Alle Wege nach dem NWTA",href:`${official}/index.php?cPath=4`},
  integrationImage: img("herz-mit-sonne","Symbol für Verbundenheit"),
  groupsKicker: "Männergruppen · iGroups",
  groupsHeading: "Du musst nicht bis zum nächsten Training warten, um echten Kontakt zu erleben.",
  groupsLead: "In ganz Deutschland treffen sich Integrationsgruppen regelmäßig. Viele Gruppen sind auch für Männer offen, die das NWTA noch nicht besucht haben, oder bieten Schnupperabende an. Zusätzlich gibt es eine Online-iGroup.",
  groupsCities: ["Berlin","Hamburg","Köln","Frankfurt","München","Stuttgart","Freiburg","Münster","Nürnberg","Wiesbaden","Online-iGroup","…"],
  groupsCta: {label:"iGroup in deiner Nähe finden",href:`${official}/index.php?cPath=7`},
  groupsImage: img("empathie","Männer in Verbindung"),
  voicesKicker: "Erfahrungen",
  voicesHeading: "Warum Männer wiederkommen und andere Männer mitbringen.",
  voices: [
    {text:"Ein Teilnehmer beschreibt nach seinem NWTA vor allem die für ihn ungewohnte Tiefe der Verbindung mit anderen Männern und eine starke emotionale Wirkung.",attribution:"Erfahrungsbericht · MKP Deutschland"},
    {text:"Andere Berichte drehen sich um mehr Klarheit, Verantwortung und das Gefühl, sich unter Männern weniger verstecken zu müssen.",attribution:"Erfahrungsberichte · MKP Deutschland"},
    {text:"Die Berichte sind persönlich und verschieden. Genau das ist der Punkt: Es gibt kein vorgeschriebenes „richtiges“ Ergebnis des Wochenendes.",attribution:"Aus den veröffentlichten Erfahrungsberichten"},
  ],
  voicesLink: {label:"Erfahrungen auf mkp-deutschland.de lesen",href:`${official}/shop_content.php?coID=2000`},
  faqKicker: "FAQ zum Trainingswochenende",
  faqHeading: "Fragen, die du vor einer Anmeldung stellen solltest.",
  faqLead: "Keine Mystifizierung. Wenn dir etwas unklar ist, frag nach. Die offizielle MKP-Seite hat zusätzlich ein ausführlicheres FAQ und Teilnahmebedingungen.",
  faqItems: [
    {question:"Was genau ist das NWTA?",answer:"Das New Warrior Training Adventure ist das intensive Wochenendtraining des ManKind Project. MKP Deutschland beschreibt es als moderne männliche Initiation und Selbsterfahrung: kein Vortrag, sondern eine angeleitete Erfahrung mit persönlicher Reflexion, Herausforderung und Gemeinschaft."},
    {question:"Muss ich erzählen, was dort passiert?",answer:"Nein. Ein Teil der Wirkung entsteht gerade daraus, dass du ohne fertiges Drehbuch in das Wochenende gehst. Gleichzeitig sollst du vorab wissen, worauf du dich einlässt: Das Training ist körperlich und emotional fordernd, Gewalt ist untersagt und ein erfahrenes Team begleitet den gesamten Ablauf."},
    {question:"Ist das Therapie oder religiös?",answer:"Nein. MKP versteht seine Angebote als persönliche Entwicklungsarbeit und Gemeinschaft, nicht als Therapie. Der deutsche Verein ist weder konfessionell noch parteipolitisch gebunden und betont Respekt vor unterschiedlichen Lebensentwürfen und Weltanschauungen."},
    {question:"Kann ich allein kommen?",answer:"Ja. Du musst vorher niemanden kennen. Die Wochenenden bringen Männer mit unterschiedlichen Lebenswegen zusammen; das Mindestalter beträgt 18 Jahre."},
    {question:"Was passiert nach dem Wochenende?",answer:"Das NWTA ist nicht als isoliertes Event gedacht. Danach gibt es Integrationsgruppen, weitere Trainings und die Möglichkeit, sich in der Gemeinschaft einzubringen. Viele iGroups stehen auch Männern offen, die noch kein NWTA besucht haben."},
  ],
  contactEyebrow: "DEIN NÄCHSTER SCHRITT",
  contactHeading: "Du musst heute nicht dein Leben verändern.",
  contactHighlight: "Du kannst eine Entscheidung treffen.",
  contactLead: "Sieh dir den nächsten Termin an oder sprich direkt mit MKP Deutschland. Ohne Umweg über diese Seite.",
  contactPrimaryCta: {label:"NWTA-Termin wählen",href:"#termine"},
  contactEmail: "office@mkp-deutschland.de",
  contactPhone: "069 9001 7747",
  contactOrganization: "Kreis der Männer – ManKind Project Deutschland e.V.",
  footerTitle: "ManKind Project Deutschland",
  footerText: "Eine fokussierte Informationsseite zum New Warrior Training Adventure.",
  footerLinks: [
    {label:"Über uns",href:`${official}/index.php?cPath=13`},
    {label:"NWTA-FAQ",href:`${official}/shop_content.php?coID=100`},
    {label:"Kontakt",href:`${official}/shop_content.php?coID=7`},
    {label:"Datenschutz",href:`${official}/shop_content.php?coID=2`},
    {label:"Impressum",href:`${official}/shop_content.php?coID=4`},
  ],
  seoTitle: "New Warrior Training Adventure | ManKind Project Deutschland",
  seoDescription: "Das New Warrior Training Adventure (NWTA): ein intensives Wochenende für Männer, die sich ehrlich begegnen, Verantwortung übernehmen und ihr eigenes Leben bewusster gestalten wollen.",
  seoImage: img("gruppe-von-maennern","Männer in Gemeinschaft"),
};
