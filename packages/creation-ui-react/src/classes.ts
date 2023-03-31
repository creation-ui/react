import { cva } from 'class-variance-authority'
import clsx from 'clsx'

export const sharedDisabledObject = {
  true: ['opacity-50', 'pointer-events-none'],
  false: null,
}

export const microInteractions = clsx(
  'transform',
  'transition-all',
  'duration-300',
  'ease-in-out'
)

export const sharedSizeClassesObject = {
  sm: ['h-7', 'px-2', 'sm:text-sm', 'text-base'],
  md: ['h-8', 'px-3', 'sm:text-base', 'text-lg'],
  lg: ['h-10', 'px-4', 'sm:text-lg', 'text-xl'],
}

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

export const invalid = {
  text: ['dark:invalid:text-error-400', 'invalid:text-error-600'],
  ring: [
    '!dark:invalid:ring-error-200',
    '!focus:invalid:ring-error-200',
    '!invalid:ring-error-200',
  ],
  border: [
    '!dark:invalid:border-error-400',
    '!invalid:border-error-500',
    '!focus:invalid:border-error-500',
  ],
}
export const error = {
  text: ['!dark:text-error-400', '!text-error-600'],
  ring: ['!dark:ring-error-200', '!focus:ring-error-200', '!ring-error-200'],
  border: [
    '!dark:border-error-400',
    '!border-error-500',
    '!focus:border-error-500',
  ],
}

export const classes = {
  required: ["after:content-['*']", 'after:ml-0.5', 'after:text-error-500'],
  label: ['select-none', 'block'],
  loaderInputPosition: loaderClasses,
  input: [
    // microInteractions,
    'border',
    'border-info-400',
    'dark:bg-info-900',
    'dark:border-info-700',
    'focus:ring-offset-0',
    'focus:border-primary-300',
    'focus:dark:border-primary-400',
    'focus:dark:ring-primary-300',
    'focus:ring-opacity-50',
    'focus:ring-primary-200',
    'focus:ring',
    'bg-white',
    'rounded-md',
    invalid.ring,
    invalid.border,
    invalid.text,
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
  [
    //
    classes.input,
    'peer',
    'block',
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
      size: sharedSizeClassesObject,
      iconLeft: { true: 'pl-10', false: null },
      iconRight: { true: 'pr-10', false: null },
      error: {
        true: clsx(error.border, error.ring, error.text),
        false: null,
      },
      fillContent: {
        true: ['!p-0'],
        false: ['!p-1'],
      },
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

export const helperTextClasses = cva(
  [microInteractions, 'text-gray-500', 'dark:text-gray-300'],
  {
    variants: {
      size: {
        sm: ['text-xs'],
        md: ['text-sm'],
        lg: ['text-sm'],
      },
      error: {
        true: error.text,
        false: [],
      },
    },
  }
)

export const inputContainer = cva([microInteractions, 'flex', 'relative'], {
  variants: {
    layout: {
      column: ['flex-col', 'gap-1'],
      row: ['flex-row', 'gap-2', 'items-center'],
    },
    disabled: sharedDisabledObject,
    error: {
      true: error.text,
    },
  },
  defaultVariants: {
    layout: 'column',
  },
})

export const label = cva([...classes.label], {
  variants: {
    size: {
      sm: [],
      md: [],
      lg: [],
    },
    required: {
      true: classes.required,
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
  ['absolute', 'bottom-1/2', 'transform', 'translate-y-1/2', microInteractions],
  {
    variants: {
      position: {
        left: ['left-3'],
        right: ['right-3'],
      },
    },
  }
)
