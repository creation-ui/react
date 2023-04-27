import React, { forwardRef } from 'react'
import { OptionProps } from '../../../types'
import { selectOptionClasses } from '../../../classes'

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
      {option.label}
    </li>
  )
})
