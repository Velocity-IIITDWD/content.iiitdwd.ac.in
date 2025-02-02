import { FileTextIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const AnnualReport = defineType({
  name: 'annualReport',
  title: 'Annual Report',
  type: 'document',
  icon: FileTextIcon,
  fields: [
    defineField({
      name: 'displayText',
      title: 'Display Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'issueUrl',
      title: 'Issue URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'previewImg',
      title: 'Preview Image',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
