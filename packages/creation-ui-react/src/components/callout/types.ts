import type { ElementStatus, ElementVariants } from 'src/types'

export interface CalloutProps {
  content: React.ReactNode
  title?: React.ReactNode
  icon?: React.ReactNode
  status?: ElementStatus
  variant?: ElementVariants
  onClose?: () => void
  className?: string
}
