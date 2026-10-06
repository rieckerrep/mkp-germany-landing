"use client";

import {useIsPresentationTool} from "next-sanity/hooks";

export function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool();
  if (isPresentationTool) return null;

  return (
    <a
      href="/api/draft-mode/disable"
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 1000,
        background: "#111827",
        color: "#fff",
        padding: "10px 14px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 700,
      }}
    >
      Vorschau beenden
    </a>
  );
}
