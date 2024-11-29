import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import FacultyIdInput from "../components/facultyIdInput";

export const facultyType = defineType({
  name: "faculty",
  title: "Faculty",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "facultyId",
      title: "Faculty ID",
      type: "string",
      description: "Generated based on Faculty Name. No need to edit.",
      initialValue: 'id',
      components: {
        input: FacultyIdInput,
      },
    }),
    defineField({
      name: "content",
      type: "document",
      fields: [
        defineField({
          name: "head",
          type: "document",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Faculty Name",
              validation: Rule => Rule.min(3).required()
            }),
            defineField({
              name: "file",
              title: "Upload File",
              type: "file",
              validation: (Rule) =>
                Rule.custom((file, context) => {
                  const link = (context.parent as { link?: string })?.link;
                  if (link && file) {
                    return "Delete one data - file or link, not both";
                  }
                  return true;
                }),
            }),
            defineField({
              name: "link",
              title: "Profile Link",
              type: "url",
              validation: (Rule) =>
                Rule.custom((file, context) => {
                  const pdfFile = (context.parent as { file?: object })?.file;
                  if (pdfFile && file) {
                    return "Delete one data - file or link, not both";
                  }
                  return true;
                }),
            }),
          ],
        }),
        defineField({
          name: "card",
          type: "document",
          fields: [
            defineField({
              name: "photo",
              type: "image",
              title: "Photo",
              options: {
                hotspot: true,
              },
              validation: Rule => Rule.required().error('An image is required') // Todo - fix its working
            }),
            defineField({
              name: "PhD",
              type: "string",
              title: "PhD",
            }),
            defineField({
              name: "designation",
              type: "string",
              title: "Designation",
            }),
            defineField({
              name: "department",
              type: "string",
              title: "Department",
            }),
            defineField({
              name: "mail_id",
              type: "string",
              title: "Mail ID",
            }),
            defineField({
              name: "cabin_number",
              type: "string",
              title: "Cabin Number",
            }),
            defineField({
              name: "position",
              type: "array",
              title: "Positions",
              of: [{ type: "string" }],
            }),
          ],
        }),
        defineField({
          name: "body",
          type: "document",
          fields: [
            defineField({
              name: "profile_text",
              type: "string",
              title: "Profile Text",
            }),
            defineField({
              name: "interest_areas",
              type: "array",
              title: "Interest Areas",
              of: [
                {
                  name: "area",
                  type: "string",
                  title: "Area",
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
