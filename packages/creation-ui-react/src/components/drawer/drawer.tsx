import { useTheme } from '../../theme'
import { Overlay } from '../'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { DrawerProps } from './drawer.types'

const transitionProps = {
  modal: {
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95',
  },
}

const Drawer = ({ open, children, onOverlayClick, ...props }: DrawerProps) => {
  const { drawers } = useTheme()
  const {
    size = drawers.size,
    position = drawers.position,
    onClose,

    ...rest
  } = props

  return (
    <>
      <Overlay active={open} onClick={onOverlayClick} />
      <Transition appear={true} show={open} as={Fragment}>
        <Dialog
          as='div'
          open={open}
          className={clsx('drawer', `drawer-${position}`)}
          onClose={onClose as any}
          {...rest}
        >
          <Transition.Child as={Fragment} {...transitionProps.modal}>
            <Dialog.Panel className={'drawer-body'}>{children}</Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export default Drawer
