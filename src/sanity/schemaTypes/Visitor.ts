import { defineField, defineType } from "sanity";
import { Users2Icon } from "lucide-react";

export const visitor = defineType({
  name: "visitor",
  title: "Visitor",
  type: "document",
  icon: Users2Icon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the profile group",
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
  ],
});