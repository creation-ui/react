import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context'
import { ELEMENT_SIZES } from '@creation-ui/react'
import {
  SelectNative,
  DropdownProps,
  DropdownOptionType,
} from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import React, { useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
import { options } from './data'
import { pick } from 'lodash'

export const SelectNativeExample = ({ ...props }: DropdownProps) => {
  const [value, setValue] = useState(undefined)

  const playground = usePlayground()

  const state = pick(playground.state, [
    'size',
    'error',
    'loading',
    'disabled',
    'readOnly',
    'clearable',
  ])

  return (
    <SelectNative
      options={options}
      label={'Person'}
      value={value}
      clearable
      placeholder='Select value'
      onChange={setValue}
      {...state}
      {...props}
    >
      <option value={undefined}>empty</option>
      {options?.map(item => (
        <option value={item.label} key={item.id} disabled={false}>
          {item.label}
        </option>
      ))}
    </SelectNative>
  )
}

export const SelectNativePlayground = () => {
  return (
    <Playground
      config={{
        name: 'SelectNative',
        size: true,
        error: true,
        loading: true,
        disabled: true,
        readOnly: true,
        clearable: true,
      }}
    >
      <SelectNativeExample />
    </Playground>
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
