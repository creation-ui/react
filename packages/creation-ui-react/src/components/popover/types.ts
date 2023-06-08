import type { Placement } from '@floating-ui/react'
import type { Dispatch, SetStateAction } from 'react'
import { ElementSize } from '../../types'
import { usePopover } from './use-popover'

export interface PopoverOptions {
  initialOpen?: boolean
  placement?: Placement
  modal?: boolean
  open?: boolean
  size?: ElementSize
  onOpenChange?: (open: boolean) => void
  className?: string
}

export type PopoverContextType =
  | (ReturnType<typeof usePopover> & {
      size?: PopoverOptions['size']
      setLabelId: Dispatch<SetStateAction<string | undefined>>
      setDescriptionId: Dispatch<SetStateAction<string | undefined>>
    })
  | null
