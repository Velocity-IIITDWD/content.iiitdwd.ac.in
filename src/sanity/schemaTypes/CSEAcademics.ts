import { ComputerIcon } from "lucide-react";
import { defineField, defineType } from "sanity";


export const cseDetail = defineType({
    name : 'cseDetail',
    title : 'CSE Course Details',
    type : 'document',
    icon : ComputerIcon,
    fields : [
        defineField({
            name : "course",
            title : "Course",
            type : "string",
            description : "Course Name"
        }),
        defineField({
            name : "credits",
            title : "Credits",
            type : "string",
            description : "Credit Percentage of the Course"
        }),
    ]
})