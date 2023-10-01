import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { useTheme } from '../../theme'
import { child, drawer, drawerAnimation } from './classes'
import type { DrawerProps } from './drawer.types'
import { Overlay } from '../overlay'

const Drawer = ({ open, children, onOverlayClick, ...props }: DrawerProps) => {
  const { drawers, zIndex } = useTheme()
  const {
    //
    position = drawers!.position,
    onClose = () => {},
  } = props

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
          className={drawer({ className: [zIndex?.modals], position })}
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
