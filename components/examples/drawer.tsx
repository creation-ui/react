import { childrenProp, openProp } from '@components/examples/shared-props'
import { Playground } from '@components/playground'
import { Button, Drawer, DrawerProps } from '@creation-ui/react'
import { useSignal } from '@preact/signals-react'
import { DocumentedProperty } from 'models/system'
import { positionControl } from './shared-playground-controls'

export const DrawerExample = (props: DrawerProps) => {
  const open = useSignal(false)

  const handleOpen = () => (open.value = true)
  const handleClose = () => (open.value = false)

  return (
    <>
      <Button onClick={handleOpen}>Open Drawer</Button>
      <Drawer open={open.value} onClose={handleClose} {...props}>
        <div className='p-5'>
          <h1>Payment successful</h1>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We&apos;ve sent you
              an email with all of the details of your order.
            </p>
          </div>
          <div className='mt-4'>
            <Button onClick={handleClose}>Got it, thanks!</Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export const DrawerPlayground = () => (
  <Playground
    name='Drawer'
    component={DrawerExample}
    controls={[positionControl]}
    showCode={false}
  />
)

export const properties: DocumentedProperty[] = [
  openProp,
  childrenProp,
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
]
