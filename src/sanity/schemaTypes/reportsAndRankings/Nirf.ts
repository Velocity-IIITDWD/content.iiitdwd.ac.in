import { defineField, defineType } from 'sanity';
import { FileIcon } from 'lucide-react';

export const NIRF = defineType({
  name: 'nirf',
  title: 'NIRF',
  type: 'document',
  icon: FileIcon,
  fields: [
    defineField({
      name: 'curr_year',
      title: 'Current Year',
      type: 'number',
      description: 'The current year for NIRF reports',
      validation: (Rule) => Rule.required().min(2000).max(2100),
    }),
    defineField({
      name: 'Overall_Report_curr',
      title: 'Current Overall Report',
      type: 'string',
      description: "Path to the current year's overall NIRF report PDF",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'Engineering_Report_curr',
      title: 'Current Engineering Report',
      type: 'string',
      description: "Path to the current year's engineering NIRF report PDF",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prev_year',
      title: 'Previous Year',
      type: 'number',
      description: 'The previous year for NIRF reports',
      validation: (Rule) => Rule.required().min(2000).max(2100),
    }),
    defineField({
      name: 'Overall_Report_prev',
      title: 'Previous Overall Report',
      type: 'string',
      description: "Path to the previous year's overall NIRF report PDF",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'Engineering_Report_prev',
      title: 'Previous Engineering Report',
      type: 'string',
      description: "Path to the previous year's engineering NIRF report PDF",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
