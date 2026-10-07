import {defaultLandingContent} from "../../content/defaultContent";

const objectValue = <T extends Record<string, unknown>>(value: T) => ({
  _type: "object",
  ...value,
});

const imageValue = (value: {url: string; alt: string}) => ({
  _type: "editableImage",
  externalUrl: value.url,
  alt: value.alt,
});

export const landingPageInitialValue = {
  internalTitle: "MKP Deutschland Landingpage",

  brandTitle: defaultLandingContent.brandTitle,
  brandSubtitle: defaultLandingContent.brandSubtitle,
  navigation: defaultLandingContent.navigation.map((item, index) => ({
    _key: `nav-${index + 1}`,
    _type: "object",
    ...item,
  })),
  navCta: objectValue(defaultLandingContent.navCta),

  heroEyebrow: defaultLandingContent.heroEyebrow,
  heroTitle: defaultLandingContent.heroTitle,
  heroHighlight: defaultLandingContent.heroHighlight,
  heroLead: defaultLandingContent.heroLead,
  heroPrimaryCta: objectValue(defaultLandingContent.heroPrimaryCta),
  heroSecondaryCta: objectValue(defaultLandingContent.heroSecondaryCta),
  heroTrustItems: defaultLandingContent.heroTrustItems,
  heroImage: imageValue(defaultLandingContent.heroImage),

  problemKicker: defaultLandingContent.problemKicker,
  problemHeading: defaultLandingContent.problemHeading,
  problemHeadingMuted: defaultLandingContent.problemHeadingMuted,
  problemLead: defaultLandingContent.problemLead,
  problemCards: defaultLandingContent.problemCards.map((item, index) => ({
    _key: `problem-${index + 1}`,
    _type: "textCard",
    ...item,
  })),
  problemPunchline: defaultLandingContent.problemPunchline,
  problemPunchlineHighlight: defaultLandingContent.problemPunchlineHighlight,

  nwtaKicker: defaultLandingContent.nwtaKicker,
  nwtaHeading: defaultLandingContent.nwtaHeading,
  nwtaLead: defaultLandingContent.nwtaLead,
  nwtaBody: defaultLandingContent.nwtaBody,
  nwtaValues: defaultLandingContent.nwtaValues,
  nwtaLink: objectValue(defaultLandingContent.nwtaLink),
  nwtaImage: imageValue(defaultLandingContent.nwtaImage),
  nwtaImageLabel: defaultLandingContent.nwtaImageLabel,
  nwtaImageCaption: defaultLandingContent.nwtaImageCaption,

  expectationsKicker: defaultLandingContent.expectationsKicker,
  expectationsHeading: defaultLandingContent.expectationsHeading,
  expectationsLead: defaultLandingContent.expectationsLead,
  expectationsCards: defaultLandingContent.expectationsCards.map((item, index) => ({
    _key: `expectation-${index + 1}`,
    _type: "object",
    ...item,
  })),
  expectationsNoteTitle: defaultLandingContent.expectationsNoteTitle,
  expectationsNoteText: defaultLandingContent.expectationsNoteText,

  aboutKicker: defaultLandingContent.aboutKicker,
  aboutHeading: defaultLandingContent.aboutHeading,
  aboutLead: defaultLandingContent.aboutLead,
  aboutBody: defaultLandingContent.aboutBody,
  aboutValues: defaultLandingContent.aboutValues,
  aboutLink: objectValue(defaultLandingContent.aboutLink),
  aboutImage: imageValue(defaultLandingContent.aboutImage),

  eventsKicker: defaultLandingContent.eventsKicker,
  eventsHeading: defaultLandingContent.eventsHeading,
  eventsLead: defaultLandingContent.eventsLead,
  eventsSourceNote: defaultLandingContent.eventsSourceNote,

  integrationKicker: defaultLandingContent.integrationKicker,
  integrationHeading: defaultLandingContent.integrationHeading,
  integrationLead: defaultLandingContent.integrationLead,
  integrationSteps: defaultLandingContent.integrationSteps.map((item, index) => ({
    _key: `integration-${index + 1}`,
    _type: "object",
    ...item,
  })),
  integrationLink: objectValue(defaultLandingContent.integrationLink),
  integrationImage: imageValue(defaultLandingContent.integrationImage),

  groupsKicker: defaultLandingContent.groupsKicker,
  groupsHeading: defaultLandingContent.groupsHeading,
  groupsLead: defaultLandingContent.groupsLead,
  groupsCities: defaultLandingContent.groupsCities,
  groupsCta: objectValue(defaultLandingContent.groupsCta),
  groupsImage: imageValue(defaultLandingContent.groupsImage),

  voicesKicker: defaultLandingContent.voicesKicker,
  voicesHeading: defaultLandingContent.voicesHeading,
  voices: defaultLandingContent.voices.map((item, index) => ({
    _key: `voice-${index + 1}`,
    _type: "object",
    ...item,
  })),
  voicesLink: objectValue(defaultLandingContent.voicesLink),

  faqKicker: defaultLandingContent.faqKicker,
  faqHeading: defaultLandingContent.faqHeading,
  faqLead: defaultLandingContent.faqLead,
  faqItems: defaultLandingContent.faqItems.map((item, index) => ({
    _key: `faq-${index + 1}`,
    _type: "object",
    ...item,
  })),

  contactEyebrow: defaultLandingContent.contactEyebrow,
  contactHeading: defaultLandingContent.contactHeading,
  contactHighlight: defaultLandingContent.contactHighlight,
  contactLead: defaultLandingContent.contactLead,
  contactPrimaryCta: objectValue(defaultLandingContent.contactPrimaryCta),
  contactEmail: defaultLandingContent.contactEmail,
  contactPhone: defaultLandingContent.contactPhone,
  contactOrganization: defaultLandingContent.contactOrganization,
  footerTitle: defaultLandingContent.footerTitle,
  footerText: defaultLandingContent.footerText,
  footerLinks: defaultLandingContent.footerLinks.map((item, index) => ({
    _key: `footer-${index + 1}`,
    _type: "object",
    ...item,
  })),

  seoTitle: defaultLandingContent.seoTitle,
  seoDescription: defaultLandingContent.seoDescription,
  seoImage: imageValue(defaultLandingContent.seoImage),
};
