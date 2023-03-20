import type React from 'react'
import { Icon } from '../icon'
import type { AutocompleteOptionsType, SelectOptionsType } from '../../types'
import { selectOption, selectOptionIcon } from './classes'

interface SelectOptionProps {
  option: SelectOptionsType | AutocompleteOptionsType
  selected?: boolean
  disabled?: boolean
  active?: boolean
  multiple?: boolean
}

interface OptionElement {
  selected?: boolean
  active?: boolean
  children: React.ReactNode
}

const OptionSingle = ({ selected, active, children: value }: OptionElement) => (
  <span className={selectOption({ selected, active })}>{value}</span>
)

const OptionMultiple = ({ selected, active, children }: OptionElement) => (
  <span className={selectOption({ selected, active, multiple: true })}>
    <Icon icon='check' className={selectOptionIcon({ selected, active })} />
    {children}
  </span>
)

export const SelectOption: React.FC<SelectOptionProps> = props => {
  const { selected, active, option, multiple } = props
  const value = typeof option === 'object' ? option.value : option

  return !multiple ? (
    <OptionSingle active={active} selected={selected}>
      {value}
    </OptionSingle>
  ) : (
    <OptionMultiple active={active} selected={selected}>
      {value}
    </OptionMultiple>
  )
}

SelectOption.displayName = 'SelectOption'
