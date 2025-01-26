import { SearchSlashIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const Issues = defineType({
  name: 'issues',
  title: 'Issues',
  type: 'document',
  icon: SearchSlashIcon,
  fields: [
    defineField({
      name: 'issueUrl',
      title: 'Issue URL',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'ID of the issue',
    }),
    defineField({
      name: 'displayText',
      title: 'Display Text',
      type: 'string',
      description: 'Display Text of the issue',
    }),
    defineField({
      name: 'previewImg',
      title: 'Preview Image',
      type: 'string',
      description: 'Preview Image of the issue',
    }),
  ],
});

export const About = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Description of the about',
    }),
  ],
});

export const Member = defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'ID of the member',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the member',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Role of the member',
    }),
  ],
});

export const Team = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'teamId',
      title: 'Team ID',
      type: 'number',
      description: 'ID of the team',
    }),
    defineField({
      name: 'teamName',
      title: 'Team Name',
      type: 'string',
    }),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'member' }],
        },
      ],
    }),
  ],
});

export const FacultyAdvisor = defineType({
  name: 'facultyAdvisor',
  title: 'Faculty Advisor',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
  ],
});
