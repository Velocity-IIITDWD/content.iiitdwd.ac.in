import { BookAIcon, BookCopyIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const creditStructure = defineType({
  name: 'creditStructure',
  title: 'Credit Structure',
  type: 'document',
  icon: BookCopyIcon,
  fields: [
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
      description: 'Course Code',
      initialValue: "",
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the course',
    }),
    defineField({
      name: 'preReq',
      title: 'Pre Requisite',
      type: 'string',
      description: 'Pre Requisite for the course',
      initialValue: "",
    }),
    defineField({
      name: 'credit',
      title: 'Credit',
      type: 'string',
      description: 'Credit for the course',
    }),
  ],
});

export const courseStructure = defineType({
  name: 'courseStructure',
  title: 'Course Structure',
  type: 'document',
  icon: BookAIcon,
  fields: [
    defineField({
      name: 'course',
      title: 'Course',
      type: 'string',
      description: 'Course',
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'string',
      description: 'Credit for the course',
    }),
  ],
})