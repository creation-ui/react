import { Combobox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { ChangeEvent, Fragment, useState } from 'react'
import { input, inputContainer, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import type { MultipleEllipsisFormatter } from '../../types'
import { formatOptionValue } from '../../utils/format-option-value'
import { passThrough } from '../../utils/functions'
import { getTruncatedMultipleValues } from '../../utils/get-truncated-values'
import { select } from '../select/classes'
import type { AutocompleteProps } from './autocomplete.types'
import { SelectOption } from '../select-option'
import { DropdownChevron } from '../dropdown-chevron'
import { ClearButton } from '../clear-button'
import { HelperText } from '../typography'

export const Autocomplete = (props: AutocompleteProps) => {
  const { size: defaultSize, zIndex } = useTheme()
  const {
    loadingText = 'Loading...',
    emptyText = 'Data is empty',
    notFoundText = 'Nothing found',
    clearable = true,
    multiple,
    getLimitText = passThrough,
    optionComponent = SelectOption,
    selectedOptionFormatter = passThrough,
    options,
    placeholder = 'Select option',
    id,
    helperText,
    size = defaultSize,
    error,
    onChange,
    limit = 3,
    ...rest
  } = props

  const [query, setQuery] = useState<string>('')

  /* Filtering the options based on the query. */
  const filteredOptions =
    query === ''
      ? options
      : options?.filter(option =>
          option.value
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)
  const resetSearch = (): void => setQuery('')
  const clearSelection: React.MouseEventHandler<HTMLDivElement> = e => {
    onChange?.(null)
    resetSearch()
  }

  const formatter = (args: any) => {
    let displayValue: string = ''
    let truncated: MultipleEllipsisFormatter

    if (multiple) {
      truncated = getTruncatedMultipleValues(args, limit)
      displayValue = truncated!.value
    } else {
      displayValue = formatOptionValue(args)
    }

    return displayValue
  }

  const isQuery = query.trim().length > 0
  const isSelected = !!props.value
  const componentId = useId(id)
  const Option = optionComponent

  const value = multiple ? (!!props.value ? props.value : []) : props.value
  const disabled = props.disabled || props.loading || props.readOnly

  return (
    <div
      className={clsx(
        inputContainer({ disabled, error: !!error }),
        text({ size })
      )}
    >
      <label
        htmlFor={componentId}
        className={label({ size, required: props.required })}
        children={props.label}
        aria-label={props.label?.toString()}
      />
      <Combobox
        value={value}
        onChange={onChange}
        nullable={clearable as any}
        multiple={multiple as any}
      >
        {({ open }) => (
          <div className={clsx(select.container.input)}>
            <Combobox.Input
              id={componentId}
              // @ts-ignore
              disabled={rest.disabled}
              placeholder={placeholder}
              displayValue={formatter}
              onChange={onSearchChange}
              className={input({ size })}
            />
            <Combobox.Button
              className={clsx(select.buttons.base, select.buttons.chevron)}
            >
              <DropdownChevron open={open} />
            </Combobox.Button>
            <div
              title={rest.clearText}
              className={clsx(
                clearable && !!value ? 'block' : 'hidden',
                clsx(select.buttons.base, select.buttons.clear)
              )}
              onClick={clearSelection}
            >
              {(isQuery || isSelected) && <ClearButton />}
            </div>
            {open && (
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={resetSearch}
              >
                <Combobox.Options
                  static
                  className={clsx(select.list, zIndex?.dropdowns)}
                >
                  {!filteredOptions?.length ? (
                    <div className={clsx(select.notFound)}>
                      {notFoundText}
                      {/* OR create not found option */}
                    </div>
                  ) : (
                    filteredOptions?.map(option => (
                      <Combobox.Option key={option.id} value={option}>
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
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            )}
          </div>
        )}
      </Combobox>
      <HelperText error helperText={error} size={size} />
    </div>
  )
}

/* Setting the default props for the component. */
Autocomplete.defaultProps = {
  size: 'md',
  placeholder: 'Select',
}
