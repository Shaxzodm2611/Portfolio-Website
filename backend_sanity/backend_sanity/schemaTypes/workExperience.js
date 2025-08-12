import {defineField, defineType} from 'sanity';

export const workExperience = defineType({
    name: 'Work Experience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'start',
            title: 'Start',
            type: 'date',
        }),
        defineField({
            name: 'end',
            title: 'End',
            type: 'date',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
    ]
});

