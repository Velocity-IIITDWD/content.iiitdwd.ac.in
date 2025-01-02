import { SearchSlashIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const directorMessage = defineType({
  name: "directorMessage",
  title: "Director Message",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "text1",
      title: "Text 1",
      type: "string",
    }),
    defineField({
      name: "text2",
      title: "Text 2",
      type: "string",
    }),
    defineField({
      name: "text3",
      title: "Text 3",
      type: "string",
    }),
  ],
});

export const coreValues = defineType({
  name: "coreValues",
  title: "Core Values",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
    }),
  ],
});

export const mission = defineType({
  name: "mission",
  title: "Mission",
  description: "Mission Regarding The Topic",
  type: "document",
  fields: [
    defineField({
      name: "missionText",
      title: "Mission Text",
      type: "string",
    }),
  ],
});

// Define the About Schema
export const About = defineType({
  name: "about",
  title: "About",
  type: "document",
  icon: SearchSlashIcon,
  fields: [
    defineField({
      name: "aboutText",
      title: "About Text",
      type: "string",
      description: "About Text",
    }),
    defineField({
      name: "director",
      title: "Director",
      description: "Reference to the director profile",
      type: 'reference',
      to : [{type : 'profile'}]
    }),
    defineField({
      name: "briefProfile",
      title: "Brief Profile",
      description: "Brief of The Profile",
      type: "string",
    }),
    defineField({
      name: "vision",
      title: "Vision",
      description: "Vision Regarding The Topic",
      type: "string",
    }),
    defineField({
      name: "image_prof",
      title: "Image Prof",
      description: "Reference to an image",
      type: "reference",
      to: [{ type: "img" }],
    }),
    defineField({
      name: "mission",
      title: "Mission",
      description: "Mission Regarding The Topic",
      type: "array",
      of: [{ type: "mission" }], 
    }),
    defineField({
      name: "coreValues",
      title: "Core Values",
      description: "Core Values Regarding The Topic",
      type: "array",
      of: [{ type: "coreValues" }],
    }),
    defineField({
      name: "href",
      title: "Href",
      type: "string",
    }),
    defineField({
      name: "directorMessage",
      title: "Director Message",
      type: "array",
      of: [{ type: "directorMessage" }],
    }),
  ],
});
