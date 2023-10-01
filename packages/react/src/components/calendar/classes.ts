import { microInteractions } from '@creation-ui/core'
import { cva } from 'class-variance-authority'
import { twix } from '../utils'

export const headerClasses = [
  '!text-lg',
  'font-semibold',
  'capitalize ',
  'text-primary-900',
  'dark:text-primary-200',
]

export const calendarClasses = {
  container: cva(
    [
      microInteractions,
      'bg-white',
      'dark:bg-primary-800',
      'dark:border-primary-700',
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
      'rounded-md',
      'hover:bg-primary-300',
    ],
    {
      variants: {
        isToday: {
          true: ['font-bold'],
          false: '',
        },
        isInRange: {
          true: [
            //
            'bg-primary-50/50',
            'rounded-none',
            'first:rounded-l-md',
            'last:rounded-r-md',
          ],
          false: '',
        },
        isSelected: {
          true: [
            '!text-info-100',
            '!bg-primary-500',
            'hover:bg-primary-600',
            'hover:text-primary-300',
            'focus:bg-primary-600',
          ],
        },
        isStart: {
          true: ['rounded-l-md'],
          false: '',
        },
        isEnd: {
          true: ['rounded-r-md'],
          false: '',
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
