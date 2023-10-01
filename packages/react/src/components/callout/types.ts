import type { ElementStatus, ElementVariant } from '@creation-ui/core'

export interface CalloutProps {
  content: React.ReactNode
  title?: React.ReactNode
  icon?: React.ReactNode
  status?: ElementStatus
  variant?: ElementVariant
  onClose?: () => void
  className?: string
}
