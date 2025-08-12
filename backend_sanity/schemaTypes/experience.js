import {defineField, defineType} from 'sanity';

export const experience = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'start',
            title: 'Start Date',
            type: 'date',
        }),
        defineField({
            name: 'end',
            title: 'End Date',
            type: 'date',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
    ]
});
