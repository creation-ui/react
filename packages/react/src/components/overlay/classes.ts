import { cva } from 'class-variance-authority'

export const overlay = cva(
  [
    'absolute',
    'bg-black',
    'transition',
    'duration-300',
    'ease-in-out',
    'flex',
    'justify-center',
    'place-items-center',
    'select-none',
    'overflow-clip',
    'transform',
  ],
  {
    variants: {
      visible: {
        true: ['opacity-50', 'dark:opacity-50', 'inset-0', 'h-full', 'w-full'],
        false: ['!opacity-0', 'top-0', 'left-0', 'h-0', 'w-0'],
      },
      cursorWait: {
        true: ['cursor-wait'],
        false: ['cursor-default'],
      },
    },
  }
)
