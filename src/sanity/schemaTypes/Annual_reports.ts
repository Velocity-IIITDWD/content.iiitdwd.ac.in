import { FileTextIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const AnnualReport = defineType({
  name: 'annualReport',
  title: 'Annual Report',
  type: 'document',
  icon: FileTextIcon,
  fields: [
    defineField({
      name: 'issueUrl',
      title: 'Issue URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      validation: (Rule) => Rule.required().integer(),
    }),
    defineField({
      name: 'displayText',
      title: 'Display Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'previewImg',
      title: 'Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
