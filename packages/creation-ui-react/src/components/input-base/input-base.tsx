import clsx from 'clsx'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import {
  errorClasses,
  input,
  inputContainer,
  inputIcon,
  label,
  text,
} from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { HTMLInputType, InputBaseProps } from '../../types'
import { ClearButton } from '../clear-button'
import { InteractiveContainer } from '../interactive-container'
import { Loader } from '../loader'
import { Description } from '../typography'
import { getWidthClasses } from '../utils'
import { Adornment } from './adornment'
import { InputBaseContainerInner } from './input-base.container-inner'
import { InputBaseContext } from './input-base.context'

const UNSTYLED_TYPES: HTMLInputType[] = [
  //
  // 'color',
  'file',
  'range',
  'submit',
  'reset',
  'button',
]

const InputBase: FC<InputBaseProps> = props => {
  const { size: defaultSize } = useTheme()
  const {
    loading,
    helperText,
    error,
    size = defaultSize,
    type = 'text',
    cx,
    id,
    children,
    startAdornment,
    endAdornment,
    clearable,
    variant = 'outlined',
    layout = 'column',
    onClear,
  } = props
  const componentId = useId(id)

  const disabled = props.disabled
  const readOnly = props.readOnly || loading

  const outerContainerClasses = twMerge(
    inputContainer({ disabled, error: !!error, layout }),
    text({ size }),
    cx?.container?.outer
  )

  const isUnstyled = UNSTYLED_TYPES.includes(type)
  const hasError = Boolean(error)
  const hasStartAdornment = Boolean(startAdornment)
  const hasEndAdornment = Boolean(endAdornment)

  const finalVariant = isUnstyled ? 'unstyled' : variant

  const inputClasses = twMerge(
    input({
      size,
      variant: finalVariant,
      iconLeft: hasStartAdornment,
      iconRight: hasEndAdornment,
      error: hasError,
      className: cx?.input,
      // @ts-expect-error
      type,
    })
  )

  return (
    <InteractiveContainer disabled={disabled} className={cx?.container?.outer}>
      <InputBaseContext.Provider
        value={{
          componentId,
          classes: { input: inputClasses, container: outerContainerClasses },
          disabled,
          readOnly,
          error: !!error,
          type,
        }}
      >
        <div className={outerContainerClasses}>
          <label
            htmlFor={componentId}
            className={label({
              size,
              required: props.required,
              className: cx?.label,
            })}
            children={props.label}
            aria-label={props.label?.toString()}
          />
          <InputBaseContainerInner className={cx?.container?.inner}>
            <Adornment position='left' type={type} adornment={startAdornment} />
            {children}
            {loading ? (
              <Loader
                className={inputIcon({
                  position: 'right',
                  // @ts-expect-error
                  type,
                })}
                size={size === 'lg' ? 'md' : 'sm'}
              />
            ) : (
              <Adornment
                position='right'
                type={type}
                adornment={
                  <>
                    {clearable && <ClearButton onClick={onClear} />}
                    {endAdornment}
                  </>
                }
              />
            )}
          </InputBaseContainerInner>
          <Description
            size={size}
            error={hasError}
            className={clsx(hasError && errorClasses.text)}
          >
            {error || helperText}
          </Description>
        </div>
      </InputBaseContext.Provider>
    </InteractiveContainer>
  )
}

export default InputBase
