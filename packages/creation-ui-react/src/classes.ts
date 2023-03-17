import { cva } from 'class-variance-authority'
import clsx from 'clsx'

export const sharedDisabledCVA = {
  true: [
    //
    'opacity-50',
    'pointer-events-none',
  ],
}

export const microInteractions = clsx(
  'transform',
  'transition-all',
  'duration-300',
  'ease-in-out'
)

const loaderClasses = cva(['absolute', 'top-0', 'right-0', microInteractions], {
  variants: {
    loading: {
      true: ['opacity-100', 'pointer-events-none'],
      false: ['opacity-0', 'pointer-events-auto'],
    },
  },
  defaultVariants: {
    loading: false,
  },
})

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
  loaderInputPosition: loaderClasses,
  input: [
    microInteractions,
    'border-zinc-400',
    'border',
    'dark:bg-zinc-900',
    'dark:border-zinc-400',
    'focus:ring-offset-0',
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
    'bg-white',
    'rounded-md',
  ],
  checkable: [
    microInteractions,
    'text-primary-500',
    'checked:border-none',
    'dark:checked:bg-primary-500',
    'cursor-pointer',
    'peer',
  ],
}

export const input = cva(
  [shared.input, 'peer', 'block', 'w-full', 'disabled:pointer-events-none'],
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
      iconLeft: { true: 'pl-10', false: 'pl-3' },
      iconRight: { true: 'pr-10', false: 'pr-3' },
    },
    defaultVariants: {
      size: 'md',
      variant: 'contained',
    },
  }
)

export const text = cva([microInteractions], {
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

export const helperTextClasses = cva(['text-gray-500', 'dark:text-gray-300'], {
  variants: {
    size: {
      sm: ['text-xs', '-mt-1'],
      md: ['text-sm', '-mt-1'],
      lg: ['text-sm', '-mt-2'],
    },
  },
})

export const inputContainer = cva([microInteractions, 'flex', 'relative'], {
  variants: {
    layout: {
      column: ['flex-col', 'gap-1'],
      row: ['flex-row', 'gap-2', 'items-center'],
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

export const label = cva([...shared.label], {
  variants: {
    size: {
      sm: [],
      md: [],
      lg: [],
    },
    required: {
      true: shared.required,
    },
    for: {
      checkbox: ['inline-flex', 'items-center', 'cursor-pointer'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const inputIcon = cva(
  [
    //
    'absolute',
    'bottom-1/2',
    'transform',
    'translate-y-1/2',
    microInteractions,
  ],
  {
    variants: {
      position: {
        //
        left: ['left-3'],
        right: ['right-3'],
      },
    },
  }
)
