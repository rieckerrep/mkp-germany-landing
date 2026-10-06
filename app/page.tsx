import type {Metadata} from "next";
import {draftMode} from "next/headers";
import {VisualEditing} from "next-sanity/visual-editing";
import {Landing} from "@/components/Landing";
import {DisableDraftMode} from "@/components/DisableDraftMode";
import {getLandingContent} from "@/content/getLandingContent";
import {SanityLive} from "@/sanity/lib/live";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getLandingContent();
  return {
    title: content.seoTitle,
    description: content.seoDescription,
    openGraph: {
      title: content.seoTitle,
      description: content.seoDescription,
      type: "website",
      images: content.seoImage?.url ? [{url: content.seoImage.url, alt: content.seoImage.alt}] : undefined,
    },
  };
}

export default async function Page() {
  const content = await getLandingContent();
  const {isEnabled} = await draftMode();

  return (
    <>
      <Landing content={content} />
      <SanityLive />
      {isEnabled && (
        <>
          <VisualEditing />
          <DisableDraftMode />
        </>
      )}
    </>
  );
}
