import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context/context'
import { DropdownProps, Select } from '@creation-ui/react'
import { pick } from 'lodash'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { options } from './data'
import { createInputControls } from './shared-playground-controls'

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
      placeholder='Select value'
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

export const properties: DocumentedProperty[] = []
