import { Landmark } from "lucide-react";
import { defineField,defineType } from "sanity";

export const boardOfGovernor = defineType({
    name: "boardOfGovernor",
    title: "Board Of Governor",
    type: "document",
    icon : Landmark,
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