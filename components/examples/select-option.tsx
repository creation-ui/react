import { Button } from '@creation-ui/button'
import { SelectOption, SelectOptionsType } from '@creation-ui/core'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'

interface OptionExampleProps {
  option: SelectOptionsType
}

export const option: SelectOptionsType = {
  id: '1',
  value: 'Option',
  disabled: false,
}

export const OptionExample = ({ option }: OptionExampleProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-col w-fit mx-auto'>
      <div className='mx-auto'>
        <SelectOption option={option} />
      </div>
      <Button size='sm' variant='text' onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </Button>
    </div>
  )
}

export const OptionListingExample = ({ option }: OptionExampleProps) => (
  <SelectOption option={option} />
)

// option: SelectOptionsType | AutocompleteOptionsType
//   selected?: boolean
//   disabled?: boolean
//   active?: boolean
//   multiple?: boolean

export const properties: DocumentedProperty[] = [
  {
    description: 'Option data object',
    name: 'option',
    type: 'SelectOptionsType | AutocompleteOptionsType',
  },
  {
    description: 'Is option selected?',
    name: 'selected',
    type: 'boolean',
  },
  {
    description: 'Is option being clicked on?',
    name: 'active',
    type: 'boolean',
  },
  {
    description: 'Is multiple selection available in the parent list?',
    name: 'multiple',
    type: 'boolean',
  },
  {
    description: 'Is option disabled',
    name: 'disabled',
    type: 'boolean',
  },
]
