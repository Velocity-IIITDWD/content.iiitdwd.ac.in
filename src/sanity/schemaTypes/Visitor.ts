import { UserCog } from "lucide-react";
import { defineField, defineType } from "sanity";

export const visitor = defineType({
    name: "visitor",
    title: "Visitor",
    type: "document",
    icon: UserCog,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "profiles",
            title: "Profiles",
            type: "reference",
            to: [{ type: "profileGroup" }],
        }),
    ],
});
