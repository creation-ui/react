import { ELEMENT_SIZES } from '@creation-ui/core'
import { Select, SelectProps } from '@creation-ui/select'
import { DocumentedProperty } from 'models/system'
import React, { useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
import { options } from './data'

type Option = typeof options[0]

export const SelectExample = ({ ...props }: SelectProps) => {
  const [selection, setSelection] = useState<Option | never>(options[0])

  return (
    <Select
      options={options}
      label={props.label}
      value={selection}
      onChange={setSelection}
      {...props}
    />
  )
}
export const SelectMultipleExample = ({
  label = 'Select multiple',
  ...props
}: SelectProps) => {
  const [selection, setSelection] = useState<Option[] | never>([
    options[0],
    options[3],
  ])

  return (
    <Select
      options={options}
      label={label}
      value={selection}
      multiple
      onChange={setSelection}
      {...props}
    />
  )
}

const multipleWarning = (
  <>
    If multiple is set, the type of <code>value</code> will be <code>T[]</code>
  </>
)

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
    type: 'SelectOptionsType[]',
    defaultValue: '[]',
  },
  {
    description: 'Functional component returning ReactNode to display option',
    name: 'optionComponent',
    type: '((option: any) => React.ReactNode) | ((props: SelectOptionProps) => JSX.Element)',
  },
  {
    description: 'Default value to display when component is not controlled',
    name: 'defaultValue',
    type: 'SelectOptionsType',
  },
  {
    description: 'Current value of component',
    name: 'value',
    type: 'SelectOptionsType',
    note: multipleWarning,
  },
  {
    name: 'onChange',
    type: '(value: SelectOptionsType | SelectOptionsType[]) => void',
    description: 'Change event callback',
    note: multipleWarning,
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
    type: 'SelectOptionsType',
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
