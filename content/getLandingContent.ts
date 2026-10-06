import "server-only";

import {cache} from "react";
import {defaultLandingContent, type EventItem, type LandingContent} from "./defaultContent";
import {mergeLandingContent} from "./mergeContent";
import {sanityConfigured} from "@/sanity/env";
import {sanityFetch} from "@/sanity/lib/live";
import {activeEventsQuery, landingPageQuery} from "@/sanity/lib/queries";

export const getLandingContent = cache(async (): Promise<LandingContent> => {
  if (!sanityConfigured) return defaultLandingContent;

  try {
    const [pageResult, eventResult] = await Promise.all([
      sanityFetch({query: landingPageQuery}),
      sanityFetch({query: activeEventsQuery}),
    ]);

    return mergeLandingContent(
      (pageResult.data || null) as Partial<LandingContent> | null,
      (eventResult.data || null) as EventItem[] | null,
    );
  } catch (error) {
    console.error("Sanity content fetch failed, using bundled fallback.", error);
    return defaultLandingContent;
  }
});
