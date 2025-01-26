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
        .title('General Information')
        .child(
          S.list()
            .title('General Information')
            .items([
              S.listItem()
                .title('About')
                .child(S.documentTypeList('about').title('About')),
              S.listItem()
                .title('Chairperson')
                .child(S.documentTypeList('chairPerson').title('Chairperson')),
              S.listItem()
                .title('Contact')
                .child(S.documentTypeList('contact').title('Contact')),
              S.listItem()
                .title('Visitor')
                .child(S.documentTypeList('visitor').title('Visitor')),
            ])
        ),
      S.listItem()
        .title('Academics')
        .child(
          S.list()
            .title('Academics')
            .items([
              S.listItem()
                .title('CSE Academic')
                .child(S.documentTypeList('cseDetail').title('CSE')),
              S.listItem()
                .title('ECE Academic')
                .child(S.documentTypeList('eceDetail').title('ECE')),
              S.listItem()
                .title('DSAI Academic')
                .child(S.documentTypeList('dsaiDetail').title('DSAI')),
              S.listItem()
                .title('Faculty')
                .child(S.documentTypeList('faculty').title('Faculty')),
              S.listItem()
                .title('Staff')
                .child(S.documentTypeList('staff').title('Staff')),
            ])
        ),
      S.listItem()
        .title('Student Life')
        .child(
          S.list()
            .title('Student Life')
            .items([
              S.listItem()
                .title('Campus')
                .child(S.documentTypeList('campusData').title('Campus Data')),
              S.listItem()
                .title('Events')
                .child(S.documentTypeList('eventInf').title('Events')),
              S.listItem()
                .title('Facility')
                .child(S.documentTypeList('facility').title('Facility')),
              S.listItem()
                .title('Magazine')
                .child(S.documentTypeList('issues').title('Magazines')),
            ])
        ),
      S.listItem()
        .title('Research and Development')
        .child(
          S.list()
            .title('Research and Development')
            .items([
              S.listItem()
                .title('KRC Data')
                .child(S.documentTypeList('krcData').title('KRC Data')),
              S.listItem()
                .title('KRC Data Tel')
                .child(S.documentTypeList('krcDataTEL').title('KRC Data Tel')),
              S.listItem()
                .title('KRC Data Tel Full')
                .child(
                  S.documentTypeList('krcDataTelFull').title(
                    'KRC Data Tel Full'
                  )
                ),
            ])
        ),
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
      ...S.documentTypeListItems().filter(schemaFilter),
      S.divider(),
    ]);
