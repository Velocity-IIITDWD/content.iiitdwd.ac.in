import { HeartPulse } from "lucide-react";
import { defineField, defineType } from "sanity";


export const dsaiCredit = defineType({
    name : 'dsaiCredit',
    title : 'DSAI Credit ',
    type : 'document',
    icon : HeartPulse,
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