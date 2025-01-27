import { defineField, defineType } from 'sanity';

export const Finance = defineType({
  title: 'finance',
  name: 'Finance',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Group Title',
      type: 'string',
      description:
        'Title of the profile group, e.g., "Members" or "Special Invitee".',
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
              description: 'Roles or descriptions for the profile.',
            }),
            defineField({
              name: 'imageURL',
              title: 'Image URL',
              type: 'string',
              description: 'URL of the profile image (can be empty).',
            }),
            defineField({
              name: 'title',
              title: 'Profile Name',
              type: 'string',
              description: 'Name of the person.',
            }),
          ],
        },
      ],
    }),
  ],
});
