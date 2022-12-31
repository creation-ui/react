import { ELEMENT_SIZES, ELEMENT_VARIANTS } from '@creation-ui/react/types'
import { Input, InputProps } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useEffect, useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'

interface InputExampleProps extends Omit<InputProps, 'onChange' | 'ref'> {
  debug?: boolean
}

export const InputExample = (props: InputExampleProps) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (props.value) {
      setValue(props.value as any)
    }
  }, [])

  return (
    <div className='flex flex-col gap-3 max-w-xs' key={props.key}>
      <Input
        onChange={e => setValue(e.target.value)}
        value={value}
        {...props}
      />
      {props.debug && (
        <pre className='bg-red-200 rounded p-3 text-xs'>
          {JSON.stringify({ value }, null, 2)}
        </pre>
      )}
    </div>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'md',
    description: 'Size of the element',
  },
  {
    name: 'variant',
    type: ListOrTypes([...ELEMENT_VARIANTS]),
    defaultValue: 'outline',
    description: 'Size of the element',
    experimental: true,
  },
  { name: 'required', type: 'boolean', description: 'Is element required?' },
  { name: 'readOnly', type: 'boolean', description: 'Is element read-only?' },
  { name: 'label', type: 'string', description: 'Input label' },
  { name: 'disabled', type: 'boolean', description: 'Is disabled?' },
  { name: 'loading', type: 'boolean', description: 'Show loading state' },
  {
    name: 'iconLeft',
    type: 'React.ReactNode',
    description: 'Icon to be displayed on the left side of the component',
    experimental: true,
  },
  {
    name: 'iconRight',
    type: 'React.ReactNode',
    description: 'Icon to be displayed on the right side of the component',
    experimental: true,
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    description: 'Should button take up all available width?',
  },
  {
    name: 'helperText',
    type: 'boolean',
    description: 'Additional information for display with component',
    experimental: true,
  },
  {
    name: 'error',
    type: 'boolean',
    description: 'Text to be displayed when input is invalid',
    experimental: true,
  },
]
