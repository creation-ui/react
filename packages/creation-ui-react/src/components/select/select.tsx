import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { ClearButton, DropdownChevron, HelperText, SelectOption } from '..'
import { input, inputContainer, label, text } from '../../classes'
import useId from '../../hooks/use-id'
import { useTheme } from '../../theme'
import type { MultipleEllipsisFormatter } from '../../types'
import { formatOptionValue } from '../../utils/format-option-value'
import { passThrough } from '../../utils/functions'
import { getTruncatedMultipleValues } from '../../utils/get-truncated-values'
import { select } from './classes'
import type { SelectProps } from './select.types'

const Select = (props: SelectProps) => {
  const { size: defaultSize, zIndex } = useTheme()
  const {
    optionComponent = SelectOption,
    error,
    size = defaultSize,
    multiple,
    clearable,
    clearButtonText,
    showAbove,
  } = props

  const limit = 2 //move to theme

  const componentId = useId(props.id)

  const Option = optionComponent

  let value: string = ''
  let truncated: MultipleEllipsisFormatter

  if (multiple) {
    truncated = getTruncatedMultipleValues(props.value, limit)
    value = truncated!.value
  } else {
    value = formatOptionValue(props.value)
  }

  const onClear = (e: any) => {
    e.preventDefault?.()
    e.stopPropagation?.()
    props.onChange?.(multiple ? [] : undefined)
  }
  const disabled = props.disabled || props.loading || props.readOnly

  return (
    <div
      className={clsx(
        inputContainer({ disabled, error: !!error }),
        text({ size })
      )}
      id={componentId}
    >
      <Listbox
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        multiple={props.multiple}
      >
        {({ open }) => (
          <div className={clsx(select.container.input)}>
            {props.label && (
              <Listbox.Label
                className={label({ size, required: props.required })}
                children={props.label}
                aria-label={props.label?.toString()}
              />
            )}
            <Listbox.Button className={clsx(input({ size }), select.input)}>
              <span className={clsx(select.value)}>
                {value}&nbsp;
                {multiple && truncated.hidden > 0 && (
                  <span className={clsx(select.hiddenCount)}>
                    +{truncated.hidden}
                  </span>
                )}
              </span>
              <span
                title={clearButtonText}
                onClick={onClear}
                className={clsx(
                  clearable && !!value ? 'block' : 'hidden',
                  clsx(select.buttons.base, select.buttons.clear)
                )}
              >
                <ClearButton />
              </span>
              <span
                className={clsx(select.buttons.base, select.buttons.chevron)}
              >
                <DropdownChevron open={open} />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options
                className={clsx(
                  select.list,
                  zIndex.dropdowns,
                  showAbove ? 'mb-2 bottom-full' : 'mt-2 top-full'
                )}
              >
                {props.options?.map(option => (
                  <Listbox.Option key={option.id} value={option}>
                    {({ selected, active, disabled }) => (
                      // @ts-ignore
                      <Option
                        option={option}
                        selected={selected}
                        active={active}
                        disabled={disabled}
                        multiple={props.multiple}
                      />
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
      <HelperText error helperText={error} size={size} />
    </div>
  )
}

Select.defaultProps = {
  placeholder: 'Select',
  selectedOptionFormatter: passThrough,
}

export default Select
