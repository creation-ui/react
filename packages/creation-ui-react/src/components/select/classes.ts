import { cva } from 'class-variance-authority'

export const select = {
  container: {
    input: ['relative', 'mt-1'],
  },
  input: ['relative', 'cursor-pointer', 'pl-3', 'pr-10'],
  value: ['block', 'truncate', 'text-left'],
  hiddenCount: [
    'border',
    'border-primary-400',
    'bg-primary-300/50',
    'text-primary-500',
    'dark:border-primary-700',
    'dark:text-primary-700',
    'dark:bg-primary-200',
    'rounded-full',
    'px-2',
  ],
  clearButton: [
    'absolute',
    'inset-y-0',
    'right-0',
    'flex',
    'text-xl',
    'font-extrabold',
    'items-center',
    'pr-7',
    'cursor-pointer',
  ],
  buttons: {
    base: [
      'absolute',
      'inset-y-0',
      'right-0',
      'flex',
      'text-xl',
      'font-extrabold',
      'items-center',
      'cursor-pointer',
    ],
    clear: ['pr-7'],
    chevron: ['pr-2', 'z-10'],
  },
  list: [
    'absolute',

    'max-h-52',
    'overflow-y-auto',
    'px-2',
    'py-2',
    'min-w-fit',
    'rounded-md',
    'bg-white',
    'dark:bg-info-800',
    'text-base',
    'shadow-lg',
    'ring-1',
    'ring-info-900',
    'ring-opacity-5',
    'focus:outline-none',
    'w-full',
  ],
  notFound: [
    'relative',
    'cursor-default',
    'text-center',
    'select-none',
    'py-2',
    'px-4',
    'text-info-700',
    'dark:text-info-300',
  ],
}

export const selectContainer = cva(['w-full'], {
  variants: {
    size: {
      sm: ['h-10'],
      md: ['h-14'],
      lg: ['h-16'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const selectChevron = cva(
  ['text-info-400', 'ease-in-out', 'duration-300', 'hover:text-info-800'],
  {
    variants: {
      open: {
        true: ['rotate-180'],
      },
    },
  }
)
