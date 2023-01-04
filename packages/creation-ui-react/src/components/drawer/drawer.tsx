import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { Overlay } from '../'
import { useTheme } from '../../theme'
import { child, drawer, drawerAnimation } from './classes'
import { DrawerProps } from './drawer.types'

const Drawer = ({ open, children, onOverlayClick, ...props }: DrawerProps) => {
  const { drawers, zIndex } = useTheme()
  const {
    size = drawers.size,
    position = drawers.position,
    onClose,
    ...rest
  } = props

  return (
    <>
      <Overlay active={open} onClick={onOverlayClick} />
      <Transition
        show={open}
        as={Fragment}
        enter={clsx(drawerAnimation.animation)}
        leave={clsx(drawerAnimation.animation)}
        enterFrom={clsx(drawerAnimation.enter[position])}
        enterTo={clsx(drawerAnimation.leave[position])}
        leaveFrom={clsx(drawerAnimation.leave[position])}
        leaveTo={clsx(drawerAnimation.enter[position])}
      >
        <Dialog
          unmount={false}
          onClose={onClose}
          className={drawer({ className: [zIndex.modals], position })}
        >
          <div className='h-screen flex'>
            <div className={clsx(child)}>{children}</div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Drawer
