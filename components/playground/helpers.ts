import { pick, flow, pickBy, keys } from 'lodash'
import { PlaygroundContextValue } from './context'

export const getTruthyKeys = flow(pickBy, keys)

export const createInitialState = (
  config: PlaygroundContextValue['config']
): PlaygroundContextValue['state'] => {
  const truthyKeys = getTruthyKeys(config)

  const initialStateTemplate: PlaygroundContextValue['state'] = {
    status: 'primary',
    size: 'md',
    variant: 'contained',
    content: 'Content',
    loading: false,
    disabled: false,
    helperText: 'This is helper text',
    clearable: false,
    uppercase: false,
    error: false,
    circle: false,
    readOnly: false,
    required: false,
    icon: 'none',
    fullWidth: false,
    inputType: 'text',
  }

  return pick(initialStateTemplate, truthyKeys)
}
