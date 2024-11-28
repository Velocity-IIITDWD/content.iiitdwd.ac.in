import { type SchemaTypeDefinition } from 'sanity'

import {facultyType} from './facultyType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [facultyType],
}
