import { cva } from 'class-variance-authority'
import type { BoxProps } from './box.types'

const box = cva([], {
  variants: {
    body: {
      base: [
        'flex',
        'justify-center',
        'bg-zinc-50',
        'dark:bg-zinc-900',
        'dark:text-zinc-50',
        'rounded-lg',
      ],
    },
    content: {
      base: [
        'block',
        'p-5',
        'rounded-lg',
        'shadow-lg',
        'bg-gray-50',
        'dark:bg-gray-800',
        'dark:text-gray-50',
      ],
    },
    border: {
      true: ['border', 'border-zinc-100', 'dark:border-zinc-800'],
      false: [],
    },
  },
})

export const Box = ({ children, className, border = true }: BoxProps) => {
  return (
    <div className={box({ body: 'base', className, border })}>
      <div className={box({ content: 'base' })}>{children}</div>
    </div>
  )
}
