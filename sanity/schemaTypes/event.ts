import {defineField, defineType} from "sanity";

export const event = defineType({
  name: "event",
  title: "NWTA-Termin",
  type: "document",
  initialValue: {
    countryLabel: "Deutschland",
    active: true,
    sortOrder: 100,
  },
  fields: [
    defineField({
      name: "title",
      title: "Ort / Titel",
      type: "string",
      description: "Zum Beispiel: Schloss Bettenburg",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dateLabel",
      title: "Datumsanzeige",
      type: "string",
      description: "So wird das Datum auf der Website angezeigt, z. B. „6.–8. November 2026“.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Startdatum",
      type: "datetime",
      description: "Dient zur Sortierung der Termine.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "timeLabel",
      title: "Zeit / Ablauf",
      type: "string",
      description: "Zum Beispiel: Freitag 16:45 bis Sonntag 16:30",
    }),
    defineField({
      name: "countryLabel",
      title: "Land",
      type: "string",
      initialValue: "Deutschland",
    }),
    defineField({
      name: "price",
      title: "Preis",
      type: "string",
      description: "Zum Beispiel: 600 €",
    }),
    defineField({
      name: "registrationUrl",
      title: "Anmeldelink",
      type: "url",
      description: "Direkter Link zur offiziellen Anmeldung.",
      validation: (rule) => rule.required().uri({scheme: ["http", "https"]}),
    }),
    defineField({
      name: "active",
      title: "Auf Landingpage anzeigen",
      type: "boolean",
      initialValue: true,
      description: "Ausschalten, um einen Termin auszublenden, ohne ihn zu löschen.",
    }),
    defineField({
      name: "sortOrder",
      title: "Sortierung",
      type: "number",
      initialValue: 100,
      description: "Kleinere Zahlen erscheinen zuerst. Bei gleicher Zahl entscheidet das Startdatum.",
    }),
  ],
  orderings: [
    {
      title: "Startdatum",
      name: "startDateAsc",
      by: [{field: "startDate", direction: "asc"}],
    },
  ],
  preview: {
    select: {title: "title", date: "dateLabel", active: "active", price: "price"},
    prepare({title, date, active, price}) {
      return {
        title: title || "Unbenannter Termin",
        subtitle: [date, price, active === false ? "ausgeblendet" : null].filter(Boolean).join(" · "),
      };
    },
  },
});
