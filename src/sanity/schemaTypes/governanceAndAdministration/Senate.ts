import { defineField, defineType } from 'sanity';
import { User2 } from 'lucide-react';

export const senate = defineType({
  name: 'senate',
  title: 'Senate',
  type: 'document',
  icon: User2,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the profile group',
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
              name: 'title',
              title: 'Profile Title',
              type: 'string',
              description: 'Title of the profile',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Content of the profile',
            }),
            defineField({
              name: 'imageURL',
              title: 'Image URL',
              type: 'string',
              description: 'URL of the profile image',
            }),
          ],
        },
      ],
      description: 'Profiles associated with the visitor',
    }),
  ],
});

export const profile = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Profile title',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Content of the profile',
    }),
    defineField({
      name: 'imageURL',
      title: 'Image URL',
      type: 'string',
      description: 'URL of the profile image',
    }),
  ],
});
