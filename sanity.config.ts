"use client";

import {visionTool} from "@sanity/vision";
import {defineConfig} from "sanity";
import {presentationTool} from "sanity/presentation";
import {structureTool} from "sanity/structure";
import {dataset, projectId, siteUrl} from "./sanity/env";
import {resolve} from "./sanity/presentation/resolve";
import {schemaTypes} from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "MKP Deutschland",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool(),
    presentationTool({
      resolve,
      previewUrl: {
        initial: siteUrl,
        previewMode: {enable: "/api/draft-mode/enable"},
      },
    }),
    visionTool(),
  ],
  schema: {types: schemaTypes},
});
