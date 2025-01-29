import { ImageIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const Gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'url',
      title: 'Image URL',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
