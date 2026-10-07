import type {StructureResolver} from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website-Inhalte")
    .items([
      S.listItem()
        .title("Landingpage")
        .singleton("landingPage.main"),
      S.divider(),
      S.documentTypeListItem("event")
        .title("NWTA-Termine")
        .showCount(true),
    ]);
