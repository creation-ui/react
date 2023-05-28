import clsx from 'clsx'
import type { FC } from 'react'
import { InputBaseProps } from '../../types'
import { twMerge } from 'tailwind-merge'
import { input, inputContainer, inputIcon, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { ClearButton } from '../clear-button'
import { Icon } from '../icon'
import { InteractiveContainer } from '../interactive-container'
import { Loader } from '../loader'
import { HelperText } from '../typography/helper-text'
import { InputBaseContext } from './input-base.context'

const InputBase: FC<InputBaseProps> = props => {
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
    startAdornment,
    endAdornment,
    variant,
    clearable,
    layout = 'column',
    onClear,
    ...rest
  } = props
  const componentId = useId(id)

  const disabled = props.disabled
  const readOnly = props.readOnly || loading

  const containerClasses = twMerge(
    inputContainer({ disabled, error: !!error, layout }),
    text({ size })
  )

  const isColor = type === 'color'

  const inputClasses = twMerge(
    input({
      size,
      variant,
      iconLeft: !!startAdornment,
      iconRight: !!endAdornment,
      className: twMerge(className),
      error: !!error,
      fillContent: isColor,
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
        <div className={containerClasses}>
          <label
            htmlFor={componentId}
            className={label({ size, required: props.required })}
            children={props.label}
            aria-label={props.label?.toString()}
          />
          <div className='relative max-h-min'>
            {startAdornment && (
              <div className={inputIcon({ position: 'left' })}>
                {startAdornment}
              </div>
            )}
            {children}
            {loading ? (
              <Loader
                className={inputIcon({ position: 'right' })}
                size={size === 'lg' ? 'md' : 'sm'}
              />
            ) : (
              <div className={inputIcon({ position: 'right' })}>
                {clearable && <ClearButton onClick={onClear} />}
                {endAdornment}
              </div>
            )}
          </div>
          <HelperText
            size={size}
            helperText={error || helperText}
            error={Boolean(error)}
          />
        </div>
      </InputBaseContext.Provider>
    </InteractiveContainer>
  )
}

export default InputBase
