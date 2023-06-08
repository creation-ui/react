import type { Placement } from '@floating-ui/react'
import type { Dispatch, SetStateAction } from 'react'
import { usePopover } from './use-popover'

export interface PopoverOptions {
  initialOpen?: boolean
  placement?: Placement
  modal?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type PopoverContextType =
  | (ReturnType<typeof usePopover> & {
      setLabelId: Dispatch<SetStateAction<string | undefined>>
      setDescriptionId: Dispatch<SetStateAction<string | undefined>>
    })
  | null


