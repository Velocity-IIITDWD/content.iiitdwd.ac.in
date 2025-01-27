import { defineField, defineType } from 'sanity';

export const building_and_works = defineType({
  title: 'Building and Works',
  name: 'buildingAndWorks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Group title (optional)',
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
              type: 'url',
              description: 'Profile image URL (optional)',
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
