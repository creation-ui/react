import { cva } from 'class-variance-authority'

export const selectOption = cva(
  [
    'truncate',
    'dark:text-zinc-100',
    'font-normal',
    'relative',
    'cursor-pointer',
    'select-none',
    'text-zinc-900',
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
        true: ['bg-primary-500', 'hover:text-white', 'text-white'],
        false: [],
      },
      active: {
        true: ['bg-primary-100', 'text-inherit', 'dark:text-zinc-900'],
        false: [],
      },

      multiple: { true: ['flex', 'gap-2'], false: [] },
    },
    compoundVariants: [
      {
        multiple: true,
        selected: true,
        className: [
          //
          'bg-inherit',
          'hover:bg-primary-100',
          'text-inherit',
          'hover:text-inherit',
        ],
      },
    ],
  }
)

export const selectOptionIcon = cva(['font-extrabold', 'text-xl'], {
  variants: {
    selected: {
      true: ['!text-primary-500', 'opacity-100'],
      false: ['opacity-0'],
    },
    active: { true: ['opacity-50', 'text-inherit'] },
  },
})
