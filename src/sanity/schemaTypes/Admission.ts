import { Link2Icon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const descriptionStructure = defineType({
  name: 'descriptionStructure',
  title: 'Description Structure',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});

export const linksStructure = defineType({
  name: 'linksStructure',
  title: 'Links Structure',
  type: 'document',
  icon : Link2Icon,
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'linkStructure' }] }],
    }),
  ],
});

export const seatStructure = defineType({
  name: 'seatStructure',
  title: 'Seat Structure',
  type: 'document',
  fields: [
    defineField({
      name: 'instituteCode',
      title: 'Institute Code',
      type: 'number',
    }),
    defineField({
      name: 'instituteName',
      title: 'Institute Name',
      type: 'string',
    }),
    defineField({
      name: 'programs',
      title: 'Programs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'code',
              title: 'Program Code',
              type: 'number',
            }),
            defineField({
              name: 'name',
              title: 'Program Name',
              type: 'string',
            }),
            defineField({
              name: 'seatPoolQuota',
              title: 'Seat Pool Quota',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Quota Name',
                      type: 'string',
                    }),
                    defineField({
                      name: 'seatPoolGender',
                      title: 'Seat Pool Gender',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'name',
                              title: 'Gender',
                              type: 'string',
                            }),
                            defineField({
                              name: 'open',
                              title: 'Open',
                              type: 'number',
                            }),
                            defineField({
                              name: 'open_pwd',
                              title: 'Open PWD',
                              type: 'number',
                            }),
                            defineField({
                              name: 'gen_ews',
                              title: 'GEN EWS',
                              type: 'number',
                            }),
                            defineField({
                              name: 'gen_ews_pwd',
                              title: 'GEN EWS PWD',
                              type: 'number',
                            }),
                            defineField({
                              name: 'sc',
                              title: 'SC',
                              type: 'number',
                            }),
                            defineField({
                              name: 'sc_pwd',
                              title: 'SC PWD',
                              type: 'number',
                            }),
                            defineField({
                              name: 'st',
                              title: 'ST',
                              type: 'number',
                            }),
                            defineField({
                              name: 'st_pwd',
                              title: 'ST PWD',
                              type: 'number',
                            }),
                            defineField({
                              name: 'obc_ncl',
                              title: 'OBC NCL',
                              type: 'number',
                            }),
                            defineField({
                              name: 'obc_ncl_pwd',
                              title: 'OBC NCL PWD',
                              type: 'number',
                            }),
                            defineField({
                              name: 'total',
                              title: 'Total',
                              type: 'number',
                            }),
                          ],
                        },
                      ],
                    }),
                    defineField({
                      name: 'seatCapacity',
                      title: 'Seat Capacity',
                      type: 'number',
                    }),
                    defineField({
                      name: 'femaleSupernumerary',
                      title: 'Female Supernumerary',
                      type: 'number',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'total',
      title: 'Total Seats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'ID',
              type: 'string',
            }),
            defineField({
              name: 'qty',
              title: 'Quantity',
              type: 'number',
            }),
          ],
        },
      ],
    }),
  ],
});