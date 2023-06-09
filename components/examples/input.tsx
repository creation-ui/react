import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context'
import { HTMLInputType, Input, InputProps } from '@creation-ui/react'
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import { Icon } from '@mdi/react'
import { DocumentedProperty } from 'models/system'
import { useEffect, useState } from 'react'
import { inputBaseProperties } from './input-base-properties'

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

export const InputPlaygroundView = ({ ...props }: InputExampleProps) => {
  const {
    state: { inputType, ...state },
  } = usePlayground()
  const [inputValue, setInputValue] = useState<string>('')
  const onClear = () => {
    setInputValue('')
  }
  return (
    <Input
      {...props}
      {...state}
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      onClear={onClear}
      type={inputType as HTMLInputType}
      defaultValue={state.content}
    />
  )
}

export const InputPlayground = () => {
  return (
    <Playground
      config={{
        name: 'Input',
        size: true,
        loading: true,
        disabled: true,
        readOnly: true,
        error: true,
        helperText: true,
        inputType: true,
        variant: true,
        clearable: true,
      }}
    >
      <InputPlaygroundView label='Input' />
    </Playground>
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

export const properties: DocumentedProperty[] = inputBaseProperties
