import {
  DropdownChevron,
  ErrorText,
  formatOptionValue,
  getTruncatedMultipleValues,
  Icon,
  MultipleEllipsisFormatter,
  passThrough,
  SelectOption,
  useId,
  useTheme,
} from '@creation-ui/core'
import { Combobox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { ChangeEvent, Fragment, useState } from 'react'
import { AutocompleteProps } from './autocomplete.types'

const Autocomplete = (props: AutocompleteProps) => {
  const { size: defaultSize } = useTheme()
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
    label,
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

  return (
    <div
      className={clsx(
        'form-element',
        'form-element--wrapper',
        `text-size--${size}`
      )}
    >
      <label
        htmlFor={componentId}
        className={clsx('form-element--label', `form-element--label-${size}`)}
      >
        {label}
      </label>
      <Combobox
        value={value}
        onChange={onChange}
        nullable={clearable as any}
        multiple={multiple as any}
      >
        {({ open }) => (
          <div className='dropdown--wrapper--input'>
            <Combobox.Input
              id={componentId}
              disabled={rest.disabled}
              placeholder={placeholder}
              displayValue={formatter}
              onChange={onSearchChange}
              className={clsx(
                'form-element--input',
                `form-element--input--${size}`,
                'relative',
                'peer'
              )}
            />
            <Combobox.Button className='dropdown--button'>
              <DropdownChevron open={open} />
            </Combobox.Button>
            <div className='clear-content--wrapper' onClick={clearSelection}>
              {(isQuery || isSelected) && (
                <Icon
                  icon='close'
                  className={clsx('clear-content--button')}
                  aria-label={rest.clearText}
                  title={rest.clearText}
                />
              )}
            </div>
            {open && (
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={resetSearch}
              >
                <Combobox.Options static className={clsx('dropdown--list')}>
                  {!filteredOptions?.length ? (
                    <div className={'dropdown--list--not-found'}>
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
      <ErrorText error={error} />
    </div>
  )
}

/* Setting the default props for the component. */
Autocomplete.defaultProps = {
  size: 'md',
  placeholder: 'Select',
}

export default Autocomplete
