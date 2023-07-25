import {
  autoUpdate,
  flip,
  size as floatingSize,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react'
import React, { useRef, useState } from 'react'
import { selectOptionClasses } from '../../../classes'
import { Theme, useTheme } from '../../../theme'
import { getFlatOptions } from '../../../utils/normalize-dropdown-options'
import { DropdownChevron } from '../../dropdown-chevron'
import { InputBase } from '../../input-base'
import { getDropdownHeight } from '../../shared/dropdown'
import { dropdownInitialProps } from '../../shared/dropdown/constants'
import { DROPDOWN_MARGIN } from '../constants'
import { AutocompleteContext } from '../context'
import {
  AutocompleteOptionProps,
  AutocompleteProps,
  GetItemPropsReturnType,
} from '../types'
import { _isOptionEqualToValue } from '../utils/is-equal-to-value'
import { _renderOption } from '../utils/render-option'
import { createFilterOptions, getTop } from '../utils/utils'
import { AutocompleteView } from '../view/autocomplete.view'

export function Autocomplete<T>(props: AutocompleteProps<T>) {
  const { size: defaultSize } = useTheme()
  const {
    id,
    textLoading = 'Loading...',
    textEmpty = 'No options',
    textNotFound = 'No results found',
    placeholder = 'Select...',
    multiple,
    helperText,
    error,
    limit,
    maxHeight,
    variant,
    size = defaultSize,
    zIndex,
    cx,
    value,
    defaultValue,
    options = [],
    filterSelectedOptions = false,
    defaultTagStatus,
    defaultTagVariant,
    onChange,
    filterOptions = createFilterOptions<T>(),
    getLimitTagsText = (more: number) => `+${more}`,
    renderOption = _renderOption,
    renderSelection,
    getOptionLabel: getOptionLabelProp = (option: T): string =>
      typeof option === 'string' ? option : option.label,
    isOptionEqualToValue = _isOptionEqualToValue,
    getOptionDisabled = (option: T) => option.disabled,
  } = props

  let getOptionLabel = getOptionLabelProp

  getOptionLabel = (option: T) => {
    const optionLabel = getOptionLabelProp(option)
    if (typeof optionLabel !== 'string') {
      if (process.env.NODE_ENV !== 'production') {
        const erroneousReturn =
          optionLabel === undefined
            ? 'undefined'
            : `${typeof optionLabel} (${optionLabel})`

        console.error(
          `CUI: The \`getOptionLabel\` method of [Autocomplete:${id}] returned ${erroneousReturn} instead of a string for ${JSON.stringify(
            option
          )}.`
        )
      }

      return String(optionLabel)
    }

    return optionLabel
  }

  const [open, setOpen] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [activeIndex, setActiveIdx] = useState<number | null>(null)

  const isQuery = !!query?.trim()
  const isEmpty = value === null || (Array.isArray(value) && value.length === 0)
  const disabled = props.disabled || props.loading || props.readOnly
  const clearable = !disabled && props.clearable && (!isEmpty || isQuery)

  const listRef = useRef<Array<HTMLElement | null>>([])

  const clearSearch = () => setQuery('')

  const clearableCallback = () => {
    onChange?.(null)
    clearSearch()
  }

  const { x, strategy, refs, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    onOpenChange: setOpen,
    open,
    middleware: [
      flip({ padding: 10 + DROPDOWN_MARGIN }),
      floatingSize({
        apply({ rects, availableHeight, elements }) {
          const height = getDropdownHeight(maxHeight, availableHeight)
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: height,
            overflowY: 'auto',
          })
        },
        padding: 10 + DROPDOWN_MARGIN,
      }),
    ],
  })

  const role = useRole(context, { role: 'listbox' })
  const dismiss = useDismiss(context)
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex: activeIndex,
    onNavigate: setActiveIdx,
    virtual: true,
    loop: true,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav]
  )

  function onInputChange({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    const text = value
    setQuery(text)

    if (text) {
      setOpen(true)
      setActiveIdx(0)
    } else {
      setOpen(false)
    }
  }

  const initiallyFiltered = filterSelectedOptions
    ? options.filter(option => {
        if (
          ((multiple ? value : [value]) as T[]).some(v =>
            isOptionEqualToValue(option, v)
          )
        ) {
          return false
        }
        return true
      })
    : options

  const filteredOptions: T[] = open
    ? filterOptions(initiallyFiltered, { query, getOptionLabel })
    : []

  const toggleOpen = () => setOpen(!open)

  const handleSelect = option => {
    if (multiple) {
      clearSearch()

      const newValue = ((isEmpty ? [] : value) as T[]).concat(option)
      onChange?.(newValue)
    } else {
      onChange?.(option)
      setActiveIdx(null)
      setOpen(false)
      setQuery(getOptionLabel(option))
    }
  }

  const handleRemoveSelected = option => {
    if (multiple) {
      // @ts-expect-error
      const newValue = value?.filter((o: any) => o.id !== option.id)
      onChange?.(!multiple ? getFlatOptions(newValue) : newValue)
    }
  }

  const containerProps = getReferenceProps({
    ref: refs.setReference,
  })

  const retainInputValue = () => {
    if (value && !multiple) {
      const label = getOptionLabel(value)

      if (!open && label !== query) {
        setQuery(getOptionLabel(value))
      }
    }
  }

  const inputProps = {
    onChange: onInputChange,
    value: query,
    placeholder,
    'aria-autocomplete': 'list',
    onFocus() {
      if (!query) {
        setOpen(true)
      }
    },
    onBlur() {
      retainInputValue()
    },
    onKeyDown(event) {
      if (
        event.key === 'Enter' &&
        activeIndex != null &&
        filteredOptions[activeIndex]
      ) {
        handleSelect(filteredOptions[activeIndex])
      }

      if (event.key === 'Escape') {
        setOpen(false)
      }

      if (event.key === 'ArrowDown') {
        setOpen(true)
      }
    },
  }

  const getOptionProps = (
    option: T,
    index: number
  ): AutocompleteOptionProps => {
    const active = activeIndex === index
    const selected = isOptionEqualToValue(option, value)
    const disabled = getOptionDisabled(option)
    const label = getOptionLabel(option)

    const itemProps = getItemProps({
      key: label,
      multiple,
      selected: isOptionEqualToValue(option, value),
      onKeyDown(event) {
        if (event.key === 'Enter') {
          handleSelect(option)
        }
      },
      onClick(e: React.MouseEvent<HTMLLIElement>) {
        const isDisabled =
          (e.target as any).getAttribute?.('aria-disabled') === 'true'

        if (isDisabled || disabled) return

        const wasSelected =
          (e.target as any).getAttribute?.('aria-selected') === 'true'

        if (selected && multiple) {
          handleRemoveSelected(option)
        }

        if (!wasSelected) {
          handleSelect(option)
        }
        refs.domReference.current?.focus()
      },
      ref(node) {
        listRef.current[index] = node
      },
      tabIndex: active ? 0 : -1,
      'aria-label': label,
      'aria-selected': selected,
      'aria-disabled': disabled,
      role: 'option',
    }) as unknown as GetItemPropsReturnType
    if (selected) {
      console.table({
        label,
        active,
        selected,
        multiple,
        size,
      })
    }

    return {
      className: selectOptionClasses({
        active,
        selected,
        multiple,
        size,
      }),
      index,
      query,
      active,
      query,
      ...itemProps,
    }
  }

  const listProps = getFloatingProps({
    ref: refs.setFloating,
    style: {
      position: strategy,
      left: x ?? 0,
      top: getTop(context),
      zIndex: zIndex?.list,
    },
  })

  return (
    <Theme theme={{ size }}>
      <InputBase
        id={id}
        variant={variant}
        disabled={disabled}
        error={error}
        loading={props.loading}
        readOnly={props.readOnly}
        label={props.label}
        required={props.required}
        endAdornment={<DropdownChevron open={open} onClick={toggleOpen} />}
        helperText={helperText}
        clearable={clearable}
        onClear={clearableCallback}
        cx={cx}
        {...containerProps}
      >
        <AutocompleteContext.Provider
          value={{
            handleRemoveSelected,
            setOpen,
            multiple,
            clearable,
            floatingContext: context,
            options: filteredOptions,
            activeIndex,
            limit,
            selected: value,
            propsList: listProps,
            propsInput: inputProps,
            textEmpty,
            textLoading,
            textNotFound,
            open,
            defaultTagStatus,
            defaultTagVariant,
            renderOption,
            renderSelection,
            getOptionLabel,
            getOptionProps,
            getLimitTagsText,
          }}
        >
          <AutocompleteView />
        </AutocompleteContext.Provider>
      </InputBase>
    </Theme>
  )
}

Autocomplete.defaultProps = dropdownInitialProps
