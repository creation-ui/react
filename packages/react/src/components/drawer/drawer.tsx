import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { useTheme } from '../../theme'
import { child, drawer, drawerAnimation } from './classes'
import type { DrawerProps } from './drawer.types'
import { Overlay } from '../overlay'
import { twMerge } from 'tailwind-merge'
import merge from 'lodash.merge'

const Drawer = ({ open, children, onOverlayClick, ...props }: DrawerProps) => {
  const { drawers, zIndex } = useTheme()
  const { position = drawers!.position ?? 'right', onClose = () => {} } = props
  const defaultCX = {
    width: drawers!.widthClassNames,
    height: drawers!.heightClassNames,
  }
  const cx = merge(props.cx, defaultCX)

  const finalSize = {
    right: cx.width,
    left: cx.width,
    top: cx.height,
    bottom: cx.height,
  }[position]

  return (
    <>
      <Overlay
        className={'!fixed'}
        active={open}
        onClick={onOverlayClick}
      />
      <Transition
        show={open}
        as={Fragment}
        unmount={false}
        enter={clsx(drawerAnimation.animation)}
        leave={clsx(drawerAnimation.animation)}
        enterFrom={clsx(drawerAnimation.enter[position])}
        enterTo={clsx(drawerAnimation.leave[position])}
        leaveFrom={clsx(drawerAnimation.leave[position])}
        leaveTo={clsx(drawerAnimation.enter[position])}
      >
        <Dialog
          unmount={false}
          // @ts-ignore
          onClose={onClose}
          className={twMerge(
            drawer({
              className: [zIndex?.modals, finalSize, cx?.container?.outer],
              position,
            })
          )}
        >
          <div className={clsx(child, 'h-full flex', cx?.container?.inner)}>
            {children}
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Drawer
