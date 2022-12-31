import { ELEMENT_SIZES } from '@creation-ui/react/types'
import { Switch, SwitchProps } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'

export const SwitchExample = ({ ...props }: Omit<SwitchProps, 'onChange'>) => {
  const [checked, setChecked] = useState<boolean>(false)

  return <Switch onChange={setChecked} checked={checked} {...props} />
}

export const properties: DocumentedProperty[] = [
  {
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'md',
    description: 'Size of the element',
  },
  { name: 'required', type: 'boolean', description: 'Is element required?' },
  { name: 'readOnly', type: 'boolean', description: 'Is element read-only?' },
  {
    name: 'checked',
    type: 'boolean',
    description: (
      <>
        <code>checked</code> state
      </>
    ),
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    description: 'Switch is defaultChecked?',
  },
  { name: 'label', type: 'string', description: 'Input label' },
  { name: 'disabled', type: 'boolean', description: 'Is disabled?' },
  {
    name: 'onChange',
    type: '(value: boolean) => void',
    description: 'Callback function',
  },
]
