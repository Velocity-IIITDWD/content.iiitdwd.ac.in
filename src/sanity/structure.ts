import type {ListItemBuilder, StructureResolver} from 'sanity/structure'

const hiddenSchemas = ['profile', 'profileGroup', 'dateStructure' ,'img', 'linkStructure', 'coreValues', 'directorMessage', 'mission' ];
const schemaFilter = (v: ListItemBuilder) => !hiddenSchemas.includes(v.getId() ?? '')

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(schemaFilter),
      S.divider(),
    ])