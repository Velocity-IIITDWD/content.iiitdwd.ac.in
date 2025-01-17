import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';
import FacultyIdInput from '../../components/facultyIdInput';

export const Faculty = defineType({
  name: 'faculty',
  title: 'Faculty',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'facultyId',
      title: 'Faculty ID',
      type: 'string',
      description: 'Generated based on Faculty Name. No need to edit.',
      initialValue: 'id',
      components: {
        input: FacultyIdInput,
      },
    }),
    defineField({
      name: 'content',
      type: 'document',
      fields: [
        defineField({
          name: 'head',
          type: 'document',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Faculty Name',
              validation: (Rule) => Rule.min(3).required(),
            }),
            defineField({
              name: 'profile_pdf',
              title: 'Profile or Resume Link',
              type: 'url',
            }),
          ],
        }),
        defineField({
          name: 'card',
          type: 'document',
          fields: [
            defineField({
              name: 'photo',
              type: 'url',
              title: 'Photo',
              validation: (Rule) =>
                Rule.required().error('An image is required'),
            }),
            defineField({
              name: 'PhD',
              type: 'string',
              title: 'PhD',
            }),
            defineField({
              name: 'designation',
              type: 'string',
              title: 'Designation',
            }),
            defineField({
              name: 'department',
              type: 'string',
              title: 'Department',
            }),
            defineField({
              name: 'mail_id',
              type: 'string',
              title: 'Mail ID',
            }),
            defineField({
              name: 'cabin_number',
              type: 'string',
              title: 'Cabin Number',
            }),
            defineField({
              name: 'position',
              type: 'array',
              title: 'Positions',
              of: [{ type: 'string' }],
            }),
          ],
        }),
        defineField({
          name: 'body',
          type: 'document',
          fields: [
            defineField({
              name: 'profile_text',
              type: 'string',
              title: 'Profile Text',
            }),
            defineField({
              name: 'interest_areas',
              type: 'array',
              title: 'Interest Areas',
              of: [
                {
                  name: 'area',
                  type: 'string',
                  title: 'Area',
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
