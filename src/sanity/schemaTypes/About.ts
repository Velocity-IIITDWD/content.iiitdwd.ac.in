import { SearchSlashIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

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
