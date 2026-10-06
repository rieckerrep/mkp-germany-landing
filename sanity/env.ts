export const apiVersion = "2026-10-06";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1ik4gkcv";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const studioUrl = `${siteUrl}/studio`;
export const sanityConfigured = Boolean(projectId && projectId !== "demo");
