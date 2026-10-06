import {defaultLandingContent, type EventItem, type LandingContent} from "./defaultContent";

export function mergeLandingContent(
  cms: Partial<LandingContent> | null | undefined,
  events: EventItem[] | null | undefined,
): LandingContent {
  const cleanEntries = Object.fromEntries(
    Object.entries(cms || {}).filter(([, value]) => value !== null && value !== undefined),
  ) as Partial<LandingContent>;

  return {
    ...defaultLandingContent,
    ...cleanEntries,
    events: events?.length ? events : defaultLandingContent.events,
  };
}
