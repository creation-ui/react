import {
  ClearButton,
  DropdownChevron,
  ErrorText,
  SelectOption,
} from '@components'
import { Listbox, Transition } from '@headlessui/react'
import useId from '@hooks/use-id'
import { useTheme } from '@theme/theme'
import { MultipleEllipsisFormatter } from '@types'
import { formatOptionValue } from '@utils/format-option-value'
import { passThrough } from '@utils/functions'
import { getTruncatedMultipleValues } from '@utils/get-truncated-values'

import clsx from 'clsx'
import { Fragment } from 'react'
import { SelectProps } from './select.types'

const Select = (props: SelectProps) => {
  const { size: defaultSize } = useTheme()
  const {
    optionComponent = SelectOption,
    error,
    size = defaultSize,
    multiple,
    clearable,
    clearButtonText,
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

  return (
    <div
      className={clsx(
        'form-element',
        'form-element--wrapper',
        `text-size--${size}`
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
          <div className='dropdown--wrapper--input'>
            {props.label && (
              <Listbox.Label
                className={clsx(
                  'form-element--label',
                  `form-element--label-${size}`
                )}
              >
                {props.label}
              </Listbox.Label>
            )}
            <Listbox.Button
              className={clsx(
                'form-element--input',
                `form-element--input--${size}`,
                'select--input',
                'peer'
              )}
            >
              <span className='select--value'>
                {value}&nbsp;
                {multiple && truncated.hidden > 0 && (
                  <span className='select--value-hidden'>
                    +{truncated.hidden}
                  </span>
                )}
              </span>
              <span
                title={clearButtonText}
                onClick={onClear}
                className={clsx(
                  clearable && !!value ? 'block' : 'hidden',
                  'dropdown--button--clear'
                )}
              >
                <ClearButton />
              </span>
              <span className='dropdown--button'>
                <DropdownChevron open={open} />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className={clsx('dropdown--list')}>
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
      <ErrorText error={error} />
    </div>
  )
}

Select.defaultProps = {
  placeholder: 'Select',
  selectedOptionFormatter: passThrough,
}

export default Select
