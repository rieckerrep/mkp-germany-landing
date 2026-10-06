import {defineLocations, type PresentationPluginOptions} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    landingPage: defineLocations({
      select: {title: "internalTitle"},
      resolve: (doc) => ({
        locations: [{title: doc?.title || "Landingpage", href: "/"}],
      }),
    }),
    event: defineLocations({
      select: {title: "title"},
      resolve: (doc) => ({
        locations: [{title: doc?.title || "NWTA-Termin", href: "/#termine"}],
      }),
    }),
  },
};
