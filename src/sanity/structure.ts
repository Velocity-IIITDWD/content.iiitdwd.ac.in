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
        .title('Academics')
        .child(
          S.list()
            .title('Academics')
            .items([
              S.listItem()
                .title('Seat Structure')
                .child(
                  S.documentTypeList('seatStructure').title('Seat Structure')
                ),
              S.listItem()
                .title('Links Structure')
                .child(
                  S.documentTypeList('linksStructure').title('Links Structure')
                ),
              S.listItem()
                .title('Description Structure')
                .child(
                  S.documentTypeList('descriptionStructure').title(
                    'Description Structure'
                  )
                ),
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
        .title('Home')
        .child(
          S.list()
            .title('Home')
            .items([
              S.listItem()
                .title('Main Carousel Image')
                .child(
                  S.documentTypeList('mainCarouselImage').title(
                    'Main Carousel Image'
                  )
                ),
              S.listItem()
                .title('Program Cards')
                .child(
                  S.documentTypeList('programCards').title('Program Cards')
                ),
              S.listItem()
                .title('Program Type')
                .child(
                  S.documentTypeList('programsType').title('Program Type')
                ),
            ])
        ),
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
                .title('Chair Person')
                .child(S.documentTypeList('chairPerson').title('Chair Person')),
              S.listItem()
                .title('Contact')
                .child(S.documentTypeList('contact').title('Contact')),
              S.listItem()
                .title('Visitor')
                .child(S.documentTypeList('visitor').title('Visitor')),
              S.listItem()
                .title('Jobs')
                .child(S.documentTypeList('job').title('Jobs')),
              S.listItem()
                .title('Finance')
                .child(S.documentTypeList('finance').title('Finance')),
            ])
        ),
      S.listItem()
        .title('Governance & Administration')
        .child(
          S.list()
            .title('Governance & Administration')
            .items([
              S.listItem()
                .title('Board Of Governor')
                .child(
                  S.documentTypeList('boardOfGovernor').title(
                    'Board Of Governor'
                  )
                ),
              S.listItem()
                .title('Gallery')
                .child(S.documentTypeList('gallery').title('Gallery')),
              S.listItem()
                .title('Senate')
                .child(S.documentTypeList('senate').title('Senate')),
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
              S.listItem()
                .title('Former Director')
                .child(
                  S.documentTypeList('formerDirector').title('Former Director')
                ),
              S.listItem()
                .title('Building And Works')
                .child(
                  S.documentTypeList('buildingAndWorks').title(
                    'Building And Works'
                  )
                ),
            ])
        ),
      S.listItem()
        .title('Report and Ranking')
        .child(
          S.list()
            .title('Report and Ranking')
            .items([
              S.listItem()
                .title('Annual Reports')
                .child(
                  S.documentTypeList('annualReport').title('Annual Reports')
                ),
              S.listItem()
                .title('NIRF')
                .child(S.documentTypeList('nirf').title('NIRF')),
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
                .child(S.documentTypeList('krcDataTel').title('KRC Data Tel')),
              S.listItem()
                .title('KRC Data Tel Full')
                .child(
                  S.documentTypeList('krcDataTelFull').title(
                    'KRC Data Tel Full'
                  )
                ),
              S.listItem()
                .title('Research Profiles')
                .child(
                  S.documentTypeList('profiles').title('Research Profiles')
                ),
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
              S.listItem()
                .title('Clubs')
                .child(S.documentTypeList('club').title('Clubs')),
              S.listItem()
                .title('Student Coordinators')
                .child(
                  S.documentTypeList('student_coordinators').title(
                    'Student Coordinators'
                  )
                ),
            ])
        ),
      S.listItem().title('CGC').child(S.documentTypeList('cgc').title('CGC')),
      ...S.documentTypeListItems().filter(schemaFilter),
      S.divider(),
    ]);
