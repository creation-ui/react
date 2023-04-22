import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { optionClasses } from './classes'

interface OptionsProps {
  item: any
  highlightedIndex: number
  index: number
  selected?: boolean
  getItemProps: (options: { item: any; index: number }) => any
}

export const Option: FC<OptionsProps> = ({
  item,
  highlightedIndex,
  index,
  selected,
  getItemProps,
}) => {
  return (
    <li
      className={twMerge(
        optionClasses({
          highlighted: highlightedIndex === index,
          selected,
        })
      )}
      {...getItemProps({ item, index })}
    >
      <span>{item.label}</span>
      <span className='text-sm text-gray-700'>{item.value}</span>
    </li>
  )
}
