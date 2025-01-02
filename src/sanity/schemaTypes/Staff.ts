import { UserCheck } from "lucide-react";
import { defineField,defineType } from "sanity";

export const staff = defineType({
    name: "staff",
    title: "Staff",
    type: "document",
    icon : UserCheck,
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