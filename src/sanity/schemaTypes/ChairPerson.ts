import { User2Icon } from "lucide-react";
import { defineField,defineType } from "sanity";

export const chairperson = defineType({
    name: "chairPerson",
    title: "Chair Person",
    type: "document",
    icon : User2Icon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: 'string'
        }),
        defineField({
            name: "profiles",
            title: "Profiles",
            type: 'reference',
            to : [{type : 'profileGroup'}]
        }),
    ]
})