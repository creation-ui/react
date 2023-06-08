import { ReactNode } from "react"
import { PopoverContext } from "./context"
import { PopoverOptions } from "./types"
import { usePopover } from "./use-popover"

export function Popover({
  children,
  modal = false,
  ...restOptions
}: {
  children: ReactNode
} & PopoverOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = usePopover({ modal, ...restOptions })
  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  )
}
