import { cva } from 'class-variance-authority'

export const typography = cva(
  ['block', 'antialiased', 'tracking-normal', 'font-sans'],
  {
    variants: {
      typing: {
        h1: ['text-5xl', 'font-semibold', 'leading-tight'],
        h2: ['text-4xl', 'font-semibold', 'leading-[1.3]'],
        h3: ['text-3xl', 'font-semibold', 'leading-snug'],
        h4: ['text-2xl', 'font-semibold', 'leading-snug'],
        h5: ['text-xl', 'font-semibold', 'leading-snug'],
        h6: ['text-base', 'font-semibold', 'leading-relaxed'],
        lead: ['text-xl', 'font-normal', 'leading-relaxed'],
        paragraph: ['text-base', 'font-light', 'leading-relaxed'],
        small: ['text-sm', 'font-light', 'leading-normal'],
      },
    },
    defaultVariants: {
      typing: 'paragraph',
    },
  }
)
