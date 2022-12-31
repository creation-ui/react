import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import Stick from 'react-stick'
import { PopoverProps } from './popover.types'

export default function Popover({
  className,
  position = 'bottom center',
  node,
  open = false,
  ...props
}: PopoverProps) {
  return (
    <Stick
      position={position}
      autoFlipHorizontally
      autoFlipVertically
      {...props}
      node={
        <Transition
          show={open}
          as={'div'}
          className={clsx(className)}
          enter='transition ease-in-out duration-500'
          enterFrom='opacity-0 translate-y-10'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-in-out duration-500'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-10'
        >
          {node}
        </Transition>
      }
    />
  )
}
