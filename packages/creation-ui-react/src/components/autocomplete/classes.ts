import { cva } from 'class-variance-authority'

export const optionListClasses = cva(
  [
    'bg-white',
    'shadow-md',
    'w-fit',
    'max-h-80',
    'overflow-y-auto',
    'border',
    'rounded-md',
    'flex',
    'flex-col',
    'mt-1',
    'p-1',
  ],
  {
    variants: {
      open: { true: 'block', false: 'hidden' },
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

export const selectOption = cva(
  [
    'truncate',
    'dark:text-info-100',
    'font-normal',
    'relative',
    'cursor-pointer',
    'select-none',
    'text-info-800',
    'flex',
    'w-full',
    'items-center',
    'rounded-md',
    'px-2',
    'py-0.5',
    'mb-1',
    'group',
  ],
  {
    variants: {
      selected: {
        true: [],
        false: [],
      },
      active: {
        true: ['bg-primary-100/50', 'dark:text-info-900'],
        false: [],
      },
      multiple: { true: ['flex', 'gap-2'], false: [] },
    },
  }
)

export const selectOptionIcon = cva(['font-extrabold', 'text-xl'], {
  variants: {
    selected: {
      true: ['opacity-100', '!text-primary-500', '!fill-primary-500'],
      false: ['opacity-0'],
    },
    active: { true: ['opacity-50'] },
  },
})
