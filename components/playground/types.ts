export type PlaygroundValueType = 'string' | 'boolean' | 'number' | 'array'
export type PlaygroundValues = string | boolean | number
export type PlaygroundControls =
  | 'input:text'
  | 'input:number'
  | 'colors'
  | 'switch'
  | 'toggle-group'

export type PlaygroundProperty = {
  name: string
  type: PlaygroundValueType
  label?: string
  controls?: PlaygroundControls
  defaultValue?: PlaygroundValues
  values?: any[]
}

export interface PlaygroundControllerProps {
  name: string
  component: React.FC<any>
  properties: PlaygroundProperty[]
  showCode?: boolean
  componentProps?: any
}

export interface PlaygroundState {
  [key: string]: PlaygroundValues
}

export interface PlaygroundContextValue extends PlaygroundControllerProps {
  state: PlaygroundState
  handleChange: (name: string, value: PlaygroundValues) => void
}
