import { defineType, defineField } from 'sanity';

export const facilities = defineType({
  name: 'facility',
  title: 'Facility',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the facility.',
    }),
    defineField({
      name: 'blockName',
      title: 'Block Name',
      type: 'string',
      description:
        'The name of the block associated with the facility. for example- e block',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'A list of items associated with the facility.',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'string',
      description: 'The image associated with the facility.',
    }),
  ],
});
