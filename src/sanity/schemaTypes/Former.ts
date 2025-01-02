import { UserCircle2Icon } from "lucide-react";
import { defineField,defineType } from "sanity";

export const former = defineType({
    name: "former",
    title: "Former",
    type: "document",
    icon : UserCircle2Icon,
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