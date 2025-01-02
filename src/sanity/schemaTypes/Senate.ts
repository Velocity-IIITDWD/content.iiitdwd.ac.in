import { UserCheck2 } from "lucide-react";
import { defineField,defineType } from "sanity";

export const senate = defineType({
    name: "senate",
    title: "Senate",
    type: "document",
    icon : UserCheck2,
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