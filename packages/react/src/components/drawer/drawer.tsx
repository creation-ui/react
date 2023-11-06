import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { useTheme } from '../../theme'
import { child, drawer, drawerAnimation } from './classes'
import type { DrawerProps } from './drawer.types'
import { Overlay } from '../overlay'
import { twMerge } from 'tailwind-merge'

const Drawer = ({ open, children, onOverlayClick, ...props }: DrawerProps) => {
  const { drawers, zIndex } = useTheme()

  const {
    //
    position = drawers!.position ?? 'right',
    widthClassName = drawers!.widthClassNames,
    heightClassName = drawers!.heightClassNames,
    onClose = () => {},
  } = props

  const finalSize = {
    right: widthClassName,
    left: widthClassName,
    top: heightClassName,
    bottom: heightClassName,
  }[position]

  return (
    <>
      <Overlay className={'fixed'} active={open} onClick={onOverlayClick} />
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
              className: [zIndex?.modals, finalSize],
              position,
            })
          )}
        >
          <div className='h-full flex'>
            <div className={clsx(child)}>{children}</div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Drawer
