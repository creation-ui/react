import { cva } from 'class-variance-authority'
import { sharedDisabledCVA } from '@creation-ui/core'
import { twMerge } from 'tailwind-merge'

export const rowGridClasses = ['grid', 'grid-flow-col']

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

export const sharedTableClasses = {
  divide: 'divide-y divide-gray-200 dark:divide-gray-700',
  border: 'border border-gray-200 dark:border-gray-700',
  frame: '', //'bg-gray-50 dark:bg-gray-900',
  fullwidth: 'inline-block w-full',
}

export const tableClasses = cva([
  sharedTableClasses.divide,
  sharedTableClasses.border,
  '!text-sm',
  'overflow-x-auto',
  'w-full',
  'min-h-full',
  'h-full',
  'relative',
])

export const headerClasses = twMerge(
  sharedTableClasses.frame,
  sharedTableClasses.fullwidth,
  'sticky',
  'top-0',
  'pt-6',
  'pb-3'
)

export const headerRowClasses = twMerge([rowGridClasses, 'align-middle'])

export const footerClasses = twMerge(
  sharedTableClasses.frame,
  sharedTableClasses.fullwidth,
  'sticky',
  'bottom-0'
)

export const bodyClasses = cva([
  sharedTableClasses.divide,
  sharedTableClasses.fullwidth,
  'overflow-y-scroll',
  'min-h-full',
])
