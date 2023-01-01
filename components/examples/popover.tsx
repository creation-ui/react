import { Box, Button, PopoverProps } from '@creation-ui/react'
import { isBrowser } from '@creation-ui/react/utils/functions'
import { DocumentedProperty } from 'models/system'
import dynamic from 'next/dynamic'
import { useState } from 'react'

// const Popover = dynamic(
//   () =>
//     import('@creation-ui/react').then(C => {
//       console.log(C)
//       return C.Popover
//     }),
//   {
//     ssr: false,
//   }
// )

export const PopoverExample = ({ ...props }: PopoverProps) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return !isBrowser ? null : null
  // (
  //   <Popover
  //     open={open}
  //     position='bottom center'
  //     node={
  //       <Box className='m-1 shadow-2xl'>
  //         <h5 className='text-xl leading-tight font-medium mb-2'>New Post</h5>
  //         <p className='text-base mb-4'>This is the preview of your content</p>
  //         <Button onClick={handleClose}>Close</Button>
  //       </Box>
  //     }
  //     {...props}
  //   >
  //     <Button variant='contained' onClick={handleOpen}>
  //       Click me
  //     </Button>
  //   </Popover>
  // )
}

export const properties: DocumentedProperty[] = [
  {
    description: 'Content inside Popover',
    name: 'node',
    type: 'React.ReactNode',
  },
  {
    description: 'Trigger of Popover',
    name: 'children',
    type: 'React.ReactNode',
  },
  {
    description: 'Class names override',
    name: 'className',
    type: 'string',
  },
  {
    description: 'Is Popover open',
    name: 'open',
    type: 'boolean',
    defaultValue: 'false',
  },
]
