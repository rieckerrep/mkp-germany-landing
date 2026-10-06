import {defineField, defineType} from "sanity";

export const event = defineType({
  name: "event",
  title: "NWTA-Termin",
  type: "document",
  fields: [
    defineField({name: "title", title: "Ort / Titel", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "dateLabel", title: "Datumsanzeige", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "startDate", title: "Startdatum", type: "datetime"}),
    defineField({name: "timeLabel", title: "Zeit / Ablauf", type: "string"}),
    defineField({name: "countryLabel", title: "Land", type: "string", initialValue: "Deutschland"}),
    defineField({name: "price", title: "Preis", type: "string"}),
    defineField({name: "registrationUrl", title: "Anmeldelink", type: "url", validation: (rule) => rule.required()}),
    defineField({name: "active", title: "Auf Landingpage anzeigen", type: "boolean", initialValue: true}),
    defineField({name: "sortOrder", title: "Sortierung", type: "number", initialValue: 100}),
  ],
  preview: {
    select: {title: "title", subtitle: "dateLabel"},
  },
});
