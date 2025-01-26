import { defineType, defineField } from 'sanity';

export const krcDataTel = defineType({
  name: 'krcDataTEL',
  title: 'Krc Data TEL(First three)',
  type: 'document',
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
});
