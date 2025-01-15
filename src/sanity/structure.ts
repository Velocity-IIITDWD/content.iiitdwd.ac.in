import type { ListItemBuilder, StructureResolver } from 'sanity/structure';

const showSchemas: Array<string> = [];
const schemaFilter = (v: ListItemBuilder) =>
  showSchemas.includes(v.getId() ?? '');

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('News & Updates')
        .child(
          S.list()
            .title('News & Updates Documents')
            .items([
              S.listItem()
                .title('Announcements')
                .child(
                  S.documentTypeList('announcement').title('Announcements')
                ),
              S.listItem()
                .title('Tenders')
                .child(S.documentTypeList('tender').title('Tenders')),
            ])
        ),
      S.listItem()
        .title('Governance & Administration')
        .child(
          S.list()
            .title('Governance & Administration Documents')
            .items([
              S.listItem()
                .title('Board Of Governors')
                .child(
                  S.documentTypeList('boardOfGovernor').title(
                    'Board Of Governors'
                  )
                ),
              S.listItem()
                .title('Senate')
                .child(S.documentTypeList('senate').title('Senate')),
            ])
        ),
      ...S.documentTypeListItems().filter(schemaFilter),
      S.divider(),
    ]);
