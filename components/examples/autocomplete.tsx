import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context'
import {
  Autocomplete,
  AutocompleteFloat,
  AutocompleteProps,
  ELEMENT_SIZES,
} from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import React, { useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
import { options } from './data'
import { pick } from 'lodash'

type Option = (typeof options)[0]

const data = [
  { label: 'A', value: 'A', id: 1245 },
  { label: 'B', value: 'B', id: 1312 },
  { label: 'C', value: 'C', id: 1232 },
  { label: 'D', value: 'D', id: 123 },
  { label: 'E', value: 'E', id: 1565 },
  { label: 'F', value: 'F', id: 665 },
  { label: 'G', value: 'G', id: 6654 },
  { label: 'H', value: 'H', id: 53535 },
  { label: 'I', value: 'I', id: 5345 },
]

export const AutocompleteExample = ({ ...props }: AutocompleteProps) => {
  const [value, setValue] = useState<Option | never>(data[0])

  const playground = usePlayground()

  const state = pick(playground.state, [
    'size',
    'error',
    'loading',
    'disabled',
    'readOnly',
  ])

  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={setValue}
      {...state}
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
    setValue(value ? value : [])
  }

  const playground = usePlayground()

  const state = pick(playground.state, [
    'size',
    'error',
    'loading',
    'disabled',
    'readOnly',
  ])

  return (
    <AutocompleteFloat
      options={options}
      label={label}
      value={value}
      multiple
      onChange={handleChange}
      {...state}
      {...props}
    />
  )
}

export const AutocompletePlayground = () => {
  return (
    <Playground
      config={{
        name: 'Autocomplete',
        size: true,
        error: true,
        loading: true,
        disabled: true,
        readOnly: true,
      }}
    >
      <AutocompleteExample />
    </Playground>
  )
}
export const AutocompleteMultiPlayground = () => {
  return (
    <Playground
      config={{
        name: 'Autocomplete',
        size: true,
        error: true,
        loading: true,
        disabled: true,
        readOnly: true,
      }}
    >
      <AutocompleteMultipleExample />
    </Playground>
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
