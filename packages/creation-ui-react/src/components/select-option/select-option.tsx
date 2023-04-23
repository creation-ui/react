import type React from 'react'
import { Icon } from '../icon'
import type { SelectOptionsType } from '../../types'
import { selectOption, selectOptionIcon } from './classes'

interface SelectOptionProps {
  option: SelectOptionsType
  selected?: boolean
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
  const label = typeof option === 'object' ? option.label : option

  return !multiple ? (
    <OptionSingle active={active} selected={selected}>
      {label}
    </OptionSingle>
  ) : (
    <OptionMultiple active={active} selected={selected}>
      {label}
    </OptionMultiple>
  )
}

SelectOption.displayName = 'SelectOption'
