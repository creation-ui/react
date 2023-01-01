import { cva } from 'class-variance-authority'

export const sharedDisabledCVA = { true: ['opacity-50', 'cursor-not-allowed'] }

export const shared = {
  error: {
    text: [
      //
      'dark:text-error-400',
      'text-error-600',
      'select-none',
    ],
  },
  required: [
    //
    "after:content-['*']",
    'after:ml-0.5',
    'after:text-error-500',
  ],
  label: [
    // "peer-required:after:content-['*']",
    // 'peer-required:after:ml-0.5',
    // 'peer-required:after:text-error-500',
    'select-none',
    'block',
  ],
  loaderInputPosition: [
    /*
     * TODO: loader shouldn't be inside field. Maybe after label? Good for handling Radios, Checkboxes, etc.
     */
    'absolute',
    'right-0',
    'top-1/2',
    'transform',
    '-translate-y-1/2',
  ],
}

export const input = cva(
  [
    'peer',
    'bg-transparent',
    'block',
    'border-zinc-400',
    'border',
    'dark:bg-zinc-900',
    'dark:border-zinc-400',
    'focus:border-primary-300',
    'focus:dark:border-primary-400',
    'focus:dark:ring-primary-300',
    'focus:invalid:border-error-500',
    'focus:invalid:ring-error-200',
    'focus:ring-opacity-50',
    'focus:ring-primary-200',
    'focus:ring',
    'invalid:border-error-500',
    'invalid:ring-error-200',
    'dark:invalid:border-error-400',
    'dark:invalid:ring-error-200',
    'rounded-md',
    'w-full',
    'disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        contained: [],
        outlined: [],
        text: [],
      },
      size: {
        sm: ['h-8', 'px-2'],
        md: ['h-10', 'px-3'],
        lg: ['h-12', 'px-4'],
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'contained',
    },
  }
)

export const text = cva([], {
  variants: {
    size: {
      sm: ['sm:text-sm', 'text-base'],
      md: ['sm:text-base', 'text-lg'],
      lg: ['sm:text-lg', 'text-xl'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const inputContainer = cva(['flex', 'relative'], {
  variants: {
    layout: {
      column: ['flex-col', 'gap-1'],
      row: ['flex-row', 'gap-2'],
    },
    disabled: sharedDisabledCVA,
    error: {
      true: shared.error.text,
    },
  },
  defaultVariants: {
    layout: 'column',
  },
})

export const label = cva(shared.label, {
  variants: {
    size: {
      sm: ['mb-1'],
      md: ['mb-1'],
      lg: ['mb-1'],
    },
    required: {
      true: shared.required,
      false: [],
    },
  },
  defaultVariants: {
    size: 'md',
    required: false,
  },
})
