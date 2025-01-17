import { CalendarIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const Tender = defineType({
  name: 'tender',
  title: 'Tender',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cancelled',
      title: 'Cancelled',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'corrections',
      title: 'Corrections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'link',
      title: 'Main Document Link',
      type: 'string',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'submissionDeadline',
      title: 'Submission Deadline',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'number',
    }),
  ],
});
