import { cva } from 'class-variance-authority'

export const optionListClasses = cva(
  [
    'bg-white',
    'shadow-md',
    'w-fit',
    'max-h-80',
    'overflow-y-auto',
    'p-0',
    'border',
    'rounded-md',
    'mt-2',
  ],
  {
    variants: {
      open: { true: 'block', false: 'hidden' },
    },
  }
)

export const optionClasses = cva(
  [
    //
    'py-2',
    'px-3',
    'shadow-sm',
    'flex',
    'flex-col',
    'w-full',
    'cursor-pointer',
  ],
  {
    variants: {
      highlighted: { true: 'bg-primary-50' },
      selected: { true: 'font-bold' },
    },
  }
)

export const selectedOptionClasses = cva(
  [
    'rounded-full',
    'text-info-800',
    'py-0.5',
    'px-1',
    'border',
    'bg-info-100',
    'border-info-200',
    'inline-flex',
    'gap-1',
    'items-center',
    'select-none',
  ],

  {
    variants: {},
  }
)
