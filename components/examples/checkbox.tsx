import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context/context'
import { getState } from '@components/playground/utils/helpers'
import { Checkbox, CheckboxProps, ELEMENT_SIZES } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'

const config = {
  size: true,
  error: true,
  loading: true,
  disabled: true,
  readOnly: true,
}

export const CheckboxExample = ({
  ...props
}: Omit<CheckboxProps, 'onChange'>) => {
  const [checked, setChecked] = useState<boolean>(false)
  const { state } = usePlayground()

  const checkboxState = getState(state, config)

  return (
    <Checkbox
      onChange={e => setChecked(e.target.checked)}
      checked={checked}
      label={'Yes, I like cookies'}
      helperText='This is helper text'
      {...checkboxState}
      {...props}
    />
  )
}

export const CheckboxPlayground = () => {
  return (
    <Playground
      config={{
        name: 'Checkbox',
        size: true,
        error: true,
        loading: true,
        disabled: true,
        readOnly: true,
      }}
    >
      <CheckboxExample />
    </Playground>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'md',
    description: 'Size of the element',
  },
  { name: 'label', type: 'string', description: 'Input label' },
  {
    name: 'indeterminate',
    type: 'string',
    description: 'Should component display icon for the indeterminate state',
    note: 'Often used as indication that not all options are selected on the list',
  },
  { name: 'disabled', type: 'boolean', description: 'Is disabled?' },
  {
    name: 'enableFocusRing',
    type: 'boolean',
    description: 'Should component display focus ring when `:focus`',
  },
]
