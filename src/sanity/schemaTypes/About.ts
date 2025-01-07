import { SearchSlashIcon } from "lucide-react";
import { defineField, defineType } from "sanity";


// About Not Done 
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
      name: "profiles",
      title: "Profiles",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Profile Title",
              type: "string",
              description: "Title of the profile",
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "string" }],
              description: "Content of the profile",
            }),
            defineField({
              name: "imageURL",
              title: "Image URL",
              type: "string",
              description: "URL of the profile image",
            }),
          ],
        },
      ],
      description: "Profiles associated with the visitor",
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
      description: "Image related to the topic",
      type: "object",
      fields: [
        defineField({
          name: "name",
          type: "string",
          title: "Name",
          description: "Name of the image",
        }),
        defineField({
          name: "imageURL",
          title: "Image URL",
          type: "string",
          description: "URL of the image",
        }),
      ],
    }),
    defineField({
      name: "mission",
      title: "Mission",
      description: "Mission Regarding The Topic",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "missionText",
              title: "Mission Text",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "coreValues",
      title: "Core Values",
      description: "Core Values Regarding The Topic",
      type: "array",
      of: [
        {
          type: "object",
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
        },
      ],
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
      of: [
        {
          type: "object",
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
        },
      ],
    }),
  ],
});
