import { Volume1Icon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const announcementType = defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  icon: Volume1Icon,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'new',
      title: 'New',
      type: 'boolean',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      initialValue: '',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'The year of the announcement (4 digits)',
      validation: (Rule) =>
        Rule.required()
          .length(4)
          .regex(/^\d{4}$/)
          .error('Year should be a 4-digit number'),
    }),
    defineField({
      name: 'month',
      title: 'Month',
      type: 'string',
      description: 'The month of the announcement (1 to 12)',
      validation: (Rule) =>
        Rule.required()
          .regex(/^(0?[1-9]|1[0-2])$/, 'month')
          .error('Month should be a number from 1 to 12'),
    }),
  ],
});
