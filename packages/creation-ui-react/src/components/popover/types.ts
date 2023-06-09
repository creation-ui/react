import type {
  Placement,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import type { Dispatch, SetStateAction } from 'react'
import { ElementSize } from '../../types'

export interface PopoverOptions {
  initialOpen?: boolean
  placement?: Placement
  modal?: boolean
  open?: boolean
  size?: ElementSize
  onOpenChange?: (open: boolean) => void
  className?: string
}

type Interactions = ReturnType<typeof useInteractions>
type Floating = ReturnType<typeof useFloating>

export type UsePopoverReturns = Interactions &
  Floating & {
    open: boolean
    setOpen: (open: boolean) => void
    modal: boolean
    labelId: string
    descriptionId: string
    setLabelId: React.Dispatch<React.SetStateAction<string>>
    setDescriptionId: React.Dispatch<React.SetStateAction<string>>
  }

export type PopoverContextType =
  | (UsePopoverReturns & {
      size?: PopoverOptions['size']
      setLabelId: Dispatch<SetStateAction<string | undefined>>
      setDescriptionId: Dispatch<SetStateAction<string | undefined>>
    })
  | null
