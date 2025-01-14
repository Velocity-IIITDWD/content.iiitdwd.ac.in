import { defineField, defineType } from 'sanity';

export const research = defineType({
  title: 'Research Profiles',
  name: 'profiles',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Image Url',
      name: 'imageUrl',
      type: 'string',
    }),
    defineField({
      title: 'More Details',
      name: 'content',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
