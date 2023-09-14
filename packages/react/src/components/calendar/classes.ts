import { cva } from 'class-variance-authority'
import { microInteractions, sharedSizeClassesCVA } from '@creation-ui/core'

export const headerClasses = [
  '!text-lg',
  'font-semibold',
  'capitalize ',
  'text-info-900',
  'dark:text-info-200',
]

export const calendarClasses = {
  container: cva(
    [
      microInteractions,
      'bg-white dark:bg-info-800 dark:border-info-700 border p-4 rounded-md',
    ],
    {
      variants: {
        size: {
          sm: ['w-72', 'h-72'],
          md: ['w-96', 'h-80'],
          lg: ['w-[406px]', 'h-96'],
        },
      },
    }
  ),
}

export const calendarDaysViewClasses = {
  day: cva(['w-full'], {
    variants: {
      isToday: {
        true: '',
        false: '',
      },
      isSelected: {
        true: '!text-info-100',
      },
      isCurrentMonth: {
        true: 'text-info-900 dark:text-info-100',
        false: 'text-info-400 dark:text-info-600',
      },
      size: sharedSizeClassesCVA,
      isWeekend: {
        true: '!text-error-500',
        false: '',
      },
    },
    defaultVariants: {
      isSelected: false,
      isToday: false,
      isCurrentMonth: true,
      isWeekend: true,
    },
    compoundVariants: [
      {
        isSelected: true,
        isWeekend: true,
        isCurrentMonth: true,
        className: '!text-info-100',
      },
    ],
  }),
}
