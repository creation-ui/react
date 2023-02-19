import { cva } from 'class-variance-authority'
import { sharedDisabledCVA } from '../../classes'

export const sortIconClasses = cva(
  [
    'text-gray-400',
    'ease-in-out',
    'duration-300',
    'hover:text-gray-800',
    'dark:hover:text-gray-200',
  ],
  {
    variants: {
      desc: {
        true: ['rotate-180'],
        false: [],
      },
    },
  }
)

export const paginationClasses = cva(
  [
    'relative',
    'cursor-pointer',
    'inline-flex',
    'items-center',
    'px-4',
    'py-2',
    'text-sm',
    'font-medium',
    'text-gray-700',
    'dark:text-gray-200',
    'hover:bg-gray-50',
  ],
  {
    variants: {
      current: {
        true: [
          'z-10',
          'bg-primary-50',
          'border-primary-500',
          'text-primary-600',
        ],
        false: [],
      },
      disabled: sharedDisabledCVA,
    },
  }
)
