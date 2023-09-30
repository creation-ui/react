import { microInteractions } from '@creation-ui/core'
import { cva } from 'class-variance-authority'
import { twix } from '../utils'

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
      'bg-white',
      'dark:bg-info-800',
      'dark:border-info-700',
      'border',
      'p-4',
      'rounded-md',
    ],
    {
      variants: {
        size: {
          sm: ['w-72'],
          md: ['w-96'],
          lg: ['w-[406px]'],
        },
      },
    }
  ),
}

export const calendarDaysViewClasses = {
  day: cva(
    [
      //
      microInteractions,
      'cursor-pointer',
      'select-none',
      'justify-self-center',
      'bg-none',
      'flex',
      'items-center',
      'justify-center',
      //
      'text-center',

      'relative',
      '[&:has([aria-selected])]:bg-info-200',
      'first:[&:has([aria-selected])]:rounded-l-md',
      'last:[&:has([aria-selected])]:rounded-r-md',
      'hover:bg-info-300',
    ],
    {
      variants: {
        isToday: {
          true: ['border', 'border-info-500'],
          false: '',
        },
        isInRange: { true: 'bg-info-200', false: '' },
        isSelected: {
          true: [
            '!text-info-100',
            '!bg-info-500',
            'text-info-200',
            'hover:bg-info-600',
            'hover:text-info-300',
            'focus:bg-info-600',
          ],
        },
        isCurrentMonth: {
          true: ['text-info-900', 'dark:text-info-100'],
          false: ['text-info-400', 'dark:text-info-600'],
        },
        size: {
          sm: ['w-full', 'h-8', 'text-sm'],
          md: ['w-full', 'h-10', 'text-sm'],
          lg: ['w-full', 'h-12'],
        },
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
    }
  ),
}

export const calendarDaysViewTitleClasses = {
  day: cva(['select-none', 'justify-self-center'], {
    variants: {
      isToday: {
        true: '',
        false: '',
      },
      isWeekend: {
        true: '!text-error-500',
        false: '',
      },
    },
  }),
}

export const dayRowClasses = twix('grid', 'grid-cols-7')
