import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react'
import { forwardRef } from 'react'
import { MenuCore } from './menu-core'
import type { MenuProps } from './types'

export const Menu = forwardRef<HTMLButtonElement, MenuProps>((props, ref) => {
  const parentId = useFloatingParentNodeId()

  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuCore {...props} ref={ref} />
      </FloatingTree>
    )
  }

  return <MenuCore {...props} ref={ref} />
})
