import { SearchSlashIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

const clubNames = [
  'Velocity',
  'Iridescence',
  'Return 0',
  'BlocSoc',
  'GDSC IIIT Dharwad',
  'E cell',
  'IEEE SB & CS',
  'Inquizitive',
  'IRIS',
  'DSAI Society',
  'Quantum Computing Club',
  'Techniosys',
  'Zeitgeist',
  '440 Hz',
  'Dance Club',
  'Prabodhini',
  'Mosaic Club',
  'In Motion',
  'LimeLight',
];

export const Club = defineType({
  name: 'club',
  title: 'Club',
  type: 'document',
  icon: SearchSlashIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the club',
      options: {
        list: clubNames.map((name) => ({ title: name, value: name })),
      },
    }),
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'text',
      description: 'About Text',
    }),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Name of the member',
            }),
            defineField({
              name: 'position',
              title: 'Position',
              type: 'string',
              description: 'Position of the member',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'imagePath',
      title: 'Image Path',
      type: 'string',
      description: 'Path of the image',
    }),
    defineField({
      name: 'isTechnical',
      title: 'Is Technical',
      type: 'boolean',
      description: 'Is the club technical',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      description: 'Instagram handle of the club',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
      description: 'LinkedIn handle of the club',
    }),
    defineField({
      name: 'gmail',
      title: 'Gmail',
      type: 'string',
      description: 'Gmail of the club',
    }),
    defineField({
      name: 'gmail2',
      title: 'Gmail2',
      type: 'string',
      description: 'Secondary Gmail of the club',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'string',
      description: 'Website of the club',
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'string',
      description: 'GitHub of the club',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
      description: 'Twitter of the club',
    }),
    defineField({
      name: 'linktree',
      title: 'Linktree',
      type: 'string',
      description: 'Linktree of the club',
    }),
  ],
});
