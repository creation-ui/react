import {
  DropdownOption,
  HTMLInputType,
  Input,
  InputProps,
} from '@creation-ui/react'
import { ELEMENT_SIZES, ELEMENT_VARIANTS } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useEffect, useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
import { iconProp } from './shared-props'
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import { Icon } from '@mdi/react'
import { usePlayground } from '@components/playground/context'

interface InputExampleProps extends Omit<InputProps, 'onChange' | 'ref'> {}

export const InputExample = ({ ...props }: InputExampleProps) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (props.value) {
      setValue(props.value as any)
    }
  }, [props.value, setValue])

  return (
    <div className='flex flex-col gap-3 max-w-xs' key={props.key}>
      <Input
        onChange={e => setValue(e.target.value)}
        value={value}
        placeholder='Placeholder'
        {...props}
      />
    </div>
  )
}

export const InputPlayground = ({ ...props }: InputExampleProps) => {
  const {
    state: { inputType, ...state },
  } = usePlayground()

  return (
    <Input
      {...props}
      {...state}
      type={inputType as HTMLInputType}
      defaultValue={state.content}
    />
  )
}

export const PasswordExample = ({ ...props }: InputExampleProps) => {
  const [value, setValue] = useState('')
  const [type, setType] = useState<string>('password')

  useEffect(() => {
    if (props.value) {
      setValue(props.value as any)
    }
  }, [])

  const onIconClick = () => {
    setType(type === 'password' ? 'text' : 'password')
  }
  const htmlType = type as HTMLInputType

  return (
    <div className='flex flex-col gap-3 max-w-xs' key={props.key}>
      <Input
        onChange={e => setValue(e.target.value)}
        value={value}
        type={htmlType}
        endAdornment={
          <Icon
            path={htmlType === 'password' ? mdiEyeOutline : mdiEyeOffOutline}
            size={1}
            // @ts-expect-error
            onClick={onIconClick}
          />
        }
        {...props}
      />
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
    ...iconProp,
    name: 'iconLeft',
    description: 'Icon on the left side of the component',
    experimental: true,
  },
  {
    ...iconProp,
    name: 'iconRight',
    description: 'Icon on the right side of the component',
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
