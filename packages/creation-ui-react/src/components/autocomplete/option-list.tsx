import { cva } from 'class-variance-authority'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { Option } from './option'

interface OptionListProps {
  open: boolean
  menuProps: any
  options: any[]
  highlightedIndex: number
  selectedItems: any
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
  selectedItems,
  getItemProps,
}) => {
  const selectedIds = selectedItems.map(item => item.id)
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
        (options?.length ? (
          options?.map?.((item, index) => (
            <Option
              item={item}
              highlightedIndex={highlightedIndex}
              index={index}
              selected={selectedIds.includes(item.id)}
              getItemProps={getItemProps}
              key={item.id}
            />
          ))
        ) : (
          <li
            className={'py-2 px-3 w-full  text-center'}
          >
            No results found
          </li>
        ))}
    </ul>
  )
}
