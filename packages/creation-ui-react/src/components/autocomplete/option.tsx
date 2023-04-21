import { cva } from 'class-variance-authority'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface OptionsProps {
  item: any
  highlightedIndex: number
  index: number
  selectedItem: any
  getItemProps: (options: { item: any; index: number }) => any
}

const classes = cva(
  ['py-2 px-3 shadow-sm flex flex-col w-full', 'cursor-pointer'],
  {
    variants: {
      highlighted: { true: 'bg-primary-50' },
      selected: { true: 'font-bold' },
    },
  }
)

export const Option: FC<OptionsProps> = ({
  item,
  highlightedIndex,
  index,
  selectedItem,
  getItemProps,
}) => {
  return (
    <li
      className={twMerge(
        classes({
          highlighted: highlightedIndex === index,
          selected: selectedItem === item,
        })
      )}
      {...getItemProps({ item, index })}
    >
      <span>{item.label}</span>
      <span className='text-sm text-gray-700'>{item.value}</span>
    </li>
  )
}
