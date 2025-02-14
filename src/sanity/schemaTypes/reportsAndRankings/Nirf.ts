import { defineField, defineType } from 'sanity';
import { FileIcon } from 'lucide-react';

export const NIRF = defineType({
  name: 'nirf',
  title: 'NIRF',
  type: 'document',
  icon: FileIcon,
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'The year for this NIRF report',
      validation: (Rule) => Rule.required().min(2000).max(2100),
    }),
    defineField({
      name: 'overallReport',
      title: 'Overall Report',
      type: 'string',
      description: 'Path to the overall NIRF report PDF for this year',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'engineeringReport',
      title: 'Engineering Report',
      type: 'string',
      description: 'Path to the engineering NIRF report PDF for this year',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
