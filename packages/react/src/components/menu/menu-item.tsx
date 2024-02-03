import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import type { ButtonHTMLAttributes, FocusEvent, MouseEvent } from 'react'
import { forwardRef, useContext } from 'react'
import { MenuContext } from './context'
import { MenuItemProps } from './types'
import { twMerge } from 'tailwind-merge'

export const MenuItem = forwardRef<
  HTMLButtonElement,
  MenuItemProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ label, disabled, cx, ...props }, forwardedRef) => {
  const menu = useContext(MenuContext)
  const item = useListItem({ label: disabled ? null : label })
  const tree = useFloatingTree()
  const isActive = item.index === menu.activeIndex

  return (
    <button
      {...props}
      ref={useMergeRefs([item.ref, forwardedRef])}
      type='button'
      role='menuitem'
      className={twMerge(cx?.container)}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      {...menu.getItemProps({
        onClick(event: MouseEvent<HTMLButtonElement>) {
          props.onClick?.(event)
          tree?.events.emit('click')
        },
        onFocus(event: FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event)
          menu.setHasFocusInside(true)
        },
      })}
    >
      <span className={twMerge('truncate', cx?.label)}>{label}</span>
    </button>
  )
})
