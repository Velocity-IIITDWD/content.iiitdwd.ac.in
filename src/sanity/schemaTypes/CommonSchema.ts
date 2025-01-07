import { defineField, defineType } from "sanity";
import { Users2Icon } from "lucide-react";

export const profile = defineType({
    name: "profile",
    title: "Profile",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "Title of the profile",
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "text",
            description: "Content of the profile",
        }),
        defineField({
            name: "imageURL",
            title: "Image URL",
            type: "string",
            description: "URL of the image",
        }),
    ],
});

export const profileGroup = defineType({
    name: "profileGroup",
    title: "Profile Group",
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
            of: [{
                type: "reference",
                to: [{ type: "profile" }],
            }],
            description: "Profiles in the group",
        }),
    ],
});

export const img = defineType(
    {
        name : 'img',
        title : 'Img',
        type : 'document',
        fields : [
            defineField({
                name : 'name',
                type : 'string',
                title : 'Name',
                description : 'Name of The Image',
            }),
            defineField({
                name : 'imageURL',
                title : 'Image URL',
                type : 'string',
                description : 'Url of The Image',
            }),
        ]
    }
)


  export const dateStructure = defineType({
    name: 'dateStructure',
    title: 'Date Structure',
    type: 'document',
    fields: [
      defineField({
        name: 'id',
        title: 'ID',
        type: 'number',
      }),
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'date',
        title: 'Date',
        type: 'string',
      }),
    ],
  });

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