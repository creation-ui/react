import { useId } from '@floating-ui/react'
import type { HTMLProps } from 'react'
import { forwardRef, useLayoutEffect } from 'react'
import { usePopoverContext } from './context'

export const PopoverHeading = forwardRef<
  HTMLHeadingElement,
  HTMLProps<HTMLHeadingElement>
>(function PopoverHeading({ children, ...props }, ref) {
  const { setLabelId } = usePopoverContext()
  const id = useId()

  // Only sets `aria-labelledby` on the Popover root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
    setLabelId(id)
    return () => setLabelId(undefined)
  }, [id, setLabelId])

  return (
    <h2 {...props} ref={ref} id={id}>
      {children}
    </h2>
  )
})
