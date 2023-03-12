import type { BaseComponentProps } from '../../types'

export interface SwitchProps extends BaseComponentProps {
  checked?: boolean
  defaultChecked?: boolean
  onChange: (value: boolean) => void
}
