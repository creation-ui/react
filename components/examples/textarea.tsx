import { ELEMENT_SIZES, ELEMENT_VARIANTS } from '@creation-ui/core'
import { TextArea, TextAreaProps } from '@creation-ui/textarea'
import { DocumentedProperty } from 'models/system'
import React, { useEffect, useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'

interface TextAreaExampleProps extends Omit<TextAreaProps, 'onChange' | 'ref'> {
  debug?: boolean
}

export const TextAreaExample = (props: TextAreaExampleProps) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (props.value) {
      setValue(props.value as any)
    }
  }, [props.value])

  return (
    <div key={props.key} className='flex flex-col gap-5'>
      <TextArea
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
  { name: 'label', type: 'string', description: 'TextArea label' },
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
    description: 'Text to be displayed when TextArea is invalid',
    experimental: true,
  },
]
