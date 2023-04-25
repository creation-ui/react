import React, { forwardRef } from 'react'
import type { DropdownOption, ElementSize } from '../../../types'
import { Icon } from '../../icon'
import { selectOptionClasses, selectOptionIconClasses } from '../../../classes'

interface OptionProps {
  active: boolean
  selected?: boolean
  option: DropdownOption
  multiple?: boolean
  size?: ElementSize
}

export const Option = forwardRef<
  HTMLLIElement,
  OptionProps & React.HTMLProps<HTMLLIElement>
>(({ option, multiple, active, selected, size, ...rest }, ref) => {
  return (
    <li
      className={selectOptionClasses({
        active,
        selected,
        multiple,
        size,
      })}
      ref={ref}
      role='option'
      aria-selected={selected}
      {...rest}
    >
      {/* {multiple && (
        <Icon icon='check' className={selectOptionIconClasses({ selected, active })} />
      )} */}
      {option.label}
    </li>
  )
})

export type OptionComponentType = typeof Option
