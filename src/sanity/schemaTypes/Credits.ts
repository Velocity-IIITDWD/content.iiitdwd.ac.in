import { ComputerIcon } from "lucide-react";
import { defineField, defineType } from "sanity";
import CreditIdInput from "../components/creditIdInput";

export const Credit = defineType({
    name: 'Credit',
    title: 'Credit',
    type: 'document',
    icon: ComputerIcon,
    fields: [
        defineField({
            name: "id",
            title: "ID",
            type: "string",
            description: "Generated based on Faculty Name. No need to edit.",
            initialValue: 'id',
            components: {
              input: CreditIdInput,
            },
        }),
        defineField({
            name: 'Degree',
            title: 'Degree',
            type: 'string',
            options: {
                list: [
                    { title: 'BTech', value: 'BTech' },
                    { title: 'MTech', value: 'MTech' },
                    { title: 'PhD', value: 'PhD' }
                ]
            },
        }),
        defineField({
            name: 'branch',
            title: 'Branch',
            type: 'string',
            options: {
                list: [
                    { title: 'CSE', value: 'CSE' },
                    { title: 'ECE', value: 'ECE' },
                    { title: 'DSAI', value: 'DSAI' }
                ]
            },
        }),
        defineField({
            name: 'courses',  // Fixed the typo 'cources' to 'courses'
            title: 'Courses',
            type: 'array',
            of: [
                defineField({
                    name: 'course',
                    title: 'Course',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'code',
                            title: 'Code',
                            type: 'string',
                            description: 'Semester Code'
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            description: 'Course Title'
                        }),
                        defineField({
                            name: 'credit',
                            title: 'Credit',
                            type: 'string', // You can change it to 'object' if you need a specific structure
                            description: 'Credit Structure'
                        }),
                        defineField({
                            name: 'preReq',
                            title: 'Pre Requisite',
                            type: 'string',
                            description: 'Pre Requisite of the Course'
                        }),
                    ]
                })
            ]
        })
    ]
});
