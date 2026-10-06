import {createClient} from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1ik4gkcv";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  throw new Error("SANITY_API_WRITE_TOKEN fehlt. Lege einen Editor-Token in Sanity an und starte den Seed erneut.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-10-06",
  token,
  useCdn: false,
});

const official = "https://www.mkp-deutschland.de";
const imageBase = "https://raw.githubusercontent.com/rieckerrep/mkp-poland/main/public/images";
const image = (name, alt) => ({_type:"editableImage",externalUrl:`${imageBase}/${name}.jpg`,alt});
const cta = (label, href) => ({_type:"object",label,href});

const page = {
  _id: "landingPage.main",
  _type: "landingPage",
  internalTitle: "MKP Deutschland Landingpage",
  brandTitle: "ManKind Project",
  brandSubtitle: "Deutschland",
  navigation: [
    {_key:"about",_type:"object",label:"Über uns",href:"#ueber-uns",external:false},
    {_key:"nwta",_type:"object",label:"Das Trainingswochenende",href:"#nwta",external:false},
    {_key:"journey",_type:"object",label:"Die Reise geht weiter",href:"#weiter",external:false},
    {_key:"initiated",_type:"object",label:"Für initiierte Männer",href:`${official}/index.php?cPath=17`,external:true},
    {_key:"events",_type:"object",label:"Veranstaltungen",href:"#termine",external:false},
    {_key:"groups",_type:"object",label:"Männergruppen",href:"#gruppen",external:false},
    {_key:"contact",_type:"object",label:"Kontakt",href:"#kontakt",external:false},
  ],
  navCta: cta("NWTA finden","#termine"),
  heroEyebrow:"NEW WARRIOR TRAINING ADVENTURE · MKP DEUTSCHLAND",
  heroTitle:"Hör auf, dein Leben nur zu verwalten.",
  heroHighlight:"Begegne ihm.",
  heroLead:"Ein intensives Wochenende unter Männern. Für Männer, die genauer hinschauen wollen: auf das, was sie antreibt, was sie zurückhält und wie sie Verantwortung für ihr eigenes Leben übernehmen.",
  heroPrimaryCta:cta("Nächstes NWTA ansehen","#termine"),
  heroSecondaryCta:cta("Was erwartet mich?","#was-erwartet-dich"),
  heroTrustItems:["Erfahrenes MKP-Team","Gemeinschaft statt Publikum","Gemeinnütziger Verein in Deutschland"],
  heroImage:image("gruppe-von-maennern","Männer in Gemeinschaft"),
  problemKicker:"Warum Männer kommen",
  problemHeading:"Nach außen funktioniert vieles.",
  problemHeadingMuted:"Innen bleibt trotzdem etwas offen.",
  problemLead:"Arbeit, Familie, Verantwortung, Termine. Viele Männer tragen viel — und haben gleichzeitig kaum Orte, an denen sie nicht funktionieren, erklären oder überzeugen müssen.",
  problemCards:[
    {_key:"p1",_type:"textCard",title:"Du bist zuverlässig.",text:"Aber du merkst, dass Leistung nicht automatisch Klarheit schafft."},
    {_key:"p2",_type:"textCard",title:"Du kennst deine Rollen.",text:"Vater, Partner, Kollege, Freund. Die Frage ist: Wer bist du darunter?"},
    {_key:"p3",_type:"textCard",title:"Du kannst vieles allein lösen.",text:"Nur manche Dinge verändern sich erst, wenn du ihnen ehrlich in Beziehung begegnest."},
    {_key:"p4",_type:"textCard",title:"Du willst nicht noch mehr Theorie.",text:"Du willst eine Erfahrung, die dich fordert und dir zeigt, wo du wirklich stehst."},
  ],
  problemPunchline:"Das NWTA verspricht dir nicht, ein anderer Mann zu werden.",
  problemPunchlineHighlight:"Es lädt dich ein, ehrlicher der Mann zu sein, der du bereits bist.",
  nwtaKicker:"Das Trainingswochenende",
  nwtaHeading:"New Warrior Training Adventure",
  nwtaLead:"MKP Deutschland beschreibt das NWTA als moderne männliche Initiation und Selbsterfahrung – orientiert an der klassischen Idee der Heldenreise.",
  nwtaBody:"Es ist kein Seminar, bei dem du zwei Tage lang zuhörst. Du wirst aktiv arbeiten, dich mit deinem eigenen Leben auseinandersetzen und anderen Männern begegnen, die dasselbe tun.",
  nwtaValues:["Verantwortung statt Ausreden","Authentizität statt Rolle","Verbindung statt Konkurrenz","Integrität statt Selbstbetrug"],
  nwtaLink:cta("Mehr auf der offiziellen MKP-Seite",`${official}/index.php?cPath=3`),
  nwtaImage:image("maenner-in-aktion","Männer in gemeinsamer Arbeit"),
  nwtaImageLabel:"Kein Zuschauerplatz.",
  nwtaImageCaption:"Du bist Teil der Erfahrung.",
  expectationsKicker:"Was erwartet dich?",
  expectationsHeading:"Intensiv. Sicher gerahmt. Nicht komplett vorhersehbar.",
  expectationsLead:"Du sollst wissen, worauf du dich einlässt, ohne dass wir dir die Erfahrung vorwegnehmen.",
  expectationsCards:[
    {_key:"e1",_type:"object",icon:"mountain",title:"Herausforderung",text:"Das Wochenende kann körperlich und emotional fordernd sein. Du entscheidest dich bewusst dafür, deine Komfortzone nicht zum Maßstab zu machen."},
    {_key:"e2",_type:"object",icon:"shield",title:"Klarer Rahmen",text:"Das Training wird von erfahrenen, zertifizierten MKP-Leitern und einem großen Team begleitet. Körperliche und verbale Gewalt sind untersagt."},
    {_key:"e3",_type:"object",icon:"community",title:"Gemeinschaft",text:"Du gehst nicht allein durch Prozesse. Ein Team von Männern hält Struktur, Sicherheit und die praktische Organisation des Wochenendes."},
    {_key:"e4",_type:"object",icon:"sparkles",title:"Eigene Erfahrung",text:"Es gibt kein vorgeschriebenes Ergebnis. Was du erkennst, entscheidest und mitnimmst, bleibt deine eigene Verantwortung."},
  ],
  expectationsNoteTitle:"Warum wir nicht jeden Ablaufpunkt erklären",
  expectationsNoteText:"Die deutsche MKP-Seite beschreibt das Training bewusst als Erfahrung. Vor der Anmeldung findest du dort Teilnahmebedingungen und organisatorische Hinweise; die konkreten Prozesse werden nicht als Programmliste vorweggenommen.",
  aboutKicker:"Über uns",
  aboutHeading:"Kein Männerbild von der Stange.",
  aboutLead:"MKP Deutschland will Männer darin unterstützen, ihr Mann-Sein bewusst, selbstbestimmt und verantwortungsvoll zu gestalten.",
  aboutBody:"Der deutsche Verein ist Teil des internationalen ManKind Project. Er versteht sich als unabhängig, gemeinnützig, konfessionell und parteipolitisch ungebunden. Unterschiedliche Herkunft, Lebensentwürfe, sexuelle Orientierungen und Weltanschauungen gehören ausdrücklich zur Gemeinschaft.",
  aboutValues:["Authentizität","Verantwortung","Integrität","Mitgefühl","Respekt","Leadership"],
  aboutLink:cta("Über MKP Deutschland",`${official}/index.php?cPath=13`),
  aboutImage:image("stolz","Mann im Freien"),
  eventsKicker:"Veranstaltungen",
  eventsHeading:"Die nächsten NWTA-Wochenenden in Deutschland.",
  eventsLead:"Aktuell veröffentlicht MKP Deutschland diese kommenden Termine. Anmeldung und Vertragsabwicklung erfolgen über die offizielle MKP-Seite.",
  eventsSourceNote:"Termine laut MKP Deutschland, Stand 3. Oktober 2026.",
  integrationKicker:"Die Reise geht weiter",
  integrationHeading:"Ein Wochenende kann etwas öffnen. Alltag entscheidet, was daraus wird.",
  integrationLead:"Darum endet MKP nicht am Sonntag. Integrationsgruppen und weitere Trainings schaffen Räume, in denen Erkenntnisse zu gelebter Praxis werden können.",
  integrationSteps:[
    {_key:"i1",_type:"object",number:"01",title:"NWTA",text:"Die intensive Erfahrung und ein klarer Blick auf das eigene Leben."},
    {_key:"i2",_type:"object",number:"02",title:"Integration",text:"Regelmäßige Männergruppen, Austausch und konkrete Verantwortung im Alltag."},
    {_key:"i3",_type:"object",number:"03",title:"Weitergeben",text:"Wer initiiert ist, kann später staffen, Trainings besuchen und Verantwortung in der Gemeinschaft übernehmen."},
  ],
  integrationLink:cta("Alle Wege nach dem NWTA",`${official}/index.php?cPath=4`),
  integrationImage:image("herz-mit-sonne","Symbol für Verbundenheit"),
  groupsKicker:"Männergruppen · iGroups",
  groupsHeading:"Du musst nicht bis zum nächsten Training warten, um echten Kontakt zu erleben.",
  groupsLead:"In ganz Deutschland treffen sich Integrationsgruppen regelmäßig. Viele Gruppen sind auch für Männer offen, die das NWTA noch nicht besucht haben, oder bieten Schnupperabende an. Zusätzlich gibt es eine Online-iGroup.",
  groupsCities:["Berlin","Hamburg","Köln","Frankfurt","München","Stuttgart","Freiburg","Münster","Nürnberg","Wiesbaden","Online-iGroup","…"],
  groupsCta:cta("iGroup in deiner Nähe finden",`${official}/index.php?cPath=7`),
  groupsImage:image("empathie","Männer in Verbindung"),
  voicesKicker:"Erfahrungen",
  voicesHeading:"Warum Männer wiederkommen und andere Männer mitbringen.",
  voices:[
    {_key:"v1",_type:"object",text:"Ein Teilnehmer beschreibt nach seinem NWTA vor allem die für ihn ungewohnte Tiefe der Verbindung mit anderen Männern und eine starke emotionale Wirkung.",attribution:"Erfahrungsbericht · MKP Deutschland"},
    {_key:"v2",_type:"object",text:"Andere Berichte drehen sich um mehr Klarheit, Verantwortung und das Gefühl, sich unter Männern weniger verstecken zu müssen.",attribution:"Erfahrungsberichte · MKP Deutschland"},
    {_key:"v3",_type:"object",text:"Die Berichte sind persönlich und verschieden. Genau das ist der Punkt: Es gibt kein vorgeschriebenes „richtiges“ Ergebnis des Wochenendes.",attribution:"Aus den veröffentlichten Erfahrungsberichten"},
  ],
  voicesLink:cta("Erfahrungen auf mkp-deutschland.de lesen",`${official}/shop_content.php?coID=2000`),
  faqKicker:"FAQ zum Trainingswochenende",
  faqHeading:"Fragen, die du vor einer Anmeldung stellen solltest.",
  faqLead:"Keine Mystifizierung. Wenn dir etwas unklar ist, frag nach. Die offizielle MKP-Seite hat zusätzlich ein ausführlicheres FAQ und Teilnahmebedingungen.",
  faqItems:[
    {_key:"f1",_type:"object",question:"Was genau ist das NWTA?",answer:"Das New Warrior Training Adventure ist das intensive Wochenendtraining des ManKind Project. MKP Deutschland beschreibt es als moderne männliche Initiation und Selbsterfahrung: kein Vortrag, sondern eine angeleitete Erfahrung mit persönlicher Reflexion, Herausforderung und Gemeinschaft."},
    {_key:"f2",_type:"object",question:"Muss ich erzählen, was dort passiert?",answer:"Nein. Ein Teil der Wirkung entsteht gerade daraus, dass du ohne fertiges Drehbuch in das Wochenende gehst. Gleichzeitig sollst du vorab wissen, worauf du dich einlässt: Das Training ist körperlich und emotional fordernd, Gewalt ist untersagt und ein erfahrenes Team begleitet den gesamten Ablauf."},
    {_key:"f3",_type:"object",question:"Ist das Therapie oder religiös?",answer:"Nein. MKP versteht seine Angebote als persönliche Entwicklungsarbeit und Gemeinschaft, nicht als Therapie. Der deutsche Verein ist weder konfessionell noch parteipolitisch gebunden und betont Respekt vor unterschiedlichen Lebensentwürfen und Weltanschauungen."},
    {_key:"f4",_type:"object",question:"Kann ich allein kommen?",answer:"Ja. Du musst vorher niemanden kennen. Die Wochenenden bringen Männer mit unterschiedlichen Lebenswegen zusammen; das Mindestalter beträgt 18 Jahre."},
    {_key:"f5",_type:"object",question:"Was passiert nach dem Wochenende?",answer:"Das NWTA ist nicht als isoliertes Event gedacht. Danach gibt es Integrationsgruppen, weitere Trainings und die Möglichkeit, sich in der Gemeinschaft einzubringen. Viele iGroups stehen auch Männern offen, die das NWTA noch nicht besucht haben."},
  ],
  contactEyebrow:"DEIN NÄCHSTER SCHRITT",
  contactHeading:"Du musst heute nicht dein Leben verändern.",
  contactHighlight:"Du kannst eine Entscheidung treffen.",
  contactLead:"Sieh dir den nächsten Termin an oder sprich direkt mit MKP Deutschland. Ohne Umweg über diese Seite.",
  contactPrimaryCta:cta("NWTA-Termin wählen","#termine"),
  contactEmail:"office@mkp-deutschland.de",
  contactPhone:"069 9001 7747",
  contactOrganization:"Kreis der Männer – ManKind Project Deutschland e.V.",
  footerTitle:"ManKind Project Deutschland",
  footerText:"Eine fokussierte Informationsseite zum New Warrior Training Adventure.",
  footerLinks:[
    {_key:"l1",_type:"object",label:"Über uns",href:`${official}/index.php?cPath=13`},
    {_key:"l2",_type:"object",label:"NWTA-FAQ",href:`${official}/shop_content.php?coID=100`},
    {_key:"l3",_type:"object",label:"Kontakt",href:`${official}/shop_content.php?coID=7`},
    {_key:"l4",_type:"object",label:"Datenschutz",href:`${official}/shop_content.php?coID=2`},
    {_key:"l5",_type:"object",label:"Impressum",href:`${official}/shop_content.php?coID=4`},
  ],
  seoTitle:"New Warrior Training Adventure | ManKind Project Deutschland",
  seoDescription:"Das New Warrior Training Adventure (NWTA): ein intensives Wochenende für Männer, die sich ehrlich begegnen, Verantwortung übernehmen und ihr eigenes Leben bewusster gestalten wollen.",
  seoImage:image("gruppe-von-maennern","Männer in Gemeinschaft"),
};

const events = [
  {
    _id:"event.oberbildstein-2026-10",
    _type:"event",
    title:"Ferienheim Oberbildstein",
    dateLabel:"16.–18. Oktober 2026",
    startDate:"2026-10-16T16:45:00+02:00",
    timeLabel:"Freitag 16:45 bis Sonntag 16:30",
    countryLabel:"Deutschland",
    price:"600 €",
    registrationUrl:`${official}/product_info.php?products_id=258`,
    active:true,
    sortOrder:10,
  },
  {
    _id:"event.bettenburg-2026-11",
    _type:"event",
    title:"Schloss Bettenburg",
    dateLabel:"6.–8. November 2026",
    startDate:"2026-11-06T16:45:00+01:00",
    timeLabel:"Freitag 16:45 bis Sonntag 16:30",
    countryLabel:"Deutschland",
    price:"600 €",
    registrationUrl:`${official}/product_info.php?products_id=248`,
    active:true,
    sortOrder:20,
  },
];

let tx = client.transaction().createOrReplace(page);
for (const event of events) tx = tx.createOrReplace(event);
const result = await tx.commit();
console.log("Sanity seed complete:", result.transactionId);
