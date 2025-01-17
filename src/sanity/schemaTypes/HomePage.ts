import { ImageIcon } from 'lucide-react';
import { CarIcon } from 'lucide-react'; // Replace with an appropriate icon
import { ClipboardIcon } from 'lucide-react'; // Replace with an appropriate icon

import { defineField, defineType } from 'sanity';

export const MainCarouselImage = defineType({
  name: 'mainCarouselImage',
  title: 'Main Carousel Image',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'url',
      title: 'Image URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
});


export const ProgramCards = defineType({
  name: 'programCards',
  title: 'Program Cards',
  type: 'document',
  icon: CarIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'Header1',
      title: 'Header 1',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'Header2',
      title: 'Header 2',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const ProgramsType = defineType({
  name: 'programsType',
  title: 'Programs Type',
  type: 'document',
  icon: ClipboardIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
