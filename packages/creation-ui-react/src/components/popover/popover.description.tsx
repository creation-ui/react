import { useId } from '@floating-ui/react'
import type { HTMLProps } from 'react'
import { forwardRef, useLayoutEffect } from 'react'
import { usePopoverContext } from './context'

export const PopoverDescription = forwardRef<
  HTMLParagraphElement,
  HTMLProps<HTMLParagraphElement>
>(function PopoverDescription({ children, ...props }, ref) {
  const { setDescriptionId } = usePopoverContext()
  const id = useId()

  // Only sets `aria-describedby` on the Popover root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
    setDescriptionId(id)
    return () => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return (
    <p {...props} ref={ref} id={id}>
      {children}
    </p>
  )
})
