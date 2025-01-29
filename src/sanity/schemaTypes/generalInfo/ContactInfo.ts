import { UserIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';
import { TagIcon } from 'lucide-react';
import { DatabaseIcon } from 'lucide-react';

export const ContactInf = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactNumber',
      title: 'Contact Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'contactCategory' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const ContactCategory = defineType({
  name: 'contactCategory',
  title: 'Contact Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const ContactData = defineType({
  name: 'contactData',
  title: 'Contact Data',
  type: 'document',
  icon: DatabaseIcon,
  fields: [
    defineField({
      name: 'generalQueries',
      title: 'General Queries',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'contact' }] }],
    }),
    defineField({
      name: 'hostelRelatedQueries',
      title: 'Hostel Related Queries',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'contact' }] }],
    }),
    defineField({
      name: 'academicQueries',
      title: 'Academic Queries',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'contact' }] }],
    }),
    defineField({
      name: 'careerGuidanceCell',
      title: 'Career Guidance Cell',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'contact' }] }],
    }),
    defineField({
      name: 'feeRelatedQueries',
      title: 'Fee Related Queries',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'contact' }] }],
    }),
    defineField({
      name: 'scholarshipLoansQueries',
      title: 'Scholarship/Loans Queries',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'contact' }] }],
    }),
  ],
});
