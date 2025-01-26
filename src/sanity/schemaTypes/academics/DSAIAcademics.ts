import { ComputerIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const dsaiDetail = defineType({
  name: 'dsaiDetail',
  title: 'DSAI Course Details',
  type: 'document',
  icon: ComputerIcon,
  fields: [
    defineField({
      name: 'course',
      title: 'Course',
      type: 'string',
      description: 'Course Name',
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'string',
      description: 'Credit Percentage of the Course',
    }),
  ],
});
