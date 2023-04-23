import React, { forwardRef } from 'react'
import type { DropdownOption } from '../../../types'
import { Icon } from '../../icon'
import { selectOption, selectOptionIcon } from '../../../classes'

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
      className={selectOption({
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
        <Icon icon='check' className={selectOptionIcon({ selected, active })} />
      )}
      {option.label}
    </li>
  )
})
