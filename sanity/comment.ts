
import { defineField, defineType } from 'sanity';

export const comment= defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      description: "Comments won't show on the site without approval",
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      type: 'text',
    }),
    defineField({
      name: 'post',
      type: 'reference',
      to: { type: 'post' },
    }),
  ],
});
