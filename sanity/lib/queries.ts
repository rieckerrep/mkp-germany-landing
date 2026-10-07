import {defineQuery} from "next-sanity";

export const landingPageQuery = defineQuery(`*[_type == "landingPage" && _id == "landingPage.main"][0]{
  ...,
  heroImage{"url": coalesce(asset->url, externalUrl), alt},
  nwtaImage{"url": coalesce(asset->url, externalUrl), alt},
  aboutImage{"url": coalesce(asset->url, externalUrl), alt},
  integrationImage{"url": coalesce(asset->url, externalUrl), alt},
  groupsImage{"url": coalesce(asset->url, externalUrl), alt},
  seoImage{"url": coalesce(asset->url, externalUrl), alt}
}`);

export const activeEventsQuery = defineQuery(`*[_type == "event" && active == true] | order(sortOrder asc, startDate asc){
  _id, title, dateLabel, startDate, timeLabel, countryLabel, price, registrationUrl, active, sortOrder
}`);
