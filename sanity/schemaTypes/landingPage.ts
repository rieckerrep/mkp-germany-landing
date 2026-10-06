import {HomeIcon} from "@sanity/icons";
import {defineArrayMember, defineField, defineType} from "sanity";

const ctaFields = [
  defineField({name: "label", title: "Beschriftung", type: "string"}),
  defineField({name: "href", title: "Ziel", type: "string"}),
];

const textCard = defineArrayMember({
  type: "object",
  name: "textCard",
  fields: [
    defineField({name: "title", title: "Titel", type: "string"}),
    defineField({name: "text", title: "Text", type: "text", rows: 3}),
  ],
  preview: {select: {title: "title", subtitle: "text"}},
});

export const landingPage = defineType({
  name: "landingPage",
  title: "Landingpage",
  type: "document",
  icon: HomeIcon,
  groups: [
    {name: "navigation", title: "Navigation"},
    {name: "hero", title: "Hero"},
    {name: "problem", title: "Warum Männer kommen"},
    {name: "nwta", title: "Trainingswochenende"},
    {name: "expectations", title: "Was erwartet dich?"},
    {name: "about", title: "Über uns"},
    {name: "events", title: "Veranstaltungen"},
    {name: "integration", title: "Die Reise geht weiter"},
    {name: "groups", title: "Männergruppen"},
    {name: "voices", title: "Erfahrungen"},
    {name: "faq", title: "FAQ"},
    {name: "contact", title: "Kontakt & Footer"},
    {name: "seo", title: "SEO"},
  ],
  fields: [
    defineField({name: "internalTitle", title: "Interner Titel", type: "string", initialValue: "MKP Deutschland Landingpage", validation: (r) => r.required()}),

    defineField({name: "brandTitle", title: "Marke", type: "string", group: "navigation"}),
    defineField({name: "brandSubtitle", title: "Unterzeile", type: "string", group: "navigation"}),
    defineField({
      name: "navigation",
      title: "Menüpunkte",
      type: "array",
      group: "navigation",
      of: [defineArrayMember({type: "object", fields: [
        defineField({name: "label", title: "Text", type: "string"}),
        defineField({name: "href", title: "Ziel / URL", type: "string"}),
        defineField({name: "external", title: "In neuem Tab", type: "boolean", initialValue: false}),
      ], preview: {select: {title: "label", subtitle: "href"}}})],
    }),
    defineField({name: "navCta", title: "Navigation CTA", type: "object", group: "navigation", fields: ctaFields}),

    defineField({name: "heroEyebrow", title: "Label", type: "string", group: "hero"}),
    defineField({name: "heroTitle", title: "Überschrift", type: "string", group: "hero"}),
    defineField({name: "heroHighlight", title: "Hervorgehobener Teil", type: "string", group: "hero"}),
    defineField({name: "heroLead", title: "Einleitung", type: "text", rows: 4, group: "hero"}),
    defineField({name: "heroPrimaryCta", title: "Primärer CTA", type: "object", group: "hero", fields: ctaFields}),
    defineField({name: "heroSecondaryCta", title: "Sekundärer CTA", type: "object", group: "hero", fields: ctaFields}),
    defineField({name: "heroTrustItems", title: "Vertrauenszeile", type: "array", group: "hero", of: [defineArrayMember({type: "string"})]}),
    defineField({name: "heroImage", title: "Hintergrundbild", type: "editableImage", group: "hero"}),

    defineField({name: "problemKicker", title: "Label", type: "string", group: "problem"}),
    defineField({name: "problemHeading", title: "Überschrift", type: "string", group: "problem"}),
    defineField({name: "problemHeadingMuted", title: "Überschrift 2. Zeile", type: "string", group: "problem"}),
    defineField({name: "problemLead", title: "Einleitung", type: "text", group: "problem"}),
    defineField({name: "problemCards", title: "Karten", type: "array", group: "problem", of: [textCard]}),
    defineField({name: "problemPunchline", title: "Punchline", type: "string", group: "problem"}),
    defineField({name: "problemPunchlineHighlight", title: "Punchline hervorgehoben", type: "string", group: "problem"}),

    defineField({name: "nwtaKicker", title: "Label", type: "string", group: "nwta"}),
    defineField({name: "nwtaHeading", title: "Überschrift", type: "string", group: "nwta"}),
    defineField({name: "nwtaLead", title: "Einleitung", type: "text", group: "nwta"}),
    defineField({name: "nwtaBody", title: "Text", type: "text", group: "nwta"}),
    defineField({name: "nwtaValues", title: "Kernaussagen", type: "array", group: "nwta", of: [defineArrayMember({type: "string"})]}),
    defineField({name: "nwtaLink", title: "Mehr-Link", type: "object", group: "nwta", fields: ctaFields}),
    defineField({name: "nwtaImage", title: "Bild", type: "editableImage", group: "nwta"}),
    defineField({name: "nwtaImageLabel", title: "Bild-Label", type: "string", group: "nwta"}),
    defineField({name: "nwtaImageCaption", title: "Bild-Text", type: "string", group: "nwta"}),

    defineField({name: "expectationsKicker", title: "Label", type: "string", group: "expectations"}),
    defineField({name: "expectationsHeading", title: "Überschrift", type: "string", group: "expectations"}),
    defineField({name: "expectationsLead", title: "Einleitung", type: "text", group: "expectations"}),
    defineField({
      name: "expectationsCards", title: "Karten", type: "array", group: "expectations",
      of: [defineArrayMember({type: "object", fields: [
        defineField({name: "icon", title: "Icon", type: "string", options: {list: [
          {title: "Herausforderung", value: "mountain"}, {title: "Sicherheit", value: "shield"},
          {title: "Gemeinschaft", value: "community"}, {title: "Eigene Erfahrung", value: "sparkles"},
        ]}}),
        defineField({name: "title", title: "Titel", type: "string"}),
        defineField({name: "text", title: "Text", type: "text"}),
      ], preview: {select: {title: "title", subtitle: "text"}}})],
    }),
    defineField({name: "expectationsNoteTitle", title: "Hinweis-Titel", type: "string", group: "expectations"}),
    defineField({name: "expectationsNoteText", title: "Hinweis-Text", type: "text", group: "expectations"}),

    defineField({name: "aboutKicker", title: "Label", type: "string", group: "about"}),
    defineField({name: "aboutHeading", title: "Überschrift", type: "string", group: "about"}),
    defineField({name: "aboutLead", title: "Einleitung", type: "text", group: "about"}),
    defineField({name: "aboutBody", title: "Text", type: "text", group: "about"}),
    defineField({name: "aboutValues", title: "Werte", type: "array", group: "about", of: [defineArrayMember({type: "string"})]}),
    defineField({name: "aboutLink", title: "Mehr-Link", type: "object", group: "about", fields: ctaFields}),
    defineField({name: "aboutImage", title: "Bild", type: "editableImage", group: "about"}),

    defineField({name: "eventsKicker", title: "Label", type: "string", group: "events"}),
    defineField({name: "eventsHeading", title: "Überschrift", type: "string", group: "events"}),
    defineField({name: "eventsLead", title: "Einleitung", type: "text", group: "events"}),
    defineField({name: "eventsSourceNote", title: "Quellenhinweis", type: "string", group: "events"}),

    defineField({name: "integrationKicker", title: "Label", type: "string", group: "integration"}),
    defineField({name: "integrationHeading", title: "Überschrift", type: "string", group: "integration"}),
    defineField({name: "integrationLead", title: "Einleitung", type: "text", group: "integration"}),
    defineField({
      name: "integrationSteps", title: "Schritte", type: "array", group: "integration",
      of: [defineArrayMember({type: "object", fields: [
        defineField({name: "number", title: "Nummer", type: "string"}),
        defineField({name: "title", title: "Titel", type: "string"}),
        defineField({name: "text", title: "Text", type: "text"}),
      ], preview: {select: {title: "title", subtitle: "text"}}})],
    }),
    defineField({name: "integrationLink", title: "Mehr-Link", type: "object", group: "integration", fields: ctaFields}),
    defineField({name: "integrationImage", title: "Bild", type: "editableImage", group: "integration"}),

    defineField({name: "groupsKicker", title: "Label", type: "string", group: "groups"}),
    defineField({name: "groupsHeading", title: "Überschrift", type: "string", group: "groups"}),
    defineField({name: "groupsLead", title: "Text", type: "text", group: "groups"}),
    defineField({name: "groupsCities", title: "Orte", type: "array", group: "groups", of: [defineArrayMember({type: "string"})]}),
    defineField({name: "groupsCta", title: "CTA", type: "object", group: "groups", fields: ctaFields}),
    defineField({name: "groupsImage", title: "Hintergrundbild", type: "editableImage", group: "groups"}),

    defineField({name: "voicesKicker", title: "Label", type: "string", group: "voices"}),
    defineField({name: "voicesHeading", title: "Überschrift", type: "string", group: "voices"}),
    defineField({
      name: "voices", title: "Erfahrungsstimmen", type: "array", group: "voices",
      of: [defineArrayMember({type: "object", fields: [
        defineField({name: "text", title: "Text", type: "text"}),
        defineField({name: "attribution", title: "Quelle / Attribution", type: "string"}),
      ], preview: {select: {title: "attribution", subtitle: "text"}}})],
    }),
    defineField({name: "voicesLink", title: "Mehr-Link", type: "object", group: "voices", fields: ctaFields}),

    defineField({name: "faqKicker", title: "Label", type: "string", group: "faq"}),
    defineField({name: "faqHeading", title: "Überschrift", type: "string", group: "faq"}),
    defineField({name: "faqLead", title: "Einleitung", type: "text", group: "faq"}),
    defineField({
      name: "faqItems", title: "Fragen", type: "array", group: "faq",
      of: [defineArrayMember({type: "object", fields: [
        defineField({name: "question", title: "Frage", type: "string"}),
        defineField({name: "answer", title: "Antwort", type: "text"}),
      ], preview: {select: {title: "question", subtitle: "answer"}}})],
    }),

    defineField({name: "contactEyebrow", title: "Label", type: "string", group: "contact"}),
    defineField({name: "contactHeading", title: "Überschrift", type: "string", group: "contact"}),
    defineField({name: "contactHighlight", title: "Hervorgehobene Zeile", type: "string", group: "contact"}),
    defineField({name: "contactLead", title: "Einleitung", type: "text", group: "contact"}),
    defineField({name: "contactPrimaryCta", title: "Primärer CTA", type: "object", group: "contact", fields: ctaFields}),
    defineField({name: "contactEmail", title: "E-Mail", type: "string", group: "contact"}),
    defineField({name: "contactPhone", title: "Telefon", type: "string", group: "contact"}),
    defineField({name: "contactOrganization", title: "Organisation", type: "string", group: "contact"}),
    defineField({name: "footerTitle", title: "Footer-Titel", type: "string", group: "contact"}),
    defineField({name: "footerText", title: "Footer-Text", type: "string", group: "contact"}),
    defineField({
      name: "footerLinks", title: "Footer-Links", type: "array", group: "contact",
      of: [defineArrayMember({type: "object", fields: [
        defineField({name: "label", title: "Text", type: "string"}),
        defineField({name: "href", title: "URL", type: "url"}),
      ], preview: {select: {title: "label", subtitle: "href"}}})],
    }),

    defineField({name: "seoTitle", title: "SEO-Titel", type: "string", group: "seo", validation: (r) => r.max(65)}),
    defineField({name: "seoDescription", title: "Meta-Description", type: "text", rows: 3, group: "seo", validation: (r) => r.max(170)}),
    defineField({name: "seoImage", title: "Social Sharing Bild", type: "editableImage", group: "seo"}),
  ],
  preview: {
    select: {title: "internalTitle"},
  },
});
