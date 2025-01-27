import { defineField, defineType } from 'sanity';

export const student_coordinators = defineType({
  title: 'student_coordinators',
  name: 'student_Coordinators',
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
              description: 'Profile image URL',
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
