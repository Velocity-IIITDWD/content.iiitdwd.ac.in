import { BluetoothIcon } from "lucide-react";
import { defineField, defineType } from "sanity";


export const eceDetail = defineType({
    name : 'eceDetail',
    title : 'ECE Course Details',
    type : 'document',
    icon : BluetoothIcon,
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