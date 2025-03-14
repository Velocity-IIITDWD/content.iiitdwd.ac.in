import { client } from '@/sanity/lib/client';
import { CalendarIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const EventInfo = defineType({
  name: 'event',
  title: 'Event Information',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((id, context) => {
          if (!id) return 'ID is required';
          if (!context?.document) return true;

          const { _type, _id } = context.document;

          return client
            .fetch(
              `*[_type == $type && id == $id && !(_id in [$currentId, "drafts." + $currentId])][0]`,
              {
                type: _type,
                id,
                currentId: _id.replace(/^drafts\./, ''),
              }
            )
            .then((existing) => (existing ? 'ID must be unique' : true))
            .catch(() => 'Error checking uniqueness');
        }),
    }),
    defineField({
      name: 'href',
      title: 'Image thumbnail path (/images/{img.png})',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timestamp',
      title: 'Timestamp (dd-mm-yyyy)',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(
          /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/,
          { name: 'date format', invert: false }
        ),
    }),
    defineField({
      name: 'allImage',
      title: 'All Images',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'startDate',
          title: 'Start Date (dd-mm-yyyy)',
          type: 'string',
          validation: (Rule) =>
            Rule.required().regex(
              /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/,
              { name: 'date format', invert: false }
            ),
        }),
        defineField({
          name: 'endDate',
          title: 'End Date (dd-mm-yyyy)',
          type: 'string',
          validation: (Rule) =>
            Rule.required().regex(
              /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/,
              { name: 'date format', invert: false }
            ),
        }),
        defineField({
          name: 'ticketPrice',
          title: 'Ticket Price',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'object',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
        }),
        defineField({
          name: 'contact',
          title: 'Contact',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'aboutEvent',
      title: 'About Event',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Club', value: 'club' },
          { title: 'Institute', value: 'institute' },
        ],
        layout: 'radio', // Optional: Makes selection easier in the Sanity Studio
      },
      initialValue: 'college', // Default to 'college'
      validation: (Rule) => Rule.required(), // Ensure it's always set
    }),
  ],
});
