import {
  Popover, PopoverContent, PopoverTrigger
} from '@creation-ui/react'
import { useState } from 'react'

export const PopoverExampleControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='App'>
      <h1>Floating UI — Popover</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen(v => !v)}>
          Controlled example
        </PopoverTrigger>
        <PopoverContent>
          <>My popover heading</>
          <>My popover description</>
          <>Close</>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export const PopoverExampleUncontrolled = () => {
  return (
    <Popover>
      <PopoverTrigger>Uncontrolled example</PopoverTrigger>
      <PopoverContent className='Popover'>
        <>My popover heading</>
        <>My popover description</>
      </PopoverContent>
    </Popover>
  )
}

export const properties = []
