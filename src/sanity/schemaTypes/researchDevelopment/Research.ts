import { defineField, defineType } from 'sanity';

export const research = defineType({
  title: 'Research Profiles',
  name: 'researchProfiles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the profile group',
    }),
    defineField({
      name: 'profiles',
      title: 'Profiles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Profile Title',
              type: 'string',
              description: 'Title of the profile',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Content of the profile',
            }),
            defineField({
              name: 'imageURL',
              title: 'Image URL',
              type: 'string',
              description: 'URL of the profile image',
            }),
          ],
        },
      ],
    }),
  ],
});

export const researchAdvertisement = defineType({
  name: 'research_advertisement',
  type: 'document',
  title: 'Research Advertisement',
  fields: [
    defineField({
      name: 'time',
      type: 'string',
      title: 'Time',
      description: 'The time period of the advertisement.',
    }),
    defineField({
      name: 'lastDate',
      type: 'date',
      title: 'Last Date',
      description: 'The last date for the advertisement.',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'generalInstructions',
      type: 'url',
      title: 'General Instructions',
      description: 'URL to the general instructions document.',
    }),
    defineField({
      name: 'applicationForm',
      type: 'url',
      title: 'Application Form',
      description: 'URL to the application form.',
    }),
  ],
});
