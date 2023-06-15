import { Button, Drawer, DrawerProps } from '@creation-ui/react'
import { childrenProp, openProps } from '@components/examples/shared-props'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { Playground } from '@components/playground'
import { getState } from '@components/playground/utils/object-to-props-text'
import { usePlayground } from '@components/playground/context/context'

const config = {
  position: true,
  content: true,
}

export const DrawerExample = (props: DrawerProps) => {
  const playground = usePlayground()

  const state = getState(playground.state, config)

  const [open, setOpen] = useState(false)

  const onClose = () => setOpen(false)
  const onClick = () => setOpen(true)

  return (
    <>
      <Button onClick={onClick}>Open Drawer</Button>
      <Drawer
        //
        open={open}
        onClose={onClose}
        {...props}
        {...state}
      >
        <div className='p-5'>
          <h1>Payment successful</h1>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We&apos;ve sent you
              an email with all of the details of your order.
            </p>
          </div>
          <div className='mt-4'>
            <Button onClick={onClose}>Got it, thanks!</Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export const DrawerPlayground = () => {
  return (
    <Playground
      config={{
        name: 'Drawer',
        hasChildren: true,
        ...config,
      }}
    >
      <DrawerExample />
    </Playground>
  )
}

export const properties: DocumentedProperty[] = [
  openProps,
  {
    description: 'Callback function called when closing Drawer',
    name: 'onClose',
    type: '() => void',
  },
  {
    description: 'Callback function called when closing Drawer',
    name: 'onOverlayClick',
    type: '() => void',
  },
  childrenProp,
]
