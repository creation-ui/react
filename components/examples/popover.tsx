import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context'
import {
  ClearButton,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
  Switch,
} from '@creation-ui/react'
import { pick } from 'lodash'
import { useState } from 'react'

export const PopoverExampleUncontrolled = () => {
  const playground = usePlayground()
  const state = pick(playground.state, ['size'])
  return (
    <div>
      <Popover {...state}>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className='w-52'>
          <PopoverHeading>Popover</PopoverHeading>
          <PopoverDescription className='pt-2'>
            In the uncontrolled variant, the open and close behavior of the
            Popover is managed internally.
          </PopoverDescription>
          <br />
          <PopoverClose>Dismiss</PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export const PopoverExampleControlled = () => {
  const [open, setOpen] = useState(false)
  const playground = usePlayground()
  const state = pick(playground.state, ['size'])

  const toggleOpen = () => setOpen(v => !v)

  return (
    <div>
      <Switch
        checked={open}
        onChange={setOpen}
        label={open ? 'Opened' : 'Closed'}
      />
      <Popover open={open} onOpenChange={setOpen} {...state}>
        <PopoverTrigger onClick={toggleOpen}>Open</PopoverTrigger>
        <PopoverContent className='w-52'>
          <div className='flex justify-between items-center'>
            <PopoverHeading>Controlled</PopoverHeading>
            <PopoverClose>
              <ClearButton />
            </PopoverClose>
          </div>
          <PopoverDescription className='pt-2'>
            In the controlled variant, you can manage the open and close
            behavior of the Popover externally through props.
          </PopoverDescription>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export const PopoverPlaygroundUncontrolled = ({ ...props }: any) => {
  return (
    <Playground
      config={{
        name: 'Popover',
        size: true,
      }}
    >
      <PopoverExampleUncontrolled />
    </Playground>
  )
}
export const PopoverPlaygroundControlled = ({ ...props }: any) => (
  <Playground
    config={{
      name: 'Popover',
      size: true,
    }}
  >
    <PopoverExampleControlled />
  </Playground>
)

export const properties = []
