import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { errorClasses, input, inputContainer, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { InputBaseProps } from '../../types'
import { InteractiveContainer } from '../interactive-container'
import { Loader } from '../loader'
import { Description } from '../typography'
import { InputBaseContext } from './input-base.context'

const InputBaseInline: FC<InputBaseProps> = props => {
  const { size: defaultSize } = useTheme()
  const {
    loading,
    helperText,
    error,
    size = defaultSize,
    type = 'text',
    className,
    id,
    children,
    variant,
    layout = 'row',
    // onClear,
  } = props
  const componentId = useId(id)

  const disabled = props.disabled
  const readOnly = props.readOnly || loading

  const containerClasses = twMerge(
    inputContainer({ disabled, error: !!error, layout }),
    text({ size })
  )

  const inputClasses = twMerge(
    input({
      size,
      variant,
      className: twMerge(className),
      error: !!error,
    })
  )

  return (
    <InteractiveContainer disabled={disabled} className={className}>
      <InputBaseContext.Provider
        value={{
          componentId,
          classes: {
            input: inputClasses,
            container: containerClasses,
          },
          disabled,
          readOnly,
          error: !!error,
          type,
        }}
      >
        <div>
          <div className={containerClasses}>
            {children}
            <label
              htmlFor={componentId}
              className={label({ size, required: props.required })}
              children={props.label}
              aria-label={props.label?.toString()}
            />
            {loading && <Loader size={size === 'lg' ? 'md' : 'sm'} />}
          </div>
          <Description
            size={size}
            error={!!error}
            className={error ? errorClasses.text : ''}
          >
            {error || helperText}
          </Description>
        </div>
      </InputBaseContext.Provider>
    </InteractiveContainer>
  )
}

export default InputBaseInline
