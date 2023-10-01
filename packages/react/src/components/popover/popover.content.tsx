import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react'
import type { HTMLProps } from 'react'
import { forwardRef } from 'react'
import { ElementSize } from '@creation-ui/core'
import { popoverContentClasses } from './classes'
import { usePopoverContext } from './context'
import { usePopover } from './use-popover'

interface PopoverContentProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  size?: ElementSize
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent({ size, className, ...props }, propRef) {
    const { context: floatingContext, ...ctx } = usePopoverContext()
    const ref = useMergeRefs([ctx.refs.setFloating, propRef])

    const finalSize = size ?? ctx.size

    if (!floatingContext.open) return null

    const style = {
      // @ts-ignore
      ...ctx.floatingStyles,
      ...props.style,
    }

    return (
      <FloatingPortal>
        <FloatingFocusManager context={floatingContext} modal={ctx.modal}>
          <div
            ref={ref}
            style={style}
            className={popoverContentClasses({ size: finalSize, className })}
            aria-labelledby={ctx.labelId}
            aria-describedby={ctx.descriptionId}
            {...ctx.getFloatingProps(props)}
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    )
  }
)
