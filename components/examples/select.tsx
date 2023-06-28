import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context/context'
import { DropdownProps, Select } from '@creation-ui/react'
import { pick } from 'lodash'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { options } from './data'
import { createInputControls } from './shared-playground-controls'

export const SelectExample = ({ ...props }: DropdownProps) => {
  const [value, setValue] = useState<string | undefined>(undefined)

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
    <Select
      label={'Person'}
      value={value}
      placeholder='Select value'
      onChange={e => setValue(e.target.value)}
      onClear={() => setValue('')}
      {...state}
      {...props}
    >
      <option value={undefined}></option>
      {options?.map(item => (
        <option
          value={item.label}
          key={item.id}
          disabled={false}
          className='w-full'
        >
          {item.label}
        </option>
      ))}
    </Select>
  )
}

export const SelectPlayground = () =>
    <Playground
      name='Select'
      component={SelectExample}
      controls={createInputControls('Select')}
      showCode={false}
    />


export const properties: DocumentedProperty[] = []
