import { sharedDisabledCVA } from '@creation-ui/react/classes'

export const loaderClasses = {
  disabled: [
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
    'transform !opacity-0',
    'top-0',
    'left-0',
    'h-0',
    'w-0',
    'cursor-wait',
    'z-[600]',
  ],
  active: [],
}
const buttonBase = [
  'gap-2',
  'inline-flex',
  'flex-nowrap',
  'items-center',
  'cursor-pointer',
  'select-none',
  'justify-center',
  'overflow-hidden',
  'h-8',
  'px-5',
  'text-white',
  'bg-primary-500',
  'hover:bg-primary-600',
  'focus:bg-primary-600',
  'active:bg-primary-700',
  'rounded-md',
  'transform',
  'transition-all',
  'duration-300',
  'ease-in-out',
  'sm:text-base',
  'text-lg',
]
export const buttonClasses = {
  default: buttonBase,
  loading: {
    default: [...buttonBase, ...sharedDisabledCVA.true],
  },
}
