import { ELEMENT_SIZES } from '@creation-ui/react/types'
import { Autocomplete, AutocompleteProps } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import React, { useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
import { options } from './data'

type Option = typeof options[0]

export const AutocompleteExample = ({ ...props }: AutocompleteProps) => {
  const [value, setValue] = useState<Option | never>(options[0])

  return (
    <Autocomplete
      options={options}
      label={props.label}
      value={value}
      onChange={setValue}
      {...props}
    />
  )
}
export const AutocompleteMultipleExample = ({
  label = 'Autocomplete multiple',
  ...props
}: AutocompleteProps) => {
  const [value, setValue] = useState<Option[]>([options[0], options[3]])

  const handleChange = (value: Option[]) => {
    console.log({ value })
    setValue(!!value ? value : [])
  }

  return (
    <Autocomplete
      options={options}
      label={label}
      value={value}
      multiple
      onChange={handleChange}
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
    type: 'AutocompleteOptionsType[]',
    defaultValue: '[]',
  },
  {
    description: 'Functional component returning ReactNode to display option',
    name: 'optionComponent',
    type: '((option: any) => React.ReactNode) | ((props: AutocompleteOptionProps) => JSX.Element)',
  },
  {
    description: 'Default value to display when component is not controlled',
    name: 'defaultValue',
    type: 'AutocompleteOptionsType',
  },
  {
    description: 'Current value of component',
    name: 'value',
    type: 'AutocompleteOptionsType',
    note: multipleWarning,
  },
  {
    name: 'onChange',
    type: '(value: AutocompleteOptionsType | AutocompleteOptionsType[]) => void',
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
    description: 'Allow Autocompleteion of multiple values',
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

export const AutocompleteOptionComponent: DocumentedProperty[] = [
  {
    description: 'Option value',
    name: 'option',
    type: 'AutocompleteOptionsType',
  },
  {
    description: 'Is option Autocompleteed?',
    name: 'Autocompleteed',
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

export const AutocompleteOptionType: DocumentedProperty[] = [
  { name: 'value', type: 'React.ReactNode', description: 'Value' },
  {
    name: 'id',
    type: 'React.ReactNode',
    description: 'ID of element used as `key`',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Is option available to Autocomplete',
  },
]
