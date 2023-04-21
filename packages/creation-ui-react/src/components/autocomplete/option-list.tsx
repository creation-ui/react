import { cva } from 'class-variance-authority'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { Option } from './option'

interface OptionListProps {
  open: boolean
  menuProps: any
  options: any[]
  highlightedIndex: number
  selectedItem: any
  getItemProps: (options: { item: any; index: number }) => any
}

const classes = cva(
  [
    'absolute bg-white shadow-md w-full max-h-80 overflow-y-auto p-0 border rounded-md left-0 top-8',
  ],
  {
    variants: {
      open: { true: 'block', false: 'hidden' },
    },
  }
)

export const OptionList: FC<OptionListProps> = ({
  open,
  menuProps,
  options,
  highlightedIndex,
  selectedItem,
  getItemProps,
}) => {
  return (
    <ul
      className={twMerge(
        classes({
          open,
        })
      )}
      {...menuProps}
    >
      {open &&
        options?.map?.((item, index) => (
          <Option
            item={item}
            highlightedIndex={highlightedIndex}
            index={index}
            selectedItem={selectedItem}
            getItemProps={getItemProps}
            key={`${item.value}${index}`}
          />
        ))}
    </ul>
  )
}
