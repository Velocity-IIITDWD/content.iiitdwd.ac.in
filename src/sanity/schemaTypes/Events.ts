import { CalendarIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const EventInfo = defineType({
  name: 'eventInf',
  title: 'Event Information',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'allImage',
      title: 'All Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'object',
      fields: [
        defineField({
          name: 'startDate',
          title: 'Start Date',
          type: 'datetime',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'endDate',
          title: 'End Date',
          type: 'datetime',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ticketPrice',
          title: 'Ticket Price',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'object',
      fields: [
        defineField({
          name: 'place',
          title: 'Place',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'street',
          title: 'Street',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'organiser',
      title: 'Organiser',
      type: 'object',
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
          name: 'contact',
          title: 'Contact',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'aboutEvent',
      title: 'About Event',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
