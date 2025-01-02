import { defineType,defineField } from "sanity";

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