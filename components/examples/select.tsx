import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context/context'
import { DropdownProps, Select } from '@creation-ui/react'
import { pick } from 'lodash'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { options } from './data'
import { createInputControls } from './shared-playground-controls'
import { descriptionProp, idProp, labelProp, sizeProp } from './shared-props'

export const SelectExample = ({ ...props }: DropdownProps) => {
  const [value, setValue] = useState<(typeof options)[0] | null>(null)

  const playground = usePlayground()

  const state = pick(playground.state, [
    'size',
    'error',
    'loading',
    'disabled',
    'readOnly',
    'clearable',
  ])

  const onClear = () => setValue(null)
  return (
    <Select
      {...state}
      {...props}
      label={'Person'}
      value={value}
      onChange={setValue}
      onClear={onClear}
      options={options}
    />
  )
}

export const SelectPlayground = () => (
  <Playground
    name='Select'
    component={SelectExample}
    controls={createInputControls('Select')}
    showCode={false}
  />
)

export const properties: DocumentedProperty[] = [
  idProp,
  labelProp,
  sizeProp,
  descriptionProp,
  {
    description: 'Class names to add to wrapper component',
    name: 'cx',
    type: '{container:{inner:string, outer:string}, input:string}',
  },
  {
    description: 'List available options',
    name: 'options',
    type: 'T[]',
    defaultValue: '[]',
  },
  {
    description: 'Function to render option',
    name: 'renderOption',
    type: '((option: RenderOptionProps, index:number) => React.ReactNode)',
  },
  {
    description: 'Current value of component',
    name: 'value',
    type: 'T',
  },
  {
    name: 'onChange',
    type: '(value: T | T[]) => void',
    description: 'Change event callback',
  },
  {
    description: 'Is field disabled?',
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    name: 'highlight',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Highlight search text fragment in options',
  },
  {
    description: 'Error text displayed under the component.',
    name: 'error',
    type: 'string',
    note: 'When set, the component is styled as having errors.',
  },
]

export const renderOptionProps: DocumentedProperty[] = [
  {
    description: 'Key of the option',
    name: 'key',
    type: 'string',
  },
  {
    description: 'Tab index of the option',
    name: 'tabIndex',
    type: 'number',
  },
  {
    description: 'Aria-selected attribute of the option',
    name: 'aria-selected',
    type: 'boolean',
  },
  {
    description: 'Aria-disabled attribute of the option',
    name: 'aria-disabled',
    type: 'boolean',
  },
  {
    description: 'Aria-label attribute of the option',
    name: 'aria-label',
    type: 'string',
  },
  {
    description: 'Role attribute of the option',
    name: 'role',
    type: 'string',
  },
  {
    description: 'Class name of the option',
    name: 'className',
    type: 'string',
  },
  {
    description: 'Ref of the option',
    name: 'ref',
    type: '(node: any) => void',
  },
  {
    description: 'Is option active?',
    name: 'active',
    type: 'boolean',
  },
  {
    description: 'Is option selected?',
    name: 'selected',
    type: 'boolean',
  },
  {
    description: 'Is option disabled?',
    name: 'disabled',
    type: 'boolean',
  },
  {
    description: 'Label of the option',
    name: 'label',
    type: 'string',
  },
]

export const defaultSelectType: DocumentedProperty[] = [
  { name: 'label', type: 'React.ReactNode', description: 'Label of option' },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Option disabled state, used by isOptionDisabled',
  },
]
