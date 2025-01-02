import { defineField, defineType } from "sanity";
import { UserPenIcon, Users2Icon } from "lucide-react";

export const profile = defineType({
    name: "profile",
    title: "Profile",
    type: "document",
    icon: UserPenIcon,
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
