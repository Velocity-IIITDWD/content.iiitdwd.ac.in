import { defineType, defineField } from 'sanity';
import { HomeIcon } from 'lucide-react';
export const campusData = defineType({
  name: 'campusData',
  title: 'Campus Data',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the Card',
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
      description: 'Link where the card will redirect when clicked',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image Url',
      type: 'string',
      description: 'Image to display on the card',
    }),
  ],
});
