import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import values from 'lodash.values'

export const formClassesMap = {
  // https://github.com/tailwindlabs/tailwindcss-forms
  // input type
  text: 'form-input',
  email: 'form-input',
  url: 'form-input',
  password: 'form-input',
  number: 'form-input',
  date: 'form-input',
  datetime: 'form-input',
  month: 'form-input',
  search: 'form-input',
  tel: 'form-input',
  time: 'form-input',
  week: 'form-input',
  checkbox: 'form-checkbox',
  radio: 'form-radio',
  // other
  textarea: 'form-textarea',
  select: 'form-select',
  multiselect: 'form-multiselect',
  // cva fallback
  false: null,
}

const getAllValuesFromObject = (obj: Record<string, string[] | string>) =>
  clsx(values(obj))

export const sharedDisabledCVA = {
  true: ['opacity-50', 'pointer-events-none'],
  false: null,
}

export const microInteractions = clsx(
  'transform',
  'transition-all',
  'duration-300',
  'ease-in-out'
)

export const roundness = {
  input: 'rounded-md',
}

export const sharedTextSizesBase = {
  sm: ['text-sm', 'sm:text-base'],
  md: ['text-base', 'sm:text-lg'],
  lg: ['text-lg', 'sm:text-xl'],
}

export const sharedTextSizesHeading = {
  sm: ['text-base', 'sm:text-lg'],
  md: ['text-lg', 'sm:text-xl'],
  lg: ['text-xl', 'sm:text-xl'],
}

export const sharedTextSizesDescription = {
  sm: ['text-[13px]', 'sm:text-xs'],
  md: ['text-xs', 'sm:text-sm'],
  lg: ['text-sm', 'sm:text-base'],
}

export const sharedSizeClassesCVA = {
  sm: ['h-7', 'px-2', ...sharedTextSizesBase.sm],
  md: ['h-8', 'px-3', ...sharedTextSizesBase.md],
  lg: ['h-10', 'px-4', ...sharedTextSizesBase.lg],
}

export const sharedSizeSquareCVA = {
  sm: ['h-4', 'w-4', ...sharedTextSizesBase.sm],
  md: ['h-5', 'w-5', ...sharedTextSizesBase.md],
  lg: ['h-6', 'w-6', ...sharedTextSizesBase.lg],
}

export const sharedReadOnlyCVA = {
  true: 'pointer-events-none',
  false: 'pointer-events-auto',
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

export const sharedErrorClasses = getAllValuesFromObject(error)

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
    getAllValuesFromObject(roundness),
    getAllValuesFromObject(invalid),
  ],
  checkable: [
    microInteractions,
    formClassesMap.checkbox,
    'text-primary-500',
    'checked:border-none',
    'dark:checked:bg-primary-500',
    'checked:bg-primary-500',
    'indeterminate:bg-primary-500',
    'cursor-pointer',
    'peer',
  ],
}

export const input = cva(
  [classes.input, 'peer', 'block', 'w-full', 'disabled:pointer-events-none'],
  {
    variants: {
      variant: {
        contained: [],
        outlined: [],
        text: [],
      },
      size: sharedSizeClassesCVA,
      iconLeft: { true: 'pl-10', false: 'pl-3' },
      iconRight: { true: 'pr-10', false: 'pr-3' },
      error: {
        true: sharedErrorClasses,
        false: null,
      },
      fillContent: {
        true: ['!p-0'],
        false: null,
      },
      type: formClassesMap,
    },
    defaultVariants: {
      size: 'md',
      variant: 'contained',
    },
  }
)

export const text = cva(microInteractions, {
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
      column: ['flex-col', 'gap-1', 'items-start'],
      row: ['flex-row', 'gap-2', 'items-center'],
    },
    disabled: sharedDisabledCVA,
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
      false: null,
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
    'absolute',
    'bottom-1/2',
    'transform',
    'translate-y-1/2',
    microInteractions,
    'inline-flex',
    'items-center',
  ],
  {
    variants: {
      position: {
        left: ['left-3'],
        right: ['right-3'],
      },
    },
  }
)

export const optionListClasses = cva(
  [
    'bg-white',
    'block',
    'shadow-md',
    'w-fit',
    'border',
    'rounded-md',
    'flex',
    'flex-col',
    'gap-1',
    'mt-1',
    'p-1',
    'dark:bg-gray-800',
    'dark:border-gray-700',
    'overflow-y-auto',
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
    'bg-info-100',
    'dark:text-info-300',
    'dark:bg-info-700',
    'px-1.5',
    'text-sm',
    'inline-flex',
    'gap-1',
    'items-center',
    'select-none',
  ],
  {
    variants: {},
  }
)

export const selectOptionClasses = cva(
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
    'group',
    'flex-shrink-0',
  ],
  {
    variants: {
      selected: {
        true: [
          'bg-primary-100/60',
          'dark:bg-primary-100/50',
          'hover:bg-primary-100',
          'hover:dark:bg-primary-100/60',
        ],
        false: [],
      },
      active: {
        true: ['bg-info-100', 'dark:bg-primary-100/25'],
        false: [],
      },
      multiple: { true: ['flex', 'gap-2'], false: [] },
      size: sharedSizeClassesCVA,
    },
    compoundVariants: [
      {
        selected: true,
        active: true,
        className: ['!bg-primary-100', '!dark:bg-primary-100/60'],
      },
    ],
  }
)

export const selectOptionIconClasses = cva(['font-extrabold', 'text-xl'], {
  variants: {
    selected: {
      true: ['opacity-100', '!text-primary-500', '!fill-primary-500'],
      false: ['opacity-0'],
    },
    active: { true: ['opacity-50'] },
  },
})
