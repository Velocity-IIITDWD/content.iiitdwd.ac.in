import { ComputerIcon } from "lucide-react";
import { defineField, defineType } from "sanity";


export const cseCredit = defineType({
    name : 'cseCredit',
    title : 'CSE Credit ',
    type : 'document',
    icon : ComputerIcon,
    fields : [
        defineField({
            name : "courses",
            title : "Courses",
            type : "array",
            of : [
                defineField({
                    name : 'code',
                    title : 'Code',
                    type : 'string',
                    description : 'Semester Code'
                }),
                defineField({
                    name : 'title',
                    title : 'Title',
                    type : 'string',
                    description : 'Course Title'
                }),
                defineField({
                    name : 'credit',
                    title : 'Credit',
                    type : 'string',
                    description : 'Credit Structure'
                }),
                defineField({
                    name : 'preReq',
                    title : 'Pre Requiste',
                    type : 'string',
                    description : 'Pre Requisite of the Course'
                }),
            ]
        })

    ]
})