import { defineField, defineType } from 'sanity';

export const cgc = defineType({
  title: 'cgc',
  name: 'Cgc',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Group title (can be empty)',
    }),
    defineField({
      name: 'profiles',
      title: 'Profiles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Roles or descriptions for the profile',
            }),
            defineField({
              name: 'imageURL',
              title: 'Image URL',
              type: 'string',
              description: 'URL of the profile image',
            }),
            defineField({
              name: 'title',
              title: 'Profile Name',
              type: 'string',
              description: 'Name of the person',
            }),
          ],
        },
      ],
    }),
  ],
});
