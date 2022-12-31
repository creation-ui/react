import { Icon } from '@components/icon'
import { AutocompleteOptionsType, SelectOptionsType } from '@types'
import clsx from 'clsx'
import React from 'react'

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
  <span
    className={clsx(
      'dropdown--option',
      selected && 'dropdown--option-selected',
      active && 'dropdown--option-active',
      'group'
    )}
  >
    {value}
  </span>
)
const OptionMultiple = ({
  selected,
  active,
  children: value,
}: OptionElement) => (
  <span
    className={clsx(
      'dropdown--option',
      'dropdown--option--multiple',
      selected && 'dropdown--option--multiple-selected',
      active && 'dropdown--option-active',
      'group'
    )}
  >
    <Icon
      icon='check'
      className={clsx(
        'dropdown--option--multiple-icon',
        selected && 'dropdown--option--multiple-icon-selected',
        active && 'dropdown--option--multiple-icon-active'
      )}
    />
    {value}
  </span>
)

const SelectOption = (props: SelectOptionProps) => {
  const { selected, active, option, multiple } = props
  const value = typeof option === 'object' ? option.value : option
  console.log(value)

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

export default SelectOption
