import { Input, Switch, ToggleGroup } from '@creation-ui/react'
import { capitalize } from '@utils/list-or-types'
import type { FC } from 'react'
import { ColorsSelector } from './components/colors-selector'
import { DEFAULT_CONTROLS } from './constants'
import { usePlayground } from './context/context'
import { PlaygroundProperty } from './types'

interface PlaygroundControlProps {
  property: PlaygroundProperty
}

export const PlaygroundControl: FC<PlaygroundControlProps> = ({ property }) => {
  const { state, handleChange } = usePlayground()
  const { name, type, values, controls } = property

  const label = property.label ?? capitalize(name)

  const controlType = controls ?? DEFAULT_CONTROLS[type]

  const handleInputChange = e => {
    handleChange(name, e.target.value)
  }
  const handlePlainChange = value => {
    handleChange(name, value)
  }

  const value = state[name]

  const arrayValue = values?.find(v => v.value === value)

  switch (controlType) {
    case 'input:number':
      return (
        <Input
          value={value as number}
          onChange={handleInputChange}
          label={label}
          type={'number'}
        />
      )
    case 'colors':
      return (
        <ColorsSelector
          label={label}
          value={arrayValue}
          options={(values ?? []) as any}
          onClick={handlePlainChange}
        />
      )
    case 'switch':
      return (
        <Switch
          label={label}
          checked={value as boolean}
          onChange={handlePlainChange}
        />
      )
    case 'toggle-group':
      return (
        <ToggleGroup
          label={label}
          options={(values ?? []) as any}
          value={value as any}
          onChange={handlePlainChange}
        />
      )
    case 'input:text':
    default:
      return (
        <Input
          onChange={handleInputChange}
          label={label}
          type={'text'}
          value={value as string}
        />
      )
  }
}
