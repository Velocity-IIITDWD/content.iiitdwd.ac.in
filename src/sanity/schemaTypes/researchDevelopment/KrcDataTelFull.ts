import { defineType, defineField } from 'sanity';

export const krcDataTelFull = defineType({
  name: 'krcDataTelFull',
  title: 'Krc Data TEL(Full)',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The heading of the group of cards',
    }),
    defineField({
      name: 'card',
      title: 'Card',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'The title of the link data.',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
              description: 'A description for the link data.',
            }),
            defineField({
              name: 'accessInfo',
              title: 'Access Info',
              type: 'string',
              description: 'Information about accessing the resource.',
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              description: 'The text displayed on the button.',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              description: 'The URL for the link.',
            }),
          ],
        },
      ],
    }),
  ],
});
