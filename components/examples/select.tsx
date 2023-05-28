import { ELEMENT_SIZES } from '@creation-ui/react'
import { Select, DropdownProps, DropdownOptionType } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import React, { useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
import { options } from './data'

export const SelectExample = ({ ...props }: DropdownProps) => {
  const [selection, setSelection] = useState<DropdownOptionType[]>([options[0]])

  return (
    <Select
      options={options}
      label={props.label}
      value={selection}
      clearable
      placeholder='Select value'
      onChange={setSelection as any}
      {...props}
    />
  )
}
export const SelectMultipleExample = ({
  label = 'Select multiple',
  ...props
}: DropdownProps) => {
  const [selection, setSelection] = useState<DropdownOptionType[] | null>([
    options[0],
    options[3],
  ])

  return (
    <Select
      options={options}
      label={label}
      value={selection}
      multiple
      placeholder='Select multiple'
      onChange={setSelection as any}
      {...props}
    />
  )
}

export const properties: DocumentedProperty[] = [
  { description: 'Element id', name: 'id', type: 'string' },
  {
    description: 'Label',
    name: 'label',
    type: 'React.ReactNode',
  },
  {
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'md',
    description: 'Size of element',
  },
  {
    description: 'Placeholder',
    name: 'placeholder',
    type: 'string | string[]',
  },
  {
    description: 'Class names to add to wrapper component',
    name: 'className',
    type: 'string | string[]',
  },
  {
    description: 'List available options',
    name: 'options',
    type: 'DropdownOption[]',
    defaultValue: '[]',
  },
  {
    description: 'Functional component returning ReactNode to display option',
    name: 'optionComponent',
    type: '((option: any) => React.ReactNode) | ((props: DropdownOption) => JSX.Element)',
  },
  {
    description: 'Default value to display when component is not controlled',
    name: 'defaultValue',
    type: 'DropdownOption',
  },
  {
    description: 'Current value of component',
    name: 'value',
    type: 'DropdownOption',
  },
  {
    name: 'onChange',
    type: '(value: DropdownOption[]) => void',
    description: 'Change event callback',
  },
  {
    description: 'Disabled',
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    description: 'Allow selection of multiple values',
    name: 'multiple',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    name: 'highlightSearch',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Highlight search in options',
    experimental: true,
  },
  {
    description: 'Error text displayed under the component.',
    name: 'error',
    type: 'string',
    note: 'When set, the component is styled as having errors.',
  },
]

export const selectOptionComponent: DocumentedProperty[] = [
  {
    description: 'Option value',
    name: 'option',
    type: 'DropdownOption',
  },
  {
    description: 'Is option selected?',
    name: 'selected',
    type: 'boolean',
  },
  {
    description: 'Is option active?',
    name: 'active',
    type: 'boolean',
  },
  {
    description: 'Is option disabled?',
    name: 'disabled',
    type: 'boolean',
  },
  {
    description: (
      <>
        <code>multiple</code> prop passed from parent. Using this flag we may
        style component in the <code>multiple</code> mode with e.g. checkmark
      </>
    ),
    name: 'multiple',
    type: 'boolean',
  },
]

export const selectOptionType: DocumentedProperty[] = [
  { name: 'value', type: 'React.ReactNode', description: 'Value' },
  {
    name: 'id',
    type: 'React.ReactNode',
    description: 'ID of element used as `key`',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Is option available to select',
  },
]
