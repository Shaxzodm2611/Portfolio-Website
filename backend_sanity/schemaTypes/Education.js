import {defineField, defineType} from 'sanity';

export const education = defineType({
    name: 'Education',
    title: 'Education',
    type: 'document',
    fields: [
        defineField({
            name: 'institution',
            title: 'Institution',
            type: 'string',
        }),
        defineField({
            name: 'degree',
            title: 'Degree',
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