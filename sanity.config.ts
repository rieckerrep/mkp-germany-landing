"use client";

import {defineConfig, defineSingleton} from "sanity";
import {presentationTool} from "sanity/presentation";
import {structureTool} from "sanity/structure";
import {dataset, projectId, siteUrl} from "./sanity/env";
import {landingPageInitialValue} from "./sanity/initialValues/landingPage";
import {resolve} from "./sanity/presentation/resolve";
import {schemaTypes} from "./sanity/schemaTypes";
import {structure} from "./sanity/structure";

export default defineConfig({
  name: "default",
  title: "MKP Deutschland · Website",
  projectId,
  dataset,
  basePath: "/studio",

  document: {
    singletons: [
      defineSingleton({
        documentId: "landingPage.main",
        schemaType: "landingPage",
        title: "Landingpage",
        initialValue: landingPageInitialValue,
      }),
    ],
  },

  plugins: [
    presentationTool({
      name: "vorschau",
      title: "Vorschau",
      resolve,
      previewUrl: {
        initial: siteUrl,
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
    structureTool({
      name: "inhalte",
      title: "Inhalte",
      structure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
