import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react'
import type { HTMLProps } from 'react'
import { forwardRef } from 'react'
import { usePopoverContext } from './context'

export const PopoverContent = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement>
>(function PopoverContent(props, propRef) {
  const { context: floatingContext, ...context } = usePopoverContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  if (!floatingContext.open) return null

  const style = {
    ...context.floatingStyles,
    ...props.style,
  }

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext} modal={context.modal}>
        <div
          ref={ref}
          style={style}
          aria-labelledby={context.labelId}
          aria-describedby={context.descriptionId}
          {...context.getFloatingProps(props)}
        >
          {props.children}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  )
})
