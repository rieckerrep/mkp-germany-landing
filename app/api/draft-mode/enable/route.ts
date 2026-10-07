import {NextResponse} from "next/server";
import {defineEnableDraftMode} from "next-sanity/draft-mode";
import {client} from "@/sanity/lib/client";

const token = process.env.SANITY_API_READ_TOKEN;

const enableDraftMode = token
  ? defineEnableDraftMode({
      client: client.withConfig({token}),
    }).GET
  : null;

export async function GET(request: Request) {
  if (!enableDraftMode) {
    console.error(
      "Sanity visual editing is not configured: SANITY_API_READ_TOKEN is missing.",
    );

    return NextResponse.json(
      {
        error: "SANITY_API_READ_TOKEN is missing",
        message:
          "Visual Editing benötigt einen Sanity Viewer-Token mit Leserechten auf Drafts. Hinterlege SANITY_API_READ_TOKEN in Vercel und redeploye die Anwendung.",
      },
      {status: 503},
    );
  }

  return enableDraftMode(request);
}
