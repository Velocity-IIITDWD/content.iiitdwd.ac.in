import { defineField, defineType } from 'sanity';
import { UsersIcon } from 'lucide-react';

export const former = defineType({
  name: 'former',
  title: 'Former',
  type: 'document',
  icon: UsersIcon,
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
