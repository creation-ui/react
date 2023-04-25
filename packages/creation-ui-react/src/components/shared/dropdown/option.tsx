import React, { forwardRef } from 'react'
import type { DropdownOption } from '../../../types'
import { Icon } from '../../icon'
import { selectOptionClasses, selectOptionIconClasses } from '../../../classes'

interface OptionProps {
  active: boolean
  selected?: boolean
  option: DropdownOption
  multiple?: boolean
}

export const Option = forwardRef<
  HTMLLIElement,
  OptionProps & React.HTMLProps<HTMLLIElement>
>(({ option, multiple, active, selected, ...rest }, ref) => {
  return (
    <li
      className={selectOptionClasses({
        active,
        selected,
        multiple,
      })}
      ref={ref}
      role='option'
      aria-selected={selected}
      {...rest}
    >
      {multiple && (
        <Icon icon='check' className={selectOptionIconClasses({ selected, active })} />
      )}
      {option.label}
    </li>
  )
})

export type OptionComponentType = typeof Option
