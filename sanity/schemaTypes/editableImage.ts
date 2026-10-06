import {defineField, defineType} from "sanity";

export const editableImage = defineType({
  name: "editableImage",
  title: "Bild",
  type: "object",
  fields: [
    defineField({
      name: "asset",
      title: "Sanity-Bild",
      type: "image",
      options: {hotspot: true},
    }),
    defineField({
      name: "externalUrl",
      title: "Fallback / bestehende Bild-URL",
      type: "url",
      description: "Bleibt aktiv, bis ein Sanity-Bild hochgeladen wurde.",
    }),
    defineField({
      name: "alt",
      title: "Alternativtext",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: "alt", media: "asset"},
  },
});
