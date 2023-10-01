import type { BaseComponentProps } from '@creation-ui/core'

export interface SwitchProps extends BaseComponentProps {
  checked?: boolean
  loading?: boolean
  defaultChecked?: boolean
  onChange?: (value: boolean) => void
}
