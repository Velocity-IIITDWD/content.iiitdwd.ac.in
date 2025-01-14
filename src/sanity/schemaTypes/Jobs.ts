import { ContactRound } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const Jobs = defineType({
  name: 'jobs',
  title: 'Jobs',
  type: 'document',
  icon: ContactRound,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the job',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Faculty', value: 'faculty' },
          { title: 'Staff', value: 'staff' },
          { title: 'Others', value: 'others' },
        ],
      },
      description: 'Category of the job',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'string',
      description: 'Details of the job',
    }),
    defineField({
      name: 'lastDate',
      title: 'Last Date',
      type: 'string',
      description: 'Last Date of the job',
    }),
    defineField({
      name: 'generalInstructions',
      title: 'General Instructions',
      type: 'string',
      description: 'General Instructions for the job',
    }),
    defineField({
      name: 'application',
      title: 'Application',
      type: 'string',
      description: 'Application for the job',
    }),
    defineField({
      name: 'extraInfo',
      title: 'Extra Info',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Text',
            },
            {
              name: 'link',
              type: 'string',
              title: 'Link',
            },
          ],
        },
      ],
    }),
  ],
});
